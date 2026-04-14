'use client';

import { Activity } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AuthLayout({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:flex flex-col justify-between p-12 bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 bg-white/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 p-24 bg-blue-400/20 blur-[100px] rounded-full" />
                
                <Link href="/" className="flex items-center gap-2 relative z-10">
                    <Activity className="w-8 h-8" />
                    <span className="text-2xl font-bold tracking-tight">Medico Simulator</span>
                </Link>

                <div className="relative z-10">
                    <h2 className="text-4xl font-bold heading-font mb-6 leading-tight">
                        Powering the future <br /> of medical education.
                    </h2>
                    <p className="text-blue-100 text-lg max-w-md">
                        Join thousands of medical students mastering their craft through AI simulations.
                    </p>
                </div>

                <div className="text-blue-200 text-sm relative z-10">
                    © 2026 Medico Simulator. All rights reserved.
                </div>
            </div>

            <div className="flex items-center justify-center p-8 bg-white">
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md"
                >
                    <div className="mb-10 text-center lg:text-left">
                        <Link href="/" className="lg:hidden flex items-center justify-center gap-2 mb-8 text-blue-600">
                            <Activity className="w-8 h-8" />
                            <span className="text-xl font-bold tracking-tight">Medico Simulator</span>
                        </Link>
                        <h1 className="text-3xl font-bold heading-font text-slate-900 mb-3">{title}</h1>
                        <p className="text-slate-500">{subtitle}</p>
                    </div>

                    {children}
                </motion.div>
            </div>
        </div>
    );
}
