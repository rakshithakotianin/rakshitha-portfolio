import React from 'react';
import { GraduationCap, Award, Calendar, Building, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#0b0f17]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Academic milestones and achievements from secondary schooling through engineering.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto mt-3" />
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 space-y-10 before:absolute before:left-2 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-blue-500 before:to-slate-800">
          {educationData.map((edu, index) => {
            const isCurrent = edu.period.includes('Present');

            return (
              <div key={edu.id} className="relative group">
                {/* Timeline Node Point */}
                <div
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${
                    isCurrent
                      ? 'bg-violet-600 border-violet-300 shadow-md shadow-violet-500/40'
                      : 'bg-slate-900 border-slate-600'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isCurrent ? 'bg-white' : 'bg-slate-400'
                    }`}
                  />
                </div>

                {/* Card Container */}
                <div className="bg-slate-900/60 border border-slate-800/90 hover:border-violet-500/40 rounded-2xl p-6 sm:p-7 card-glow">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Degree / Level */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-white">
                          {edu.degree}
                        </h3>
                        {isCurrent && (
                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-950/60 text-violet-300 border border-violet-800/50">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Branch & Specialization if available */}
                      {edu.branch && (
                        <p className="text-sm font-medium text-violet-300 mt-1">
                          {edu.branch}
                          {edu.specialization && (
                            <span className="text-slate-300">
                              {' '}• Specialization in {edu.specialization}
                            </span>
                          )}
                        </p>
                      )}

                      {/* Institution & Board */}
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 mt-2 font-mono">
                        <span className="flex items-center gap-1 text-slate-300">
                          <Building className="w-3.5 h-3.5 text-slate-400" />
                          {edu.institution}
                        </span>
                        {edu.board && (
                          <span className="text-slate-400">
                            ({edu.board})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Grade Metric Badge */}
                    <div className="shrink-0 sm:text-right">
                      <div className="inline-block sm:block px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-center">
                        <p className="text-[11px] font-mono text-slate-400">
                          {edu.gradeLabel}
                        </p>
                        <p className="text-base sm:text-lg font-bold font-mono text-violet-300">
                          {edu.gradeValue}
                        </p>
                      </div>
                      <p className="text-[11px] text-slate-500 font-mono mt-1.5 flex items-center justify-start sm:justify-end gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  {edu.highlights && edu.highlights.length > 0 && (
                    <ul className="mt-4 pt-3 border-t border-slate-800/60 space-y-1.5 text-xs text-slate-300/90">
                      {edu.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400/80 mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
