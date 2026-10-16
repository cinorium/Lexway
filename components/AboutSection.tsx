import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Scale, Award, Users, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8F5EE] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Firm Heritage &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            About Lexway Law Firm
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Built upon the principle that no litigation challenge is too tough for a team of talented, hard-working,
            and deeply committed advocates.
          </p>
        </div>

        {/* Main Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative with Drop Cap and Quote */}
          <div className="lg:col-span-7 space-y-6 text-stone-800 text-base leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#003865]">
              Lexway was founded in 1992 upon the founding principle that no litigation challenge is too tough for a team of talented, hard-working, committed lawyers. Recognizing that high-stakes litigation is never routine, our partners built a law firm designed to adapt to any challenge, match up against any adversary, and approach any problem with a strategy to win.
            </p>

            <p>
              They succeeded. Lexway is no ordinary litigation law firm. It attracts legal talent from the national stage. The law firm has the unique ability to champion the rights of a wide range of clients in almost any setting, against any opponent, regardless of the pressure or the stakes.
            </p>

            <p>
              Lexway has earned a reputation as a law firm of skilled trial and appellate lawyers who will battle for their clients in any type of case — civil or criminal, and in any forum: the <strong>Supreme Court of Pakistan</strong>, the <strong>High Courts</strong>, the <strong>District Courts</strong>, and <strong>Specialized Tribunals</strong>.
            </p>

            {/* Curatorial Pull Quote */}
            <div className="py-6 px-8 my-8 border-y border-[#D49B1F]/40 bg-stone-100/90 text-stone-900">
              <blockquote className="font-serif italic text-lg sm:text-xl text-stone-900 leading-snug">
                &ldquo;Perhaps the best indication that Lexway has stayed true to its founding principle is the fact that fellow lawyers and judges so often come to the law firm for help when they themselves need representation.&rdquo;
              </blockquote>
              <div className="mt-3 text-xs uppercase tracking-wider font-semibold text-[#003865]">
                — The Lexway Standard of Advocacy
              </div>
            </div>

            <p>
              Lexway attracts clients as diverse and exceptional as the law firm’s skills. The law firm’s flexibility allows it to handle matters ranging from the fulfilling legal requirements of a company that is just setting up, high-stake corporate deals, and litigation of complicated business disputes, to the prosecution of claims on behalf of deprived or persecuted persons, to the representation of business persons, professionals, and corporations targeted by criminal investigations.
            </p>

            <p className="font-medium text-stone-900">
              Whatever your legal crisis, Lexway responds with an approach carefully tailored to your needs, backed by three decades of trial-tested strategy.
            </p>

            {/* Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#D49B1F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-stone-900">Trial &amp; Appellate Tenacity</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Uncompromising preparation and vigorous cross-examination in trial and appellate forums.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white border border-stone-200">
                <CheckCircle2 className="w-5 h-5 text-[#D49B1F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-stone-900">Corporate &amp; Fiscal Advisory</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Masters of company law, tax strategy, M&amp;A due diligence, and regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Imagery & Chamber Badges */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image 1: High Court Architecture */}
            <div className="relative border border-stone-300 bg-white p-2 shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <Image
                  src="/images/karachi_court_exterior_1792147902909.jpg"
                  alt="Pakistan Judicial Architecture & High Court of Sindh jurisdiction"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-xs text-stone-600 flex items-center justify-between">
                <span className="font-serif italic">Superior Courts Advocacy</span>
                <span className="font-mono text-[11px] text-[#003865] uppercase">Karachi · Islamabad · Lahore</span>
              </div>
            </div>

            {/* Image 2: Advocates in Consultation */}
            <div className="relative border border-stone-300 bg-white p-2 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <Image
                  src="/images/legal_advocates_consultation_1792147902994.jpg"
                  alt="Lexway Advocates & Counsel reviewing legal briefs"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 text-xs text-stone-600 flex items-center justify-between">
                <span className="font-serif italic">Strategic Case Preparation</span>
                <span className="font-mono text-[11px] text-[#003865] uppercase">Chamber Briefing</span>
              </div>
            </div>

            {/* Institutional Endorsement Card */}
            <div className="p-5 bg-[#002244] text-white space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#D49B1F] font-semibold">
                Bar Council &amp; Judicial Recognition
              </div>
              <h3 className="font-serif text-lg font-medium text-stone-100">
                30+ Years of Undefeated Dedication
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed font-light">
                Lexway is proudly associated with the Human Rights Commission of Pakistan (HRCP) and SEMPWA, offering
                pro bono advocacy in fundamental constitutional rights and environmental preservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
