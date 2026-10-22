import React from 'react';
import {
  Code,
  Brain,
  Wrench,
  Sparkles,
  MapPin,
  Target,
} from 'lucide-react';
import { aboutData, contactInfo } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#090d16]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Background &amp; Direction
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            About Me
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative Summary & Objectives */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-heading">
                Aspiring Developer with a Passion for AI &amp; Practical Systems
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {aboutData.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-300">
                    {p}
                  </p>
                ))}
              </div>

              {/* Focus Tags */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-md bg-violet-950/40 text-violet-300 border border-violet-800">
                  AI &amp; ML Student
                </span>

                <span className="px-3 py-1 rounded-md bg-blue-950/40 text-blue-300 border border-blue-900">
                  Python &amp; SQL
                </span>

                <span className="px-3 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700">
                  Data Structures &amp; Algorithms
                </span>

                <span className="px-3 py-1 rounded-md bg-emerald-950/40 text-emerald-300 border border-emerald-900">
                  Problem Solver
                </span>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {aboutData.quickStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3.5 text-center"
                >
                  <p className="text-xs text-slate-400 font-mono mb-1">
                    {stat.label}
                  </p>

                  <p className="text-sm sm:text-base font-semibold text-slate-100">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Core Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 px-1">
              Core Principles &amp; Strengths
            </h4>

            {aboutData.pillars.map((pillar, idx) => {
              const icons = [
                <Code key="code" className="w-5 h-5 text-blue-400" />,
                <Brain key="brain" className="w-5 h-5 text-violet-400" />,
                <Wrench key="wrench" className="w-5 h-5 text-indigo-400" />,
                <Target key="target" className="w-5 h-5 text-emerald-400" />,
              ];

              return (
                <div
                  key={pillar.title}
                  className="bg-slate-900/50 hover:bg-slate-900/80 border border-slate-800 hover:border-violet-500/30 rounded-xl p-4 transition-all duration-200 card-glow"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0">
                      {icons[idx]}
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-slate-100 mb-1">
                        {pillar.title}
                      </h5>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Direct Contact Teaser */}
            <div className="bg-gradient-to-r from-violet-950/30 to-blue-950/30 border border-violet-900/30 rounded-xl p-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Based in {contactInfo.location}</span>
              </div>

              <a
                href="#contact"
                className="font-medium text-violet-400 hover:text-violet-300 underline underline-offset-4"
              >
                Let&apos;s Connect &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};