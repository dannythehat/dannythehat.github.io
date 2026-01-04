import { motion } from 'framer-motion';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {/* Hot air balloon dissolving into stars */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          {/* Balloon body */}
          <defs>
            <linearGradient id="balloonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(245 60% 55%)" />
              <stop offset="50%" stopColor="hsl(280 60% 50%)" />
              <stop offset="100%" stopColor="hsl(38 85% 55%)" />
            </linearGradient>
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(38 85% 55%)" />
              <stop offset="100%" stopColor="hsl(45 90% 70%)" />
            </linearGradient>
          </defs>
          
          {/* Main balloon */}
          <ellipse cx="16" cy="16" rx="10" ry="12" fill="url(#balloonGradient)" opacity="0.9" />
          
          {/* Basket */}
          <rect x="12" y="28" width="8" height="4" rx="1" fill="hsl(38 70% 45%)" />
          <line x1="12" y1="28" x2="14" y2="24" stroke="hsl(38 70% 45%)" strokeWidth="0.5" />
          <line x1="20" y1="28" x2="18" y2="24" stroke="hsl(38 70% 45%)" strokeWidth="0.5" />
          
          {/* Stars dissolving from balloon */}
          <circle cx="28" cy="8" r="1.5" fill="url(#starGradient)" className="animate-star-twinkle" />
          <circle cx="34" cy="12" r="1" fill="url(#starGradient)" className="animate-star-twinkle" style={{ animationDelay: '0.5s' }} />
          <circle cx="32" cy="18" r="1.2" fill="url(#starGradient)" className="animate-star-twinkle" style={{ animationDelay: '1s' }} />
          <circle cx="36" cy="6" r="0.8" fill="url(#starGradient)" className="animate-star-twinkle" style={{ animationDelay: '1.5s' }} />
          <circle cx="30" cy="4" r="0.6" fill="url(#starGradient)" className="animate-star-twinkle" style={{ animationDelay: '2s' }} />
          
          {/* Particle trail */}
          <circle cx="24" cy="10" r="0.4" fill="hsl(280 60% 60%)" opacity="0.6" />
          <circle cx="26" cy="14" r="0.3" fill="hsl(280 60% 60%)" opacity="0.5" />
          <circle cx="25" cy="6" r="0.3" fill="hsl(280 60% 60%)" opacity="0.4" />
        </svg>
      </div>
      
      <div className="flex flex-col">
        <span className="font-display text-xl font-semibold tracking-wide text-gradient-gold">
          Beyond Ordinary
        </span>
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
          Where Wander Meets Wonder
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
