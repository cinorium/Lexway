'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LexwayLogo } from './LexwayLogo';
import { FIRM_DETAILS } from '@/lib/lawfirm-data';
import { Phone, Mail, MapPin, Menu, X, ArrowUpRight, Scale } from 'lucide-react';

export function Navbar({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Practice Areas', href: '#practice-areas' },
    { label: 'Our Team', href: '#team' },
    { label: 'Reported Cases', href: '#reported-cases' },
    { label: 'Statutes', href: '#statutes' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleConsultationClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Operational Utility Ribbon */}
      <div className="bg-[#002244] text-[#E2E8F0] text-xs py-2 px-4 border-b border-[#003865] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#D49B1F]" />
              Sindhi Muslim Housing Society, Off Shahrah-e-Faisal, Karachi
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-300">Est. 1992 · Over Three Decades of Advocacy</span>
          </div>

          <div className="flex items-center gap-6 font-medium">
            <a
              href="tel:+923127776666"
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#D49B1F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D49B1F]" />
              +92 312 777 6666
            </a>
            <span className="text-stone-400">·</span>
            <a
              href="mailto:contact@lexway.pk"
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#D49B1F] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#D49B1F]" />
              contact@lexway.pk
            </a>
            <span className="text-stone-400">·</span>
            <span className="text-stone-400 text-[11px]">
              Intl: <span className="text-stone-300">+1 (814) 321-5449</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar adhering to Top Bar Contract */}
      <header
        className={`sticky top-0 z-50 transition-all duration-200 bg-[#FDFBF7]/95 backdrop-blur-md border-b ${
          isScrolled ? 'border-stone-300 shadow-sm py-2.5' : 'border-stone-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Scales */}
          <Link
            href="/"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 focus:outline-none"
            aria-label="Lexway Law Firm Home"
          >
            <LexwayLogo size="sm" className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap shrink-0 hover:text-[#004B87] transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#D49B1F] after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={handleConsultationClick}
              className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#003865] hover:bg-[#002244] border border-[#003865] rounded-none shadow-sm transition-all duration-200 flex items-center gap-2"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D49B1F]" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleConsultationClick}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#003865] uppercase tracking-wider"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-[#004B87] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FDFBF7] border-b border-stone-300 shadow-xl z-40 px-6 py-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 text-base font-medium text-stone-800">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-stone-200 hover:text-[#004B87] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-stone-400 text-xs">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={handleConsultationClick}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#003865] hover:bg-[#002244]"
              >
                Schedule Legal Consultation
              </button>
              <div className="text-xs text-stone-600 space-y-1 pt-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D49B1F]" /> +92 312 777 6666 | +92 345 213 0835
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#D49B1F]" /> contact@lexway.pk
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
