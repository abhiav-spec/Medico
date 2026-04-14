'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, Loader2, Sparkles, Microscope, Activity, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import { useQuizStore } from '@/store/useQuizStore';
import { toast } from 'react-hot-toast';
import { gsap } from 'gsap';

const organs = [
    { id: 'heart', name: 'Cardiology', icon: 'cardiology', color: 'text-[#3525cd]', desc: 'Hemodynamic simulation and cardiac pathology.' },
    { id: 'brain', name: 'Neurology', icon: 'psychology', color: 'text-[#3525cd]', desc: 'Central nervous system and neurogenic diagnostics.' },
    { id: 'lungs', name: 'Pulmonology', icon: 'airway', color: 'text-[#3525cd]', desc: 'Respiratory mechanics and pulmonary analysis.' },
];

const difficulties = [
    { id: 'easy', label: 'Resident', desc: 'Core medical concepts.' },
    { id: 'medium', label: 'Attending', desc: 'Complex diagnostics.' },
    { id: 'hard', label: 'Specialist', desc: 'Elite level case studies.' },
];

export default function QuizzesPage() {
    const [selectedOrgan, setSelectedOrgan] = useState<string | null>(null);
    const [difficulty, setDifficulty] = useState('medium');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const setQuiz = useQuizStore((state) => state.setQuiz);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".selector-node", {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleStart = async () => {
        if (!selectedOrgan) return;
        setIsLoading(true);
        try {
            const res = await api.post('/quiz/generate', {
                organ: selectedOrgan,
                difficulty
            });
            setQuiz(res.data.quiz);
            router.push('/quizzes/active');
        } catch (err: any) {
            toast.error('Simulation initialization failed.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div ref={containerRef} className="max-w-6xl mx-auto space-y-16 pb-20 pt-10">
            <div className="space-y-6 selector-node">
                <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-indigo text-[10px] font-black text-primary uppercase tracking-[0.2em] clinical-shadow">
                    <span className="material-symbols-outlined text-sm">clinical_notes</span>
                    <span>Simulation Laboratory</span>
                </div>
                <h1 className="text-6xl font-black tracking-tighter text-on-surface leading-[0.9]">
                    Curate Your <br />
                    <span className="text-primary italic">Clinical</span> Assessment.
                </h1>
                <p className="text-on-surface-variant max-w-2xl font-semibold opacity-60 text-lg">
                    Select a specialization node and calibrate the complexity of your neural simulation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {organs.map((organ) => (
                    <button
                        key={organ.id}
                        onClick={() => setSelectedOrgan(organ.id)}
                        className={`selector-node group p-10 rounded-[3rem] transition-all duration-500 text-left relative overflow-hidden flex flex-col items-start ${
                            selectedOrgan === organ.id 
                            ? 'bg-[#3525cd] text-white clinical-shadow scale-[1.02]'
                            : 'bg-white border border-primary/5 hover:border-primary/20 text-on-surface clinical-shadow'
                        }`}
                    >
                        <div className={`mb-8 p-6 rounded-2xl transition-all duration-500 ${
                            selectedOrgan === organ.id ? 'bg-white/20' : 'bg-[#f8f9ff]'
                        }`}>
                            <span className={`material-symbols-outlined text-5xl ${selectedOrgan === organ.id ? 'text-white' : 'text-primary'}`}>
                                {organ.id === 'lungs' ? 'airway' : organ.icon}
                            </span>
                        </div>
                        <h3 className="text-3xl font-black mb-3 leading-none">{organ.name}</h3>
                        <p className={`text-sm font-semibold opacity-60 leading-relaxed ${selectedOrgan === organ.id ? 'text-white' : 'text-on-surface-variant'}`}>
                            {organ.desc}
                        </p>
                        
                        {selectedOrgan === organ.id && (
                            <div className="mt-8 flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full border border-white/10">
                                <span className="animate-pulse flex h-2 w-2 rounded-full bg-white" />
                                <span>Active Node</span>
                            </div>
                        )}
                    </button>
                ))}
            </div>

            <div className="space-y-8 selector-node pt-8">
                <div className="flex items-center space-x-4">
                    <div className="h-px flex-grow bg-primary/10" />
                    <h2 className="text-xs font-black text-on-surface-variant uppercase tracking-[0.3em] opacity-40">Complexity Calibration</h2>
                    <div className="h-px flex-grow bg-primary/10" />
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                    {difficulties.map((diff) => (
                        <button
                            key={diff.id}
                            onClick={() => setDifficulty(diff.id)}
                            className={`px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                                difficulty === diff.id
                                ? 'bg-[#3525cd] text-white clinical-shadow scale-105'
                                : 'bg-[#eff4ff] text-primary hover:bg-[#3525cd]/5'
                            }`}
                        >
                            {diff.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="pt-12 flex flex-col items-center selector-node">
                <button
                    onClick={handleStart}
                    disabled={!selectedOrgan || isLoading}
                    className={`neural-pulse px-16 py-6 rounded-2xl font-black text-white flex items-center gap-4 transition-all shadow-2xl ${
                        (!selectedOrgan || isLoading) ? 'opacity-30 grayscale cursor-not-allowed' : 'hover:scale-105 active:scale-95'
                    }`}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            <span className="text-xs uppercase tracking-[0.2em]">Initializing Simulation...</span>
                        </>
                    ) : (
                        <>
                            <span className="text-xs uppercase tracking-[0.2em]">Enter Neural Pulse</span>
                            <span className="material-symbols-outlined">double_arrow</span>
                        </>
                    )}
                </button>
                <p className="mt-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant opacity-30">
                    Precision Medical Testing Protocol v1.4.2
                </p>
            </div>
        </div>
    );
}
