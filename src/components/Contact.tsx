import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/portfolio';

export const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  // Form state for composing mailto message
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: '',
  });

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.senderName || 'Portfolio Visitor'}`
    );
    const bodyContent = `Name: ${formData.senderName}\nEmail: ${formData.senderEmail}\n\nMessage:\n${formData.message}`;
    const mailtoBody = encodeURIComponent(bodyContent);

    window.location.href = `mailto:${contactInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#090d16]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            I'm interested in learning, building useful technology, and exploring opportunities in software development and AI/ML. Feel free to reach out to discuss projects or potential opportunities.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 card-glow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-violet-950/60 border border-violet-800/40 text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Email Address</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-violet-300 transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedType === 'email' && (
                <p className="text-xs text-emerald-400 font-mono mt-2 ml-12">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Phone Card */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 card-glow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/40 text-blue-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Phone / Mobile</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-blue-300 transition-colors"
                    >
                      {contactInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(contactInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copiedType === 'phone' && (
                <p className="text-xs text-emerald-400 font-mono mt-2 ml-12">
                  ✓ Phone number copied to clipboard!
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-5 card-glow">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-400">Professional Network</p>
                    <a
                      href={contactInfo.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-indigo-300 transition-colors flex items-center gap-1.5"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 text-indigo-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900/40 border border-slate-800/70 rounded-2xl p-5 flex items-center gap-3.5">
              <div className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400">Location</p>
                <p className="text-sm font-medium text-slate-200">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 sm:p-8 card-glow">
            <h3 className="text-xl font-bold font-heading text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Compose your note below. Clicking send will open your default email app pre-populated with your details.
            </p>

            <form onSubmit={handleComposeEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="senderName" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    required
                    value={formData.senderName}
                    onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="senderEmail" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="senderEmail"
                    required
                    value={formData.senderEmail}
                    onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note, feedback, or role details here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-sm focus:border-violet-500 focus:ring-1 focus:ring-violet-500 outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-violet-600/25 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Email App</span>
                </button>

                <span className="text-[11px] text-slate-500 font-mono">
                  Direct client-side mailto link • No spam or data harvesting
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
