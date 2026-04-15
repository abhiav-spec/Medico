import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup success
    navigate('/dashboard');
  };

  return (
    <div className="bg-background font-inter text-on-background min-h-screen flex flex-col">
      {/* Abstract Decorative Background Layers */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary-container/20 blur-[120px] pointer-events-none"></div>

      <main className="flex-grow flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        <div className="w-full max-w-xl grid grid-cols-1 gap-8 z-10">
          {/* Logo Branding */}
          <div className="flex flex-col items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-container rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <span className="material-symbols-outlined text-white text-4xl">clinical_notes</span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-on-surface">Medico Simulator</h1>
            <p className="text-on-surface-variant font-medium tracking-tight mt-1">Start Your Clinical Journey</p>
          </div>

          {/* Sign Up Card */}
          <div className="bg-surface-container-lowest p-8 md:p-12 rounded-lg shadow-[0_20px_40px_-12px_rgba(11,28,48,0.08)] border border-outline-variant/10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-on-surface mb-2">Create Account</h2>
              <p className="text-on-surface-variant text-sm">Join the next generation of medical diagnostic training.</p>
            </div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-on-surface-variant uppercase mb-2 ml-1" htmlFor="full_name">Full Name</label>
                <div className="relative group">
                  <input className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-DEFAULT focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all duration-200" id="full_name" name="full_name" placeholder="John Doe" type="text" />
                </div>
              </div>
              {/* Email Field */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-on-surface-variant uppercase mb-2 ml-1" htmlFor="email">Medical Email</label>
                <div className="relative group">
                  <input className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-DEFAULT focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all duration-200" id="email" name="email" placeholder="doctor@institution.edu" type="email" />
                </div>
              </div>
              {/* Password Field */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-on-surface-variant uppercase mb-2 ml-1" htmlFor="password">Password</label>
                <div className="relative group">
                  <input className="w-full px-4 py-3.5 bg-surface-container-low border-none rounded-DEFAULT focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all duration-200" id="password" name="password" placeholder="••••••••" type="password" />
                </div>
                <p className="text-[10px] text-outline mt-2 px-1">Must contain at least 8 characters including a number.</p>
              </div>
              {/* Terms & Conditions */}
              <div className="flex items-start space-x-3 pt-2">
                <input className="mt-1 w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-surface-container-low cursor-pointer" id="terms" name="terms" type="checkbox" />
                <label className="text-sm text-on-surface-variant leading-tight cursor-pointer" htmlFor="terms">
                  I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a> regarding academic data.
                </label>
              </div>
              {/* Primary Action */}
              <button className="w-full mt-6 py-4 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-DEFAULT shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]" type="submit">
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8 flex items-center justify-center">
              <div className="w-full h-[1px] bg-slate-200"></div>
              <span className="absolute px-4 bg-white text-slate-400 text-[10px] font-bold tracking-widest uppercase">Or Register With</span>
            </div>

            {/* Social Logins - Apple Button Removed per User request */}
            <div className="grid grid-cols-1 gap-4">
              <button className="flex items-center justify-center space-x-3 py-3 px-4 bg-surface-container-low hover:bg-surface-container-high rounded-DEFAULT transition-colors duration-200 border border-outline-variant/5">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                <span className="text-sm font-semibold text-on-surface">Continue with Google</span>
              </button>
            </div>

            <div className="mt-10 text-center">
              <p className="text-on-surface-variant text-sm">
                Already have an account? 
                <Link to="/login" className="text-primary font-bold hover:text-primary-container transition-colors ml-1">Sign In</Link>
              </p>
            </div>
          </div>

          {/* Side Visual - Medical Professional */}
          <div className="hidden lg:block fixed right-0 top-0 h-screen w-1/3 overflow-hidden pointer-events-none">
            <img 
              alt="Medical Professional" 
              className="w-full h-full object-cover grayscale opacity-20 mix-blend-multiply" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLMocYUdziPFPo4aZHsWS5qi_AO3HLiwJf283lxyiMZVAY4gHYh-Yq0HeWGzOYLoOYtqhj8B3DQ4LWwjzIYTMqqpFl6vbNT-9E0-nmKl05Ls_fzEtl7k4gW2IAG-tds-pfpbnU1BR7gWKuJ4R5B9aMsao0uCKbgWPhJwWGjQpCxgXBKhh8QX5Q0RCghCEoTUJG8CDA8GmyTUxJWjnEU81kdkpRunfRDkBfk4BOH3ydI3hQXAsDcNBtQzdUCl2XnC7vtK3B-0d56HM" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background via-background/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12 right-12 space-y-4">
              <div className="inline-flex items-center px-3 py-1 bg-secondary-container rounded-full text-on-secondary-container text-[10px] font-bold uppercase tracking-widest">
                New Feature
              </div>
              <h3 className="text-2xl font-black text-on-surface leading-tight">Master Complex Clinical Diagnoses with AI-driven Scenarios.</h3>
              <p className="text-on-surface-variant text-sm max-w-sm">Join over 5,000+ medical students refining their clinical decision-making skills in a safe, simulated environment.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Segment */}
      <footer className="w-full py-8 bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500">
          <p className="text-xs font-normal tracking-wide">© 2024 Medico AI Clinical Curator. All professional rights reserved.</p>
          <div className="flex space-x-6">
            <a className="text-xs font-normal hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-xs font-normal hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-normal hover:text-primary transition-colors" href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Signup;
