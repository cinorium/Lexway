'use client';

import React, { useState, useMemo } from 'react';
import { STATUTES_LIBRARY, StatuteItem } from '@/lib/lawfirm-data';
import { BookOpen, Search, Star, X, Scale } from 'lucide-react';

export function StatutesSection() {
  const [selectedLetter, setSelectedLetter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const letters = ['ALL', '⭐', 'A', 'B', 'C', 'D', 'G', 'L', 'N', 'P', 'Q', 'S'];

  const filteredStatutes = useMemo(() => {
    return STATUTES_LIBRARY.filter((item) => {
      // Letter filter
      let matchesLetter = true;
      if (selectedLetter === '⭐') {
        matchesLetter = !!item.isStarred;
      } else if (selectedLetter !== 'ALL') {
        matchesLetter = item.name.toUpperCase().startsWith(selectedLetter);
      }

      // Search filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.year.includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keyNote.toLowerCase().includes(q);

      return matchesLetter && matchesSearch;
    });
  }, [selectedLetter, searchQuery]);

  return (
    <section id="statutes" className="py-20 lg:py-28 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Pakistani Legislative Repository</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Statutes &amp; Legal Framework
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            A curated reference library of the Constitution of the Islamic Republic of Pakistan, key Parliamentary Acts,
            Ordinances, and procedural codes currently in force and actively argued by Lexway advocates.
          </p>
        </div>

        {/* Letter Rail & Search Input */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Letter Bar */}
            <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 border border-stone-300">
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedLetter === letter
                      ? 'bg-[#003865] text-white shadow-xs'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  {letter === '⭐' ? '⭐ Starred Codes' : letter}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search statute by title or year..."
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

          <div className="text-xs text-stone-500">
            Showing {filteredStatutes.length} statutory references
          </div>
        </div>

        {/* Statutes List Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStatutes.map((statute, idx) => (
            <div
              key={idx}
              className={`p-5 border transition-all duration-200 flex flex-col justify-between ${
                statute.isStarred
                  ? 'bg-white border-[#D49B1F]/60 shadow-xs ring-1 ring-[#D49B1F]/20'
                  : 'bg-white border-stone-200 hover:border-stone-400'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-stone-500 font-medium">{statute.category}</span>
                  <span className="font-mono text-stone-600 font-semibold tabular-nums">
                    {statute.year}
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  {statute.isStarred && (
                    <Star className="w-4 h-4 text-[#D49B1F] fill-[#D49B1F] shrink-0 mt-1" />
                  )}
                  <h3 className="font-serif font-bold text-lg text-stone-900 leading-snug">
                    {statute.name}
                  </h3>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {statute.keyNote}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>In force in Pakistan</span>
                <span className="text-[#003865] font-sans font-medium">Lexway Practice</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
