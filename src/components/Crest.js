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
        
        {/* Stylized Pine Trees (East Texas Piney Woods) - Moved up by 15px to free up bottom space */}
        {/* Left Tree */}
        <polygon points="65,135 75,115 70,115 78,100 73,100 80,85 87,100 82,100 90,115 85,115 95,135" fill="rgba(30, 92, 57, 0.4)" stroke="url(#goldGrad)" strokeWidth="1" />
        {/* Right Tree */}
        <polygon points="105,135 115,115 110,115 118,100 113,100 120,85 127,100 122,100 130,115 125,115 135,135" fill="rgba(30, 92, 57, 0.4)" stroke="url(#goldGrad)" strokeWidth="1" />
        {/* Center Tree (Taller) */}
        <polygon points="80,140 92,115 86,115 96,95 90,95 100,75 110,95 104,95 114,115 108,115 120,140" fill="url(#greenGrad)" stroke="url(#goldGrad)" strokeWidth="1.5" />
        
        {/* Vertical stripes in background (subtle) */}
        <line x1="50" y1="75" x2="50" y2="210" stroke="rgba(162, 176, 168, 0.03)" strokeWidth="8" />
        <line x1="150" y1="75" x2="150" y2="210" stroke="rgba(162, 176, 168, 0.03)" strokeWidth="8" />

        {/* Deep Forest Roots */}
        <path
          d="M 100,140 Q 100,152 98,162 T 100,180 T 100,192 M 98,141 Q 93,153 87,163 T 75,176 T 62,185 M 91,155 Q 83,165 74,171 T 67,178 M 80,135 Q 78,147 70,157 T 58,168 T 46,174 M 70,135 Q 67,144 60,152 T 50,161 M 102,141 Q 107,153 113,163 T 125,176 T 138,185 M 109,155 Q 117,165 126,171 T 133,178 M 120,135 Q 122,147 130,157 T 142,168 T 154,174 M 130,135 Q 133,144 140,152 T 150,161"
          stroke="url(#goldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.85"
        />

        {/* Sam Houston Silhouette */}
        <g id="sam-houston-silhouette" opacity="0.95">
          <path
            d="M 97,120 L 97,117 L 103,117 L 103,120 H 106.5 V 121.5 H 93.5 V 120 H 97 Z 
               M 96,121.5 Q 96,126 100,126.5 Q 104,126 104,121.5 Z
               M 95.5,126.5 C 92.5,128.5 90.5,132 90.5,136 L 93,158 L 95.5,160 L 96.5,160 L 95,166 H 98 L 99,160 H 101 L 102,166 H 105 L 103.5,160 L 104.5,160 L 107,158 L 109.5,136 C 109.5,132 107.5,128.5 104.5,126.5 Z"
            fill="url(#goldGrad)"
          />
          {/* Cane */}
          <line x1="92.5" y1="135" x2="89.5" y2="166" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />
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

      {/* Est. Year Badge Divider with Star */}
      <g>
        <line x1="68" y1="66.5" x2="88" y2="66.5" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />
        <polygon points="100,61.5 101.5,65 105,65 102,67 103.5,70.5 100,68.5 96.5,70.5 98,67 95,65 98.5,65" fill="url(#goldGrad)" />
        <line x1="112" y1="66.5" x2="132" y2="66.5" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Huntsville Location text - shifted up and sized appropriately to avoid curved border overlap */}
      <text
        x="100"
        y="196"
        textAnchor="middle"
        fill="url(#goldGrad)"
        fontSize="9.5"
        fontFamily="var(--font-outfit)"
        fontWeight="700"
        letterSpacing="0.15em"
      >
        HUNTSVILLE
      </text>

      <text
        x="100"
        y="210"
        textAnchor="middle"
        fill="#8b9891"
        fontSize="7"
        fontFamily="var(--font-inter)"
        fontWeight="500"
        letterSpacing="0.12em"
      >
        EST. 1836
      </text>
    </svg>
  );
}
