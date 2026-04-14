'use client';

import { useState, useEffect } from 'react';
import { Book, Search, Calendar, ChevronRight, Hash, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '@/lib/api';
import { toast } from 'react-hot-toast';

export default function NotesPage() {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const res = await api.get('/notes');
            setNotes(res.data.notes);
        } catch (err) {
            toast.error('Failed to load notes');
        } finally {
            setIsLoading(false);
        }
    };

    const filteredNotes = notes.filter((n: any) => 
        n.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        n.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-6xl mx-auto py-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <h1 className="text-3xl font-bold heading-font text-slate-900">Medical Knowledge Base</h1>
                    <p className="text-slate-500 mt-1">Structured notes generated from your clinical simulations</p>
                </div>
                
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Search your notes..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
                    />
                </div>
            </header>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-white animate-pulse rounded-3xl border border-slate-100" />
                    ))}
                </div>
            ) : filteredNotes.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                    <Book className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-slate-900">No notes found</h3>
                    <p className="text-slate-500">Completed simulations to generate AI study notes</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="bg-white p-6 rounded-3xl border border-slate-200 premium-shadow hover:border-blue-200 transition-all cursor-pointer group"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex justify-between items-start mb-4">
                <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold flex items-center gap-1.5">
                    <Hash className="w-3 h-3" /> NOTE
                </div>
                <button className="p-1.5 text-slate-300 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>

            <h3 className="text-lg font-bold heading-font text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {note.title}
            </h3>
            
            <div className={`text-slate-500 text-sm leading-relaxed mb-6 ${isExpanded ? '' : 'line-clamp-3'}`}>
                {note.content}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(note.createdAt).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-blue-600">
                    {isExpanded ? 'Collapse' : 'Read Full'} <ChevronRight className="w-3 h-3" />
                </div>
            </div>
        </motion.div>
    );
}
