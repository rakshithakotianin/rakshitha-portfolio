import React from 'react';
import { Brain, MessageSquare, Users, Zap, Compass, Clock, HeartHandshake } from 'lucide-react';
import { softSkillsData } from '../data/portfolio';

const softSkillIcons: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-violet-400" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-blue-400" />,
  Users: <Users className="w-5 h-5 text-cyan-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Compass: <Compass className="w-5 h-5 text-emerald-400" />,
  Clock: <Clock className="w-5 h-5 text-indigo-400" />,
};

export const SoftSkills: React.FC = () => {
  return (
    <section id="soft-skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#090d16]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5 text-blue-400" />
            Interpersonal & Professional Attributes
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Soft Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Work habits and communication traits that foster productive team dynamics and effective execution.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mt-3" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {softSkillsData.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 card-glow hover:border-slate-700 transition-all duration-200 flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shrink-0 mt-0.5">
                {softSkillIcons[skill.iconName] || <Brain className="w-5 h-5 text-violet-400" />}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-100 mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
