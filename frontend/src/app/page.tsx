'use client';

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { ArrowRight, Brain, Heart, Wind, GraduationCap, ChevronRight, Zap, Shield, Microscope } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import NeuralHero from "@/components/visuals/NeuralHero";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out"
      });

      gsap.from(".bento-item", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#f8f9ff] selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-left z-10 hero-content">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-indigo text-xs font-semibold text-primary mb-8 clinical-shadow">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="tracking-[0.2em] uppercase">The Neural Observatory</span>
            </div>
            
            <h1 className="text-6xl lg:text-[7rem] font-black mb-8 leading-[0.9] tracking-tighter text-on-surface">
              Precision <br />
              <span className="text-primary italic">Clinical</span> Intelligence.
            </h1>
            
            <p className="text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed font-medium">
              Step into a high-fidelity simulation environment where AI insights and interactive 3D anatomy converge for the next generation of medical specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/register" className="neural-pulse px-10 py-5 rounded-2xl font-bold text-white flex items-center justify-center group transition-transform hover:scale-105">
                Begin Simulation <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/login" className="px-10 py-5 rounded-2xl font-bold text-primary glass-indigo hover:bg-[#3525cd]/5 transition-all flex items-center justify-center">
                Access Telemetry
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 h-[700px] w-full relative">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <NeuralHero />
            </Canvas>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoItem 
            icon={<span className="material-symbols-outlined text-4xl text-primary">psychology</span>}
            title="Neural Insights"
            description="AI-driven feedback loops that adapt to your unique diagnostic trajectory in real-time."
            className="md:col-span-2 bg-[#ffffff] clinical-shadow"
          />
          <BentoItem 
             icon={<span className="material-symbols-outlined text-4xl text-primary">cardiology</span>}
            title="Live Telemetry"
            description="Simulated vital signs across pulmonary and cardiac systems."
            className="bg-[#eff4ff]"
          />
          <BentoItem 
             icon={<span className="material-symbols-outlined text-4xl text-primary">microscope</span>}
            title="Precision Training"
            description="High-fidelity case studies."
            className="bg-[#eff4ff]"
          />
          <BentoItem 
             icon={<span className="material-symbols-outlined text-4xl text-primary">shield_health</span>}
            title="Clinical Safety"
            description="Risk-free environment for complex procedural training."
            className="md:col-span-2 bg-[#ffffff] clinical-shadow"
          />
        </div>
      </section>
    </div>
  );
}

function BentoItem({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
  return (
    <div className={`bento-item p-10 rounded-[2.5rem] group border border-transparent hover:border-primary/10 transition-all duration-500 ${className}`}>
      <div className="mb-8 p-4 rounded-2xl bg-[#f8f9ff] inline-block group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-3xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed font-semibold text-lg opacity-70">
        {description}
      </p>
    </div>
  );
}
