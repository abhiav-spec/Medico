import React from 'react';
import { Link } from 'react-router-dom';

const Simulation: React.FC = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen font-inter selection:bg-primary-container selection:text-white">
      {/* SideNavBar Component - Standardized */}
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
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 ease-in-out">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
          <Link to="/quiz" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 ease-in-out">
            <span className="material-symbols-outlined">quiz</span>
            <span className="text-sm font-medium">Start Quiz</span>
          </Link>
          <Link to="/notes" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 ease-in-out">
            <span className="material-symbols-outlined">description</span>
            <span className="text-sm font-medium">Notes</span>
          </Link>
          <Link to="/history" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 ease-in-out">
            <span className="material-symbols-outlined">history</span>
            <span className="text-sm font-medium">History</span>
          </Link>
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all duration-200 ease-in-out">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </nav>

        <div className="mt-auto space-y-4">
          <Link to="/simulation" className="w-full py-3 px-4 bg-white text-indigo-600 border border-indigo-100 rounded-DEFAULT font-semibold shadow-sm flex items-center justify-center gap-2 hover:bg-indigo-50 transition-colors">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
            Active Simulation
          </Link>
          <div className="pt-4 border-t border-slate-200">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="text-sm font-medium">Help Center</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TopAppBar Component - Standardized */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-30 flex items-center justify-between px-8">
        <div className="flex items-center gap-4 flex-1">
          <nav className="flex items-center gap-2 text-on-surface-variant text-sm">
            <Link to="/dashboard" className="hover:text-primary">Dashboard</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary font-medium">Heart Simulation</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface leading-none">Dr. Smith</p>
              <p className="text-[10px] text-slate-500 font-medium tracking-tight">Active Session</p>
            </div>
            <div className="h-10 w-10 rounded-full overflow-hidden bg-surface-container border-2 border-white shadow-sm">
              <img 
                className="h-full w-full object-cover" 
                alt="Medical Student Profile" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh0DlJg9V8AznGWF2kaD_BbFcgAxHBetq4Ng81u1y92XMdTE0pTGCmT5TRfyJgE9P9BNjFQ0rxI-NUv00OFkgCe3a8QS4D0fbK6mALjxLK5a_1-hu-AWVerwWL0gd6THhS7dJAGLsIuUtSsorzRzE3fOChjR1vLj6Ykq_SMVZvE_q2CQtqIjBC2hwgACxVM-nbW9wbNQ3PFaSpg5omXNHA3pKKB65ypQHvmS5UBxotYsYRxibrDsrujNQWP-WZMp1MJFxIcG0y9Ac" 
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black text-on-surface tracking-tighter leading-none mb-3">Interactive Cardiac Simulation</h1>
              <p className="text-on-surface-variant max-w-2xl font-medium leading-relaxed">
                Detailed anatomical study of the human heart featuring dynamic blood flow analysis and pathological toggle controls.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-high text-primary px-6 py-3 rounded-DEFAULT font-bold flex items-center gap-2 hover:bg-surface-container-highest transition-all active:scale-95 shadow-sm">
                <span className="material-symbols-outlined">share</span> Export Data
              </button>
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-3 rounded-DEFAULT font-black flex items-center gap-2 shadow-xl hover:opacity-95 transition-all active:scale-95">
                <span className="material-symbols-outlined">play_circle</span> Start Assessment
              </button>
            </div>
          </div>

          {/* Simulation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* 3D Viewer Area */}
            <div className="lg:col-span-8 group relative rounded-lg overflow-hidden bg-surface-container-low min-h-[600px] flex items-center justify-center border border-outline-variant/15 shadow-sm">
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" 
                  alt="3D Heart Visual" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACkxKrwdDdYXq2E3LWvDC37O78SYMwQ-nQrzRQX-bOF8BuZrP9orCgNEXuHDTBXsKdJQi_8xGnc7-RYm-Ggs7v4xVuDK9bUpFo7TmYjXRhihhFauhLpc9vkUTBVCsmXD_V80zbP8IZ4CoWtoSr6VA62SDZ_on5Bw8pIx8px73N2g0xsRi99BwkuDFzhkwqlsH3cufQKNuw3pOYP2tx_P96b-ISzAVwLrR9BZFXUyFIzr7TcvogOycbu2N8uNyayddBGGnuFm2bbgU" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
              </div>

              {/* Hotspots */}
              <div className="relative z-10 w-full h-full">
                <div className="absolute top-[30%] left-[45%] group/hotspot cursor-pointer">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse border-2 border-white shadow-lg"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover/hotspot:opacity-100 transition-all bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-primary/20 w-max pointer-events-none translate-y-2 group-hover/hotspot:translate-y-0">
                    <p className="text-primary font-bold text-sm">Aorta</p>
                    <p className="text-xs text-on-surface-variant">Main systemic artery</p>
                  </div>
                </div>
                <div className="absolute top-[65%] left-[55%] group/hotspot cursor-pointer">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse border-2 border-white shadow-lg"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-8 opacity-0 group-hover/hotspot:opacity-100 transition-all bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-primary/20 w-max pointer-events-none translate-y-2 group-hover/hotspot:translate-y-0">
                    <p className="text-primary font-bold text-sm">Left Ventricle</p>
                    <p className="text-xs text-on-surface-variant">Chamber: Oxygenated blood</p>
                  </div>
                </div>
              </div>

              {/* Floating Viewer Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-xl p-2 rounded-xl border border-outline-variant/10 shadow-2xl z-20">
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">zoom_in</span></button>
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">zoom_out</span></button>
                <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">rotate_right</span></button>
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span></button>
                <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
                <button className="p-3 hover:bg-primary/10 text-primary rounded-lg transition-colors"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fullscreen</span></button>
              </div>

              {/* Glass HUD Overlay */}
              <div className="absolute top-6 left-6 flex flex-col gap-4 z-20">
                <div className="bg-white/40 backdrop-blur-xl p-4 rounded-lg border border-white/40 shadow-sm w-48">
                  <p className="text-[10px] uppercase tracking-widest font-black text-primary mb-2 leading-none">Cardiac Rhythm</p>
                  <div className="flex items-end gap-1 h-12">
                    {[0.6, 0.8, 1, 0.5, 0.9, 0.3, 0.7, 0.5].map((h, i) => (
                      <div key={i} className="w-1 bg-primary/40 rounded-full" style={{ height: `${h * 100}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-2xl font-black text-on-surface leading-none tracking-tighter">72</span>
                    <span className="text-[10px] font-bold text-on-surface-variant tracking-wider">BPM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Panel */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded-lg p-8 shadow-sm border border-outline-variant/15 flex-grow">
                <h3 className="text-xl font-black text-on-surface mb-6 tracking-tight leading-none">Simulation Controls</h3>
                <div className="space-y-6">
                  {/* Toggle Item */}
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-bold text-on-surface text-sm">Anatomy Labels</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">Display terminology</p>
                    </div>
                    <div className="w-10 h-5 bg-primary rounded-full relative p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-bold text-on-surface text-sm">Blood Flow</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">Visualize circulation</p>
                    </div>
                    <div className="w-10 h-5 bg-primary rounded-full relative p-0.5 flex items-center justify-end">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-bold text-on-surface text-sm">X-Ray Mode</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">Internal structures</p>
                    </div>
                    <div className="w-10 h-5 bg-surface-container-highest rounded-full relative p-0.5 flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <p className="text-[10px] font-black text-on-surface-variant mb-4 uppercase tracking-widest leading-none">Anatomical Presets</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-surface-container-low text-on-surface py-3 rounded-DEFAULT text-[10px] font-bold uppercase tracking-wider hover:bg-primary/10 hover:text-primary transition-colors">Cross-Section</button>
                    <button className="bg-surface-container-low text-on-surface py-3 rounded-DEFAULT text-[10px] font-bold uppercase tracking-wider hover:bg-primary/10 hover:text-primary transition-colors">Vascular Map</button>
                    <button className="bg-surface-container-low text-on-surface py-3 rounded-DEFAULT text-[10px] font-bold uppercase tracking-wider hover:bg-primary/10 hover:text-primary transition-colors">Nerve Pathways</button>
                    <button className="bg-primary text-white py-3 rounded-DEFAULT text-[10px] font-black uppercase tracking-widest shadow-lg shadow-indigo-100">Standard View</button>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-outline-variant/15">
                  <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-error-container/20 text-error flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">warning</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Pathology Active</p>
                      <p className="text-[10px] text-on-surface-variant font-medium">Atrial Fibrillation loaded</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-10 shadow-sm border border-outline-variant/15 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">clinical_notes</span>
                <h2 className="text-2xl font-black text-on-surface tracking-tighter leading-none">Clinical Description</h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-8 font-medium">
                The human heart is a sophisticated muscular organ responsible for pumping blood through the circulatory system. This simulation provides a granular study of the middle mediastinum structures.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Systemic Function
                  </h4>
                  <p className="text-on-surface-variant text-[13px] leading-relaxed font-medium">
                    The left side receives oxygenated blood and pumps it into systemic circulation to nourish tissues across the entire body.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface text-sm mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Pulmonary Function
                  </h4>
                  <p className="text-on-surface-variant text-[13px] leading-relaxed font-medium">
                    The right side receives deoxygenated blood and pumps it into the pulmonary trunk for vital gas exchange in the lungs.
                  </p>
                </div>
              </div>
            </div>

            {/* Module Progress Card */}
            <div className="bg-primary text-white rounded-lg p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-indigo-100">
              <div className="relative z-10">
                <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] mb-3 leading-none">Module Progress</p>
                <h3 className="text-2xl font-black mb-6 leading-tight tracking-tight">Cardiovascular System</h3>
                <div className="flex items-center gap-4 mb-4 leading-none">
                  <span className="text-4xl font-black tracking-tighter">84%</span>
                  <div className="flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[84%] h-full bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-white/50 text-[10px] font-bold">2 modules remaining for clinical certification</p>
              </div>
              <button className="relative z-10 w-full py-4 bg-white text-primary rounded-DEFAULT font-black uppercase tracking-widest text-[11px] mt-8 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                Continue Lesson
              </button>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Simulation;
