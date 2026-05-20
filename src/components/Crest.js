import React from "react";

export default function Crest({ className = "", width = "100%", height = "100%" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 240"
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
          <path d="M20 20 H180 V120 C180 170 145 205 100 225 C55 205 20 170 20 120 Z" />
        </clipPath>
      </defs>

      {/* Outer Glow Effect */}
      <path
        d="M20 20 H180 V120 C180 170 145 205 100 225 C55 205 20 170 20 120 Z"
        fill="url(#greenGrad)"
        opacity="0.1"
        transform="scale(1.03) translate(-3, -3)"
      />

      {/* Main Shield Background */}
      <path
        d="M20 20 H180 V120 C180 170 145 205 100 225 C55 205 20 170 20 120 Z"
        fill="url(#shieldBg)"
        stroke="url(#goldGrad)"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Inner Accent Line */}
      <path
        d="M26 26 H174 V118 C174 164 141 197 100 216 C59 197 26 164 26 118 Z"
        stroke="rgba(195, 155, 52, 0.15)"
        strokeWidth="1"
      />

      {/* Shield Content Group (Clipped) */}
      <g clipPath="url(#shieldClip)">
        {/* Horizontal separation line */}
        <line x1="20" y1="80" x2="180" y2="80" stroke="rgba(195, 155, 52, 0.25)" strokeWidth="1" />
        
        {/* Stylized Pine Trees (East Texas Piney Woods) */}
        {/* Left Tree */}
        <polygon points="65,145 75,125 70,125 78,110 73,110 80,95 87,110 82,110 90,125 85,125 95,145" fill="rgba(30, 92, 57, 0.4)" stroke="url(#goldGrad)" strokeWidth="1" />
        {/* Right Tree */}
        <polygon points="105,145 115,125 110,125 118,110 113,110 120,95 127,110 122,110 130,125 125,125 135,145" fill="rgba(30, 92, 57, 0.4)" stroke="url(#goldGrad)" strokeWidth="1" />
        {/* Center Tree (Taller) */}
        <polygon points="80,150 92,125 86,125 96,105 90,105 100,85 110,105 104,105 114,125 108,125 120,150" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
        
        {/* Vertical stripes in background (subtle) */}
        <line x1="50" y1="80" x2="50" y2="200" stroke="rgba(162, 176, 168, 0.03)" strokeWidth="8" />
        <line x1="150" y1="80" x2="150" y2="200" stroke="rgba(162, 176, 168, 0.03)" strokeWidth="8" />

        {/* Vintage Soccer Ball at the Base of the Trees */}
        <g transform="translate(100, 168)">
          <circle r="16" fill="#0d2117" stroke="url(#goldGrad)" strokeWidth="1.5" />
          {/* Soccer Ball Panels */}
          <path d="M 0,-16 L 0,-10 L -6,-5 L -14,-7 M 0,-10 L 6,-5 L 14,-7 M -6,-5 L -4,4 L -11,11 M 6,-5 L 4,4 L 11,11 M -4,4 L 0,10 L 0,16 M 4,4 L 0,10" stroke="url(#goldGrad)" strokeWidth="1" />
          <polygon points="-3,-1 3,-1 5,3 0,7 -5,3" fill="url(#goldGrad)" opacity="0.8" />
        </g>
      </g>

      {/* Typography */}
      
      {/* Club Name Banner Area */}
      {/* Curved Text Path or Top Text */}
      <text
        x="100"
        y="46"
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
        y="62"
        textAnchor="middle"
        fill="#a2b0a8"
        fontSize="8"
        fontFamily="var(--font-inter)"
        fontWeight="600"
        letterSpacing="0.22em"
      >
        FOOTBALL CLUB
      </text>

      {/* Est. Year Badge */}
      <rect x="80" y="69" width="40" height="1" fill="url(#goldGrad)" opacity="0.5" />

      {/* Huntsville Location text */}
      <text
        x="100"
        y="204"
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
        y="216"
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
