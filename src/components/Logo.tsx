import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

const Logo = ({ className = '', size = 'md', showTagline = true }: LogoProps) => {
  const sizes = {
    sm: { icon: 32, text: 'text-lg', tagline: 'text-[8px]' },
    md: { icon: 44, text: 'text-xl', tagline: 'text-[10px]' },
    lg: { icon: 56, text: 'text-2xl', tagline: 'text-xs' },
  };

  const { icon, text, tagline } = sizes[size];

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Compass + Hot air balloon hybrid icon */}
      <div className="relative" style={{ width: icon, height: icon }}>
        <svg viewBox="0 0 56 56" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(245 60% 55%)" />
              <stop offset="50%" stopColor="hsl(280 60% 50%)" />
              <stop offset="100%" stopColor="hsl(38 85% 55%)" />
            </linearGradient>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38 85% 55%)" />
              <stop offset="100%" stopColor="hsl(45 90% 70%)" />
            </linearGradient>
            <linearGradient id="indigoGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(245 60% 65%)" />
              <stop offset="100%" stopColor="hsl(245 60% 45%)" />
            </linearGradient>
          </defs>
          
          {/* Outer ring - compass style */}
          <circle 
            cx="28" cy="28" r="25" 
            fill="none" 
            stroke="url(#logoGradient)" 
            strokeWidth="1.5"
            opacity="0.6"
          />
          
          {/* Compass points */}
          <path d="M28 4 L30 10 L28 8 L26 10 Z" fill="url(#goldGradient)" />
          <path d="M28 52 L26 46 L28 48 L30 46 Z" fill="url(#goldGradient)" opacity="0.5" />
          <path d="M4 28 L10 26 L8 28 L10 30 Z" fill="url(#goldGradient)" opacity="0.5" />
          <path d="M52 28 L46 30 L48 28 L46 26 Z" fill="url(#goldGradient)" opacity="0.5" />
          
          {/* Hot air balloon - stylized */}
          <ellipse 
            cx="28" cy="24" rx="12" ry="14" 
            fill="url(#indigoGradient)"
          />
          
          {/* Balloon pattern - decorative stripes */}
          <path 
            d="M20 18 Q28 10 36 18" 
            fill="none" 
            stroke="url(#goldGradient)" 
            strokeWidth="1.5"
            opacity="0.8"
          />
          <path 
            d="M18 24 Q28 16 38 24" 
            fill="none" 
            stroke="url(#goldGradient)" 
            strokeWidth="1"
            opacity="0.6"
          />
          <path 
            d="M20 30 Q28 24 36 30" 
            fill="none" 
            stroke="url(#goldGradient)" 
            strokeWidth="0.8"
            opacity="0.4"
          />
          
          {/* Balloon basket ropes */}
          <line x1="22" y1="36" x2="24" y2="42" stroke="hsl(38 70% 50%)" strokeWidth="0.8" />
          <line x1="34" y1="36" x2="32" y2="42" stroke="hsl(38 70% 50%)" strokeWidth="0.8" />
          
          {/* Basket */}
          <rect x="23" y="42" width="10" height="5" rx="1.5" fill="url(#goldGradient)" />
          
          {/* Stars floating from balloon */}
          <g className="animate-star-twinkle">
            <circle cx="42" cy="14" r="1.5" fill="url(#goldGradient)" />
          </g>
          <g className="animate-star-twinkle" style={{ animationDelay: '0.5s' }}>
            <circle cx="46" cy="20" r="1" fill="url(#goldGradient)" />
          </g>
          <g className="animate-star-twinkle" style={{ animationDelay: '1s' }}>
            <circle cx="44" cy="28" r="1.2" fill="url(#goldGradient)" />
          </g>
          <g className="animate-star-twinkle" style={{ animationDelay: '1.5s' }}>
            <circle cx="48" cy="10" r="0.8" fill="url(#goldGradient)" />
          </g>
          
          {/* Sparkle particles */}
          <circle cx="40" cy="16" r="0.4" fill="hsl(280 60% 70%)" opacity="0.7" />
          <circle cx="43" cy="24" r="0.3" fill="hsl(280 60% 70%)" opacity="0.5" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`font-display ${text} font-bold tracking-wide text-foreground`}>
            Beyond
          </span>
          <span className={`font-display ${text} font-bold tracking-wide text-gradient-gold`}>
            Ordinary
          </span>
        </div>
        {showTagline && (
          <span className={`${tagline} tracking-[0.25em] uppercase text-muted-foreground font-body mt-0.5`}>
            Where Wander Meets Wonder
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default Logo;
