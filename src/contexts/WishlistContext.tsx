import { createContext, useContext, ReactNode } from 'react';
import { useWishlist } from '@/hooks/useWishlist';

type WishlistContextType = ReturnType<typeof useWishlist>;

const WishlistContext = createContext<WishlistContextType | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const wishlistState = useWishlist();

  return (
    <WishlistContext.Provider value={wishlistState}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlistContext must be used within WishlistProvider');
  }
  return context;
};
