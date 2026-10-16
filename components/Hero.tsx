'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Scale, Award, BookOpen, Clock } from 'lucide-react';
import { FIRM_DETAILS } from '@/lib/lawfirm-data';

export function Hero({ onOpenConsultation }: { onOpenConsultation?: () => void }) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
              <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
              <span>Karachi Chambers · Established 1992</span>
            </div>

            {/* Headline with controlled balance and typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-bold text-stone-900 tracking-tight leading-[1.12]">
              Pakistan’s Leading Litigation &amp; Premier Corporate Law Firm
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-light">
              With an illustrious history spanning over three decades, Lexway has been serving clients across a broad
              spectrum of legal issues. From our office in Karachi—the capital of Pakistan’s commercial activity—our
              advocates represent clients in complex courtroom litigation, landmark reported appeals, and major
              cross-border transactions.
            </p>

            {/* Courtroom / Trust Highlight Box */}
            <div className="p-4 bg-stone-100/80 border border-stone-300 text-sm text-stone-800 space-y-1">
              <p className="font-semibold text-[#003865] flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#D49B1F]" />
                Trusted by Judges, Corporate Leaders &amp; Fellow Advocates
              </p>
              <p className="text-xs text-stone-600 leading-normal">
                Recognizing that high-stakes litigation is never routine, our chambers are built to adapt to any
                adversary and battle for our clients before the Supreme Court, High Courts, and Special Tribunals.
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (onOpenConsultation) onOpenConsultation();
                  else scrollToSection('contact');
                }}
                className="px-6 py-3.5 bg-[#003865] hover:bg-[#002244] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center gap-2 group"
              >
                <span>Request Legal Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#D49B1F] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('practice-areas')}
                className="px-6 py-3.5 bg-transparent hover:bg-stone-200/60 text-stone-900 border border-stone-400 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Explore 28 Practice Areas
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex items-center gap-4 text-xs text-stone-600">
              <span className="font-medium text-stone-900">Direct Inquiries:</span>
              <a href="tel:+923127776666" className="text-[#004B87] hover:underline font-mono">
                +92 312 777 6666
              </a>
              <span className="text-stone-300">|</span>
              <a href="mailto:contact@lexway.pk" className="text-[#004B87] hover:underline">
                contact@lexway.pk
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Law Chambers Image */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative architectural hairline frame */}
              <div className="absolute -inset-2 border border-[#D49B1F]/30 pointer-events-none hidden sm:block"></div>

              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-200 shadow-md border border-stone-300">
                <Image
                  src="/images/lexway_hero_chamber_1792147902839.jpg"
                  alt="Lexway Law Firm Partner Office and Law Library Chambers"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim overlay with caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-transparent p-5 text-white">
                  <div className="text-[11px] font-mono tracking-wider uppercase text-[#D49B1F] font-semibold">
                    Chambers at Sindhi Muslim Society, Karachi
                  </div>
                  <p className="text-xs text-stone-200 mt-1 font-light">
                    Founded in 1992 by Mr. Farhat Ullah, Advocate Supreme Court of Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Operational KPI Strip in Full-Width Row Below */}
        <div className="mt-14 pt-10 border-t border-stone-300 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#003865] tabular-nums">
              1992
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              Founding Year
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Over three decades of courtroom advocacy &amp; corporate advisory.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#003865]">
              Supreme &amp; High Courts
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              Superior Jurisdiction
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Admitted to the Supreme Court of Pakistan and High Courts across provinces.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#003865] tabular-nums">
              28+ Disciplines
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              Comprehensive Scope
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              From commercial litigation and tax to custom appeals, family &amp; IP law.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#003865]">
              Reported Precedents
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-900">
              Judicial Legacy
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Precedent-setting judgments published in Pakistan’s official law journals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
