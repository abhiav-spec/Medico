'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizStore } from '@/store/useQuizStore';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Mic, 
    MicOff, 
    Volume2, 
    Clock, 
    ArrowRight, 
    CheckCircle2, 
    XCircle,
    Brain,
    Activity,
    Save
} from 'lucide-react';
import { toast } from 'react-hot-toast';
import api from '@/lib/api';

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

    const currentQuestion = questions[currentQuestionIndex];

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
        speak(`Correct answer is ${currentQuestion.correctAnswer}. ${currentQuestion.explanation}`);
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
            toast.success('Simulation complete and saved!');
        } catch (err) {
            toast.error('Failed to save results');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Voice Input (Speech to Text)
    const toggleListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            toast.error('Voice recognition not supported in this browser');
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
                toast.success(`Selected: ${optionFound}`);
            } else {
                toast.error("Could't match your voice to an option. Try saying 'Option 1' or the full text.");
            }
        };

        recognition.start();
    };

    // Voice Output (Text to Speech)
    const speak = (text: string) => {
        if (!('speechSynthesis' in window)) return;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1;
        utterance.pitch = 1;
        window.speechSynthesis.speak(utterance);
    };

    if (!currentQuestion) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <Brain className="w-12 h-12 text-blue-600 animate-pulse mb-4" />
                <h2 className="text-xl font-bold">Initializing Simulation...</h2>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold heading-font capitalize">{organ} Module</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question</span>
                            <span className="text-sm font-bold text-blue-600">{currentQuestionIndex + 1} / {questions.length}</span>
                        </div>
                    </div>
                </div>

                <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border-2 transition-colors ${
                    timeLeft < 10 ? 'border-red-100 bg-red-50 text-red-600' : 'border-slate-100 bg-white text-slate-600'
                }`}>
                    <Clock className={`w-5 h-5 ${timeLeft < 10 ? 'animate-pulse' : ''}`} />
                    <span className="text-lg font-bold tabular-nums">{timeLeft}s</span>
                </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 premium-shadow"
                >
                    <h3 className="text-2xl font-bold heading-font text-slate-900 mb-10 leading-snug">
                        {currentQuestion.question}
                    </h3>

                    <div className="grid gap-4">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = currentQuestion.userAnswer === option;
                            const isCorrect = option === currentQuestion.correctAnswer;
                            const showResult = !!currentQuestion.userAnswer;

                            let styles = "border-slate-100 bg-slate-50 hover:border-slate-300 hover:bg-slate-100 text-slate-700";
                            
                            if (showResult) {
                                if (isCorrect) styles = "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-md";
                                else if (isSelected) styles = "border-red-500 bg-red-50 text-red-700 shadow-md";
                                else styles = "border-slate-100 bg-slate-50 opacity-50";
                            }

                            return (
                                <button
                                    key={idx}
                                    disabled={showResult}
                                    onClick={() => handleAnswer(option)}
                                    className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 font-bold text-left transition-all duration-300 ${styles}`}
                                >
                                    <span className="flex items-center gap-4">
                                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs border ${
                                            isSelected ? 'bg-white border-transparent' : 'bg-white border-slate-200'
                                        }`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        {option}
                                    </span>
                                    {showResult && isCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
                                    {showResult && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                                </button>
                            );
                        })}
                    </div>

                    {/* Explanation Section */}
                    <AnimatePresence>
                        {currentQuestion.userAnswer && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2 text-blue-700 font-bold">
                                        <Volume2 className="w-5 h-5" />
                                        AI Explanation
                                    </div>
                                    <button 
                                        onClick={() => speak(currentQuestion.explanation)}
                                        className="text-xs font-bold text-blue-600 bg-white px-3 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                    >
                                        Replay Audio
                                    </button>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic text-sm">
                                    {currentQuestion.explanation}
                                </p>
                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={handleNext}
                                        disabled={isSubmitting}
                                        className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg"
                                    >
                                        {isSubmitting ? 'Saving...' : currentQuestionIndex === questions.length - 1 ? 'Finish Simulation' : 'Next Question'}
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-4 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl premium-shadow z-20">
                <button
                    onClick={toggleListening}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-bold transition-all ${
                        isListening 
                            ? 'bg-red-500 text-white animate-pulse' 
                            : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                >
                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    {isListening ? 'Listening...' : 'Answer via Voice'}
                </button>
                <div className="w-px h-8 bg-slate-200" />
                <div className="text-sm font-bold text-slate-500 flex items-center gap-2">
                    <Save className="w-4 h-4" /> Auto-saving progress
                </div>
            </div>
        </div>
    );
}
