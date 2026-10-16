import React from 'react';
import { ASSOCIATIONS } from '@/lib/lawfirm-data';
import { ShieldCheck, Trees, Scale, CheckCircle2 } from 'lucide-react';

export function AssociationsSection() {
  return (
    <section className="py-20 lg:py-26 bg-[#F8F5EE] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Civic Commitment &amp; Pro Bono</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Our Associations &amp; Pro Bono Advocacy
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Lexway dedicates substantial resources and courtroom advocacy to public interest causes, defending human rights
            and environmental preservation on a pro bono basis.
          </p>
        </div>

        {/* Association Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ASSOCIATIONS.map((assoc) => (
            <div
              key={assoc.id}
              className="bg-white border border-stone-300 p-8 flex flex-col justify-between hover:border-[#003865] hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs pb-3 border-b border-stone-200">
                  <span className="text-[#003865] font-semibold uppercase tracking-wider text-[11px]">
                    {assoc.type}
                  </span>
                  <span className="font-serif font-bold text-stone-400 text-sm">
                    {assoc.shortName}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-stone-100 border border-stone-300 text-[#003865]">
                    {assoc.id === 'hrcp' ? (
                      <Scale className="w-6 h-6 text-[#D49B1F]" />
                    ) : (
                      <Trees className="w-6 h-6 text-[#D49B1F]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">
                      {assoc.name}
                    </h3>
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      {assoc.shortName} Institutional Partnership
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                  {assoc.overview}
                </p>

                <div className="p-4 bg-stone-50 border border-stone-200 space-y-1.5 text-xs">
                  <div className="font-semibold text-stone-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D49B1F]" />
                    <span>Mandate &amp; Scope</span>
                  </div>
                  <p className="text-stone-600 leading-normal">
                    {assoc.mandate}
                  </p>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="font-semibold text-[#003865] uppercase tracking-wider text-[11px]">
                    Lexway Pro Bono Contribution:
                  </span>
                  <p className="text-stone-700 leading-relaxed font-light">
                    {assoc.proBonoWork}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500 font-medium">
                <span>Superior Courts &amp; Tribunals Representation</span>
                <span className="text-[#003865]">Pro Bono Publico</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
