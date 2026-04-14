'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, Heart, Lungs, ChevronRight, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import { useQuizStore } from '@/store/useQuizStore';
import { toast } from 'react-hot-toast';

const organs = [
    { id: 'heart', name: 'Cardiology', icon: Heart, color: 'text-pink-600', bg: 'bg-pink-50' },
    { id: 'brain', name: 'Neurology', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
    { id: 'lungs', name: 'Pulmonology', icon: Lungs, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const difficulties = ['easy', 'medium', 'hard'];

export default function QuizSelectorPage() {
    const [selectedOrgan, setSelectedOrgan] = useState('');
    const [selectedDiff, setSelectedDiff] = useState('medium');
    const [isLoading, setIsLoading] = useState(false);
    const setQuiz = useQuizStore((state) => state.setQuiz);
    const router = useRouter();

    const handleStart = async () => {
        if (!selectedOrgan) {
            toast.error('Please select an organ focus');
            return;
        }

        setIsLoading(true);
        try {
            const res = await api.post('/quiz/generate', { 
                organ: selectedOrgan, 
                difficulty: selectedDiff 
            });
            setQuiz(res.data.organ, res.data.difficulty, res.data.questions);
            router.push('/quizzes/active');
        } catch (err) {
            toast.error('Failed to generate simulation. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-10">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold heading-font text-slate-900 mb-4">Start New Simulation</h1>
                <p className="text-slate-500">Choose your focus area and difficulty to begin the AI generation process</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Organ Selection */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold heading-font text-slate-900 border-b pb-4">1. Select Focus Area</h3>
                    <div className="grid gap-4">
                        {organs.map((organ) => (
                            <button
                                key={organ.id}
                                onClick={() => setSelectedOrgan(organ.id)}
                                className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left ${
                                    selectedOrgan === organ.id 
                                        ? 'border-blue-600 bg-blue-50/50 shadow-md' 
                                        : 'border-slate-100 bg-white hover:border-slate-200'
                                }`}
                            >
                                <div className={`p-3 rounded-xl ${organ.bg}`}>
                                    <organ.icon className={`w-6 h-6 ${organ.color}`} />
                                </div>
                                <div className="flex-1">
                                    <span className="block font-bold text-slate-900">{organ.name}</span>
                                    <span className="text-xs text-slate-500">Interactive patient scenarios</span>
                                </div>
                                {selectedOrgan === organ.id && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Difficulty Selection */}
                <div className="space-y-10">
                    <div>
                        <h3 className="text-xl font-bold heading-font text-slate-900 border-b pb-4 mb-6">2. Set Difficulty</h3>
                        <div className="flex gap-4 p-1.5 bg-slate-100 rounded-2xl">
                            {difficulties.map((diff) => (
                                <button
                                    key={diff}
                                    onClick={() => setSelectedDiff(diff)}
                                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold capitalize transition-all ${
                                        selectedDiff === diff 
                                            ? 'bg-white text-slate-900 shadow-sm' 
                                            : 'text-slate-500 hover:text-slate-700'
                                    }`}
                                >
                                    {diff}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-blue-600 rounded-3xl text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 bg-white/10 blur-[60px] rounded-full group-hover:scale-125 transition-transform duration-700" />
                        
                        <div className="relative z-10">
                            <Sparkles className="w-8 h-8 mb-4 text-blue-200" />
                            <h4 className="text-xl font-bold mb-2">Ready to start?</h4>
                            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                                Our AI will generate 5 high-yield medical questions tailored specifically to your choices.
                            </p>
                            <button
                                onClick={handleStart}
                                disabled={isLoading || !selectedOrgan}
                                className="w-full py-4 bg-white text-blue-600 rounded-xl font-extrabold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-900/20"
                            >
                                {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Generate Simulation'}
                                {!isLoading && <ChevronRight className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
