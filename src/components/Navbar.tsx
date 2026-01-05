import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';
import { useWishlistContext } from '@/contexts/WishlistContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { wishlistCount } = useWishlistContext();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/holidays', label: 'Destinations' },
    { path: '/wishlist', label: 'Wishlist', icon: Heart, badge: wishlistCount },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group flex items-center gap-1.5"
              >
                {link.icon && (
                  <link.icon 
                    size={16} 
                    className={`transition-colors duration-300 ${
                      isActive(link.path) 
                        ? 'text-rose-500' 
                        : 'text-foreground/70 group-hover:text-rose-500'
                    } ${link.badge ? 'fill-current' : ''}`}
                  />
                )}
                <span className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-secondary' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}>
                  {link.label}
                </span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-body">
                    {link.badge}
                  </span>
                )}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full"
                  />
                )}
              </Link>
            ))}
            <Button variant="mystical" size="sm" asChild>
              <Link to="/holidays">Explore Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Wishlist Icon */}
            <Link to="/wishlist" className="relative p-2">
              <Heart 
                size={22} 
                className={`transition-colors ${
                  isActive('/wishlist') ? 'text-rose-500 fill-current' : 'text-foreground/70'
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-body">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-border/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-lg py-2 transition-colors flex items-center gap-2 ${
                    isActive(link.path) 
                      ? 'text-secondary' 
                      : 'text-foreground/70'
                  }`}
                >
                  {link.icon && <link.icon size={18} className={link.badge ? 'text-rose-500 fill-current' : ''} />}
                  {link.label}
                  {link.badge !== undefined && link.badge > 0 && (
                    <span className="ml-auto text-sm text-muted-foreground">({link.badge})</span>
                  )}
                </Link>
              ))}
              <Button variant="mystical" className="mt-4" asChild>
                <Link to="/holidays" onClick={() => setIsOpen(false)}>
                  Explore Now
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
