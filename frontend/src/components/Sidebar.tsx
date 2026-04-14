'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    LayoutDashboard, 
    PlayCircle, 
    BookOpen, 
    Settings, 
    Activity,
    Brain,
    Microscope,
    ShieldCheck
} from 'lucide-react';

const menuItems = [
    { name: 'Control Center', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Simulation Lab', icon: PlayCircle, path: '/quizzes' },
    { name: 'Neural Archives', icon: BookOpen, path: '/notes' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-80 h-screen fixed left-0 top-0 p-8 pt-24 z-40 bg-transparent flex flex-col">
            <div className="glass h-full rounded-[2.5rem] border border-white/5 p-8 flex flex-col">
                <div className="mb-12 px-2">
                    <div className="flex items-center space-x-3 mb-2">
                        <Activity className="w-5 h-5 text-secondary" />
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em]">Operational Node</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-primary to-secondary animate-pulse" />
                    </div>
                </div>

                <nav className="flex-1 space-y-4">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link 
                                key={item.path} 
                                href={item.path}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
                                    isActive 
                                    ? 'bg-primary/10 border border-primary/20 text-white' 
                                    : 'text-slate-500 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                <item.icon className={`w-5 h-5 transition-transform duration-500 group-hover:scale-110 ${
                                    isActive ? 'text-primary' : ''
                                }`} />
                                <span className={`text-sm font-bold heading-font uppercase tracking-tight ${
                                    isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                }`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto pt-8">
                    <div className="p-6 rounded-3xl bg-black/40 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-10">
                            <ShieldCheck className="w-12 h-12 text-secondary" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-2 relative z-10 heading-font uppercase tracking-tighter">Security Protocol</h4>
                        <p className="text-[10px] text-slate-500 font-medium leading-relaxed relative z-10">
                            All neural simulations are encrypted and stored in local archives.
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
