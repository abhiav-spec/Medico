import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen font-inter selection:bg-primary-container selection:text-white">
      {/* SideNavBar Component */}
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
          {/* Dashboard (Active) */}
          <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-white text-indigo-600 shadow-sm rounded-lg transition-all duration-200 ease-in-out">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
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
          <Link to="/simulation" className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-DEFAULT font-semibold shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined text-sm">add</span>
            New Simulation
          </Link>
          <div className="pt-4 border-t border-slate-200">
            <a className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 rounded-lg transition-all" href="#">
              <span className="material-symbols-outlined">help</span>
              <span className="text-sm font-medium">Help Center</span>
            </a>
          </div>
        </div>
      </aside>

      {/* TopAppBar Component */}
      <header className="fixed top-0 right-0 left-64 h-16 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 z-30 flex items-center justify-between px-8">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search case studies, notes, or labs..." type="text" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-600">
            <span className="material-symbols-outlined">dark_mode</span>
          </button>
          <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface leading-none">Dr. Smith</p>
              <p className="text-[10px] text-slate-500 font-medium">Cardiology Resident</p>
            </div>
            <img 
              alt="Medical student profile" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGh63OsIp6DU2rBBWmQNTGBxinEzfUHcdI_WDhjhQAKyVdtHc0aS0rTtSNtg52ZpaKP0dogf6J3E9Gymdcm_ye8KhG7Xrmf35NS8s10Vch4v3UihFe1K-sXD46QmhQ4YbTI_I-VVbvsW1oX25QmXWSzL66vFRVMcdbh01SbJvA3jIu5Hb5YT6FTEfgzc7w5hguGazBSIwKiNeyF9xGGYEweMthB5ugK89EwJKv812tHSJpSXvldg0G7JfVHF7wGiVUB4zR0y4n1nI" 
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="ml-64 pt-24 px-8 pb-12 min-h-screen">
        {/* Welcome Header */}
        <header className="mb-10">
          <h2 className="text-4xl font-black text-on-surface tracking-tighter mb-2">Welcome back, Dr. Smith</h2>
          <p className="text-on-surface-variant max-w-2xl font-medium">You have 3 simulation reviews pending today. Your accuracy in Cardiology has improved by 12% this week.</p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 leading-none">
          {/* Stats Column */}
          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Quizzes */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-transparent hover:border-indigo-100 transition-all flex flex-col justify-between min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <div>
                <p className="text-3xl font-black text-on-surface">24</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Total Quizzes</p>
              </div>
            </div>
            {/* Accuracy */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-transparent hover:border-indigo-100 transition-all flex flex-col justify-between min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              </div>
              <div>
                <p className="text-3xl font-black text-on-surface">88%</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Avg. Accuracy</p>
              </div>
            </div>
            {/* Weak Topic */}
            <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-transparent hover:border-indigo-100 transition-all flex flex-col justify-between min-h-[160px]">
              <div className="w-10 h-10 rounded-full bg-error-container text-error flex items-center justify-center mb-4">
                <span className="material-symbols-outlined">monitor_heart</span>
              </div>
              <div>
                <p className="text-xl font-black text-on-surface">Cardiology</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Focus Area</p>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="col-span-1 md:col-span-3 bg-surface-container-lowest p-8 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-bold text-lg text-on-surface">Performance Trend</h3>
                  <p className="text-sm text-slate-500">Learning velocity over the last 30 days</p>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-low text-[10px] font-bold text-primary">WEEKLY</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold text-slate-400">MONTHLY</span>
                </div>
              </div>
              {/* Simulated Line Chart */}
              <div className="h-64 w-full relative">
                <div className="absolute inset-0 flex items-end justify-between px-2">
                  <div className="w-[12%] bg-primary/10 rounded-t-lg h-[40%] transition-all hover:h-[45%]"></div>
                  <div className="w-[12%] bg-primary/20 rounded-t-lg h-[55%] transition-all hover:h-[60%]"></div>
                  <div className="w-[12%] bg-primary/30 rounded-t-lg h-[45%] transition-all hover:h-[50%]"></div>
                  <div className="w-[12%] bg-primary/50 rounded-t-lg h-[70%] transition-all hover:h-[75%]"></div>
                  <div className="w-[12%] bg-primary/70 rounded-t-lg h-[60%] transition-all hover:h-[65%]"></div>
                  <div className="w-[12%] bg-primary rounded-t-lg h-[85%] relative group cursor-pointer">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">92%</div>
                  </div>
                </div>
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="border-t border-slate-100 w-full"></div>
                  <div className="border-t border-slate-100 w-full"></div>
                  <div className="border-t border-slate-100 w-full"></div>
                  <div className="border-t border-slate-100 w-full"></div>
                </div>
              </div>
              <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
              </div>
            </div>
          </div>

          {/* Side Activity Feed */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-surface-container-low p-6 rounded-lg h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg text-on-surface">Recent Activity</h3>
                <button className="text-xs font-bold text-primary hover:underline">View All</button>
              </div>
              <div className="space-y-4 flex-1">
                {/* Activity Item 1 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">pulmonology</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Pulmonary Embolism</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">2 hours ago • Diagnostic Case</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-green-600">95%</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">Score</p>
                  </div>
                </div>
                {/* Activity Item 2 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">medication</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Pharmacology IV</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Yesterday • Quiz</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-primary">82%</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">Score</p>
                  </div>
                </div>
                {/* Activity Item 3 */}
                <div className="bg-surface-container-lowest p-4 rounded-lg flex items-center justify-between group cursor-pointer transition-transform hover:scale-[1.02] shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">neurology</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Neuro-Anatomy Review</p>
                      <p className="text-[10px] text-slate-500 mt-0.5">Dec 14 • Simulation</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-400">71%</p>
                    <p className="text-[10px] font-bold text-slate-400 mt-0.5">Score</p>
                  </div>
                </div>
              </div>

              {/* Promo/CTA Card */}
              <div className="mt-8 relative overflow-hidden rounded-lg bg-primary p-6 text-white shadow-xl shadow-indigo-100">
                <div className="relative z-10">
                  <h4 className="font-black text-lg leading-tight mb-2">New Clinical Case:<br />Rare Cardiac Fibroma</h4>
                  <p className="text-[11px] opacity-80 mb-4 leading-relaxed line-clamp-2">Challenge yourself with this advanced pediatric cardiology case study.</p>
                  <button className="bg-white text-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full hover:bg-slate-50 transition-colors">Explore Now</button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-20 pointer-events-none">
                  <span className="material-symbols-outlined text-8xl" style={{ fontVariationSettings: "'opsz' 48" }}>ecg_heart</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Section */}
          <div className="col-span-12">
            <div className="bg-surface-container-highest/30 rounded-lg p-8 border border-outline-variant/10 leading-none">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-3 block">Curation for You</span>
                  <h3 className="text-3xl font-black text-on-surface tracking-tighter">Strengthen your foundations.</h3>
                </div>
                <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm bg-white">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm bg-white">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Recommendation 1 */}
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-slate-200 relative">
                    <img 
                      alt="ECG monitor" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_JgIAhqZVHpaWejuXp0q6miwoWKefKoXZy7LOw4QB8qIbQiHmHsGq4fv1l2sJgThhzYc-L-P3PU6QqqM79KUNLWbRZqejAKH3VRcdtQJY7c1apZ_H0UaTX-NtmAnkPpdlYb7v5zKDoy20YSW8EiVZNG4oxUCfmvTJ1l-MANpaQcxN4qK59I7u5tkd7VkKrihzJ4wx1dp41cgPhLfvUraTkn6PXerR4MNRrTwEj1oomKrk_ZsDrH53j_1_9Cm8KoZ2jCxztRbZNwY" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-primary text-white text-[9px] font-bold px-2 py-1 rounded uppercase">Clinical</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm">Advanced ECG Interpretation</h4>
                  <p className="text-xs text-slate-500 mt-1">45 mins • 24 CME Credits</p>
                </div>
                {/* Recommendation 2 */}
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-slate-200 relative">
                    <img 
                      alt="Medical notes" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6T4XfFv9CKBYclwNnb9CltLoeZAYH_cwJ738aSLpkcJcuVI-4D7jDTTGvi18jXTdt_5KirEvZQvvoLVLQY2ucAelgPpG21evH7E4-EM7gRqnYXK7KqHSNALR3f2fdciysbXih8IbmFYyqUuBppbc3fktPcMUGnIET9yEjqgo_xtZHZlUZABSbc17iAFQc0R1yQ7Jpk56F1kqW6GXeB504EmzfHLzIdv-qSd29XVpyqbLkqFMosKKlrEkslcgRuwbSSCeOkh_BINc" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-secondary text-white text-[9px] font-bold px-2 py-1 rounded uppercase">Pharmacy</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm">Anticoagulant Mechanisms</h4>
                  <p className="text-xs text-slate-500 mt-1">30 mins • 12 CME Credits</p>
                </div>
                {/* Recommendation 3 */}
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-slate-200 relative">
                    <img 
                      alt="Microscope view" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMd-q7Q25EsD7P-diEhR4bI9xwBDDqlMm_op61bAdZAlMUTpumNQi0Jord6sJLvpA9x7tY_soZyCTfIH33pSa0Txsvp4wHYbAy5gPHvinVV-WEtIgNb6p_rTTNrnWRmZd_SlCIGUTNtwHcwyT-z_xQjujCGCmkXK8Wyov6wMCRbG3WDOvD9mRdb6UnxTTCMdIv9FZ7aubdSnM1mv5JlfTw-h2h_MXa8bJjhkomnNLLFUsleD8ekEqhm7LescTUOBI1frSGrpA9dtw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-tertiary-container text-white text-[9px] font-bold px-2 py-1 rounded uppercase">Pathology</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm">Cellular Histology Lab</h4>
                  <p className="text-xs text-slate-500 mt-1">1 hour • Simulation</p>
                </div>
                {/* Recommendation 4 */}
                <div className="group cursor-pointer">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 bg-slate-200 relative">
                    <img 
                      alt="Doctor consulting" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn5_SsuEsCQ84bmjp0z90jWd5TTGtrzIvC6d08KA43uMl_v-zSbz8IX4WuOPK10gHif2rvCEwTOJoBbsxtSuE3NXXPDg5aNjBMJMm_y8cKcpnd8L3FAX2tkXwifwQcQJLivqr2Vwkp_ZV2gWu6dBeV4vJnn5fqoabiecuVDAMILv4uZtS6gTI4pv3LsV2AyoYZCYwY5nm-e172Lz6geIpgEVZNUR9iscII2SYi9q7vaEV8muJSQhETEgXuqJhT2BLpQ1XKgTaGmM0" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-on-surface-variant text-white text-[9px] font-bold px-2 py-1 rounded uppercase">Ethics</span>
                    </div>
                  </div>
                  <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors text-sm">Patient Communication</h4>
                  <p className="text-xs text-slate-500 mt-1">20 mins • Video Lecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
