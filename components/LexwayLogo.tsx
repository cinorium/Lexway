import React from 'react';

interface LexwayLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function LexwayLogo({ className = '', variant = 'full', size = 'md' }: LexwayLogoProps) {
  // Size metrics
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : size === 'xl' ? 1.6 : 1;
  const width = Math.round(280 * scale);
  const height = Math.round(130 * scale);

  const isLight = variant === 'light';
  const navyColor = isLight ? '#FFFFFF' : '#004B87';
  const goldColor = '#D49B1F';
  const textColor = isLight ? '#E2E8F0' : '#111827';

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 150"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto max-w-full"
        aria-label="Lexway Law Firm Logo"
      >
        {/* Scales of Justice Graphic */}
        <g id="scales-of-justice">
          {/* Central Finial top */}
          <path
            d="M160 5 C158 12, 155 17, 160 22 C165 17, 162 12, 160 5 Z"
            fill={goldColor}
          />

          {/* Central Vertical Pillar Top to Base */}
          <rect x="158" y="22" width="4" height="92" fill={goldColor} rx="1" />

          {/* Crossbeam with elegant curvature */}
          <path
            d="M118 29 C130 26, 145 25, 160 25 C175 25, 190 26, 202 29"
            stroke={goldColor}
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Pivot & Ring */}
          <circle cx="118" cy="29" r="3.5" fill={goldColor} />
          {/* Right Pivot & Ring */}
          <circle cx="202" cy="29" r="3.5" fill={goldColor} />

          {/* Left Balance Strings */}
          <line x1="118" y1="29" x2="102" y2="58" stroke={goldColor} strokeWidth="1.6" />
          <line x1="118" y1="29" x2="118" y2="58" stroke={goldColor} strokeWidth="1.6" />
          <line x1="118" y1="29" x2="134" y2="58" stroke={goldColor} strokeWidth="1.6" />

          {/* Left Pan (Bowl) */}
          <path
            d="M98 58 Q118 67 138 58 Z"
            fill={goldColor}
          />

          {/* Right Balance Strings */}
          <line x1="202" y1="29" x2="186" y2="58" stroke={goldColor} strokeWidth="1.6" />
          <line x1="202" y1="29" x2="202" y2="58" stroke={goldColor} strokeWidth="1.6" />
          <line x1="202" y1="29" x2="218" y2="58" stroke={goldColor} strokeWidth="1.6" />

          {/* Right Pan (Bowl) */}
          <path
            d="M182 58 Q202 67 222 58 Z"
            fill={goldColor}
          />

          {/* Stepped Base Pedestal under the central pillar */}
          <rect x="154" y="110" width="12" height="3" fill={goldColor} />
          <rect x="151" y="113" width="18" height="3" fill={goldColor} />
          <rect x="147" y="116" width="26" height="3" fill={goldColor} />
        </g>

        {/* Brand Text: LEX and WAY */}
        {/* Left word: LEX */}
        <text
          x="75"
          y="108"
          fill={navyColor}
          fontSize="48"
          fontWeight="700"
          fontFamily="Times New Roman, 'Playfair Display', Georgia, serif"
          letterSpacing="4"
          textAnchor="middle"
        >
          LEX
        </text>

        {/* Right word: WAY */}
        <text
          x="242"
          y="108"
          fill={navyColor}
          fontSize="48"
          fontWeight="700"
          fontFamily="Times New Roman, 'Playfair Display', Georgia, serif"
          letterSpacing="4"
          textAnchor="middle"
        >
          WAY
        </text>

        {/* Golden Horizontal Divider Bar */}
        <rect x="10" y="121" width="300" height="2.5" fill={goldColor} />

        {/* Subtitle: L A W   F I R M */}
        <text
          x="160"
          y="142"
          fill={textColor}
          fontSize="14.5"
          fontWeight="500"
          fontFamily="Times New Roman, Georgia, serif"
          letterSpacing="8"
          textAnchor="middle"
        >
          LAW FIRM
        </text>
      </svg>
    </div>
  );
}
