'use client';

import React, { useState, useMemo } from 'react';
import { PRACTICE_AREAS, PracticeArea } from '@/lib/lawfirm-data';
import { Search, ArrowRight, X, Scale, FileText, Briefcase, Landmark, ShieldAlert, ArrowUpRight } from 'lucide-react';

interface PracticeAreasSectionProps {
  onSelectPracticeArea?: (area: PracticeArea) => void;
}

export function PracticeAreasSection({ onSelectPracticeArea }: PracticeAreasSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalArea, setActiveModalArea] = useState<PracticeArea | null>(null);

  const categories = [
    'All',
    'Dispute & Litigation',
    'Corporate & Commercial',
    'Regulatory & IP',
    'Private Client & Property',
  ];

  const filteredAreas = useMemo(() => {
    return PRACTICE_AREAS.filter((area) => {
      const matchesCategory = selectedCategory === 'All' || area.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        area.title.toLowerCase().includes(q) ||
        area.summary.toLowerCase().includes(q) ||
        area.description.toLowerCase().includes(q) ||
        area.keyMatters.some((matter) => matter.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquire = (area: PracticeArea) => {
    setActiveModalArea(null);
    if (onSelectPracticeArea) {
      onSelectPracticeArea(area);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Comprehensive Legal Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Practice Areas
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Lexway maintains a full-service litigation and advisory practice. Our lawyers appear regularly before the
            Supreme Court, High Courts, Civil Courts, and Specialized Tribunals across 28 distinct legal disciplines.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Interactive Category Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 border border-stone-300 self-start">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? PRACTICE_AREAS.length
                    : PRACTICE_AREAS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                      selectedCategory === cat
                        ? 'bg-[#003865] text-white shadow-xs'
                        : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] tabular-nums ${selectedCategory === cat ? 'text-[#D49B1F]' : 'text-stone-400'}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search practice area or matter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-stone-300 focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] text-stone-900 placeholder:text-stone-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Quick Active Search/Filter Metadata */}
          <div className="text-xs text-stone-500 flex items-center gap-2">
            <span>Showing {filteredAreas.length} of {PRACTICE_AREAS.length} practice areas</span>
            {searchQuery && (
              <>
                <span>·</span>
                <span>Filtered by &ldquo;{searchQuery}&rdquo;</span>
                <button onClick={() => setSearchQuery('')} className="text-[#004B87] underline hover:text-stone-900">
                  Clear
                </button>
              </>
            )}
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAreas.map((area, idx) => (
            <div
              key={area.id}
              className="group bg-white border border-stone-300 p-6 flex flex-col justify-between hover:border-[#003865] hover:shadow-sm transition-all duration-200"
            >
              <div className="space-y-3">
                {/* Clean unboxed category kicker with human editorial numbering */}
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span className="font-mono text-stone-400 tabular-nums">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="text-stone-500 font-medium">{area.category}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#003865] transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                  {area.summary}
                </p>

                {/* Key matter badges / list */}
                <div className="pt-2 border-t border-stone-100 space-y-1">
                  <div className="text-[10px] uppercase tracking-wider text-stone-400 font-semibold">
                    Core Matters
                  </div>
                  <ul className="text-[11px] text-stone-700 space-y-0.5">
                    {area.keyMatters.slice(0, 2).map((item, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-1.5 truncate">
                        <span className="w-1 h-1 bg-[#D49B1F]"></span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-5 mt-4 border-t border-stone-200 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalArea(area)}
                  className="text-xs font-semibold uppercase tracking-wider text-[#003865] hover:text-[#D49B1F] flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => handleInquire(area)}
                  className="text-[11px] text-stone-500 hover:text-stone-900 underline"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Area Detail Modal */}
        {activeModalArea && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FDFBF7] border border-stone-400 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setActiveModalArea(null)}
                className="absolute right-5 top-5 p-1.5 text-stone-400 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-widest text-[#003865] font-semibold">
                    {activeModalArea.category} · Practice Discipline
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                    {activeModalArea.title}
                  </h3>
                </div>

                <div className="w-12 h-[2px] bg-[#D49B1F]"></div>

                <div className="text-sm text-stone-700 leading-relaxed space-y-3 font-light">
                  <p>{activeModalArea.description}</p>
                </div>

                <div className="p-4 bg-stone-100 border border-stone-300 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                    Representative Matters &amp; Court Proceedings
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                    {activeModalArea.keyMatters.map((matter, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#003865] shrink-0 mt-1.5"></span>
                        <span>{matter}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer CTAs */}
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-stone-500">
                    Chambers: 141/1, Lane 10, Block B, SMCHS, Karachi
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => setActiveModalArea(null)}
                      className="w-1/2 sm:w-auto px-4 py-2.5 text-xs text-stone-700 hover:bg-stone-200 border border-stone-300 font-medium uppercase tracking-wider"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleInquire(activeModalArea)}
                      className="w-1/2 sm:w-auto px-5 py-2.5 bg-[#003865] hover:bg-[#002244] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Inquire About This Area</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D49B1F]" />
                    </button>
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
