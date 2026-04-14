import React from 'react';

function App() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-8">
          <span className="text-xl font-bold text-slate-900 font-headline tracking-tight">AnatomyPro</span>
          <div className="hidden md:flex gap-6">
            <a className="text-slate-500 font-inter tracking-tight hover:bg-slate-100 transition-colors px-3 py-1 rounded-md" href="#">Library</a>
            <a className="text-indigo-700 font-semibold border-b-2 border-indigo-600 font-inter tracking-tight px-3 py-1" href="#">Simulation</a>
            <a className="text-slate-500 font-inter tracking-tight hover:bg-slate-100 transition-colors px-3 py-1 rounded-md" href="#">Academy</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <span className="material-symbols-outlined p-2 text-slate-500 hover:bg-slate-100 rounded-full cursor-pointer">help</span>
          </div>
          <div className="relative group">
            <span className="material-symbols-outlined p-2 text-slate-500 hover:bg-slate-100 rounded-full cursor-pointer">settings</span>
          </div>
          <div className="h-8 w-8 rounded-full overflow-hidden bg-surface-container">
            <img 
              className="h-full w-full object-cover" 
              alt="Medical Student Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh0DlJg9V8AznGWF2kaD_BbFcgAxHBetq4Ng81u1y92XMdTE0pTGCmT5TRfyJgE9P9BNjFQ0rxI-NUv00OFkgCe3a8QS4D0fbK6mALjxLK5a_1-hu-AWVerwWL0gd6THhS7dJAGLsIuUtSsorzRzE3fOChjR1vLj6Ykq_SMVZvE_q2CQtqIjBC2hwgACxVM-nbW9wbNQ3PFaSpg5omXNHA3pKKB65ypQHvmS5UBxotYsYRxibrDsrujNQWP-WZMp1MJFxIcG0y9Ac" 
            />
          </div>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-slate-50 flex flex-col p-4 border-r border-slate-100 hidden md:flex">
        <div className="pt-20 pb-8 px-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary-container flex items-center justify-center text-white">
              <span className="material-symbols-outlined">medical_services</span>
            </div>
            <div>
              <p className="text-sm font-black text-indigo-700 font-headline tracking-wide">Dr. Curator</p>
              <p className="text-xs text-slate-500 font-body tracking-wide">Clinical Year 2</p>
            </div>
          </div>
          <button className="w-full py-3 px-4 bg-primary text-white rounded-xl font-semibold flex items-center justify-center gap-2 mb-8 hover:scale-105 duration-300 shadow-sm">
            <span className="material-symbols-outlined text-sm">add</span>
            <span className="font-headline text-sm font-medium tracking-wide">New Simulation</span>
          </button>
          <div className="space-y-1">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-600 font-body text-sm font-medium tracking-wide hover:text-indigo-500 transition-all" href="#">
              <span className="material-symbols-outlined">home</span> Home
            </a>
            <a className="flex items-center gap-3 px-4 py-3 bg-white text-indigo-600 shadow-sm rounded-xl font-body text-sm font-medium tracking-wide" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span> Simulation
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-600 font-body text-sm font-medium tracking-wide hover:text-indigo-500 transition-all" href="#">
              <span className="material-symbols-outlined">menu_book</span> Atlas
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-600 font-body text-sm font-medium tracking-wide hover:text-indigo-500 transition-all" href="#">
              <span className="material-symbols-outlined">clinical_notes</span> Case Studies
            </a>
            <a className="flex items-center gap-3 px-4 py-3 text-slate-600 font-body text-sm font-medium tracking-wide hover:text-indigo-500 transition-all" href="#">
              <span className="material-symbols-outlined">quiz</span> Quiz
            </a>
          </div>
        </div>
        <div className="mt-auto border-t border-slate-100 pt-4 px-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 text-slate-500 font-body text-sm font-medium tracking-wide hover:text-indigo-500" href="#">
            <span className="material-symbols-outlined">contact_support</span> Support
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-slate-500 font-body text-sm font-medium tracking-wide hover:text-indigo-500" href="#">
            <span className="material-symbols-outlined">logout</span> Sign Out
          </a>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 px-6 pb-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-2">
                <span>Simulations</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-primary font-medium">Cardiovascular System</span>
              </nav>
              <h1 className="text-4xl font-extrabold text-on-surface tracking-tight font-headline leading-none">Interactive Cardiac Simulation</h1>
              <p className="text-on-surface-variant mt-2 max-w-2xl text-lg">Detailed anatomical study of the human heart featuring dynamic blood flow analysis and pathological toggle controls.</p>
            </div>
            <div className="flex gap-3">
              <button className="bg-surface-container-high text-primary px-6 py-3 rounded-DEFAULT font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined">share</span> Export Data
              </button>
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-3 rounded-DEFAULT font-bold flex items-center gap-2 shadow-lg">
                <span className="material-symbols-outlined">play_circle</span> Start Assessment
              </button>
            </div>
          </div>

          {/* Simulation Grid (Asymmetric Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* 3D Viewer Area (66% approx) */}
            <div className="lg:col-span-8 group relative rounded-lg overflow-hidden bg-surface-container-low min-h-[600px] flex items-center justify-center border border-outline-variant/15">
              <div className="absolute inset-0 z-0">
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
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-6 opacity-0 group-hover/hotspot:opacity-100 transition-all bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-primary/20 w-max pointer-events-none">
                    <p className="text-primary font-bold text-sm">Aorta</p>
                    <p className="text-xs text-on-surface-variant">Main artery of the body</p>
                  </div>
                </div>
                <div className="absolute top-[65%] left-[55%] group/hotspot cursor-pointer">
                  <div className="w-4 h-4 bg-primary rounded-full animate-pulse border-2 border-white shadow-lg"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-6 opacity-0 group-hover/hotspot:opacity-100 transition-all bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-primary/20 w-max pointer-events-none">
                    <p className="text-primary font-bold text-sm">Left Ventricle</p>
                    <p className="text-xs text-on-surface-variant">Oxygenated blood pumping chamber</p>
                  </div>
                </div>
              </div>

              {/* Floating Viewer Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface-container-lowest/80 backdrop-blur-xl p-2 rounded-xl border border-white shadow-2xl z-20">
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">zoom_in</span></button>
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">zoom_out</span></button>
                <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">rotate_right</span></button>
                <button className="p-3 hover:bg-surface-container text-on-surface-variant rounded-lg transition-colors"><span className="material-symbols-outlined">view_in_ar</span></button>
                <div className="w-px h-6 bg-outline-variant/30 mx-1"></div>
                <button className="p-3 hover:bg-primary/10 text-primary rounded-lg transition-colors"><span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>fullscreen</span></button>
              </div>

              {/* Glass HUD Overlay (Left) */}
              <div className="absolute top-6 left-6 flex flex-col gap-4 z-20">
                <div className="bg-white/40 backdrop-blur-xl p-4 rounded-lg border border-white/40 shadow-sm w-48">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-2 leading-none">Cardiac Rhythm</p>
                  <div className="flex items-end gap-1 h-12">
                    {[0.6, 0.8, 1, 0.5, 0.9, 0.3, 0.7, 0.5].map((h, i) => (
                      <div key={i} className="w-1 bg-primary/40 rounded-full" style={{ height: `${h * 100}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between items-baseline mt-2">
                    <span className="text-2xl font-black text-on-surface leading-none">72</span>
                    <span className="text-xs font-medium text-on-surface-variant">BPM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Control Panel (33% approx) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-surface-container-lowest rounded-lg p-8 shadow-sm border border-outline-variant/15 flex-grow">
                <h3 className="text-xl font-bold text-on-surface mb-6 font-headline leading-none">Simulation Controls</h3>
                <div className="space-y-6">
                  {/* Toggle Item */}
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-bold text-on-surface text-sm">Anatomy Labels</p>
                      <p className="text-xs text-on-surface-variant">Display anatomical terminology</p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative p-1 flex items-center justify-end">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-bold text-on-surface text-sm">Blood Flow Animation</p>
                      <p className="text-xs text-on-surface-variant">Visualize systemic circulation</p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative p-1 flex items-center justify-end">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <div>
                      <p className="font-bold text-on-surface text-sm">X-Ray View</p>
                      <p className="text-xs text-on-surface-variant">View internal muscular structures</p>
                    </div>
                    <div className="w-12 h-6 bg-surface-container-highest rounded-full relative p-1 flex items-center">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-4 leading-none">Anatomical Presets</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-surface-container-low text-on-surface py-3 rounded-DEFAULT text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-colors">Cross-Section</button>
                    <button className="bg-surface-container-low text-on-surface py-3 rounded-DEFAULT text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-colors">Vascular Map</button>
                    <button className="bg-surface-container-low text-on-surface py-3 rounded-DEFAULT text-xs font-semibold hover:bg-primary/10 hover:text-primary transition-colors">Nerve Pathways</button>
                    <button className="bg-primary-container text-white py-3 rounded-DEFAULT text-xs font-bold shadow-md">Standard View</button>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-outline-variant/15">
                  <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">warning</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Pathology Loaded</p>
                      <p className="text-xs text-on-surface-variant">Atrial Fibrillation model active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Content: Educational Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-10 shadow-sm border border-outline-variant/15">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">clinical_notes</span>
                <h2 className="text-2xl font-bold text-on-surface font-headline leading-none">Clinical Description</h2>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-on-surface-variant leading-relaxed text-lg mb-6 leading-relaxed">
                  The human heart is a sophisticated muscular organ responsible for pumping blood through the circulatory system by rhythmic contraction and dilation. It is situated in the middle mediastinum, at the level of thoracic vertebrae T5-T8.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="font-bold text-on-surface text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Systemic Function
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      The left side of the heart receives oxygenated blood from the pulmonary veins and pumps it through the aorta into the systemic circulation to nourish the body's tissues.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Pulmonary Function
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      The right side receives deoxygenated blood from the superior and inferior vena cava and pumps it into the pulmonary trunk towards the lungs for gas exchange.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Progress Bento Item */}
            <div className="bg-primary text-white rounded-lg p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <p className="text-primary-fixed text-sm font-medium tracking-wide mb-2 leading-none opacity-80">Learning Progress</p>
                <h3 className="text-2xl font-extrabold mb-6 leading-none">Cardiovascular Module</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-black leading-none">84%</span>
                  <div className="flex-grow h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="w-[84%] h-full bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-primary-fixed text-xs opacity-60">2 modules remaining to complete certification</p>
              </div>
              <button className="relative z-10 w-full py-4 bg-white text-primary rounded-DEFAULT font-bold mt-8 shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                Continue Lesson
              </button>
              {/* Abstract decorative element */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-container rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl flex justify-around items-center h-20 px-6 z-50 border-t border-slate-100">
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-indigo-700">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>view_in_ar</span>
          <span className="text-[10px] font-bold">Sim</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-bold">Atlas</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-slate-500">
          <span className="material-symbols-outlined">quiz</span>
          <span className="text-[10px] font-bold">Quiz</span>
        </div>
      </nav>
    </div>
  );
}

export default App;
