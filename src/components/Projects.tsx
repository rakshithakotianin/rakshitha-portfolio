import React, { useState } from 'react';
import { Sparkles, Layers, ArrowUpRight, Github, CheckCircle2, Clock, Info, ExternalLink, X } from 'lucide-react';
import { projectsData } from '../data/portfolio';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#090d16]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            Practical Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Applied problem-solving spanning AI-driven lecture transcription and relational database systems.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto mt-3" />
        </div>

        {/* 2 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => {
            const isOngoing = project.status === 'Ongoing';

            return (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between card-glow relative group hover:border-violet-500/40"
              >
                <div>
                  {/* Top Status & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-mono ${
                        isOngoing
                          ? 'bg-amber-950/40 text-amber-300 border border-amber-800/40'
                          : 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40'
                      }`}
                    >
                      {isOngoing ? (
                        <Clock className="w-3.5 h-3.5 text-amber-400" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                      {project.statusBadge}
                    </span>

                    <span className="text-xs text-slate-500 font-mono">
                      {isOngoing ? 'In Progress' : 'Database Project'}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-violet-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-slate-300/90 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                      Key Capabilities & Architecture
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {project.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                            tech.type === 'confirmed'
                              ? 'bg-slate-800 text-slate-200 border border-slate-700'
                              : 'bg-violet-950/30 text-violet-300 border border-violet-900/40'
                          }`}
                          title={
                            tech.type === 'confirmed'
                              ? 'Confirmed implementation technology'
                              : 'Planned / Relevant architectural technology'
                          }
                        >
                          {tech.name}
                          {tech.type === 'planned' && (
                            <span className="text-[10px] ml-1 text-violet-400 font-sans italic opacity-75">
                              (planned)
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        View Source Code
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors"
                        title="Repository link status"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source Code (Status)
                      </button>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 transition-colors"
                      >
                        Live Demo
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 font-medium"
                  >
                    <span>Architecture Details</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0f1422] border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                Project Information
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Implementation & Link Status
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.notes || 'In line with portfolio standards, links are shown only when verified repositories or deployments are made publicly accessible.'}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Documented Capabilities
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedProject.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
