'use client';

import React, { useState } from 'react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '@/lib/lawfirm-data';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Globe,
  MessageSquare,
  Share2,
} from 'lucide-react';

interface ContactSectionProps {
  prefilledPracticeArea?: string;
}

export function ContactSection({ prefilledPracticeArea = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: prefilledPracticeArea || 'Business & Corporate Litigation',
    isUrgent: false,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your full name, email, and phone number.');
      return;
    }

    setErrorMsg('');
    const randomRef = 'LXW-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      practiceArea: 'Business & Corporate Litigation',
      isUrgent: false,
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8F5EE] border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#003865] uppercase">
            <span className="w-8 h-[1.5px] bg-[#D49B1F]"></span>
            <span>Chambers &amp; Appointments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Contact &amp; Consult With Lexway
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed">
            Reach our Karachi chambers for confidential legal representation, appellate counsel, or corporate advisory.
            Appointments may be scheduled by phone, email, or through the inquiry form below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Directory & Office Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Address Card */}
            <div className="p-6 bg-white border border-stone-300 shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-stone-100 border border-stone-300 text-[#003865] shrink-0">
                  <MapPin className="w-5 h-5 text-[#D49B1F]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-stone-900">
                    Karachi Chambers
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    141/1, Lane 10, Block B,<br />
                    Sindhi Muslim Cooperative Housing Society (SMCHS),<br />
                    Off Shahrah-e-Faisal, Karachi, Pakistan.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-200 text-xs text-stone-500 font-mono">
                Centrally located near Karachi commercial axis &amp; High Court access corridor
              </div>
            </div>

            {/* Direct Lines Card */}
            <div className="p-6 bg-white border border-stone-300 shadow-xs space-y-5">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#003865] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#D49B1F]" />
                  Direct Telephone Lines
                </h4>

                <div className="space-y-2 text-sm">
                  {FIRM_DETAILS.phones.map((phone, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-stone-100 last:border-0">
                      <span className="text-stone-600 text-xs">{phone.label}:</span>
                      <a
                        href={phone.href}
                        className="font-mono font-semibold text-[#003865] hover:text-[#D49B1F] transition-colors"
                      >
                        {phone.number}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* International Desk */}
              <div className="pt-4 border-t border-stone-200 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#003865]" />
                    {FIRM_DETAILS.internationalLine.label}
                  </span>
                  <a
                    href={FIRM_DETAILS.internationalLine.href}
                    className="font-mono font-semibold text-[#003865] hover:text-[#D49B1F]"
                  >
                    {FIRM_DETAILS.internationalLine.number}
                  </a>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-light">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{FIRM_DETAILS.internationalLine.hours}</span>
                </div>
              </div>

              {/* Official Email */}
              <div className="pt-4 border-t border-stone-200 space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#003865]" />
                  Confidential Communications
                </div>
                <a
                  href={`mailto:${FIRM_DETAILS.email}`}
                  className="text-sm font-mono text-[#004B87] hover:underline block"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>
            </div>

            {/* Official Social Links Card */}
            <div className="p-6 bg-white border border-stone-300 shadow-xs space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#003865] flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#D49B1F]" />
                Official Firm Channels &amp; Social Media
              </h4>
              <p className="text-xs text-stone-600 font-light">
                Connect with Lexway on verified professional channels for judicial bulletins, legal awareness, and publications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {FIRM_DETAILS.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-xs text-stone-800 transition-colors"
                  >
                    <span className="font-medium">{social.name}</span>
                    <span className="text-[#004B87] text-[11px]">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Legal Consultation Form */}
          <div className="lg:col-span-7 bg-white border border-stone-300 p-8 sm:p-10 shadow-sm relative">
            <div className="space-y-2 mb-6">
              <div className="text-xs uppercase tracking-widest text-[#003865] font-semibold">
                Client Intake &amp; Case Assessment
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                Request a Confidential Consultation
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-light">
                Communications sent via this portal are treated with strict professional confidentiality by Lexway advocates.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-stone-50 border border-stone-300 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 bg-[#003865] text-[#D49B1F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-2xl font-bold text-stone-900">
                    Consultation Request Received
                  </h4>
                  <p className="text-xs text-stone-600 font-mono">
                    Chambers Reference: <strong className="text-[#003865]">{referenceId}</strong>
                  </p>
                </div>

                <p className="text-sm text-stone-700 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. A partner or designated advocate from our litigation chamber will review your briefing and contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within one business day.
                </p>

                <div className="pt-4 border-t border-stone-200">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#003865] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#002244]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-stone-300 focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] text-stone-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. t.mehmood@company.pk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-stone-300 focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] text-stone-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-stone-300 focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] text-stone-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Practice Area / Subject
                    </label>
                    <select
                      value={formData.practiceArea}
                      onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-stone-300 focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] text-stone-900"
                    >
                      {PRACTICE_AREAS.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Urgent Matter Checkbox */}
                <div className="p-3.5 bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="urgentCase"
                    checked={formData.isUrgent}
                    onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded-none border-stone-400 text-[#003865] focus:ring-[#003865]"
                  />
                  <label htmlFor="urgentCase" className="text-xs text-stone-700 cursor-pointer">
                    <strong className="text-stone-900 font-semibold">Immediate Court Hearing / Urgent Relief:</strong> Check this if your case involves an impending arrest, stay order deadline, or court date within the next 48 hours.
                  </label>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                    Brief Statement of Legal Issue or Matter
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Summarize the core legal issue, adverse party (if any), court forum, or transaction details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FDFBF7] border border-stone-300 focus:outline-none focus:border-[#003865] focus:ring-1 focus:ring-[#003865] text-stone-900 resize-y"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-stone-500 font-light">
                    Protected by Attorney-Client Privilege upon engagement.
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 bg-[#003865] hover:bg-[#002244] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Consultation Request</span>
                    <Send className="w-3.5 h-3.5 text-[#D49B1F] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
