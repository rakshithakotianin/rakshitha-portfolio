import React from 'react';
import { Compass, Languages, Check, Sparkles } from 'lucide-react';
import { interestsData, languagesData } from '../data/portfolio';

export const Interests: React.FC = () => {
  return (
    <section id="interests-languages" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#0b0f17]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Interests Column (7 cols) */}
          <div className="md:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 card-glow">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-lg bg-violet-950/60 border border-violet-800/40">
                <Compass className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Interests & Passions
                </h3>
                <p className="text-xs text-slate-400">
                  Areas of enthusiastic exploration and ongoing curiosity
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {interestsData.map((interest, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-violet-500/30 transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Known Column (5 cols) */}
          <div className="md:col-span-5 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 card-glow">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-800/40">
                <Languages className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  Languages Known
                </h3>
                <p className="text-xs text-slate-400">
                  Linguistic background for daily & professional interaction
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {languagesData.map((language) => (
                <div
                  key={language}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/40 border border-slate-700/50"
                >
                  <span className="text-sm font-medium text-slate-200">
                    {language}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                    <Check className="w-3.5 h-3.5" />
                    <span>Proficient</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 font-mono mt-4 text-center">
              *Listed without arbitrary ratings in line with resume source data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
