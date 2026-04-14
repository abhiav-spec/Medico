'use client';

import { 
    Activity, 
    Target, 
    Book, 
    Clock, 
    ArrowUpRight, 
    PlayCircle,
    Plus
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/useAuthStore';
import { 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';

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

    return (
        <div className="space-y-8">
            <header className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold heading-font text-slate-900">
                        Welcome back, {user?.name.split(' ')[0]} 👋
                    </h1>
                    <p className="text-slate-500 mt-1">Ready to continue your medical training?</p>
                </div>
                <Link 
                    href="/quizzes" 
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                >
                    <Plus className="w-5 h-5" />
                    New Simulation
                </Link>
            </header>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                    icon={<Target className="w-5 h-5 text-blue-600" />} 
                    label="Avg. Accuracy" 
                    value="84%" 
                    trend="+5.2%"
                />
                <StatCard 
                    icon={<Activity className="w-5 h-5 text-emerald-600" />} 
                    label="Quizzes Done" 
                    value="24" 
                    trend="+12"
                />
                <StatCard 
                    icon={<Book className="w-5 h-5 text-purple-600" />} 
                    label="Notes Saved" 
                    value="156" 
                    trend="+28"
                />
                <StatCard 
                    icon={<Clock className="w-5 h-5 text-orange-600" />} 
                    label="Study Hours" 
                    value="12.5h" 
                    trend="+2.1h"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Performance Graph */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 premium-shadow">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-lg font-bold heading-font text-slate-900">Performance Trend</h3>
                            <p className="text-sm text-slate-500">Weekly accuracy percentage</p>
                        </div>
                        <select className="bg-slate-50 border-none text-sm font-bold rounded-lg px-3 py-1.5 focus:ring-0">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis 
                                    dataKey="name" 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                    dy={10}
                                />
                                <YAxis 
                                    axisLine={false} 
                                    tickLine={false} 
                                    tick={{ fill: '#94a3b8', fontSize: 12 }} 
                                />
                                <Tooltip 
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                />
                                <Area 
                                    type="monotone" 
                                    dataKey="accuracy" 
                                    stroke="#2563eb" 
                                    strokeWidth={3}
                                    fillOpacity={1} 
                                    fill="url(#colorAccuracy)" 
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Simulations */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 premium-shadow">
                    <h3 className="text-lg font-bold heading-font text-slate-900 mb-6">Recent activity</h3>
                    <div className="space-y-6">
                        <RecentItem title="Cardiology Quiz" date="2 hours ago" score="90%" status="complete" />
                        <RecentItem title="Neurology Case" date="Yesterday" score="85%" status="complete" />
                        <RecentItem title="Pulmonology Exam" date="3 days ago" score="78%" status="complete" />
                        <RecentItem title="Brain Anatomy" date="4 days ago" score="95%" status="complete" />
                    </div>
                    <Link href="/history" className="block w-full text-center mt-8 text-sm font-bold text-blue-600 hover:text-blue-700">
                        View all history
                    </Link>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, trend }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 premium-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 bg-slate-50 rounded-xl">
                    {icon}
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" /> {trend}
                </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{label}</p>
            <h4 className="text-2xl font-bold heading-font text-slate-900 mt-1">{value}</h4>
        </div>
    );
}

function RecentItem({ title, date, score, status }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <PlayCircle className="w-5 h-5" />
                </div>
                <div>
                    <h5 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{title}</h5>
                    <p className="text-xs text-slate-400">{date}</p>
                </div>
            </div>
            <div className="text-sm font-bold text-slate-900">{score}</div>
        </div>
    );
}
