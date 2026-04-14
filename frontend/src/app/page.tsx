'use client';

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Heart, Wind, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/30 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <Activity className="w-3 h-3" /> AI-Powered Simulation
            </span>
            <h1 className="text-5xl md:text-7xl font-bold heading-font tracking-tight text-slate-900 mb-6">
              Master Medicine <br />
              <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Intelligently.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience the next generation of medical learning. 
              AI-generated simulations personalized to your level, 
              interactive organ study, and voice-guided explanations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/register" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 group"
              >
                Start Learning Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold heading-font text-slate-900 mb-4">Focus on Every Detail</h2>
            <p className="text-slate-500">Select an organ to start your customized simulation session</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Heart className="w-6 h-6 text-pink-500" />}
              title="Cardiovascular"
              description="Master cardiology with simulations on heart anatomy, physiology, and pathology."
              color="pink"
            />
            <FeatureCard 
              icon={<Brain className="w-6 h-6 text-purple-500" />}
              title="Neurology"
              description="Deep dive into the nervous system, brain functions, and neurological conditions."
              color="purple"
            />
            <FeatureCard 
              icon={<Wind className="w-6 h-6 text-blue-500" />}
              title="Pulmonology"
              description="Study the respiratory system, complex lung diseases, and ventilation mechanics."
              color="blue"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  const colorMap: any = {
    pink: "bg-pink-50 border-pink-100 group-hover:bg-pink-100",
    purple: "bg-purple-50 border-purple-100 group-hover:bg-purple-100",
    blue: "bg-blue-50 border-blue-100 group-hover:bg-blue-100"
  };

  return (
    <div className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${colorMap[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold heading-font text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-6">{description}</p>
      <Link href="/login" className="flex items-center gap-2 text-sm font-bold text-blue-600">
        Start Module <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

import { Activity } from "lucide-react";
