import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login success
    navigate('/dashboard');
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col selection:bg-primary-container selection:text-white font-inter">
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Ambient Decorative Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container/10 blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-[1200px] grid md:grid-cols-2 bg-surface-container-lowest rounded-lg shadow-[0_20px_40px_-12px_rgba(11,28,48,0.08)] overflow-hidden relative z-10">
          
          {/* Left Side: Visual Branding/Editorial */}
          <div className="hidden md:flex flex-col justify-between p-12 bg-surface-container-low relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">medical_services</span>
                </div>
                <span className="text-xl font-bold tracking-tighter text-on-surface">Medico Simulator</span>
              </div>
              <h1 className="text-5xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-6">
                Precision in <span className="text-primary">Clinical</span> Decision Making.
              </h1>
              <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
                Access the world's most advanced diagnostic environment. Refine your expertise with AI-curated medical simulations.
              </p>
            </div>

            <div className="relative z-10 mt-12">
              <div className="p-6 rounded-xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img 
                    alt="Dr. Sarah Chen" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdGkHi75k27soD0cZwBwL1gYNMN9QxDhZ4zCilZT9NZz6Dtjv6xsJzcOKxuVgOHOlpbBgEORClE9x6JWO69L_Qc2I67Ics5J6XhrV65bQjSMWBHXTMnEyW7gDXjvKUY-Kyi0_-YHrEUZQ5EpKTM5HZYvQckJPgK-xaFFgqw_mguFnn81y4ImEmNmS2VwNMDW5s-HZRFYM1pqGoPwVKZNiawdXBAS1Bvp-pmruGcaHJshtN126AYEPXpwmEuhpMZqs9uONEFgqedFM" 
                  />
                </div>
                <div>
                  <p className="text-on-surface text-sm font-medium italic">"This simulator transformed my approach to complex differential diagnosis. It's the gold standard for clinical readiness."</p>
                  <p className="text-on-surface-variant text-xs mt-2">— Dr. Sarah Chen, Chief Resident</p>
                </div>
              </div>
            </div>

            {/* Abstract medical pattern background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img 
                alt="Medical data visualization" 
                className="w-full h-full object-cover grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE_mUGjh7YCsqQczFn4BZDTZoHyiKWu669zeHm3zSbSlf3f0MWYbirrabW1chZRtCqDsoHAA0481J7jXsql-44D1QXV1pJyvOonglj6uOBrjy7XFJuth_8MwZcUl9L_e0G8oVQiwQ6pxcKwox5L1hTqggJvVrcUA64k0nAlaBcrZlWmuVaWrI_uZmru-t5NbOeCwYmc7AUbjtN5nMo2BppTqNhsCE_I_7wgDRFEopcT1yCaOWnXYQta8Lr5CzeWxn-fc6UK6NihS0" 
              />
            </div>
          </div>

          {/* Right Side: Sign-In Form */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-on-surface tracking-tight mb-2">Welcome back</h2>
                <p className="text-on-surface-variant">Please enter your professional credentials to continue.</p>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant tracking-wide px-1" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">mail</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 rounded-DEFAULT focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline" id="email" name="email" placeholder="dr.smith@hospital.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-semibold text-on-surface-variant tracking-wide" htmlFor="password">Password</label>
                    <a className="text-xs font-medium text-primary hover:text-primary-container transition-colors" href="#">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">lock</span>
                    <input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-0 rounded-DEFAULT focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline" id="password" name="password" placeholder="••••••••" type="password" />
                  </div>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-DEFAULT shadow-lg hover:shadow-primary/20 hover:opacity-95 transition-all active:scale-[0.98]" type="submit">
                  Sign In
                </button>
              </form>

              <div className="relative my-10">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-outline-variant/30"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest">
                  <span className="bg-surface-container-lowest px-4 text-outline font-medium">Or continue with</span>
                </div>
              </div>

              {/* Social Logins - Apple Button Removed per User request */}
              <div className="grid grid-cols-1 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high text-on-surface font-medium rounded-DEFAULT transition-colors">
                  <img alt="Google" className="w-5 h-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbnBlNiejKK5CIIGbZCo68G1Aq0td6duZmYbsTv3C5pvqvfBSJ6RxrOWdJS_keFVOoS1gAvixjdPz53DlwVLI-AfgjJezZrC0oKcuMFRnO0lvgsFprhnC1ikix_f4PgoNC69X0MajxbD7bowWsHBShsXJ2v0ycGlCGU3TGIp-4dTqlWjStna7ytB4L09rXznwUw1SkANiFgv1F0KglKzLBSd-IyPdt8Z6_Ng96fq9CEKgsnLhYbe5k67XUZI1X0RlgrdLWbfni5t4" />
                  <span className="text-sm">Continue with Google</span>
                </button>
              </div>

              <p className="mt-10 text-center text-sm text-on-surface-variant">
                Don't have a professional account? 
                <Link to="/signup" className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1">Request Access</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Segment */}
      <footer className="w-full py-8 bg-background border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs font-normal text-on-surface-variant tracking-wide">© 2024 Medico AI Clinical Curator. All professional rights reserved.</span>
          <div className="flex gap-6">
            <a className="text-xs font-normal text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-xs font-normal text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-normal text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
