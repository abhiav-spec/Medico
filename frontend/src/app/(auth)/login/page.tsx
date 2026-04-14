'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/AuthLayout';
import api from '@/lib/api';
import { useAuthStore } from '@/store/useAuthStore';
import { toast } from 'react-hot-toast';
import { Loader2, Fingerprint, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const setAuth = useAuthStore((state) => state.setAuth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await api.post('/auth/login', { email, password });
            setAuth(res.data.user, res.data.token);
            toast.success('Access Granted');
            router.push('/dashboard');
        } catch (err: any) {
            toast.error(err.response?.data?.message || 'Authentication Failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthLayout 
            title="System Access" 
            subtitle="Secure biometric link required for neural simulation."
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-3 ml-1">ID Credentials</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-primary transition-colors" />
                        <input 
                            type="email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-primary/50 transition-all outline-none text-white placeholder:text-slate-600"
                            placeholder="user@neural.obs"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-3 ml-1">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Security Phrase</label>
                        <Link href="/forgot" className="text-[10px] uppercase tracking-widest font-bold text-primary hover:text-white transition-colors">Forgot?</Link>
                    </div>
                    <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-secondary transition-colors" />
                        <input 
                            type="password" 
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/5 focus:bg-white/10 focus:border-secondary/50 transition-all outline-none text-white placeholder:text-slate-600"
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
                                <Fingerprint className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Validate Access</span>
                            </>
                        )}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>
                </div>

                <p className="text-center text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-10">
                    New simulation participant? <Link href="/register" className="text-primary hover:text-white transition-colors">Apply here</Link>
                </p>
            </form>
        </AuthLayout>
    );
}
