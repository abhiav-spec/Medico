import React from 'react';
import { Link } from 'react-router-dom';

const PagePlaceholder: React.FC<{ title: string; icon: string }> = ({ title, icon }) => {
  return (
    <div className="bg-background text-on-surface min-h-screen font-inter">
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-slate-200/50 bg-slate-50 flex flex-col p-4 space-y-2 z-40">
        <div className="flex items-center gap-3 px-2 py-6">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-md">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
          </div>
          <div>
            <h1 className="font-black text-indigo-600 text-lg leading-none">Medico AI</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Clinical Curator</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link to="/quiz" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${title === 'Quiz' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: title === 'Quiz' ? "'FILL' 1" : "" }}>quiz</span>
            <span className="text-sm font-medium">Start Quiz</span>
          </Link>
          <Link to="/notes" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${title === 'Notes' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: title === 'Notes' ? "'FILL' 1" : "" }}>description</span>
            <span className="text-sm font-medium">Notes</span>
          </Link>
          <Link to="/history" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${title === 'History' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: title === 'History' ? "'FILL' 1" : "" }}>history</span>
            <span className="text-sm font-medium">History</span>
          </Link>
        </nav>
      </aside>

      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-5xl">{icon}</span>
          </div>
          <h2 className="text-3xl font-black text-on-surface tracking-tighter mb-2">{title} Page</h2>
          <p className="text-on-surface-variant font-medium max-w-sm mx-auto leading-relaxed">
            I am ready to implement the high-fidelity version of this page! Please paste the HTML source code when you're ready.
          </p>
          <Link to="/dashboard" className="inline-block mt-8 text-primary font-bold hover:underline">Back to Dashboard</Link>
        </div>
      </main>
    </div>
  );
};

export default PagePlaceholder;
