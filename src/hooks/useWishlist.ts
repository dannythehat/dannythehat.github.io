import { useState, useEffect, useCallback } from 'react';

const WISHLIST_STORAGE_KEY = 'beyond-ordinary-wishlist';

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (stored) {
        setWishlist(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading wishlist:', error);
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (error) {
      console.error('Error saving wishlist:', error);
    }
  }, [wishlist]);

  const addToWishlist = useCallback((holidayId: string) => {
    setWishlist(prev => {
      if (prev.includes(holidayId)) return prev;
      return [...prev, holidayId];
    });
  }, []);

  const removeFromWishlist = useCallback((holidayId: string) => {
    setWishlist(prev => prev.filter(id => id !== holidayId));
  }, []);

  const toggleWishlist = useCallback((holidayId: string) => {
    setWishlist(prev => {
      if (prev.includes(holidayId)) {
        return prev.filter(id => id !== holidayId);
      }
      return [...prev, holidayId];
    });
  }, []);

  const isInWishlist = useCallback((holidayId: string) => {
    return wishlist.includes(holidayId);
  }, [wishlist]);

  const clearWishlist = useCallback(() => {
    setWishlist([]);
  }, []);

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: wishlist.length,
  };
};
