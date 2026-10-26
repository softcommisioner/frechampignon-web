import React from 'react';

interface ImigongoDividerProps {
  className?: string;
  variant?: 'subtle' | 'bold' | 'arch';
}

export const ImigongoDivider: React.FC<ImigongoDividerProps> = ({
  className = '',
  variant = 'subtle',
}) => {
  if (variant === 'arch') {
    return (
      <div className={`flex items-center justify-center my-4 overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 320 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-auto text-[#6D3B1E] opacity-90"
        >
          {/* Central diamond */}
          <path
            d="M 160 2 L 174 16 L 160 30 L 146 16 Z"
            stroke="currentColor"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M 160 8 L 168 16 L 160 24 L 152 16 Z"
            stroke="#9C5127"
            strokeWidth="1.5"
            fill="#FAF3EC"
          />
          <circle cx="160" cy="16" r="2" fill="#6D3B1E" />

          {/* Left Wing Geometric Chevrons */}
          <path
            d="M 138 6 L 126 16 L 138 26 M 120 6 L 108 16 L 120 26 M 102 6 L 90 16 L 102 26 M 84 6 L 72 16 L 84 26 M 66 6 L 54 16 L 66 26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="48" y1="16" x2="10" y2="16" stroke="#9C5127" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="6" cy="16" r="2" fill="#6D3B1E" />

          {/* Right Wing Geometric Chevrons */}
          <path
            d="M 182 6 L 194 16 L 182 26 M 200 6 L 212 16 L 200 26 M 218 6 L 230 16 L 218 26 M 236 6 L 248 16 L 236 26 M 254 6 L 266 16 L 254 26"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line x1="272" y1="16" x2="310" y2="16" stroke="#9C5127" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="314" cy="16" r="2" fill="#6D3B1E" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center my-6 overflow-hidden ${className}`}>
      <div className="w-full flex items-center justify-center gap-1.5 opacity-80">
        <span className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#8C4F2B]/40 to-[#5C3217]/60" />
        <svg
          viewBox="0 0 100 20"
          className="h-4 w-24 text-[#5C3217] shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Traditional Imigongo diamond cluster */}
          <polygon points="50,2 60,10 50,18 40,10" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <polygon points="50,5 56,10 50,15 44,10" fill="#9C5127" />
          <polyline points="32,4 24,10 32,16" stroke="currentColor" strokeWidth="1.3" />
          <polyline points="20,5 14,10 20,15" stroke="#9C5127" strokeWidth="1.2" />
          <polyline points="68,4 76,10 68,16" stroke="currentColor" strokeWidth="1.3" />
          <polyline points="80,5 86,10 80,15" stroke="#9C5127" strokeWidth="1.2" />
        </svg>
        <span className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-[#8C4F2B]/40 to-[#5C3217]/60" />
      </div>
    </div>
  );
};
