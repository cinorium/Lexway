import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lexway Law Firm | Premier Litigation & Corporate Chambers, Karachi',
  description: 'Established in 1992, Lexway is one of Pakistan\'s leading litigation and premier corporate law firms, advising in cross-border transactions and representing clients before the Supreme Court, High Courts, and Tribunals.',
  keywords: [
    'Lexway Law Firm',
    'Law Firm Karachi',
    'Advocate Supreme Court Pakistan',
    'Corporate Law Firm Pakistan',
    'Farhat Ullah',
    'Mohammad Ramish Farhat',
    'Litigation Lawyers Karachi',
    'Customs Appellate Tribunal',
    'High Court of Sindh',
  ],
  authors: [{ name: 'Lexway Law Firm' }],
  openGraph: {
    title: 'Lexway Law Firm | Premier Litigation & Corporate Law Firm',
    description: 'Established in 1992, Lexway is one of Pakistan\'s leading litigation and corporate law firms, handling high-stakes courtroom disputes and commercial transactions.',
    type: 'website',
    locale: 'en_PK',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lexway Law Firm | Leading Litigation & Corporate Law Firm',
    description: 'Premier law firm in Karachi, Pakistan. Over three decades of advocacy before the Supreme Court, High Courts, and Tribunals.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#FDFBF7] text-[#1c1917] antialiased selection:bg-[#C58F1D] selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
