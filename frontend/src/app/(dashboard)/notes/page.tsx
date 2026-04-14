'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, Calendar, ChevronRight, Hash, Trash2, Microscope, Sparkles, FolderArchive, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '@/lib/api';
import { toast } from 'react-hot-toast';
import { gsap } from 'gsap';

export default function NotesPage() {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetchNotes();
        const ctx = gsap.context(() => {
            gsap.from(".archive-node", {
                opacity: 0,
                x: -30,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const fetchNotes = async () => {
        try {
            const res = await api.get('/notes');
            setNotes(res.data.notes);
        } catch (err) {
            toast.error('Data Uplink Error: Archives inaccessible');
        } finally {
            setIsLoading(false);
        }
    };

    const filteredNotes = notes.filter((n: any) => 
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        n.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div ref={containerRef} className="max-w-7xl mx-auto py-12 px-6 pb-24">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 archive-node">
                <div className="space-y-4">
                     <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-indigo text-[10px] font-black text-primary uppercase tracking-[0.2em] clinical-shadow">
                        <FolderArchive className="w-3 h-3" />
                        <span>Clinical Decryption</span>
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-on-surface leading-none">
                        Medical <span className="text-primary italic">Archives</span>.
                    </h1>
                    <p className="text-on-surface-variant font-semibold opacity-60">Synthesized data from your clinical telemetry sessions.</p>
                </div>
                
                <div className="relative w-full md:w-[28rem] group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" />
                    <input 
                        type="text" 
                        placeholder="Search archives by keyword..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-14 pr-6 py-5 bg-white border border-primary/5 rounded-[2rem] clinical-shadow focus:border-primary/30 outline-none transition-all text-on-surface font-semibold placeholder:opacity-30 text-sm"
                    />
                </div>
            </header>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="h-80 bg-white/50 animate-pulse rounded-[3rem] clinical-shadow border border-primary/5" />
                    ))}
                </div>
            ) : filteredNotes.length === 0 ? (
                <div className="text-center py-40 bg-[#eff4ff] rounded-[4rem] border-2 border-dashed border-primary/10 archive-node">
                    <Microscope className="w-24 h-24 text-primary opacity-10 mx-auto mb-8" />
                    <h3 className="text-3xl font-black text-on-surface tracking-tight uppercase opacity-60">Archives Empty</h3>
                    <p className="text-on-surface-variant font-bold max-w-sm mx-auto mt-4 opacity-40">Complete clinical simulations to generate localized medical notes.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredNotes.map((note: any) => (
                        <NoteCard key={note._id} note={note} />
                    ))}
                </div>
            )}
        </div>
    );
}

function NoteCard({ note }: { note: any }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div 
            layout
            className={`bg-white p-10 rounded-[3rem] clinical-shadow transition-all duration-500 cursor-pointer group archive-node border border-primary/5 relative overflow-hidden ${
                isExpanded ? 'md:col-span-2' : ''
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex justify-between items-start mb-10">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em] opacity-30">
                        <Hash className="w-3 h-3" /> Synthesis Log
                    </div>
                </div>
                <button className="p-2.5 rounded-xl bg-red-50 text-red-300 hover:bg-red-500 hover:text-white transition-all">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <h3 className="text-2xl font-black tracking-tight text-on-surface mb-6 group-hover:text-primary transition-colors leading-[1.1]">
                {note.title}
            </h3>
            
            <div className={`text-on-surface-variant text-base leading-relaxed mb-10 font-semibold opacity-70 ${isExpanded ? '' : 'line-clamp-4'}`}>
                {note.content}
            </div>

            <div className="flex items-center justify-between pt-10 border-t border-primary/5">
                <div className="flex items-center gap-3 text-[10px] text-on-surface-variant font-black uppercase tracking-widest opacity-40">
                    <Calendar className="w-4 h-4" />
                    {new Date(note.createdAt).toLocaleDateString()}
                </div>
                <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-2xl transition-all ${
                    isExpanded ? 'bg-primary text-white' : 'bg-[#eff4ff] text-primary hover:bg-[#3525cd]/10'
                }`}>
                    {isExpanded ? 'Shrink' : 'Decrypt Full'}
                </div>
            </div>
        </motion.div>
    );
}
