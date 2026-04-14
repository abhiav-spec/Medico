'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import api from '@/lib/api';
import { toast } from 'react-hot-toast';
import { Loader2, User, Mail, Lock, Sparkles } from 'lucide-react';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await api.post('/auth/register', { name, email, password });
            toast.success('Registration data encrypted.');
            router.push('/login');
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Protocol failure during registration');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout 
            title="Participant Entry" 
            subtitle="Apply for neural simulation training access."
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-3 ml-1">Full Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
                        <input 
                            type="text" 
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-primary/50 transition-all outline-none text-white placeholder:text-slate-600"
                            placeholder="Dr. Abhinav Mishra"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-3 ml-1">Secure Email</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-secondary transition-colors" />
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-secondary/50 transition-all outline-none text-white placeholder:text-slate-600"
                            placeholder="user@neural.obs"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-3 ml-1">Security Phrase</label>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-accent transition-colors" />
                        <input 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-accent/50 transition-all outline-none text-white placeholder:text-slate-600"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="neural-pulse w-full py-4 text-background rounded-2xl font-bold flex items-center justify-center gap-2 group overflow-hidden relative"
                    >
                        {isLoading ? (
                            <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                            <>
                                <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Initialize Training Account</span>
                            </>
                        )}
                    </button>
                </div>

                <p className="text-center text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-10">
                    Already an authorized participant? <Link href="/login" className="text-primary hover:text-white transition-colors">Log In here</Link>
                </p>
            </form>
        </AuthLayout>
    );
}
