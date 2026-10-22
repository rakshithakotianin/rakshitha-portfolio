import React from 'react';
import { ArrowRight, Code2, Database, Sparkles, MapPin, Linkedin, Terminal, ChevronDown } from 'lucide-react';
import { heroData, contactInfo } from '../data/portfolio';
import { SplineHero } from './SplineHero';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Subtle Tech Elements & Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      
      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Subtle floating ambient light blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        {/* Two-column Responsive Grid: Introduction & Spline 3D Scene */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Introduction, Profile, CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono">{contactInfo.availability}</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="hidden sm:flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-slate-400" />
                {contactInfo.location}
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-heading text-white mb-4">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {heroData.name}
              </span>
            </h1>

            {/* Professional Headline */}
            <div className="inline-block px-4 py-1.5 rounded-lg bg-violet-950/40 border border-violet-800/40 mb-5">
              <p className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-violet-300 via-indigo-200 to-blue-300 bg-clip-text text-transparent">
                {heroData.title}
              </p>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-xl leading-relaxed mb-6">
              "{heroData.tagline}"
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800/80">
                <Terminal className="w-3.5 h-3.5 text-blue-400" /> Python & C
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800/80">
                <Database className="w-3.5 h-3.5 text-indigo-400" /> SQL & Relational Databases
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800/80">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" /> AI & ML Foundations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800/80">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" /> DSA & OOP
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 mb-4 w-full sm:w-auto">
              {/* View My Projects Button */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-violet-600/25 hover:shadow-violet-600/35 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* About Me Button */}
              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-medium text-sm sm:text-base border border-slate-700/80 hover:border-violet-500/40 transition-all duration-200"
              >
                <span>About Me</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-medium text-sm sm:text-base border border-slate-700/80 hover:border-blue-500/40 transition-all duration-200"
              >
                <span>Contact Me</span>
              </button>

              {/* LinkedIn Icon & Link */}
              <a
                href={contactInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/90 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700/80 hover:border-blue-500/40 transition-all duration-200"
                aria-label="Rakshitha Kotian LinkedIn Profile"
                title="Visit LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Spline 3D Scene */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <SplineHero />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollTo('about')}
            className="text-slate-500 hover:text-slate-300 transition-colors animate-bounce flex flex-col items-center gap-1 text-xs font-mono"
            aria-label="Scroll down to About section"
          >
            <span>Explore</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
