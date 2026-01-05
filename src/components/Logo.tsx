import { motion } from 'framer-motion';
import logoImage from '@/assets/logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className = '', size = 'md' }: LogoProps) => {
  const sizes = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
  };

  return (
    <motion.div 
      className={`${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      <img 
        src={logoImage} 
        alt="Beyond Ordinary - Where Wander Meets Wonder" 
        className={`${sizes[size]} w-auto object-contain`}
      />
    </motion.div>
  );
};

export default Logo;
