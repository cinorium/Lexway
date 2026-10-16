import React from 'react';
import Link from 'next/link';
import { LexwayLogo } from './LexwayLogo';
import { FIRM_DETAILS } from '@/lib/lawfirm-data';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001D38] text-stone-300 border-t-2 border-[#D49B1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-stone-800">
          {/* Brand & Ethos */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <LexwayLogo variant="light" size="sm" />
            </div>

            <p className="text-xs text-stone-300 leading-relaxed font-light max-w-sm">
              Established in 1992, Lexway is one of Pakistan’s leading litigation and premier corporate law firms,
              serving clients before the Supreme Court of Pakistan, High Courts, and Special Tribunals.
            </p>

            <div className="text-xs text-stone-400 font-serif italic border-l-2 border-[#D49B1F] pl-3 py-1">
              &ldquo;No litigation challenge is too tough for a team of talented, hard-working, committed lawyers.&rdquo;
            </div>

            {/* Social Links List */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2">
                Official Channels
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300">
                {FIRM_DETAILS.socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D49B1F] transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Practice &amp; Firm
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <a href="#about" className="hover:text-[#D49B1F] transition-colors">
                  About Lexway &amp; Heritage
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#D49B1F] transition-colors">
                  28 Practice Disciplines
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#D49B1F] transition-colors">
                  Attorneys &amp; Advocates
                </a>
              </li>
              <li>
                <a href="#reported-cases" className="hover:text-[#D49B1F] transition-colors">
                  Reported Judgments (SBLR)
                </a>
              </li>
              <li>
                <a href="#statutes" className="hover:text-[#D49B1F] transition-colors">
                  Pakistani Statutes Library
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D49B1F] transition-colors">
                  Chambers Appointments
                </a>
              </li>
            </ul>
          </div>

          {/* Karachi Chambers Address */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-stone-200">
              Karachi Chambers
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D49B1F] shrink-0 mt-0.5" />
                <span>
                  141/1, Lane 10, Block B, Sindhi Muslim Cooperative Housing Society (SMCHS), Off Shahrah-e-Faisal, Karachi, Pakistan.
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D49B1F] shrink-0" />
                <a href="tel:+923127776666" className="hover:text-white font-mono">
                  +92 312 777 6666
                </a>
                <span className="text-stone-600">|</span>
                <a href="tel:+923452130835" className="hover:text-white font-mono">
                  +92 345 213 0835
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#D49B1F] shrink-0" />
                <span>Intl Desk: <a href="tel:+18143215449" className="hover:text-white font-mono">+1 (814) 321-5449</a> (EST)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D49B1F] shrink-0" />
                <a href="mailto:contact@lexway.pk" className="hover:text-white font-mono">
                  contact@lexway.pk
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Bar Council Legal Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div className="space-y-1 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Lexway Law Firm. All rights reserved. Practicing law in Pakistan since 1992.
            </p>
            <p className="text-stone-500 max-w-2xl font-light">
              Disclaimer: The information provided on this website is for general informational and educational purposes only and does not constitute formal legal advice or create an attorney-client relationship under the rules of the Pakistan Bar Council.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-300 hover:text-[#D49B1F] transition-colors uppercase tracking-wider text-xs whitespace-nowrap shrink-0"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
