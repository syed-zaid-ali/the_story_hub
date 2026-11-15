import React from 'react';

export function ForgottenTalesRocketLogo({ className = 'w-11 h-11' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Solid pastel-purple circle background */}
      <circle cx="24" cy="24" r="22" fill="#B592F5" />
      {/* Thick, clean white outline of a cartoonish rocket ship */}
      <g transform="translate(24 24) rotate(35) translate(-24 -24)">
        {/* Rocket body */}
        <path
          d="M24 9C28.8 14.2 31 20.5 30.2 28.5H17.8C17 20.5 19.2 14.2 24 9Z"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Left & right cartoon fins */}
        <path
          d="M17.8 23.5L13 28.5L17.8 29.5"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.2 23.5L35 28.5L30.2 29.5"
          stroke="#FFFFFF"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Porthole window */}
        <circle cx="24" cy="19.5" r="2.7" stroke="#FFFFFF" strokeWidth="2.6" />
        {/* Rocket thruster flame outline */}
        <path
          d="M21 31.5C21.5 34.8 22.8 36.8 24 38C25.2 36.8 26.5 34.8 27 31.5"
          stroke="#FFFFFF"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function VisualExplorerIllustration({ className = 'w-full h-40' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Soft pastel sun / orb */}
      <circle cx="256" cy="46" r="24" fill="#FFE8A3" stroke="#2D2640" strokeWidth="3" />
      <circle cx="256" cy="46" r="32" stroke="#FFE8A3" strokeWidth="3" strokeDasharray="6 6" />

      {/* Fluffy cartoon cloud left */}
      <path
        d="M42 98C31 98 24 90 24 80C24 71 31 63 40 62C44 50 56 42 70 42C86 42 99 53 101 68C110 69 117 77 117 86C117 94 110 98 100 98H42Z"
        fill="#FFFFFF"
        stroke="#2D2640"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Dashed playful flight trail */}
      <path
        d="M66 130C106 132 132 104 166 86C192 72 212 72 232 62"
        stroke="#3AA889"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="8 8"
      />

      {/* Stylized paper glider */}
      <g transform="translate(178 44) rotate(-14)">
        <path
          d="M6 26L68 8L46 46L32 32L6 26Z"
          fill="#A8EBD4"
          stroke="#2D2640"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M68 8L32 32L36 48L46 46"
          fill="#8CD8F8"
          stroke="#2D2640"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
      </g>

      {/* Motion breeze curves */}
      <path
        d="M124 128C154 128 178 118 202 118C214 118 220 124 220 130C220 136 214 140 207 139"
        stroke="#73C6EA"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M210 144C236 144 260 136 286 136"
        stroke="#57C29E"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Geometric four-point sparkle vectors (pure SVG) */}
      <path
        d="M142 36L145 44L153 47L145 50L142 58L139 50L131 47L139 44L142 36Z"
        fill="#FFF3B8"
        stroke="#2D2640"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="282" cy="96" r="5" fill="#B6E3FF" stroke="#2D2640" strokeWidth="2.5" />
    </svg>
  );
}

export function DeepReaderIllustration({ className = 'w-full h-40' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cozy soft pastel cushion / backdrop aura */}
      <ellipse cx="160" cy="144" rx="108" ry="12" fill="#E3CCF9" opacity="0.6" />

      {/* Open Cartoon Book */}
      <g transform="translate(56 46)">
        {/* Blush pink outer cover */}
        <path
          d="M10 18C10 11 16 6 23 6H96C101 6 104 9 104 14V92C104 95 101 98 96 98H22C15 98 10 92 10 85V18Z"
          fill="#FFC7DC"
          stroke="#2D2640"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path
          d="M198 18C198 11 192 6 185 6H112C107 6 104 9 104 14V92C104 95 107 98 112 98H186C193 98 198 92 198 85V18Z"
          fill="#FFC7DC"
          stroke="#2D2640"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />

        {/* Creamy curved open pages */}
        <path
          d="M20 14C20 10 24 8 28 8H92C99 8 104 13 104 20V88C96 84 84 82 62 82H26C22 82 20 79 20 75V14Z"
          fill="#FFFDF7"
          stroke="#2D2640"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M188 14C188 10 184 8 180 8H116C109 8 104 13 104 20V88C112 84 124 82 146 82H182C186 82 188 79 188 75V14Z"
          fill="#FFFDF7"
          stroke="#2D2640"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Tidy text lines on left & right pages */}
        <path d="M36 26H86" stroke="#C5B3DF" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M36 39H82" stroke="#D9CCE9" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M36 52H88" stroke="#D9CCE9" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M36 65H72" stroke="#D9CCE9" strokeWidth="3.2" strokeLinecap="round" />

        <path d="M122 26H172" stroke="#C5B3DF" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M122 39H168" stroke="#D9CCE9" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M122 52H174" stroke="#D9CCE9" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M122 65H158" stroke="#D9CCE9" strokeWidth="3.2" strokeLinecap="round" />

        {/* Cute ribbon bookmark */}
        <path
          d="M144 82V108L152 101L160 108V82"
          fill="#BFA0F5"
          stroke="#2D2640"
          strokeWidth="2.8"
          strokeLinejoin="round"
        />
      </g>

      {/* Thick Cartoonish Glasses Perched Front-and-Center */}
      <g transform="translate(88 20)">
        {/* Left & right temple arms */}
        <path
          d="M8 26L2 14C0 10 4 6 8 8"
          stroke="#2D2640"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M136 26L142 14C144 10 140 6 136 8"
          stroke="#2D2640"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Thick rounded lavender frames */}
        <rect
          x="10"
          y="14"
          width="54"
          height="42"
          rx="18"
          fill="#EBD9FF"
          fillOpacity="0.82"
          stroke="#2D2640"
          strokeWidth="5"
        />
        <rect
          x="80"
          y="14"
          width="54"
          height="42"
          rx="18"
          fill="#FFDCEB"
          fillOpacity="0.82"
          stroke="#2D2640"
          strokeWidth="5"
        />
        {/* Chunky bridge */}
        <path
          d="M64 33C68 27 76 27 80 33"
          stroke="#2D2640"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Playful cartoon lens shine */}
        <path d="M22 26L30 22" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M92 26L100 22" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* Small four-point vector star accents */}
      <path
        d="M44 46L46.5 52.5L53 55L46.5 57.5L44 64L41.5 57.5L35 55L41.5 52.5L44 46Z"
        fill="#FFD4E5"
        stroke="#2D2640"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="276" cy="54" r="5" fill="#DCC4FF" stroke="#2D2640" strokeWidth="2.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4.5 10H15.5M15.5 10L11 5.5M15.5 10L11 14.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.5 10H4.5M4.5 10L9 5.5M4.5 10L9 14.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BookIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 4.5C3 3.67 3.67 3 4.5 3H8.5C9.33 3 10 3.67 10 4.5V16.5C10 15.67 9.33 15 8.5 15H4.5C3.67 15 3 14.33 3 13.5V4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 4.5C17 3.67 16.33 3 15.5 3H11.5C10.67 3 10 3.67 10 4.5V16.5C10 15.67 10.67 15 11.5 15H15.5C16.33 15 17 14.33 17 13.5V4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompassIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12.8 7.2L11.2 11.2L7.2 12.8L8.8 8.8L12.8 7.2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
