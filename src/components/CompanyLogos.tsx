import teslaLogo from 'figma:asset/24245cd86e53f46dbf4ac2727ae57f8b702696c9.png';

export function CompanyLogos() {
  const logos = [
    {
      name: "Target",
      svg: (
        <svg viewBox="0 0 160 60" fill="none" className="h-14 w-auto">
          <circle cx="30" cy="30" r="22" fill="#CC0000"/>
          <circle cx="30" cy="30" r="16" fill="white"/>
          <circle cx="30" cy="30" r="10" fill="#CC0000"/>
          <text x="62" y="38" fill="#CC0000" fontSize="28" fontFamily="Arial" fontWeight="700">Target</text>
        </svg>
      )
    },
    {
      name: "Amazon",
      svg: (
        <svg viewBox="0 0 140 60" fill="none" className="h-12 w-auto">
          <text x="5" y="35" fill="#FF9900" fontSize="32" fontFamily="Arial" fontWeight="700">amazon</text>
          <path d="M15 42Q70 50 125 42" stroke="#FF9900" strokeWidth="4" fill="none"/>
          <path d="M120 40L125 42L120 44" fill="#FF9900"/>
        </svg>
      )
    },
    {
      name: "Walmart",
      svg: (
        <svg viewBox="0 0 165 60" fill="none" className="h-12 w-auto">
          <path d="M27.5 12L30 20L38 21L31.5 27L33 35L27.5 31L22 35L23.5 27L17 21L25 20L27.5 12Z" fill="#FFC220"/>
          <text x="48" y="35" fill="#0071CE" fontSize="24" fontFamily="Arial" fontWeight="700">Walmart</text>
        </svg>
      )
    },
    {
      name: "Google",
      svg: (
        <svg viewBox="0 0 140 60" fill="none" className="h-12 w-auto">
          <text x="5" y="38" fontSize="32" fontFamily="Arial" fontWeight="700">
            <tspan fill="#4285F4">G</tspan>
            <tspan fill="#EA4335">o</tspan>
            <tspan fill="#FBBC04">o</tspan>
            <tspan fill="#4285F4">g</tspan>
            <tspan fill="#34A853">l</tspan>
            <tspan fill="#EA4335">e</tspan>
          </text>
        </svg>
      )
    },
    {
      name: "Microsoft",
      svg: (
        <svg viewBox="0 0 180 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="15" width="13" height="13" fill="#F25022"/>
          <rect x="21" y="15" width="13" height="13" fill="#7FBA00"/>
          <rect x="5" y="31" width="13" height="13" fill="#00A4EF"/>
          <rect x="21" y="31" width="13" height="13" fill="#FFB900"/>
          <text x="45" y="37" fill="#5E5E5E" fontSize="24" fontFamily="Arial" fontWeight="600">Microsoft</text>
        </svg>
      )
    },
    {
      name: "Apple",
      svg: (
        <svg viewBox="0 0 140 60" fill="none" className="h-12 w-auto">
          <path d="M22 12c1-1 2-2 3-2s2 1 2 2-1 2-2 3c-1 0-2-1-3-3z" fill="#555555"/>
          <path d="M30 18c-2-1-4 0-5 1-1 0-2 0-3-1-2 0-4 2-5 4-1 3-1 6 0 9 1 2 2 4 4 4 1 0 2 0 3-1 1 0 2-1 3-1s2 1 3 1c2 1 3-1 4-3 1-1 1-3 1-4-2-1-3-3-3-5s1-4 3-5c-1-1-3-2-5-2z" fill="#555555"/>
          <text x="48" y="37" fill="#555555" fontSize="26" fontFamily="Arial" fontWeight="600">Apple</text>
        </svg>
      )
    },
    {
      name: "Costco",
      svg: (
        <svg viewBox="0 0 150 60" fill="none" className="h-12 w-auto">
          <text x="5" y="37" fill="#005DAA" fontSize="28" fontFamily="Arial" fontWeight="800">COSTCO</text>
        </svg>
      )
    },
    {
      name: "Starbucks",
      svg: (
        <svg viewBox="0 0 185 60" fill="none" className="h-12 w-auto">
          <circle cx="28" cy="30" r="20" fill="#00704A"/>
          <path d="M28 13L29.5 17L33 17L30 19.5L31.5 23L28 20.5L24.5 23L26 19.5L23 17L26.5 17L28 13Z" fill="white"/>
          <path d="M21 18C20 19 19 20 18 21L20 23C21 22 22 21 23 20L21 18Z" fill="white"/>
          <path d="M35 18C36 19 37 20 38 21L36 23C35 22 34 21 33 20L35 18Z" fill="white"/>
          <circle cx="23" cy="27" r="1.5" fill="white"/>
          <circle cx="33" cy="27" r="1.5" fill="white"/>
          <path d="M28 30C26 30 24.5 31 24.5 32.5C24.5 34 26 35 28 35C30 35 31.5 34 31.5 32.5C31.5 31 30 30 28 30Z" fill="white"/>
          <path d="M20 25C20.5 24 21.5 23 22.5 22.5M18.5 28C19 27 20 26 21 25.5M17 32C17.5 31 18.5 30 19.5 29.5" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M36 25C35.5 24 34.5 23 33.5 22.5M37.5 28C37 27 36 26 35 25.5M39 32C38.5 31 37.5 30 36.5 29.5" stroke="white" strokeWidth="1.5" fill="none"/>
          <path d="M20 36C19 38 18 40 17 42L19 43C20 41 21 39 22 37L20 36Z" fill="white"/>
          <path d="M23 37C23 39 23 41 23 43L25 43C25 41 25 39 25 37L23 37Z" fill="white"/>
          <path d="M28 37C28 39 28 41 28 43L30 43C30 41 30 39 30 37L28 37Z" fill="white"/>
          <path d="M33 37C33 39 33 41 33 43L35 43C35 41 35 39 35 37L33 37Z" fill="white"/>
          <path d="M36 36C37 38 38 40 39 42L37 43C36 41 35 39 34 37L36 36Z" fill="white"/>
          <text x="56" y="37" fill="#00704A" fontSize="24" fontFamily="Arial" fontWeight="700">Starbucks</text>
        </svg>
      )
    },
    {
      name: "McDonald's",
      svg: (
        <svg viewBox="0 0 190 60" fill="none" className="h-12 w-auto">
          <path d="M12 42L12 28C12 24 14 20 17 17C19 15 21 14 22 14C23 14 25 15 27 17C30 20 32 24 32 28L32 42" fill="#FFC72C"/>
          <path d="M28 42L28 28C28 24 30 20 33 17C35 15 37 14 38 14C39 14 41 15 43 17C46 20 48 24 48 28L48 42" fill="#FFC72C"/>
          <text x="55" y="38" fill="#DA291C" fontSize="24" fontFamily="Arial" fontWeight="700">McDonald's</text>
        </svg>
      )
    },
    {
      name: "Nike",
      svg: (
        <svg viewBox="0 0 135 60" fill="none" className="h-12 w-auto">
          <path d="M8 40C10 38 15 35 22 32C30 28 40 25 50 24C55 23 58 24 60 24L62 22C62 22 59 22 54 22C48 22 40 23 30 27C20 31 12 36 8 39L8 40Z" fill="black"/>
          <text x="72" y="37" fill="black" fontSize="26" fontFamily="Arial" fontWeight="800">NIKE</text>
        </svg>
      )
    },
    {
      name: "Tesla",
      svg: (
        <div className="flex items-center gap-4">
          <img src={teslaLogo} alt="Tesla" className="h-12 w-auto" />
          <span className="text-[#E82127] text-2xl">TESLA</span>
        </div>
      )
    },
    {
      name: "Netflix",
      svg: (
        <svg viewBox="0 0 160 60" fill="none" className="h-12 w-auto">
          <rect x="8" y="12" width="7" height="36" fill="#E50914"/>
          <rect x="25" y="12" width="7" height="36" fill="#E50914"/>
          <path d="M15 12L25 48" stroke="#E50914" strokeWidth="7"/>
          <text x="42" y="37" fill="#E50914" fontSize="24" fontFamily="Arial" fontWeight="800">NETFLIX</text>
        </svg>
      )
    },
    {
      name: "Adobe",
      svg: (
        <svg viewBox="0 0 150 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="15" width="30" height="30" rx="4" fill="#FF0000"/>
          <path d="M20 22L28 42L24 42L22.5 38L17.5 38L16 42L12 42L20 22Z" fill="white"/>
          <rect x="18.5" y="33" width="3" height="5" fill="white"/>
          <text x="42" y="37" fill="#FF0000" fontSize="24" fontFamily="Arial" fontWeight="700">Adobe</text>
        </svg>
      )
    },
    {
      name: "Uber",
      svg: (
        <svg viewBox="0 0 125 60" fill="none" className="h-12 w-auto">
          <rect x="6" y="22" width="4" height="16" rx="2" fill="black"/>
          <path d="M18 22h8v8c0 2-1.5 4-4 4s-4-2-4-4v-8z" fill="black"/>
          <text x="38" y="37" fill="black" fontSize="26" fontFamily="Arial" fontWeight="700">Uber</text>
        </svg>
      )
    },
    {
      name: "Spotify",
      svg: (
        <svg viewBox="0 0 155 60" fill="none" className="h-12 w-auto">
          <circle cx="28" cy="30" r="22" fill="#1DB954"/>
          <path d="M17 24Q28 20 39 24M18 29Q28 26 38 29M20 34Q28 32 36 34" stroke="white" strokeWidth="2.5" fill="none"/>
          <text x="58" y="37" fill="#1DB954" fontSize="24" fontFamily="Arial" fontWeight="700">Spotify</text>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      svg: (
        <svg viewBox="0 0 170 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="10" width="40" height="40" rx="4" fill="#0A66C2"/>
          <rect x="11" y="26" width="5" height="16" fill="white"/>
          <circle cx="13.5" cy="20" r="2.5" fill="white"/>
          <path d="M22 26h5v2c1-1.5 2.5-2.5 5-2.5 4 0 6 2.5 6 6v10h-5v-9c0-2-1-3-2.5-3s-3 1-3.5 3v9h-5v-16z" fill="white"/>
          <text x="52" y="37" fill="#0A66C2" fontSize="24" fontFamily="Arial" fontWeight="700">LinkedIn</text>
        </svg>
      )
    },
    {
      name: "Panda Restaurant Group",
      svg: (
        <svg viewBox="0 0 280 60" fill="none" className="h-12 w-auto">
          <circle cx="25" cy="30" r="18" fill="#C8102E"/>
          <circle cx="20" cy="26" r="4" fill="white"/>
          <circle cx="30" cy="26" r="4" fill="white"/>
          <circle cx="20" cy="26" r="1.5" fill="black"/>
          <circle cx="30" cy="26" r="1.5" fill="black"/>
          <ellipse cx="25" cy="34" rx="3" ry="2" fill="white"/>
          <text x="50" y="37" fill="#C8102E" fontSize="20" fontFamily="Arial" fontWeight="700">Panda Restaurant Group</text>
        </svg>
      )
    },
    {
      name: "Dick's Sporting Goods",
      svg: (
        <svg viewBox="0 0 240 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="15" width="45" height="30" rx="3" fill="#00653B"/>
          <text x="15" y="37" fill="white" fontSize="20" fontFamily="Arial" fontWeight="800">DICK'S</text>
          <text x="58" y="37" fill="#00653B" fontSize="20" fontFamily="Arial" fontWeight="700">Sporting Goods</text>
        </svg>
      )
    },
    {
      name: "Notion",
      svg: (
        <svg viewBox="0 0 140 60" fill="none" className="h-12 w-auto">
          <rect x="8" y="12" width="32" height="36" rx="3" fill="white" stroke="black" strokeWidth="2"/>
          <path d="M15 20h18M15 26h18M15 32h12" stroke="black" strokeWidth="2"/>
          <text x="48" y="37" fill="black" fontSize="26" fontFamily="Arial" fontWeight="600">Notion</text>
        </svg>
      )
    },
    {
      name: "Axon",
      svg: (
        <svg viewBox="0 0 130 60" fill="none" className="h-12 w-auto">
          <path d="M15 30L25 15L35 30L25 45L15 30Z" fill="#00B8D4"/>
          <text x="45" y="37" fill="#00B8D4" fontSize="28" fontFamily="Arial" fontWeight="700">AXON</text>
        </svg>
      )
    },
    {
      name: "TCS",
      svg: (
        <svg viewBox="0 0 165 60" fill="none" className="h-12 w-auto">
          <path d="M8 15L8 20L15 20L15 42L22 42L22 20L29 20L29 15L8 15Z" fill="url(#tcs-gradient-t)"/>
          <path d="M38 15C32 15 28 19 28 28C28 37 32 42 38 42C42 42 45 40 47 37L43 33C42 35 40 37 38 37C35 37 33 34 33 28C33 22 35 20 38 20C40 20 42 21 43 24L47 20C45 17 42 15 38 15Z" fill="url(#tcs-gradient-c)"/>
          <path d="M56 15C51 15 48 17 48 21C48 25 51 26 55 27C57 28 58 28 58 30C58 32 57 33 55 33C53 33 51 32 50 29L46 32C47 37 50 42 56 42C61 42 63 39 63 35C63 31 60 30 56 29C54 28 53 28 53 26C53 24 54 20 56 20C58 20 59 21 60 23L64 21C63 17 60 15 56 15Z" fill="url(#tcs-gradient-s)"/>
          <text x="75" y="24" fill="#0066B2" fontSize="10" fontFamily="Arial" fontWeight="700">TATA</text>
          <text x="75" y="35" fill="#0066B2" fontSize="8" fontFamily="Arial" fontWeight="500">CONSULTANCY</text>
          <text x="75" y="43" fill="#0066B2" fontSize="8" fontFamily="Arial" fontWeight="500">SERVICES</text>
          <defs>
            <linearGradient id="tcs-gradient-t" x1="8" y1="15" x2="29" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B35"/>
              <stop offset="100%" stopColor="#F7931E"/>
            </linearGradient>
            <linearGradient id="tcs-gradient-c" x1="28" y1="15" x2="47" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E91E8C"/>
              <stop offset="50%" stopColor="#C1328E"/>
              <stop offset="100%" stopColor="#9B59B6"/>
            </linearGradient>
            <linearGradient id="tcs-gradient-s" x1="48" y1="15" x2="64" y2="42" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#9B59B6"/>
              <stop offset="100%" stopColor="#8E44AD"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      name: "IQVIA",
      svg: (
        <svg viewBox="0 0 130 60" fill="none" className="h-12 w-auto">
          <circle cx="20" cy="30" r="14" fill="#7C2855"/>
          <path d="M25 24L30 30L25 36" stroke="white" strokeWidth="3" fill="none"/>
          <text x="40" y="37" fill="#7C2855" fontSize="28" fontFamily="Arial" fontWeight="700">IQVIA</text>
        </svg>
      )
    },
    {
      name: "Meta",
      svg: (
        <svg viewBox="0 0 125 60" fill="none" className="h-12 w-auto">
          <circle cx="22" cy="30" r="18" fill="#0866FF"/>
          <path d="M27 22v16h-3v-6h-4v-2.5h4v-2.5c0-2.5 1.5-4 4-4h2.5v2.5h-2c-1 0-1.5.5-1.5 1.5v2.5h3.5l-.5 2.5h-3z" fill="white"/>
          <text x="48" y="37" fill="#0866FF" fontSize="26" fontFamily="Arial" fontWeight="700">Meta</text>
        </svg>
      )
    },
    {
      name: "IBM",
      svg: (
        <svg viewBox="0 0 105 60" fill="none" className="h-12 w-auto">
          <text x="20" y="37" fill="#0530AD" fontSize="28" fontFamily="Arial" fontWeight="700">IBM</text>
        </svg>
      )
    },
    {
      name: "Intel",
      svg: (
        <svg viewBox="0 0 125 60" fill="none" className="h-12 w-auto">
          <circle cx="16" cy="30" r="10" fill="#0071C5"/>
          <path d="M10 38Q16 42 22 38" stroke="white" strokeWidth="2" fill="none"/>
          <text x="32" y="37" fill="#0071C5" fontSize="26" fontFamily="Arial" fontWeight="700">Intel</text>
        </svg>
      )
    },
    {
      name: "Salesforce",
      svg: (
        <svg viewBox="0 0 190 60" fill="none" className="h-12 w-auto">
          <ellipse cx="14" cy="28" rx="10" ry="8" fill="#00A1E0"/>
          <ellipse cx="32" cy="22" rx="12" ry="10" fill="#00A1E0"/>
          <ellipse cx="28" cy="36" rx="9" ry="7" fill="#00A1E0"/>
          <ellipse cx="46" cy="30" rx="11" ry="9" fill="#00A1E0"/>
          <text x="64" y="35" fill="#00A1E0" fontSize="22" fontFamily="Arial" fontWeight="700">Salesforce</text>
        </svg>
      )
    },
    {
      name: "Oracle",
      svg: (
        <svg viewBox="0 0 150 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="15" width="65" height="30" rx="15" stroke="#FF0000" strokeWidth="4" fill="none"/>
          <text x="78" y="37" fill="#FF0000" fontSize="24" fontFamily="Arial" fontWeight="700">Oracle</text>
        </svg>
      )
    },
    {
      name: "SAP",
      svg: (
        <svg viewBox="0 0 100 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="12" width="85" height="36" rx="4" fill="#008FD3"/>
          <text x="22" y="39" fill="white" fontSize="28" fontFamily="Arial" fontWeight="800">SAP</text>
        </svg>
      )
    },
    {
      name: "CVS",
      svg: (
        <svg viewBox="0 0 120 60" fill="none" className="h-12 w-auto">
          <text x="8" y="38" fill="#CC0000" fontSize="32" fontFamily="Arial" fontWeight="900">CVS</text>
        </svg>
      )
    },
    {
      name: "FedEx",
      svg: (
        <svg viewBox="0 0 130 60" fill="none" className="h-12 w-auto">
          <text x="5" y="38" fontSize="30" fontFamily="Arial" fontWeight="800">
            <tspan fill="#4D148C">Fed</tspan>
            <tspan fill="#FF6600">Ex</tspan>
          </text>
        </svg>
      )
    },
    {
      name: "UPS",
      svg: (
        <svg viewBox="0 0 120 60" fill="none" className="h-12 w-auto">
          <rect x="5" y="10" width="50" height="40" rx="3" fill="#351C15"/>
          <path d="M15 20h15v10c0 4-3 7-7.5 7S15 34 15 30V20z" fill="#FFB500"/>
          <text x="62" y="37" fill="#351C15" fontSize="28" fontFamily="Arial" fontWeight="800">UPS</text>
        </svg>
      )
    },
    {
      name: "Cisco",
      svg: (
        <svg viewBox="0 0 135 60" fill="none" className="h-12 w-auto">
          <rect x="8" y="18" width="3.5" height="16" rx="1.5" fill="#049FD9"/>
          <rect x="16" y="14" width="3.5" height="24" rx="1.5" fill="#049FD9"/>
          <rect x="24" y="12" width="3.5" height="28" rx="1.5" fill="#049FD9"/>
          <rect x="32" y="14" width="3.5" height="24" rx="1.5" fill="#049FD9"/>
          <rect x="40" y="18" width="3.5" height="16" rx="1.5" fill="#049FD9"/>
          <text x="52" y="35" fill="#049FD9" fontSize="24" fontFamily="Arial" fontWeight="700">Cisco</text>
        </svg>
      )
    },
    {
      name: "Dell",
      svg: (
        <svg viewBox="0 0 120 60" fill="none" className="h-12 w-auto">
          <circle cx="22" cy="30" r="18" fill="#007DB8"/>
          <text x="10" y="36" fill="white" fontSize="18" fontFamily="Arial" fontWeight="800">DELL</text>
          <text x="48" y="37" fill="#007DB8" fontSize="24" fontFamily="Arial" fontWeight="700">Dell</text>
        </svg>
      )
    },
    {
      name: "HP",
      svg: (
        <svg viewBox="0 0 100 60" fill="none" className="h-12 w-auto">
          <circle cx="25" cy="30" r="22" fill="#0096D6"/>
          <text x="10" y="38" fill="white" fontSize="28" fontFamily="Arial" fontWeight="800">hp</text>
          <text x="52" y="37" fill="#0096D6" fontSize="26" fontFamily="Arial" fontWeight="700">HP</text>
        </svg>
      )
    },
    {
      name: "Deloitte",
      svg: (
        <svg viewBox="0 0 150 60" fill="none" className="h-12 w-auto">
          <circle cx="20" cy="25" r="12" fill="#86BC25"/>
          <path d="M20 25L32 13" stroke="#86BC25" strokeWidth="8"/>
          <text x="42" y="35" fill="#000000" fontSize="24" fontFamily="Arial" fontWeight="700">Deloitte</text>
        </svg>
      )
    },
    {
      name: "Accenture",
      svg: (
        <svg viewBox="0 0 180 60" fill="none" className="h-12 w-auto">
          <path d="M10 35L20 15L30 35" stroke="#A100FF" strokeWidth="5" fill="none"/>
          <text x="40" y="35" fill="#A100FF" fontSize="22" fontFamily="Arial" fontWeight="700">Accenture</text>
        </svg>
      )
    },
    {
      name: "PwC",
      svg: (
        <svg viewBox="0 0 110 60" fill="none" className="h-12 w-auto">
          <text x="8" y="38" fill="#D93954" fontSize="30" fontFamily="Arial" fontWeight="700">PwC</text>
        </svg>
      )
    },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16 px-16">
        <h2 className="text-[#1A3D7C]">
          Our users have secured jobs at leading companies
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="py-8 shadow-sm">
          <div className="flex gap-16 animate-scroll-rtl">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 45s linear infinite;
          width: fit-content;
        }
      `}} />
    </section>
  );
}
