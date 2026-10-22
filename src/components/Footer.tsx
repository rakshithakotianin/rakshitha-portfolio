import React from 'react';
import { ArrowUp, Linkedin, Mail, Heart } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

const footerNavLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a10] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-850">
          {/* Identity */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                RK
              </span>
              <span className="text-base font-bold text-white font-heading">
                Rakshitha Kotian
              </span>
            </a>
            <p className="text-xs text-slate-400 mt-1">
              Aspiring Software Developer | AI & ML Student
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            {footerNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={contactInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Email"
              title="Send an email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-violet-600/30 text-slate-300 hover:text-violet-300 transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
          <p>
            © {new Date().getFullYear()} Rakshitha Kotian. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Mangaluru, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
