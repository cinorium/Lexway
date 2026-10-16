'use client';

import React, { useState } from 'react';
import { REPORTED_CASES, ReportedCase } from '@/lib/lawfirm-data';
import { Scale, FileText, ExternalLink, Download, CheckCircle2, X, ArrowRight } from 'lucide-react';

export function CaseLawUpdatesSection() {
  const [selectedCase, setSelectedCase] = useState<ReportedCase | null>(null);

  return (
    <section id="reported-cases" className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Judicial Precedents &amp; Updates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Reported Cases &amp; Public Interest Litigation
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Lexway lawyers are expert advocates and barristers with numerous cases reported in official law journals of Pakistan.
            Our litigation record reflects both commercial victories and defense of the public interest.
          </p>
        </div>

        {/* Two Landmark Case Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {REPORTED_CASES.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white border border-stone-300 p-8 flex flex-col justify-between hover:border-[#003865] hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-stone-200">
                  <span className="text-[#003865] font-mono font-semibold uppercase tracking-wider text-[11px]">
                    {caseItem.citation}
                  </span>
                  <span className="text-stone-500 font-mono text-[11px]">
                    {caseItem.forum}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-stone-900 leading-snug">
                  {caseItem.title}
                </h3>

                {/* Lead Attorney */}
                <div className="text-xs text-[#004B87] font-medium flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#D49B1F]" />
                  <span>Lead Counsel: {caseItem.leadAttorney}</span>
                </div>

                {/* Brief Summary */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {caseItem.summary}
                </p>

                {/* Relief Highlight Box */}
                <div className="p-4 bg-stone-50 border border-stone-200 text-xs text-stone-800 space-y-1">
                  <div className="font-semibold text-[#003865] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B1F]" />
                    <span>Judicial Ruling &amp; Relief Granted</span>
                  </div>
                  <p className="text-stone-600 leading-normal">
                    {caseItem.reliefGranted}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCase(caseItem)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#003865] hover:text-[#D49B1F] flex items-center gap-1.5 transition-colors"
                >
                  <span>View Case Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {caseItem.externalLink ? (
                  <a
                    href={caseItem.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#004B87] hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Dawn News Report</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedCase(caseItem)}
                    className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 font-mono"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#D49B1F]" />
                    <span>{caseItem.pdfTag}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Case Narrative Modal */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FDFBF7] border border-stone-400 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute right-5 top-5 p-1.5 text-stone-400 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-[#003865] font-mono font-semibold">
                    {selectedCase.citation} · {selectedCase.forum}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                    {selectedCase.title}
                  </h3>
                  <div className="text-xs text-[#004B87] font-medium pt-1">
                    Representation: {selectedCase.leadAttorney}
                  </div>
                </div>

                <div className="w-12 h-[2px] bg-[#D49B1F]"></div>

                {/* Full narrative */}
                <div className="text-sm text-stone-800 leading-relaxed font-light whitespace-pre-line space-y-3">
                  {selectedCase.fullNarrative}
                </div>

                {/* Outcome summary */}
                <div className="p-4 bg-white border border-stone-300 space-y-1.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                    Precedent Outcome &amp; Significance
                  </h4>
                  <p className="text-xs text-stone-600 leading-normal">
                    {selectedCase.reliefGranted}
                  </p>
                </div>

                {/* Modal footer */}
                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <span className="text-xs text-stone-500">
                    Lexway Law Firm Litigation Chamber
                  </span>
                  <button
                    onClick={() => setSelectedCase(null)}
                    className="px-5 py-2 bg-[#003865] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#002244]"
                  >
                    Close Case Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
