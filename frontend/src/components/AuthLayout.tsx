'use client';

import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center space-x-2 mb-8 group">
            <div className="p-3 rounded-2xl glass-bright group-hover:bg-primary/20 transition-all duration-300">
              <Brain className="w-10 h-10 text-primary" />
            </div>
          </Link>
          <h1 className="text-4xl font-bold heading-font text-white mb-2">{title}</h1>
          <p className="text-slate-400 font-light">{subtitle}</p>
        </div>

        <div className="glass p-10 rounded-3xl border border-white/5 shadow-2xl">
          {children}
        </div>

        <div className="mt-8 text-center">
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
                Secure Biometric Verification Node: <span className="text-secondary">ACTIVE</span>
            </p>
        </div>
      </motion.div>
    </div>
  );
}
