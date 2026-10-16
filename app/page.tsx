'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { PracticeAreasSection } from '@/components/PracticeAreasSection';
import { TeamSection } from '@/components/TeamSection';
import { CaseLawUpdatesSection } from '@/components/CaseLawUpdatesSection';
import { AssociationsSection } from '@/components/AssociationsSection';
import { StatutesSection } from '@/components/StatutesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { PracticeArea } from '@/lib/lawfirm-data';

export default function HomePage() {
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<string>('');

  const handleSelectPracticeArea = (area: PracticeArea) => {
    setSelectedPracticeArea(area.title);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1c1917] selection:bg-[#C58F1D] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* About Lexway Section */}
        <AboutSection />

        {/* 28 Practice Areas Directory */}
        <PracticeAreasSection onSelectPracticeArea={handleSelectPracticeArea} />

        {/* Our Attorneys and Counsel Bios */}
        <TeamSection />

        {/* Reported Cases & PIL Updates */}
        <CaseLawUpdatesSection />

        {/* Associations: HRCP & SEMPWA Pro Bono */}
        <AssociationsSection />

        {/* Statutes and Pakistan Legal Framework Library */}
        <StatutesSection />

        {/* Contact and Confidential Consultation Booking */}
        <ContactSection prefilledPracticeArea={selectedPracticeArea} />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
