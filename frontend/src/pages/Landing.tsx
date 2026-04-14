import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-container selection:text-white min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
        <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter text-slate-900">Medico Simulator</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm font-medium text-primary font-semibold transition-colors duration-150" to="/">Home</Link>
            <a className="text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors duration-150 px-3 py-1 rounded-lg" href="#">Features</a>
            <a className="text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors duration-150 px-3 py-1 rounded-lg" href="#">Pricing</a>
            <a className="text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors duration-150 px-3 py-1 rounded-lg" href="#">About</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-bold text-on-surface-variant hover:text-primary transition-colors px-4 py-2">
              Sign In
            </Link>
            <Link to="/signup" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:opacity-90 transition-all active:scale-95">
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-40 md:pb-32 px-6">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-surface-container-high rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-secondary-container rounded-full blur-[100px] opacity-30"></div>
          </div>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low mb-8 border border-outline-variant/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-wider text-primary uppercase">Next-Gen Simulation v2.0</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]">
              AI-Powered <br />
              <span className="text-transparent bg-clip-text clinical-gradient">Medical Learning</span> <br />
              Simulator
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed mb-12">
              Practice, Learn, and Master Medical Concepts with a hyper-realistic clinical engine designed for modern students.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup" className="w-full sm:w-auto clinical-gradient text-white px-10 py-5 rounded-full text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2">
                Start Learning
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="w-full sm:w-auto bg-surface-container-lowest border border-outline-variant/10 text-on-surface px-10 py-5 rounded-full text-lg font-bold hover:bg-surface-container-low transition-all">
                View Demo
              </button>
            </div>
          </div>
          {/* Bento Preview */}
          <div className="mt-24 max-w-7xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-outline-variant/20">
              <img 
                alt="Advanced medical simulator interface" 
                className="w-full aspect-[21/9] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvdtomlw8oxQkdMg4NqonYr9SzuAT9JTBWF3CN6aTpdbqOTE_C1hj8AxE4sjRxLuuLHRgMBf98_LVquRDrhhKanrG_aspoUxFfXBma1a0nHwJG4ZQFU4KitiIgMxwjME-xN6-XYT_r8RYXHvbofdlUCLKwb91xReSikw2uhmnOLD0ATOD4w8gGDjIHvWhSd88sqqXgRkTAABio72X43Kad_U_E3gTeW6moue8s3NZILkRHVDnH7RR2SH39w25aE-p6ZKaSjToBb7Y" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-4">Precision-Engineered Features</h2>
              <p className="text-on-surface-variant font-medium">Tools designed for cognitive ease and high-retention learning.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="group bg-surface-container-lowest p-8 md:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
                <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">quiz</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">AI Quiz Generator</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  Dynamic, context-aware question sets that adapt to your knowledge gaps in real-time. Experience custom clinical scenarios.
                </p>
                <div className="h-40 rounded-lg bg-surface-container overflow-hidden">
                  <img 
                    alt="AI interface visualization" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAmg8D5WAb_0oUF4MYESSaw3LJCPajwLsYumKnDaWizGVjwJhBPFykaQVIZv-512ArIgr9Stx29iFoERweTJy6ZZxPNzd3c9q5x5abWpRhK1gNFz2ZnXyNWrl3zsjlkubvDfQWn-QUPbxtMFQU8Non8YiUWaE-Z7-ThulymyTswDWrqzlZYxrao_FNpo5ZgU33luVSXyiHOkbfFKgq9NE-iVgxH3lwRv24lo-IhH0-SbLjLXn5_QdEzGjJJAzUTDY1GxcN3iE_n4s" 
                  />
                </div>
              </div>
              {/* Feature Card 2 */}
              <div className="group bg-surface-container-lowest p-8 md:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
                <div className="w-14 h-14 rounded-2xl clinical-gradient flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">mic</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Voice Interaction</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  Natural language clinical reasoning. Talk through diagnoses and receive immediate pedagogical feedback on your logic.
                </p>
                <div className="h-40 rounded-lg bg-surface-container overflow-hidden">
                  <img 
                    alt="Sound wave visualization" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYLbYQFDkQpz5ynE3WdG4wlW1tk6zCWYV7sMEXZSOS9IPWnC6NydRNhE_I4rBXyUU1tTkPWZGeIMaJYfkFoaVcRMpreIetybalEtS9exXy-H7lXdk7PuH7xxZCabsVfjpnE8nFbWSjrN5zvYljqXuH49GBngVMc1WqbH1BbrK0WvKuyB5kUMgKAwbZlQCj91A0e0ghxt8-CDmIavszdSz4APamlK1H38r8J0tWMllR6pW_l2TnTOuc1Pq5DQT7nfaTkFxteRyy374" 
                  />
                </div>
              </div>
              {/* Feature Card 3 */}
              <div className="group bg-surface-container-lowest p-8 md:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-outline-variant/10">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Performance Tracking</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  Deep analytics on your diagnostic accuracy, speed, and critical thinking progression across various medical specialties.
                </p>
                <div className="h-40 rounded-lg bg-surface-container overflow-hidden">
                  <img 
                    alt="Data visualization dashboard" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Vo7UDae0nT6_fV6dZ-7jD4ZFiB0xAzyfw_vQ3pw3kNkCTJfA8RqfZkbsyOaaWLsmZu1qvFChBIDBY0wi16RfgEk9ulIbFCKdmfMi6c6W3TZL7VTn12pJ9MaGkS8qM8inl4K05s3wwXz02jVkMmBZaMydNcbUsuzDtgvSzsBsB3MRk-PhmkpLcgmN4mC4k2pnhnHtVBbUcVw5Tb4kdlI8-mP9PAEfxkNWvcBNOt62G3cDPtPcZ0Kf2GAxNfV7WLM2f_GaeTAMZmc" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="clinical-gradient rounded-lg p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Ready to Master Clinical Medicine?</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
                Join over 50,000 medical students using AI to accelerate their clinical reasoning and pass their boards with confidence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-white text-primary px-12 py-5 rounded-full text-lg font-bold shadow-lg hover:bg-surface-container transition-all active:scale-95">
                  Get Started Free
                </button>
                <a className="text-white font-bold flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">
                  Schedule Institution Demo
                  <span className="material-symbols-outlined">chevron_right</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-20 px-6 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xl font-bold tracking-tighter text-slate-900">Medico Simulator</span>
              </div>
              <p className="text-on-surface-variant font-medium leading-relaxed max-w-xs">
                The world's most advanced AI clinical education platform. Built for the next generation of physicians.
              </p>
            </div>
            <div>
              <h4 className="text-on-surface font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-on-surface-variant text-sm font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Simulations</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Quiz Engine</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Voice Lab</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-on-surface font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-on-surface-variant text-sm font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Medical Blog</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-on-surface font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-on-surface-variant text-sm font-medium">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-on-surface font-bold mb-6">Connect</h4>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">share</span>
                </a>
                <a className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-on-surface-variant text-sm font-medium">© 2024 Medico Simulator AI. All rights reserved.</p>
            <div className="flex gap-8 text-sm font-medium text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                System Status: Operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
