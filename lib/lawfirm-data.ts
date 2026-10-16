export interface Attorney {
  id: string;
  name: string;
  role: string;
  title: string;
  experience?: string;
  education: string[];
  bio: string[];
  specializations: string[];
  notableHighlights: string[];
  barAdmissions: string[];
  contactEmail: string;
  office: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  category: 'Dispute & Litigation' | 'Corporate & Commercial' | 'Regulatory & IP' | 'Private Client & Property';
  summary: string;
  description: string;
  keyMatters: string[];
}

export interface ReportedCase {
  id: string;
  title: string;
  citation: string;
  forum: string;
  date: string;
  leadAttorney: string;
  summary: string;
  reliefGranted: string;
  fullNarrative: string;
  pdfTag?: string;
  externalLink?: string;
}

export interface Association {
  id: string;
  name: string;
  shortName: string;
  type: string;
  overview: string;
  mandate: string;
  proBonoWork: string;
}

export interface StatuteItem {
  name: string;
  year: string;
  category: string;
  keyNote: string;
  isStarred?: boolean;
}

export const FIRM_DETAILS = {
  name: 'Lexway',
  fullName: 'Lexway Law Firm',
  tagline: 'Leading Litigation & Premier Corporate Law Firm',
  established: 1992,
  historyYears: '30+',
  city: 'Karachi, Pakistan',
  address: {
    street: '141/1, Lane 10, Block B',
    society: 'Sindhi Muslim Cooperative Housing Society',
    landmark: 'Off Shahrah-e-Faisal',
    city: 'Karachi',
    country: 'Pakistan',
  },
  phones: [
    { label: 'Direct Line', number: '+92 312 777 6666', href: 'tel:+923127776666' },
    { label: 'Chambers', number: '+92 345 213 0835', href: 'tel:+923452130835' },
  ],
  internationalLine: {
    label: 'International Inquiries',
    number: '+1 (814) 321-5449',
    href: 'tel:+18143215449',
    hours: 'Monday to Friday, 9:00 AM – 6:00 PM (EST)',
  },
  email: 'contact@lexway.pk',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/lexway-law-firm', label: 'Lexway on LinkedIn' },
    { name: 'X / Twitter', url: 'https://x.com/lexwaylaw', label: 'Follow @LexwayLaw' },
    { name: 'Facebook', url: 'https://www.facebook.com/LexwayLawChambers', label: 'Lexway Law Chambers' },
    { name: 'WhatsApp', url: 'https://wa.me/923127776666?text=Legal%20Inquiry%20for%20Lexway%20Law%20Firm', label: '+92 312 777 6666' },
    { name: 'YouTube', url: 'https://www.youtube.com/@lexwaylawfirm', label: 'Legal Awareness & Lectures' },
  ],
  ethos: 'No litigation challenge is too tough for a team of talented, hard-working, committed lawyers. High-stakes litigation is never routine.',
};

export const ATTORNEYS: Attorney[] = [
  {
    id: 'farhat-ullah',
    name: 'Mr. Farhat Ullah',
    role: 'Founding Partner',
    title: 'Advocate Supreme Court of Pakistan – Founding Partner',
    experience: '34+ Years',
    education: [
      'Degree in Law (LL.B.)',
      'Degree in Commerce (B.Com)',
      'Professionally Certified in Alternate Dispute Resolution (ADR)',
    ],
    bio: [
      'Mr. Farhat Ullah is the Senior Partner of the firm and has been leading Lexway since its foundation in 1992. He brings over three decades of high-caliber courtroom advocacy, having successfully represented major corporate entities, institutions, and individuals across Pakistan.',
      'His key areas of expertise and special interest are constitutional law, family law, and complex civil litigation. In addition to these core areas, Mr. Farhat Ullah regularly spearheads high-stakes multi-party litigation involving massive volumes of evidence and intricate legal and factual questions.',
      'He has conducted trials on a wide spectrum of matters, including shareholder disputes, tripartite engineering contracts, franchise agreements, company dissolution disputes, criminal litigation including pre-arrest bails, anti-terrorism, accountability/anti-corruption proceedings, and civil & fundamental rights petitions before Superior Courts.',
    ],
    specializations: [
      'Constitutional Law',
      'Supreme Court Litigation',
      'Complex Multi-Party Disputes',
      'Corporate & Shareholder Disputes',
      'Civil & Commercial Litigation',
      'Anti-Corruption & White Collar Defense',
      'Alternate Dispute Resolution',
    ],
    notableHighlights: [
      'Leading counsel in numerous precedent-setting cases reported in legal journals across Pakistan.',
      'Regularly sought by judges, fellow advocates, and prominent business leaders for counsel in high-stakes disputes.',
      'Extensive record in tripartite engineering arbitration, company restructuring disputes, and constitutional writs.',
    ],
    barAdmissions: [
      'Supreme Court of Pakistan',
      'High Court of Sindh',
      'Sindh Bar Council',
      'Supreme Court Bar Association (SCBA)',
    ],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'ramish-farhat',
    name: 'Mr. M. Ramish Farhat',
    role: 'Partner',
    title: 'Advocate High Court – Partner',
    experience: '12+ Years',
    education: [
      'Master of Laws (LL.M.) in Corporate & Commercial Law – The Pennsylvania State University (Penn State), USA',
      'Bachelor of Laws (LL.B. Hons) – University of London, United Kingdom',
      'Specialized Diploma in Taxation Law – Institute of Business Administration (IBA), Karachi',
    ],
    bio: [
      'Mr. Mohammad Ramish Farhat is a highly experienced legal professional and Partner at Lexway. He earned his Master of Laws (LL.M.) in Corporate and Commercial Law from The Pennsylvania State University and holds a Bachelor of Laws degree from the University of London, complemented by specialized taxation credentials from the Institute of Business Administration.',
      'With extensive experience in Corporate and Commercial Litigation, Mr. Farhat has established a distinguished career having represented blue-chip corporations, multinationals, and prominent trade businesses in both contentious and non-contentious matters.',
      'His practice spans Corporate & Commercial Litigation, Custom Law, Family, Rent, Intellectual Property, Labour & Service, Environmental, Constitutional, and Civil Law. He led the landmark victory before the Customs Appellate Tribunal in Brands Unlimited (Pvt.) Ltd (SBLR 2023 Tribunal 225).',
      'Known for his practical, analytical, and solution-oriented approach, Mr. Farhat is committed to delivering tailored legal strategies that effectively advance his clients’ commercial and legal interests.',
    ],
    specializations: [
      'Corporate & Commercial Litigation',
      'Customs & Tariff Valuation Appeals',
      'Constitutional & Administrative Writs',
      'Intellectual Property Protection',
      'Environmental Law & Public Interest Litigation',
      'Cross-Border Business Transactions',
      'Labour & Service Matters',
    ],
    notableHighlights: [
      'Lead counsel in reported judgment SBLR 2023 Tribunal 225, securing relief of PKR 11.06 Million and quashing arbitrary customs valuation orders.',
      'Lead attorney representing Citizens for Environment in High Court PIL published by Dawn Newspaper.',
      'Counsel for major commercial distributors, logistics enterprises, and multinational entities.',
    ],
    barAdmissions: [
      'High Court of Sindh',
      'Sindh Bar Council',
      'Karachi Bar Association',
    ],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'ajay-talreja',
    name: 'Mr. Ajay Talreja',
    role: 'Advocate High Court',
    title: 'Advocate High Court – Corporate & Taxation Specialist',
    experience: '30+ Years',
    education: [
      'Master of Business Administration (MBA) – Anglia Ruskin University, Cambridge, UK',
      'Bachelor of Laws (LL.B.) – University of Sindh',
      'Bachelor of Commerce (B.Com) – University of Sindh',
    ],
    bio: [
      'Mr. Ajay Talreja brings to the Firm over three decades of distinguished legal and corporate experience, continuing a multi-generational family tradition in the legal profession.',
      'He has previously been associated with prestigious corporate law firms and major enterprises where he handled complex corporate, commercial, and fiscal matters for companies in financial services, pharmaceuticals, automotive, and telecommunications.',
      'Mr. Talreja specializes in taxation and company law. He assists large corporations, SMEs, partnerships, sole proprietorships, and NGOs/NPOs in tax registration, statutory returns, tax consultancy, company incorporation, and trademark registrations.',
    ],
    specializations: [
      'Taxation & Fiscal Consultancy',
      'Company Law & Statutory Compliance',
      'Corporate Incorporation & Structuring',
      'Intellectual Property & Trademark Registration',
      'Pharmaceutical & Telecom Legal Advisory',
      'NGO / NPO Governance',
    ],
    notableHighlights: [
      'Over thirty years advising industrial and pharmaceutical giants on tax structuring and corporate compliance.',
      'Dual expertise in business administration (Cambridge, UK) and Pakistani corporate jurisprudence.',
    ],
    barAdmissions: ['High Court of Sindh', 'Sindh Bar Council', 'Karachi Bar Association'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'riasat-ali',
    name: 'Mr. Riasat Ali',
    role: 'Advocate High Court',
    title: 'Advocate High Court – Senior Litigator & Former Public Prosecutor',
    experience: '40+ Years',
    education: [
      'Bachelor of Laws (LL.B.)',
      'Former District Public Prosecutor, Karachi & High Court of Sindh',
    ],
    bio: [
      'Mr. Riasat Ali commands more than four decades of elite litigating experience representing both private clients and government bodies before diverse courts, tribunals, and dispute resolution forums.',
      'He previously served in the prestigious office of District Public Prosecutor in various judicial districts of Karachi, as well as representing the State in the High Court of Sindh.',
      'His prime area of practice is Criminal Law and White-Collar Defense. He specializes in arguing complex complaints, petitions, and miscellaneous applications, aggressive cross-examination of witnesses, defending white-collar investigations, banking offence trials, and securing quashments and acquittals.',
      'He has secured numerous landmark reliefs in High Court bail matters, quashing petitions under Section 561-A CrPC, and specialized banking tribunal defenses.',
    ],
    specializations: [
      'Criminal Defense & Trial Advocacy',
      'White-Collar Crime & Financial Investigations',
      'Banking Offences & Special Tribunals',
      'High Court Bail Petitions & Quashments',
      'Cross-Examination & Evidentiary Strategy',
      'Government & Regulatory Inquiries',
    ],
    notableHighlights: [
      'Over 40 years of courtroom presence across trial and appellate courts in Pakistan.',
      'Former District Public Prosecutor of Karachi with unmatched procedural expertise.',
    ],
    barAdmissions: ['High Court of Sindh', 'Sindh Bar Council', 'Karachi Bar Association'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'talat-shah',
    name: 'Mr. Talat H. Shah',
    role: 'Advocate High Court',
    title: 'Advocate High Court – Commercial & Family Law Specialist',
    experience: '30+ Years',
    education: [
      'Bachelor of Laws (LL.B.) – University of Karachi',
      'Bachelor of Science (B.Sc.)',
    ],
    bio: [
      'Mr. Syed Talat Hussain Shah brings to Lexway over three decades of legal practice, descending from a recognized family of legal practitioners.',
      'He has handled sophisticated corporate and commercial matters across financial services, pharmaceutical, automotive, and telecommunications sectors.',
      'Mr. Shah is renowned for managing complex, multi-million rupee commercial litigation. He also heads a premier private client practice in family jurisprudence, handling Divorce, Khula, Child Custody & Guardianship, Maintenance, Inheritance, and the issuance of Succession Certificates and Letters of Administration.',
    ],
    specializations: [
      'Family Law (Divorce, Khula, Custody, Maintenance)',
      'Succession Certificates & Letters of Administration',
      'Inheritance & Estate Distribution',
      'Large Sophisticated Commercial Litigation',
      'Automotive & Financial Services Advisory',
    ],
    notableHighlights: [
      '30+ years of dedicated service in high-conflict family law and estate administration.',
      'Extensive litigation record before High Courts and District Courts.',
    ],
    barAdmissions: ['High Court of Sindh', 'Sindh Bar Council', 'Karachi Bar Association'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'irfan-siddiqui',
    name: 'Mr. Irfan Siddiqui',
    role: 'Advocate High Court',
    title: 'Advocate High Court – Head of Contracts, Property & Conveyancing',
    experience: '20+ Years',
    education: [
      'Bachelor of Laws (LL.B.) – University of Karachi',
    ],
    bio: [
      'Mr. Irfan Siddiqui leads the Firm’s Contracts, Agreements, Legal Documentation, and Property & Conveyancing practice.',
      'His career spans transaction structuring, regulatory compliance analysis, taxation, property valuation, and real estate conveyancing for high-value properties.',
      'He possesses vast practical experience drafting and executing complex sale-purchase agreements, joint venture property contracts, and title transfers, maintaining seamless liaisons with local land administration authorities and the Office of the Registrar (T-Division).',
    ],
    specializations: [
      'Property Conveyancing & Real Estate Law',
      'Contracts Drafting & Transaction Structuring',
      'Title Verification & Due Diligence',
      'Sub-Registrar & T-Division Execution',
      'Commercial Lease & Joint Ventures',
    ],
    notableHighlights: [
      'Conducted title due diligence and transfers on premier commercial, industrial, and residential real estate throughout Karachi.',
    ],
    barAdmissions: ['High Court of Sindh', 'Sindh Bar Council', 'Karachi Bar Association'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'roman-khan',
    name: 'Mr. Muhammad Roman Khan',
    role: 'Advocate',
    title: 'Advocate – Family & Property Law Practice',
    experience: '5+ Years',
    education: [
      'Bachelor of Laws with Honours (LL.B. Hons) – Shaheed Zulfiqar Ali Bhutto University of Law (SZABUL)',
    ],
    bio: [
      'Mr. Muhammad Roman Khan holds an LL.B. (Hons) degree from the Shaheed Zulfiqar Ali Bhutto University of Law. He belongs to a distinguished family of jurists, with family members having served as Judge of the High Court of Sindh and elevated to the Supreme Court of Pakistan.',
      'Joining Lexway in August 2021, Roman focuses on Family Law and Property Law disputes, routinely representing clients in contentious custody battles, inheritance partition suits, succession filings, and real estate litigation.',
    ],
    specializations: [
      'Family Law, Custody & Guardianship',
      'Inheritance Disputes & Estate Distribution',
      'Property Litigation & Title Contests',
      'Succession & Letters of Administration',
    ],
    notableHighlights: [
      'Distinguished judicial lineage and moot court advocacy background.',
      'Dedicated member of Lexway litigation chamber since 2021.',
    ],
    barAdmissions: ['Sindh Bar Council', 'Karachi Bar Association'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'sahir-khan',
    name: 'Mr. Sahir Arif Khan',
    role: 'Advocate',
    title: 'Advocate – Corporate, Commercial & Regulatory Practice',
    experience: '3+ Years',
    education: [
      'Bachelor of Laws (LL.B.) – S.M. Law College',
      'Diploma in Taxation Law – Institute of Business Administration (IBA), Karachi',
    ],
    bio: [
      'Mr. Sahir Arif Khan is a skilled legal professional with focused experience in corporate and commercial law, labour and employment regulations, intellectual property, and regulatory compliance.',
      'He drafts complex commercial contracts, provides day-to-day counsel to corporate clients, and assists in preparing suits, constitutional petitions, and written statements before trial and appellate forums.',
      'Known for his meticulous research and sharp analytical drafting, Sahir creates tailored legal strategies that safeguard corporate clients from exposure.',
    ],
    specializations: [
      'Corporate & Commercial Law',
      'Labour & Employment Compliance',
      'Intellectual Property Filing & Prosecution',
      'Regulatory & Taxation Compliance',
      'Drafting of Pleadings & Commercial Contracts',
    ],
    notableHighlights: [
      'Double credentialed from S.M. Law College and IBA Karachi.',
      'Active researcher on constitutional precedents and labor disputes.',
    ],
    barAdmissions: ['Sindh Bar Council', 'Karachi Bar Association'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'wafa-mazhar',
    name: 'Mr. Wafa Abbas Mazhar',
    role: 'Paralegal',
    title: 'Senior Paralegal – Legal Research & Litigation Support',
    experience: '4+ Years',
    education: [
      'Bachelor of Laws (LL.B.) – Federal Urdu University of Arts, Science and Technology',
    ],
    bio: [
      'Mr. Wafa Abbas Mazhar is a valued member of Lexway Law Firm holding an LL.B. degree. He specializes in exhaustive legal research, case brief formulation, litigation management, and procedural filings.',
      'He works closely with founding partners and advocates on both contentious and non-contentious briefs, assisting in Supreme Court paper books, High Court case files, and client coordination.',
    ],
    specializations: [
      'Judicial Precedent Research',
      'Court Briefs & Paper Books',
      'Case File Management',
      'Client Coordination & Due Diligence',
    ],
    notableHighlights: [
      'Assists partners in landmark reported appeals before the High Court and Tribunals.',
    ],
    barAdmissions: ['Legal Research & Litigation Support Division'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
  {
    id: 'moiz',
    name: 'Mr. Moiz',
    role: 'Paralegal',
    title: 'Paralegal – Court Registry & Administrative Operations',
    experience: '5+ Years',
    education: [
      'Chamber Administration & Judicial Procedures Certification',
    ],
    bio: [
      'Moiz handles the critical administrative and registry operations of Lexway before the Courts and Special Tribunals.',
      'He coordinates case filing dates, manages court case diaries, organizes registry inspections, and assists firm advocates during courtroom hearings. Moiz also maintains smooth communication channels between clients and the legal team.',
    ],
    specializations: [
      'Court Registry Administration',
      'Case Diaries & Hearing Scheduling',
      'Tribunal & Appellate File Coordination',
      'Client Documentation Liaison',
    ],
    notableHighlights: [
      'Ensures zero delays in court filings, registry compliance, and certified copy procurement across Karachi judicial forums.',
    ],
    barAdmissions: ['Chambers Registry & Administration'],
    contactEmail: 'contact@lexway.pk',
    office: 'Karachi Chambers',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'corporate-legal-paperwork',
    title: 'Corporate Legal Paperwork',
    category: 'Corporate & Commercial',
    summary: 'Comprehensive corporate statutory filings, minutes, resolutions, and board governance documentation.',
    description: 'Lexway provides full-spectrum corporate documentation services for domestic enterprises, multinationals, and startups. We draft board minutes, member resolutions, shareholder declarations, SECP statutory filings, and secretarial compliance instruments ensuring complete alignment with the Companies Act, 2017.',
    keyMatters: ['SECP statutory compliance', 'Articles & Memorandum drafting', 'Board resolutions & shareholder agreements', 'Regulatory returns & corporate governance'],
  },
  {
    id: 'contracts-agreements-legal-documents',
    title: 'Contracts, Agreements & Legal Documents',
    category: 'Corporate & Commercial',
    summary: 'Master service agreements, joint venture covenants, vendor contracts, and risk-mitigated commercial documentation.',
    description: 'We draft, review, and negotiate high-value commercial agreements under the Contract Act, 1872. Our lawyers ensure clauses on indemnity, dispute escalation, governing jurisdiction, and liquidated damages withstand judicial scrutiny.',
    keyMatters: ['Tripartite commercial contracts', 'Technology & vendor agreements', 'Distribution & licensing deals', 'Non-disclosure & non-compete covenants'],
  },
  {
    id: 'business-corporate-litigation',
    title: 'Business & Corporate Litigation',
    category: 'Dispute & Litigation',
    summary: 'Shareholder disputes, oppression claims, breach of fiduciary duty, and corporate contract disputes.',
    description: 'When commercial disagreements escalate, Lexway deploys seasoned courtroom trial advocates. We prosecute and defend complex disputes before the Company Benches of the High Courts, civil courts, and commercial arbitration panels.',
    keyMatters: ['Shareholder oppression & winding-up suits', 'Breach of commercial agreements', 'Director fiduciary liability', 'Injunctions & restraining orders'],
  },
  {
    id: 'environmental-law',
    title: 'Environmental Law',
    category: 'Regulatory & IP',
    summary: 'Environmental tribunals, EIA/IEE regulatory approvals, industrial compliance, and public interest ecological protection.',
    description: 'Lexway is recognized for its environmental advocacy, having represented Citizens for Environment and SEMPWA before the Sindh Environmental Protection Tribunal and High Court. We advise on EPA compliances, carbon strategies, and industrial effluents.',
    keyMatters: ['Sindh Environmental Protection Tribunal representation', 'Environmental Impact Assessment (EIA) challenges', 'Public Interest Environmental Writs', 'Industrial compliance & pollution abatement'],
  },
  {
    id: 'inheritance-succession',
    title: 'Inheritance & Succession',
    category: 'Private Client & Property',
    summary: 'Succession certificates, letters of administration, Islamic sharia estate distribution, and partition suits.',
    description: 'Our private client attorneys handle sensitive inheritance matters with discretion and speed. We obtain Succession Certificates and Letters of Administration from the High Court and District Courts, resolve family partition conflicts, and assist in legal distribution.',
    keyMatters: ['Issuance of Succession Certificates', 'Letters of Administration', 'Property partition among legal heirs', 'Probate and estate administration'],
  },
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    category: 'Dispute & Litigation',
    summary: 'Declaration suits, specific performance of contracts, injunctions, and recovery proceedings.',
    description: 'With more than three decades in trial chambers, our advocates possess unmatched mastery over the Code of Civil Procedure, 1908 and Specific Relief Act, 1877. We represent clients at all stages from initial plaint to final decree and execution.',
    keyMatters: ['Suits for Specific Performance', 'Declaratory suits & title decrees', 'Permanent & temporary injunctions', 'Execution of civil court decrees'],
  },
  {
    id: 'defence-of-criminal-charges',
    title: 'Defence of Criminal Charges',
    category: 'Dispute & Litigation',
    summary: 'Bail before arrest, quashing petitions under Section 561-A, cross-examination, and full criminal trials.',
    description: 'Led by seasoned litigators including a former District Public Prosecutor, Lexway offers formidable criminal defense. We represent clients facing serious charges under the Pakistan Penal Code, Anti-Terrorism Act, and special penal statutes.',
    keyMatters: ['Pre-arrest & post-arrest bail', 'Section 561-A CrPC quashing petitions', 'Cross-examination in trial courts', 'Appeals against conviction'],
  },
  {
    id: 'family-divorce-custody',
    title: 'Family, Divorce and Custody Cases',
    category: 'Private Client & Property',
    summary: 'Dissolution of marriage, Khula, child custody, guardianship proceedings, and maintenance decrees.',
    description: 'Family law requires balanced empathy and tenacious legal representation. Our specialized team advises clients through Khula, Divorce, child custody battles under the Guardian and Wards Act, 1890, and past/future maintenance claims.',
    keyMatters: ['Custody & visitation schedules', 'Guardianship petitions', 'Khula & Divorce proceedings', 'Recovery of dowry articles & dower money'],
  },
  {
    id: 'rent-cases',
    title: 'Rent Cases',
    category: 'Private Client & Property',
    summary: 'Commercial and residential eviction, fair rent determinations, and Sindh Rented Premises Ordinance litigation.',
    description: 'We represent both prominent landlords and commercial tenants in eviction applications, default of rent claims, personal bona fide use disputes, and rent appeals before District Judges and the High Court.',
    keyMatters: ['Eviction for rent default & subletting', 'Bona fide personal need litigation', 'Determination of fair market rent', 'Appeals under Rented Premises law'],
  },
  {
    id: 'custom-law',
    title: 'Custom Law',
    category: 'Regulatory & IP',
    summary: 'Customs valuation appeals, classification disputes, confiscation challenges, and Customs Appellate Tribunal trials.',
    description: 'Lexway possesses a celebrated track record in custom law, highlighted by reported judgments like SBLR 2023 Tribunal 225. We challenge arbitrary valuation rulings, recovery notices, and unlawful detention of imported goods before the Tribunal and Superior Courts.',
    keyMatters: ['Valuation Ruling challenges (SBLR 2023 Tribunal 225)', 'Customs Appellate Tribunal representation', 'Release of bank guarantees & goods', 'Classification disputes under Customs Act, 1969'],
  },
  {
    id: 'media-laws',
    title: 'Media Laws',
    category: 'Regulatory & IP',
    summary: 'PEMRA compliance, broadcasting regulations, digital media advisories, and journalistic legal defense.',
    description: 'We advise television channels, production companies, digital publications, and content creators on regulatory compliance, defamation risks, licensing, and disputes before the PEMRA Appellate Tribunal and High Courts.',
    keyMatters: ['PEMRA license compliance & appeals', 'Broadcast licensing & content clearance', 'Social media regulatory challenges', 'Digital copyright protection'],
  },
  {
    id: 'election-appeals',
    title: 'Election Appeals',
    category: 'Dispute & Litigation',
    summary: 'Election petitions, nomination rejections, appellate tribunal trials, and Supreme Court election appeals.',
    description: 'Our senior advocates represent parliamentarians and political candidates before Appellate Tribunals, High Court Election Benches, and the Supreme Court of Pakistan on nomination challenges, disqualifications, and election petitions.',
    keyMatters: ['Appeals against rejection of nomination papers', 'Election petitions & vote recount claims', 'Disqualification challenges under Articles 62 & 63', 'Supreme Court constitutional appeals'],
  },
  {
    id: 'personal-injury',
    title: 'Personal Injury',
    category: 'Dispute & Litigation',
    summary: 'Tort claims, workplace negligence, wrongful death, and medical malpractice liability.',
    description: 'We advocate for victims of severe workplace accidents, vehicular negligence, and medical malpractice to recover general and special damages before civil courts and consumer forums under Pakistan tort jurisprudence.',
    keyMatters: ['Industrial & workplace accident damages', 'Motor vehicle accident liability', 'Medical negligence claims', 'Fatal Accidents Act proceedings'],
  },
  {
    id: 'libel-defamation',
    title: 'Libel & Defamation',
    category: 'Dispute & Litigation',
    summary: 'Defamation Ordinance 2002 suits, injunctions against defamatory publications, and reputation defense.',
    description: 'Reputation is an irreplaceable asset for high-profile individuals and corporations. Lexway issues swift legal notices, secures restraining orders against media dissemination, and prosecutes damages claims under the Defamation Ordinance, 2002.',
    keyMatters: ['Legal notices under Defamation Ordinance', 'Restraining orders against defamatory publications', 'Damages suits for libel and slander', 'Cyber defamation before FIA Cybercrime wing'],
  },
  {
    id: 'appeals-appellate-litigation',
    title: 'Appeals & Appellate Litigation',
    category: 'Dispute & Litigation',
    summary: 'High Court appeals, civil review petitions, constitutional appeals, and Supreme Court Leave to Appeal.',
    description: 'Appellate advocacy demands deep doctrinal research and razor-sharp framing of legal issues. Our advocates have secured reversals of adverse orders across District Courts, High Courts, and the Supreme Court.',
    keyMatters: ['Civil & Criminal Appeals (CMA / CRA)', 'Civil Revisions (C.R. under Section 115 CPC)', 'Constitutional Petitions (Article 199)', 'Petitions for Leave to Appeal (CP) before Supreme Court'],
  },
  {
    id: 'patent-trademark-ip',
    title: 'Patent, Trademark and Intellectual Property',
    category: 'Regulatory & IP',
    summary: 'IPO-Pakistan trademark registrations, patent prosecution, copyright protection, and anti-counterfeiting actions.',
    description: 'We safeguard our clients’ intellectual capital. Our team files and prosecutes trademarks, copyrights, and patents before IPO-Pakistan, and initiates swift infringement suits, seizure orders, and passing-off litigation in High Courts.',
    keyMatters: ['Trademark opposition & registration at IPO', 'Passing-off & brand infringement suits', 'Court-appointed commission seizures of counterfeit goods', 'Copyright licensing & technology transfer'],
  },
  {
    id: 'aviation-maritimes-litigation',
    title: 'Aviation & Maritimes Litigation',
    category: 'Dispute & Litigation',
    summary: 'Admiralty jurisdiction, cargo arrest, bill of lading disputes, port authority claims, and aviation regulatory suits.',
    description: 'Karachi is Pakistan’s maritime and commercial trade gateway. Lexway handles admiralty suits before the High Court of Sindh, ship arrests, cargo damage claims, freight forwarding disputes, and aviation carrier liabilities.',
    keyMatters: ['Admiralty suits & ship arrest applications', 'Bill of lading and cargo demurrage claims', 'Port authority & shipping terminal disputes', 'Aviation regulatory compliance & carriage claims'],
  },
  {
    id: 'constitutional-litigation',
    title: 'Constitutional Litigation',
    category: 'Dispute & Litigation',
    summary: 'Article 199 writ petitions, fundamental rights enforcement, judicial review of administrative action.',
    description: 'Lexway has an illustrious record in constitutional jurisprudence. We challenge arbitrary administrative actions, unconstitutional statutory provisions, tender irregularities, and champion fundamental rights before the High Courts and Supreme Court.',
    keyMatters: ['Writs of Mandamus, Certiorari & Prohibition', 'Fundamental human rights enforcement', 'Challenging ultra vires government actions', 'Public procurement & PPRA challenge petitions'],
  },
  {
    id: 'projects-energy-finance',
    title: 'Projects, Energy & Finance',
    category: 'Corporate & Commercial',
    summary: 'IPP power agreements, renewable energy projects, EPC contracts, and infrastructure finance.',
    description: 'We advise developers, syndicates, and contractors on energy infrastructure, renewable solar/wind plants, NEPRA tariff regulations, concession agreements, and EPC project documentation.',
    keyMatters: ['Power Purchase Agreements (PPA) & EPC terms', 'NEPRA regulatory filings & tariff petitions', 'Syndicated infrastructure finance security packages', 'Concession agreements with government entities'],
  },
  {
    id: 'alternate-dispute-resolution',
    title: 'Alternate Dispute Resolution',
    category: 'Dispute & Litigation',
    summary: 'Structured ADR, conciliation, settlement conferences, and commercial dispute mediation.',
    description: 'Litigation is not always the sole remedy. Our Founding Partner is professionally trained in ADR. We facilitate structured conciliation and high-level settlement negotiations that preserve commercial relationships and save years of courtroom delays.',
    keyMatters: ['Structured commercial mediation', 'Pre-litigation settlement conferences', 'Multi-party dispute conciliation', 'Enforcement of ADR settlement deeds'],
  },
  {
    id: 'banking',
    title: 'Banking',
    category: 'Corporate & Commercial',
    summary: 'Financial Institutions (Recovery of Finances) Ordinance 2001, banking tribunal suits, and credit facility security.',
    description: 'Lexway represents both financial institutions and corporate borrowers in recovery suits, leave to defend applications, mortgage enforcement, syndicated financing, and banking offences.',
    keyMatters: ['Leave to Defend under Ordinance XLVII of 2001', 'Mortgage redemption & foreclosure proceedings', 'Banking offences trial defense', 'Credit documentation & hypothecation charges'],
  },
  {
    id: 'private-equity',
    title: 'Private Equity',
    category: 'Corporate & Commercial',
    summary: 'Investment round structuring, term sheets, shareholder covenants, and founder equity agreements.',
    description: 'We guide investment funds, family offices, and emerging growth enterprises through equity financing rounds, seed investments, convertible notes, vesting agreements, and exit transactions.',
    keyMatters: ['Term sheet negotiations & capitalization tables', 'Share subscription & shareholders agreements (SHA)', 'Due diligence & regulatory approvals', 'Exit strategies & share redemption'],
  },
  {
    id: 'tax',
    title: 'Tax',
    category: 'Regulatory & IP',
    summary: 'Direct & indirect taxation, FBR notices, Commissioner Appeals, and Appellate Tribunal Inland Revenue (ATIR).',
    description: 'With in-house IBA-trained tax specialists and seasoned High Court advocates, Lexway provides strategic tax advisory and contentious litigation against unlawful show cause notices, audit assessments, and sales tax determinations.',
    keyMatters: ['Income tax & sales tax audit challenges', 'Appeals before ATIR & Commissioner (Appeals)', 'High Court Tax Reference Applications', 'Exemption applications & advance tax rulings'],
  },
  {
    id: 'antitrust-competition-law',
    title: 'Antitrust & Competition Law',
    category: 'Corporate & Commercial',
    summary: 'Competition Commission of Pakistan (CCP) inquiries, deceptive marketing, cartel investigations, and merger clearances.',
    description: 'We counsel corporations on antitrust compliance under the Competition Act, 2010. We represent clients during CCP investigations into deceptive marketing, abuse of dominant position, and secure pre-merger clearance approvals.',
    keyMatters: ['CCP pre-merger clearance filings', 'Defense against cartel & price-fixing allegations', 'Deceptive marketing practices inquiries', 'Appeals before the Competition Appellate Tribunal'],
  },
  {
    id: 'labor-employment-law',
    title: 'Labor & Employment Law',
    category: 'Corporate & Commercial',
    summary: 'Sindh Industrial Relations Act, Labour Courts, wrongful termination, executive contracts, and workplace audits.',
    description: 'We assist corporate employers and executive employees in drafting employment contracts, grievance procedures, collective bargaining, and representation before Labour Courts, NIRC, and High Courts.',
    keyMatters: ['Labour Court suits & NIRC petitions', 'Wrongful termination & reinstatement claims', 'Drafting HR policies & employee handbooks', 'Workplace harassment inquiry committee procedures'],
  },
  {
    id: 'mergers-acquisitions',
    title: 'Mergers & Acquisitions',
    category: 'Corporate & Commercial',
    summary: 'Share acquisitions, scheme of arrangement before High Court, asset purchase, and regulatory approvals.',
    description: 'Lexway assists in domestic and cross-border M&A transactions. We coordinate legal due diligence, draft share purchase agreements (SPA), and sanction Schemes of Arrangement under Sections 279-282 of the Companies Act before the High Court.',
    keyMatters: ['Schemes of Amalgamation sanctioned by High Court', 'Share Purchase & Asset Purchase Agreements', 'Comprehensive vendor/target legal due diligence', 'Regulatory notifications to SECP and CCP'],
  },
  {
    id: 'property-conveyancing',
    title: 'Property & Conveyancing',
    category: 'Private Client & Property',
    summary: 'Title search, mutation, registration, sale agreements, and property transfer before T-Division Registrar.',
    description: 'Led by Mr. Irfan Siddiqui, our property practice ensures flawless property acquisition and disposal. We conduct thorough 30-year title searches, draft registered sale deeds, and execute mutations before KDA, SBCA, and Registrar offices.',
    keyMatters: ['30-year title verification & search certificates', 'Drafting & execution of registered Sale Deeds', 'Mutation before KDA, DHA, PECHS, and Registrar', 'Resolution of land title encumbrances & caveats'],
  },
  {
    id: 'arbitration-mediation',
    title: 'Arbitration & Mediation',
    category: 'Dispute & Litigation',
    summary: 'Domestic arbitration under Arbitration Act 1940, international arbitrations, and enforcement of foreign arbitral awards.',
    description: 'We represent clients in high-value commercial arbitrations, appointment of sole arbitrators by High Court, interim protective measures under Section 41, and enforcement of foreign arbitral awards under the Recognition and Enforcement Act, 2011.',
    keyMatters: ['Ad-hoc and institutional commercial arbitration', 'Appointment of Arbitrators under Arbitration Act, 1940', 'Interim injunctions & stay of proceedings', 'Enforcement of foreign arbitral awards in High Court'],
  },
  {
    id: 'representation-of-professionals',
    title: 'Representation of Professionals',
    category: 'Private Client & Property',
    summary: 'Disciplinary proceedings, licensing defense, bar councils, medical tribunals, and professional liability.',
    description: 'Prominent professionals—doctors, chartered accountants, architects, and lawyers—face unique disciplinary inquiries and malpractice claims. Lexway provides confidential, vigorous defense before professional tribunals and high court oversight benches.',
    keyMatters: ['Bar Council disciplinary proceedings', 'PMDC / PMC medical malpractice defense', 'ICAP / ICMAP regulatory inquiries', 'Professional negligence tort defense'],
  },
  {
    id: 'white-collar-investigation',
    title: 'White Collar Investigation',
    category: 'Dispute & Litigation',
    summary: 'NAB inquiries, FIA Commercial Banking Circle, AML investigations, and asset freeze challenges.',
    description: 'We defend corporate executives, public figures, and business leaders subjected to investigations by the National Accountability Bureau (NAB), Federal Investigation Agency (FIA), and Anti-Money Laundering authorities.',
    keyMatters: ['NAB call-up notice response & representation', 'High Court protective bail & pre-arrest bail', 'Unfreezing bank accounts & property attachment relief', 'Representation in Accountability Courts'],
  },
];

export const REPORTED_CASES: ReportedCase[] = [
  {
    id: 'sblr-2023-tribunal-225',
    title: 'Brands Unlimited (Pvt.) Limited v. Director General of Customs Valuation & Others',
    citation: 'SBLR 2023 Tribunal 225',
    forum: 'Customs Appellate Tribunal at Karachi',
    date: 'Customs Appeal No. K-130 of 2022',
    leadAttorney: 'Mr. Mohammad Ramish Farhat (Partner, Lexway Law Firm)',
    summary: 'Successful challenge against arbitrary valuation ruling and Order-in-Revision, securing cancellation of luxury valuation duty and the immediate release of PKR 11,060,995/- bank guarantee.',
    reliefGranted: 'Impugned Valuation Ruling and Order-in-Revision set aside to the extent of the client; Respondents directed to forthwith return the bank guarantee of PKR 11,060,995/-.',
    fullNarrative: `Lexway Law Firm successfully represented Brands Unlimited (Pvt.) Limited before the Customs Appellate Tribunal at Karachi in Customs Appeal No. K-130 of 2022, reported in SBLR 2023 Tribunal 225.

The appeal challenged Order-in-Revision No. 39 of 2021 passed by the Director General of Customs Valuation Karachi against Valuation Ruling No. 1374 of 2019 passed by the Director Valuation Custom House, Karachi. Through the latter ruling, the Director Valuation arbitrarily categorized Lakme Cosmetic products sold by Brands Unlimited in Pakistan and placed them in the category of high-end products. As a result, the Customs Authorities imposed customs duty on Lakme Cosmetic products at the rates applicable to high-end brands. This required Brands Unlimited to deposit security/bank guarantee for their imported goods amounting to PKR 11,060,995/-.

Lexway Law Firm’s representation of Brands Unlimited was led by our Partner, Mohammad Ramish Farhat. He effectively pleaded the case before the Customs Appellate Tribunal. The Tribunal allowed the appeal by setting aside the impugned Valuation Ruling and the impugned Order-in-Revision to the extent of Brands Unlimited. The Tribunal also directed the Respondents to forthwith return the bank guarantee to Brands Unlimited.

This is a significant victory for Brands Unlimited and Lexway Law Firm.`,
    pdfTag: 'SBLR-2023-Tribunal-225',
  },
  {
    id: 'dawn-environment-pil',
    title: 'Public Interest Litigation on behalf of Citizens for Environment',
    citation: 'High Court of Sindh Writ Petition · Published in Dawn Newspaper',
    forum: 'High Court of Sindh at Karachi',
    date: 'January 17, 2022',
    leadAttorney: 'Mr. Mohammad Ramish Farhat (Partner, Lexway Law Firm)',
    summary: 'High-impact Public Interest Litigation (PIL) initiated to halt environmental degradation, preserve urban ecological corridors, and enforce statutory duties of municipal authorities.',
    reliefGranted: 'Notice issued to governmental respondents and environmental protection authorities to report compliance with ecological safeguards.',
    fullNarrative: `Lexway Law Firm filed landmark Public Interest Litigation before the High Court of Sindh on behalf of Citizens for Environment. The petition sought urgent judicial intervention to restrain unlawful civic operations and municipal infractions causing severe environmental degradation, loss of biodiversity, and public health hazards in Karachi.

The news of this PIL was prominently reported by Dawn Newspaper on January 17th, 2022. The litigation highlights Lexway's deep commitment to pro bono environmental advocacy and the constitutional enforcement of the fundamental right to life and a clean, sustainable environment under Article 9 of the Constitution of Pakistan.`,
    externalLink: 'https://www.dawn.com/news/1669860',
  },
];

export const ASSOCIATIONS: Association[] = [
  {
    id: 'hrcp',
    name: 'Human Rights Commission of Pakistan',
    shortName: 'HRCP',
    type: 'Pro Bono Human Rights Association',
    overview: 'Lexway is proudly associated with the Human Rights Commission of Pakistan (HRCP), offering pro bono legal representation to victims of human rights violations and marginalized individuals.',
    mandate: 'Protection of fundamental civil liberties, constitutional rights guaranteed under the 1973 Constitution, and advocacy against unlawful state actions.',
    proBonoWork: 'Lexway has filed numerous Constitutional Petitions before the Superior Courts for redress against human rights violations. The firm has represented families of missing persons through HRCP and litigated cases concerning arbitrary detentions and violations of basic civil rights.',
  },
  {
    id: 'sempwa',
    name: 'Society for Environment and Mangrove Protection Welfare Association',
    shortName: 'SEMPWA',
    type: 'Pro Bono Environmental & Conservation Partner',
    overview: 'SEMPWA is a prominent non-governmental scientific body dedicated to ecological preservation, sustainability, and the protection of coastal mangrove ecosystems in Pakistan.',
    mandate: 'Promotion of scientific sustainability, combation of climate change, mangrove forest conservation, industrial waste management, and biodiversity protection.',
    proBonoWork: 'Lexway provides comprehensive pro bono counsel to SEMPWA, filing enforcement petitions before the Sindh Environmental Protection Tribunal at Karachi against illegal effluent dumping and destruction of coastal mangrove forests.',
  },
];

export const STATUTES_LIBRARY: StatuteItem[] = [
  { name: 'Constitution of the Islamic Republic of Pakistan, 1973', year: '1973', category: 'Constitutional', keyNote: 'Supreme law of the land governing state organs, superior judiciary, and fundamental human rights.', isStarred: true },
  { name: 'Code of Civil Procedure, 1908', year: '1908', category: 'Civil & Procedure', keyNote: 'Procedural foundation governing suits, pleadings, injunctions, evidence, and appeals in civil courts.', isStarred: true },
  { name: 'Code of Criminal Procedure, 1898', year: '1898', category: 'Criminal & Procedure', keyNote: 'Comprehensive statutory procedure for investigation, bail, trials, and quashments.', isStarred: true },
  { name: 'Pakistan Penal Code, 1860', year: '1860', category: 'Criminal Substantive', keyNote: 'Primary substantive penal code establishing offenses, liabilities, and punishments across Pakistan.', isStarred: true },
  { name: 'Anti-Terrorism Act, 1997', year: '1997', category: 'Special Criminal', keyNote: 'Special statute for prevention and trial of terrorism and heinous public-safety offenses.' },
  { name: 'Banking Companies Ordinance, 1962', year: '1962', category: 'Banking & Financial', keyNote: 'Regulatory charter controlling commercial banking institutions and State Bank of Pakistan governance.' },
  { name: 'Companies Act, 2017', year: '2017', category: 'Corporate & Commercial', keyNote: 'Modern statutory framework for incorporation, mergers, winding up, and SECP corporate regulation.' },
  { name: 'Contract Act, 1872', year: '1872', category: 'Commercial Substantive', keyNote: 'Governs agreement formation, consideration, breach, indemnities, and commercial obligations.' },
  { name: 'Defamation Ordinance, 2002', year: '2002', category: 'Civil & Tort', keyNote: 'Statutory basis for civil actions protecting individual and corporate reputation from libel and slander.' },
  { name: 'General Clauses Act, 1897', year: '1897', category: 'Interpretation & General', keyNote: 'Foundational statutory interpretation code for acts, definitions, and legislative mandates.' },
  { name: 'Legal Practitioners and Bar Councils Act, 1973', year: '1973', category: 'Legal Profession', keyNote: 'Regulates enrollment, professional conduct, ethics, and disciplinary jurisdiction over advocates.' },
  { name: 'National Accountability Ordinance, 1999', year: '1999', category: 'White Collar & Anti-Corruption', keyNote: 'Governs investigation and prosecution of financial corruption, misuse of authority, and white-collar crime.' },
  { name: 'Qanun-e-Shahadat Order, 1984', year: '1984', category: 'Evidence & Procedure', keyNote: 'The law of evidence governing admissibility, relevancy, examination of witnesses, and burden of proof.' },
  { name: 'Specific Relief Act, 1877', year: '1877', category: 'Civil Remedies', keyNote: 'Governs specific performance of contracts, injunctions, declaratory decrees, and restitution.' },
  { name: 'Succession Act, 1925', year: '1925', category: 'Private Client & Succession', keyNote: 'Statutory law regulating succession certificates, probate, and letters of administration.' },
];
