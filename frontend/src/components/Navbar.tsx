'use client';

import Link from 'next/link';
import { useAuthStore } from '@/store/useAuthStore';
import { Brain, LogIn, LogOut, UserPlus, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const { user, logout } = useAuthStore();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
            <div className="container mx-auto max-w-7xl flex items-center justify-between pointer-events-auto">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="p-2.5 rounded-2xl bg-[#3525cd]/5 group-hover:bg-[#3525cd]/10 transition-all duration-500 clinical-shadow">
                        <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-3xl font-black tracking-tighter text-[#0b1c30]">
                        MEDICO <span className="text-primary italic">SIM</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center glass-indigo px-2 py-2 rounded-3xl border border-[#3525cd]/5 clinical-shadow">
                    {user ? (
                        <>
                            <Link href="/dashboard" className="flex items-center space-x-2 px-6 py-2.5 rounded-2xl hover:bg-[#3525cd]/5 transition-all text-[#0b1c30] font-bold text-sm">
                                <LayoutDashboard className="w-4 h-4 text-primary" />
                                <span>Console</span>
                            </Link>
                            <button 
                                onClick={logout}
                                className="flex items-center space-x-2 px-6 py-2.5 rounded-2xl text-[#464555] hover:text-[#0b1c30] transition-colors font-bold text-sm"
                            >
                                <LogOut className="w-4 h-4" />
                                <span>Disconnect</span>
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <Link href="/login" className="flex items-center space-x-2 px-8 py-2.5 rounded-2xl text-sm font-bold text-[#0b1c30] hover:bg-[#3525cd]/5 transition-all">
                                <LogIn className="w-4 h-4" />
                                <span>Log In</span>
                            </Link>
                            <Link href="/register" className="neural-pulse px-8 py-3 rounded-2xl text-sm font-black text-white transition-all hover:scale-105 active:scale-95">
                                Join Simulation
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
