'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/useQuizStore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Clock, 
    ArrowRight, 
    CheckCircle2, 
    XCircle,
    Activity,
    Brain,
    Volume2,
    Mic,
    MicOff,
    Check
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import api from '@/lib/api';
import { gsap } from 'gsap';

export default function ActiveQuizPage() {
    const { 
        questions, 
        currentQuestionIndex, 
        answerQuestion, 
        nextQuestion, 
        isComplete,
        organ,
        difficulty,
        score
    } = useQuizStore();
    const router = useRouter();
    
    const [timeLeft, setTimeLeft] = useState(60);
    const [isListening, setIsListening] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const currentQuestion = questions[currentQuestionIndex];

    // Entrance animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".quiz-node", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power4.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [currentQuestionIndex]);

    // Timer logic
    useEffect(() => {
        if (isComplete || !currentQuestion) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    handleNext();
                    return 60;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestionIndex, isComplete, currentQuestion]);

    const handleAnswer = (option: string) => {
        if (currentQuestion.userAnswer) return;
        answerQuestion(option);
        speak(`Observation logged. Correct path: ${currentQuestion.correctAnswer}. Rationale: ${currentQuestion.explanation}`);
    };

    const handleNext = () => {
        if (currentQuestionIndex >= questions.length - 1) {
            submitResults();
        } else {
            nextQuestion();
            setTimeLeft(60);
        }
    };

    const submitResults = async () => {
        setIsSubmitting(true);
        try {
            await api.post('/quiz/submit', { 
                organ, 
                difficulty, 
                questions, 
                score 
            });
            router.push('/dashboard');
            toast.success('Simulation Logged Successfully');
        } catch (err) {
            toast.error('Data Uplink Error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Voice Input (Speech to Text)
    const toggleListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            toast.error('Voice node not available');
            return;
        }

        if (isListening) {
            setIsListening(false);
            return;
        }

        // @ts-ignore
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onerror = () => setIsListening(false);

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            const optionFound = currentQuestion.options.find(opt => 
                transcript.includes(opt.toLowerCase()) || 
                (transcript.includes('option') && transcript.includes(currentQuestion.options.indexOf(opt) + 1 + ''))
            );

            if (optionFound) {
                handleAnswer(optionFound);
            } else {
                toast.error("Telemetry could not parse response.");
            }
        };

        recognition.start();
    };

    const speak = (text: string) => {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    };

    if (!currentQuestion) return null;

    return (
        <div ref={containerRef} className="max-w-6xl mx-auto py-10 px-6">
            {/* Clinical Header */}
            <div className="flex justify-between items-center mb-12 quiz-node">
                <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white clinical-shadow flex items-center justify-center text-primary border border-primary/5">
                        <Activity className="w-8 h-8" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] opacity-40">Diagnostic Protocol</span>
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{difficulty}</span>
                        </div>
                        <h2 className="text-2xl font-black text-on-surface tracking-tighter uppercase leading-none">
                            {organ} <span className="text-primary italic">Observation</span>
                        </h2>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="hidden md:block text-right">
                        <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest opacity-40">Load Status</p>
                        <p className="text-xl font-black text-on-surface leading-none mt-1">
                            {currentQuestionIndex + 1} <span className="opacity-30">/ {questions.length}</span>
                        </p>
                    </div>
                    <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl clinical-shadow border transition-colors ${timeLeft < 10 ? 'bg-[#ba1a1a]/5 border-[#ba1a1a]/20' : 'bg-white border-primary/5'}`}>
                        <div className={`w-2 h-2 rounded-full animate-pulse ${timeLeft < 10 ? 'bg-error' : 'bg-primary'}`} />
                        <span className={`text-2xl font-black tabular-nums leading-none ${timeLeft < 10 ? 'text-error' : 'text-on-surface'}`}>
                            {timeLeft}s
                        </span>
                    </div>
                </div>
            </div>

            {/* Neural Console */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-[3rem] clinical-shadow border border-primary/5 p-12 md:p-20 relative overflow-hidden quiz-node"
                >
                    <div className="absolute top-0 left-0 w-3 h-full bg-primary" />
                    
                    <div className="flex items-center gap-3 mb-10">
                        <div className="px-3 py-1 bg-[#3525cd]/5 rounded-lg text-[10px] font-black text-primary uppercase tracking-widest">
                            Clinical Data Link
                        </div>
                    </div>

                    <h3 className="text-4xl font-black text-on-surface mb-16 leading-tight tracking-tight">
                        {currentQuestion.question}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = currentQuestion.userAnswer === option;
                            const isCorrect = option === currentQuestion.correctAnswer;
                            const showResult = !!currentQuestion.userAnswer;

                            return (
                                <button
                                    key={idx}
                                    disabled={showResult}
                                    onClick={() => handleAnswer(option)}
                                    className={`relative group p-8 rounded-3xl transition-all duration-500 text-left border ${
                                        showResult 
                                            ? isCorrect 
                                                ? 'bg-[#3525cd] text-white clinical-shadow border-transparent' 
                                                : isSelected 
                                                    ? 'bg-[#ba1a1a] text-white clinical-shadow border-transparent' 
                                                    : 'bg-[#eff4ff] border-transparent opacity-40'
                                            : isSelected
                                                ? 'bg-[#3525cd] text-white clinical-shadow border-transparent'
                                                : 'bg-[#f8f9ff] border-transparent hover:bg-[#3525cd]/5 text-on-surface-variant hover:text-primary'
                                    }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm border-2 ${
                                            isSelected || (showResult && isCorrect) ? 'bg-white/20 border-white/40 text-white' : 'bg-white border-primary/10 text-primary'
                                        }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </div>
                                        <span className="text-lg font-black tracking-tight">{option}</span>
                                    </div>
                                    
                                    {showResult && isCorrect && (
                                        <div className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full">
                                            <Check className="w-6 h-6 text-white" />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Simulation Analysis Overlay */}
                    <AnimatePresence>
                        {currentQuestion.userAnswer && (
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-20 pt-16 border-t-2 border-[#eff4ff]"
                            >
                                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Volume2 className="w-5 h-5 text-primary" />
                                            <h4 className="text-xs font-black text-on-surface uppercase tracking-[0.2em] opacity-40">Clinical Rationale</h4>
                                        </div>
                                        <div className="p-8 rounded-[2rem] bg-[#eff4ff] border-2 border-primary/5">
                                            <p className="text-on-surface text-xl font-bold leading-relaxed italic opacity-80">
                                                "{currentQuestion.explanation}"
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <button
                                        onClick={handleNext}
                                        className="neural-pulse w-full md:w-auto px-16 py-6 rounded-2xl font-black text-white flex items-center justify-center gap-4 transition-all shadow-2xl hover:scale-105"
                                    >
                                        <span className="text-xs uppercase tracking-[0.2em]">{currentQuestionIndex === questions.length - 1 ? 'Finalize Logic' : 'Next Transmission'}</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>

            {/* Voice Command Module */}
            <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-white p-3 rounded-full border border-primary/5 clinical-shadow flex items-center gap-4">
                    <button
                        onClick={toggleListening}
                        className={`group flex items-center gap-5 pl-8 pr-10 py-5 rounded-full font-black transition-all ${
                            isListening 
                                ? 'bg-error text-white shadow-[0_20px_40px_rgba(186,26,26,0.3)]' 
                                : 'bg-[#3525cd] text-white hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(53,37,205,0.3)]'
                        }`}
                    >
                        {isListening ? (
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1.5 h-4 bg-white animate-pulse" />
                                <span className="w-1.5 h-7 bg-white animate-pulse" style={{ animationDelay: '100ms'}} />
                                <span className="w-1.5 h-3 bg-white animate-pulse" style={{ animationDelay: '200ms'}} />
                                <MicOff className="w-5 h-5 ml-2" />
                            </div>
                        ) : (
                            <Mic className="w-6 h-6 group-hover:animate-bounce" />
                        )}
                        <span className="text-xs uppercase tracking-[0.2em]">{isListening ? 'LISTENING...' : 'VOICE LINK'}</span>
                    </button>
                    {!isListening && (
                         <div className="pr-8 flex flex-col items-center">
                            <Brain className="w-5 h-5 text-primary opacity-20" />
                            <span className="text-[8px] font-black uppercase tracking-tighter opacity-20">Link v2.4</span>
                         </div>
                    )}
                </div>
            </div>
        </div>
    );
}
