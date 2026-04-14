'use client';

import { useEffect, useRef } from 'react';
import { 
    Activity, 
    Target, 
    Book, 
    Clock, 
    ArrowUpRight, 
    PlayCircle,
    Plus,
    Sparkles,
    Shield,
    TrendingUp,
    Stethoscope,
    Dna,
    Brain
} from 'lucide-react';
import Link from 'next/link';
import { useAuthStore } from '@/store/useAuthStore';
import { 
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { gsap } from 'gsap';

const data = [
    { name: 'Mon', accuracy: 65 },
    { name: 'Tue', accuracy: 72 },
    { name: 'Wed', accuracy: 68 },
    { name: 'Thu', accuracy: 85 },
    { name: 'Fri', accuracy: 78 },
    { name: 'Sat', accuracy: 90 },
    { name: 'Sun', accuracy: 88 },
];

export default function DashboardPage() {
    const user = useAuthStore((state) => state.user);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".dash-element", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="space-y-10 pb-20 max-w-7xl mx-auto">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 dash-element">
                <div>
                    <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-indigo text-[10px] font-black text-primary mb-4 uppercase tracking-[0.2em]">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>System ID: {user?.id?.slice(-8).toUpperCase()}</span>
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-on-surface">
                        Welcome, <span className="text-primary italic">{user?.name.split(' ')[0]}</span>
                    </h1>
                    <p className="text-on-surface-variant mt-2 font-semibold opacity-60">Neural Telemetry active. Ready for clinical simulation.</p>
                </div>
                <div className="flex gap-4">
                    <Link 
                        href="/quizzes" 
                        className="neural-pulse flex items-center gap-3 px-8 py-4 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl leading-none"
                    >
                        <Plus className="w-5 h-5" />
                        BEGIN SIMULATION
                    </Link>
                </div>
            </header>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 dash-element">
                <StatCard 
                    icon={<Target className="w-6 h-6" />} 
                    label="Clinical Accuracy" 
                    value="84.2%" 
                    trend="+2.1%"
                    color="primary"
                />
                <StatCard 
                    icon={<Activity className="w-6 h-6" />} 
                    label="Cases Resolved" 
                    value="24" 
                    trend="+4"
                    color="indigo"
                />
                <StatCard 
                    icon={<Dna className="w-6 h-6" />} 
                    label="Neural Points" 
                    value="1,420" 
                    trend="+240"
                    color="primary"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Performance Graph */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 clinical-shadow dash-element border border-primary/5">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-2xl font-black tracking-tight text-on-surface uppercase">Neural Performance</h3>
                            <p className="text-sm text-on-surface-variant font-bold opacity-50 uppercase tracking-widest mt-1">Diagnostic Telemetry / 7 Day Cycle</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f9ff] rounded-xl text-[10px] font-black text-primary border border-primary/5 uppercase tracking-widest">
                            <TrendingUp className="w-3 h-3" />
                            Stable Growth
                        </div>
                    </div>
                    <div className="h-[400px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#3525cd" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#3525cd" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(53, 37, 205, 0.05)" />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#464555', fontSize: 11, fontWeight: 700 }} 
                                    dy={10}
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#464555', fontSize: 11, fontWeight: 700 }} 
                                />
                                <Tooltip 
                                    contentStyle={{ 
                                        backgroundColor: '#ffffff', 
                                        borderRadius: '20px', 
                                        border: '1px solid rgba(53, 37, 205, 0.1)',
                                        boxShadow: '0 20px 40px -12px rgba(11, 28, 48, 0.1)',
                                        fontFamily: 'var(--font-inter)',
                                        fontWeight: 800
                                    }}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="accuracy" 
                                    stroke="#3525cd" 
                                    strokeWidth={6}
                                    fillOpacity={1} 
                                    fill="url(#colorAccuracy)" 
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Quick Action Card (Bento 스타일) */}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#3525cd] rounded-[2.5rem] p-10 text-white clinical-shadow dash-element relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-4 leading-tight tracking-tighter">Instant <br />Case Study</h3>
                            <p className="text-white/60 font-bold text-sm mb-8 leading-relaxed">Generate a fresh clinical scenario based on your weakest areas.</p>
                            <button className="w-full py-4 bg-white text-primary rounded-2xl font-black text-xs tracking-widest uppercase hover:scale-[1.02] transition-transform">
                                INITIATE AI GENERATION
                            </button>
                        </div>
                        <Brain className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 group-hover:scale-110 transition-transform duration-700" />
                    </div>

                     {/* Recent Telemetry */}
                    <div className="bg-[#eff4ff] rounded-[2.5rem] p-10 clinical-shadow dash-element flex-grow border border-primary/5">
                        <h3 className="text-xl font-black tracking-tight text-on-surface mb-8 uppercase tracking-widest opacity-40">System Logs</h3>
                        <div className="space-y-6">
                            <RecentItem title="Endocrinology" date="Today, 14:20" score="94%" />
                            <RecentItem title="Nephrology" date="Yesterday" score="82%" />
                            <RecentItem title="Surgical Ethics" date="2 days ago" score="88%" />
                        </div>
                        <Link href="/history" className="flex items-center justify-center mt-10 text-[10px] font-black text-primary uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                            View Full Archive <ChevronRight className="w-3 h-3 ml-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, trend, color }: any) {
    return (
        <div className="bg-white p-10 rounded-[2.5rem] clinical-shadow hover:scale-[1.02] transition-all group duration-500 border border-primary/5">
            <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl ${color === 'primary' ? 'bg-[#3525cd]/5 text-primary' : 'bg-[#4f46e5]/5 text-[#4f46e5]'} group-hover:scale-110 transition-transform duration-500`}>
                    {icon}
                </div>
                <span className="text-[10px] font-black text-primary px-3 py-1.5 rounded-full glass-indigo flex items-center gap-1 uppercase tracking-widest">
                    <ArrowUpRight className="w-3 h-3" /> {trend}
                </span>
            </div>
            <p className="text-on-surface-variant text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-50">{label}</p>
            <h4 className="text-4xl font-black tracking-tighter text-on-surface">{value}</h4>
        </div>
    );
}

function RecentItem({ title, date, score }: any) {
  return (
      <div className="flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary clinical-shadow group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                  <h5 className="text-sm font-black text-on-surface uppercase tracking-tight">{title}</h5>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-40 mt-0.5">{date}</p>
              </div>
          </div>
          <div className="text-xs font-black text-primary px-3 py-1 bg-white rounded-lg clinical-shadow">{score}</div>
      </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
    )
}
