// Logo do Spoti-Fly inspirado na arte original
// Versão estilizada e profissional do personagem

export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="spotifly-logo"
    >
      {/* Container/Corpo principal (turquesa) */}
      <ellipse cx="50" cy="55" rx="38" ry="32" fill="#4ECDC4" />
      
      {/* Sombra suave */}
      <ellipse cx="50" cy="55" rx="38" ry="32" fill="url(#shadow)" opacity="0.3"/>
      
      {/* Tampa vermelha/coral */}
      <ellipse cx="50" cy="28" rx="35" ry="8" fill="#FF6B6B" />
      <ellipse cx="50" cy="28" rx="30" ry="5" fill="#FF8787" />
      
      {/* Asa esquerda */}
      <path
        d="M15 45 Q5 40, 8 35 Q12 38, 18 42 Z"
        fill="white"
        opacity="0.9"
      />
      
      {/* Asa direita */}
      <path
        d="M85 45 Q95 40, 92 35 Q88 38, 82 42 Z"
        fill="white"
        opacity="0.9"
      />
      
      {/* Óculos - armação */}
      <g stroke="#2C3E50" strokeWidth="2.5" fill="none">
        <rect x="28" y="48" width="16" height="12" rx="2" />
        <rect x="56" y="48" width="16" height="12" rx="2" />
        <line x1="44" y1="54" x2="56" y2="54" />
      </g>
      
      {/* Lentes dos óculos */}
      <rect x="29" y="49" width="14" height="10" rx="2" fill="#2C3E50" opacity="0.3" />
      <rect x="57" y="49" width="14" height="10" rx="2" fill="#2C3E50" opacity="0.3" />
      
      {/* Reflexo nas lentes */}
      <circle cx="34" cy="52" r="2" fill="white" opacity="0.6" />
      <circle cx="62" cy="52" r="2" fill="white" opacity="0.6" />
      
      {/* Sorriso */}
      <path
        d="M40 68 Q50 72, 60 68"
        stroke="#2C3E50"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Headphone - arco */}
      <path
        d="M20 45 Q20 20, 50 15 Q80 20, 80 45"
        stroke="#2C3E50"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Headphone - fone esquerdo */}
      <ellipse cx="20" cy="50" rx="6" ry="8" fill="#2C3E50" />
      <ellipse cx="20" cy="50" rx="4" ry="6" fill="#34495E" />
      
      {/* Headphone - fone direito */}
      <ellipse cx="80" cy="50" rx="6" ry="8" fill="#2C3E50" />
      <ellipse cx="80" cy="50" rx="4" ry="6" fill="#34495E" />
      
      {/* Gradiente para sombra */}
      <defs>
        <radialGradient id="shadow">
          <stop offset="0%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>
  );
}

