import React from 'react';
import { Terminal, Code, Database, GitFork, Boxes, Server, Cpu, Layout, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolio';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-4 h-4 text-blue-400" />,
  Code: <Code className="w-4 h-4 text-cyan-400" />,
  Database: <Database className="w-4 h-4 text-emerald-400" />,
  GitFork: <GitFork className="w-4 h-4 text-violet-400" />,
  Boxes: <Boxes className="w-4 h-4 text-indigo-400" />,
  Server: <Server className="w-4 h-4 text-sky-400" />,
  Cpu: <Cpu className="w-4 h-4 text-purple-400" />,
  Layout: <Layout className="w-4 h-4 text-amber-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#0b0f17]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Core foundations across programming languages, computer science principles, and artificial intelligence.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mx-auto mt-3" />
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between card-glow relative group"
            >
              <div>
                {/* Category Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold font-heading text-slate-100 group-hover:text-violet-300 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="space-y-2.5 mt-6">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-600 transition-all duration-150"
                    >
                      <div className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-700/60 shrink-0">
                        {skill.icon ? iconMap[skill.icon] || <Code className="w-4 h-4 text-slate-400" /> : <Code className="w-4 h-4 text-slate-400" />}
                      </div>
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>{category.skills.length} competencies</span>
                <span className="text-slate-600">•</span>
                <span>Active Learning</span>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            Skills are organized by conceptual depth and academic application rather than arbitrary self-ratings. Actively expanding knowledge through coursework, personal labs, and practical implementation.
          </p>
        </div>
      </div>
    </section>
  );
};
