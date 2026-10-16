'use client';

import React, { useState } from 'react';
import { ATTORNEYS, Attorney } from '@/lib/lawfirm-data';
import { Mail, GraduationCap, Scale, X, ArrowRight, Award, MapPin } from 'lucide-react';

export function TeamSection() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedAttorney, setSelectedAttorney] = useState<Attorney | null>(null);

  const filters = [
    { label: 'All Legal Counsel (10)', value: 'All' },
    { label: 'Partners', value: 'Partners' },
    { label: 'Advocates High Court', value: 'High Court' },
    { label: 'Advocates & Support', value: 'Advocates & Support' },
  ];

  const filteredAttorneys = ATTORNEYS.filter((attorney) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Partners') return attorney.role.includes('Partner');
    if (activeFilter === 'High Court') return attorney.title.includes('High Court') && !attorney.role.includes('Partner');
    if (activeFilter === 'Advocates & Support') return !attorney.title.includes('High Court') && !attorney.role.includes('Partner');
    return true;
  });

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F8F5EE] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Legal Counsel &amp; Chambers Staff</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Attorneys &amp; Advocates
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            At the core of Lexway lies our team of dedicated advocates and staff who take a unique approach to the practice of law.
            We focus on our clients’ needs and believe in being approachable, responsive, effective, and trustworthy.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-stone-300 mb-10 self-start w-fit">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === f.value
                  ? 'bg-[#003865] text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttorneys.map((attorney) => (
            <div
              key={attorney.id}
              className="bg-white border border-stone-300 p-6 sm:p-7 flex flex-col justify-between hover:border-[#003865] hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Role and Experience Header */}
                <div className="flex items-center justify-between text-xs pb-3 border-b border-stone-200">
                  <span className="text-[#003865] font-semibold uppercase tracking-wider text-[11px]">
                    {attorney.role}
                  </span>
                  {attorney.experience && (
                    <span className="font-mono text-stone-500 tabular-nums text-[11px]">
                      {attorney.experience}
                    </span>
                  )}
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-[#003865]">
                    {attorney.name}
                  </h3>
                  <p className="text-xs text-[#004B87] mt-1 font-medium leading-snug">
                    {attorney.title}
                  </p>
                </div>

                {/* Education bullet */}
                <div className="text-xs text-stone-600 space-y-1">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#D49B1F] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{attorney.education[0]}</span>
                  </div>
                </div>

                {/* Brief excerpt */}
                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 font-light">
                  {attorney.bio[0]}
                </p>

                {/* Core Specialization tags - unboxed text with typographic bullet separator */}
                <div className="pt-2">
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold mb-1">
                    Areas of Practice
                  </div>
                  <div className="text-xs text-stone-700 leading-relaxed">
                    {attorney.specializations.slice(0, 3).map((spec, sIdx) => (
                      <span key={sIdx}>
                        {spec}
                        {sIdx < 2 && <span className="text-stone-300 mx-1.5">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-5 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedAttorney(attorney)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#003865] hover:text-[#D49B1F] flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`mailto:${attorney.contactEmail}?subject=Inquiry%20for%20${encodeURIComponent(attorney.name)}`}
                  className="p-1.5 text-stone-400 hover:text-[#003865] transition-colors"
                  aria-label={`Email ${attorney.name}`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Attorney Biography Modal */}
        {selectedAttorney && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FDFBF7] border border-stone-400 max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
              <button
                onClick={() => setSelectedAttorney(null)}
                className="absolute right-5 top-5 p-1.5 text-stone-400 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Modal Header */}
                <div className="space-y-2 border-b border-stone-200 pb-5">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#003865] font-semibold">
                    <span>{selectedAttorney.role}</span>
                    {selectedAttorney.experience && (
                      <>
                        <span>·</span>
                        <span className="font-mono text-stone-500">{selectedAttorney.experience} Professional Practice</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
                    {selectedAttorney.name}
                  </h3>
                  <p className="text-sm font-medium text-[#004B87]">
                    {selectedAttorney.title}
                  </p>
                </div>

                {/* Education & Credentials */}
                <div className="p-4 bg-white border border-stone-300 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#D49B1F]" />
                    Academic Credentials &amp; Bar Admissions
                  </h4>
                  <ul className="text-xs text-stone-700 space-y-1">
                    {selectedAttorney.education.map((edu, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#003865] shrink-0 mt-1.5"></span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedAttorney.barAdmissions && (
                    <div className="pt-2 border-t border-stone-100 text-xs text-stone-600">
                      <span className="font-semibold text-stone-800">Bar Admissions: </span>
                      {selectedAttorney.barAdmissions.join(' · ')}
                    </div>
                  )}
                </div>

                {/* Detailed Narrative */}
                <div className="space-y-3 text-sm text-stone-800 leading-relaxed font-light">
                  {selectedAttorney.bio.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>

                {/* Specializations & Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-stone-100 border border-stone-200 space-y-2">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                      Key Areas of Specialization
                    </h5>
                    <ul className="text-xs text-stone-700 space-y-1">
                      {selectedAttorney.specializations.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 bg-[#D49B1F]"></span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-stone-100 border border-stone-200 space-y-2">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                      Notable Highlights &amp; Cases
                    </h5>
                    <ul className="text-xs text-stone-700 space-y-1">
                      {selectedAttorney.notableHighlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 bg-[#003865] shrink-0 mt-1.5"></span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-500 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#D49B1F]" />
                    Chambers: Sindhi Muslim Society, Karachi
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedAttorney(null)}
                      className="px-4 py-2.5 text-xs text-stone-700 hover:bg-stone-200 border border-stone-300 font-medium uppercase tracking-wider"
                    >
                      Close
                    </button>
                    <a
                      href={`mailto:${selectedAttorney.contactEmail}?subject=Legal%20Consultation%20with%20${encodeURIComponent(selectedAttorney.name)}`}
                      className="px-5 py-2.5 bg-[#003865] hover:bg-[#002244] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#D49B1F]" />
                      <span>Contact Attorney</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
