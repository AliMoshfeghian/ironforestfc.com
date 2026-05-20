import React from "react";

export default function Crest({ className = "", width = "100%", height = "100%" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ filter: "drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.45))" }}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d7b250" />
          <stop offset="50%" stopColor="#c39b34" />
          <stop offset="100%" stopColor="#8d6c1c" />
        </linearGradient>

        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e5c39" />
          <stop offset="100%" stopColor="#0d2117" />
        </linearGradient>
        
        <linearGradient id="shieldBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#111613" />
          <stop offset="100%" stopColor="#070908" />
        </linearGradient>

        {/* Clip Path for Inner Content */}
        <clipPath id="shieldClip">
          <path d="M20 15 H180 V110 C180 165 145 210 100 235 C55 210 20 165 20 110 Z" />
        </clipPath>
      </defs>

      {/* Outer Glow Effect (Stroke-based to prevent clipping and transformation distortions) */}
      <path
        d="M20 15 H180 V110 C180 165 145 210 100 235 C55 210 20 165 20 110 Z"
        stroke="url(#greenGrad)"
        strokeWidth="8"
        fill="none"
        opacity="0.3"
      />

      {/* Main Shield Background */}
      <path
        d="M20 15 H180 V110 C180 165 145 210 100 235 C55 210 20 165 20 110 Z"
        fill="url(#shieldBg)"
        stroke="url(#goldGrad)"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Inner Accent Line */}
      <path
        d="M26 21 H174 V108 C174 159 141 202 100 226 C59 202 26 159 26 108 Z"
        stroke="rgba(195, 155, 52, 0.15)"
        strokeWidth="1"
      />

      {/* Shield Content Group (Clipped) */}
      <g clipPath="url(#shieldClip)">
        {/* Horizontal separation line */}
        <line x1="20" y1="75" x2="180" y2="75" stroke="rgba(195, 155, 52, 0.2)" strokeWidth="1" />
        
        {/* Stylized Pine Trees (East Texas Piney Woods) */}
        {/* Left Tree */}
        <polygon points="65,150 75,130 70,130 78,115 73,115 80,100 87,115 82,115 90,130 85,130 95,150" fill="rgba(30, 92, 57, 0.4)" stroke="url(#goldGrad)" strokeWidth="1" />
        {/* Right Tree */}
        <polygon points="105,150 115,130 110,130 118,115 113,115 120,100 127,115 122,115 130,130 125,130 135,150" fill="rgba(30, 92, 57, 0.4)" stroke="url(#goldGrad)" strokeWidth="1" />
        {/* Center Tree (Taller) */}
        <polygon points="80,155 92,130 86,130 96,110 90,110 100,90 110,110 104,110 114,130 108,130 120,155" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
        
        {/* Vertical stripes in background (subtle) */}
        <line x1="50" y1="75" x2="50" y2="210" stroke="rgba(162, 176, 168, 0.03)" strokeWidth="8" />
        <line x1="150" y1="75" x2="150" y2="210" stroke="rgba(162, 176, 168, 0.03)" strokeWidth="8" />

        {/* Vintage Soccer Ball at the Base of the Trees */}
        <g transform="translate(100, 175)">
          <circle r="16" fill="#0d2117" stroke="url(#goldGrad)" strokeWidth="1.5" />
          {/* Soccer Ball Panels */}
          <path d="M 0,-16 L 0,-10 L -6,-5 L -14,-7 M 0,-10 L 6,-5 L 14,-7 M -6,-5 L -4,4 L -11,11 M 6,-5 L 4,4 L 11,11 M -4,4 L 0,10 L 0,16 M 4,4 L 0,10" stroke="url(#goldGrad)" strokeWidth="1" />
          <polygon points="-3,-1 3,-1 5,3 0,7 -5,3" fill="url(#goldGrad)" opacity="0.8" />
        </g>
      </g>

      {/* Typography */}
      
      {/* Club Name Banner Area */}
      <text
        x="100"
        y="42"
        textAnchor="middle"
        fill="url(#goldGrad)"
        fontSize="13"
        fontFamily="var(--font-outfit)"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        IRON FOREST
      </text>

      {/* Subtitle "FOOTBALL CLUB" */}
      <text
        x="100"
        y="56"
        textAnchor="middle"
        fill="#a2b0a8"
        fontSize="8"
        fontFamily="var(--font-inter)"
        fontWeight="600"
        letterSpacing="0.22em"
      >
        FOOTBALL CLUB
      </text>

      {/* Est. Year Badge Divider */}
      <rect x="80" y="64" width="40" height="1" fill="url(#goldGrad)" opacity="0.4" />

      {/* Huntsville Location text - adjusted vertically for breathing room */}
      <text
        x="100"
        y="212"
        textAnchor="middle"
        fill="url(#goldGrad)"
        fontSize="11"
        fontFamily="var(--font-outfit)"
        fontWeight="700"
        letterSpacing="0.18em"
      >
        HUNTSVILLE
      </text>

      <text
        x="100"
        y="224"
        textAnchor="middle"
        fill="#8b9891"
        fontSize="7"
        fontFamily="var(--font-inter)"
        fontWeight="500"
        letterSpacing="0.15em"
      >
        EST. 2027
      </text>
    </svg>
  );
}
