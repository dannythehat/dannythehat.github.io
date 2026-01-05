import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useWishlistContext } from '@/contexts/WishlistContext';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface WishlistButtonProps {
  holidayId: string;
  holidayTitle: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const WishlistButton = ({ holidayId, holidayTitle, className, size = 'md' }: WishlistButtonProps) => {
  const { toggleWishlist, isInWishlist } = useWishlistContext();
  const isWishlisted = isInWishlist(holidayId);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(holidayId);
    
    if (isWishlisted) {
      toast.info(`Removed from wishlist`, {
        description: holidayTitle,
      });
    } else {
      toast.success(`Added to wishlist`, {
        description: holidayTitle,
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={cn(
        'flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300',
        isWishlisted 
          ? 'bg-rose-500/90 text-white shadow-lg shadow-rose-500/30' 
          : 'bg-background/60 text-foreground/70 hover:bg-background/80 hover:text-rose-500',
        sizeClasses[size],
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart 
        size={iconSizes[size]} 
        className={cn(
          'transition-all duration-300',
          isWishlisted && 'fill-current'
        )} 
      />
    </motion.button>
  );
};

export default WishlistButton;
