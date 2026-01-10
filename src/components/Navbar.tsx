import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Calendar, BookOpen, Home, Info, Sparkles, Landmark, Binoculars, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';
import { useWishlistContext } from '@/contexts/WishlistContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const location = useLocation();
  const { wishlistCount } = useWishlistContext();

  const categoryLinks = [
    { path: '/festivals', label: 'Festivals', icon: Sparkles },
    { path: '/seven-wonders', label: 'Seven Wonders', icon: Landmark },
    { path: '/wildlife', label: 'Wildlife', icon: Binoculars },
  ];

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/holidays', label: 'All Destinations' },
    { path: '/uk-stays', label: 'UK Stays', icon: Home },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/stories', label: 'Stories', icon: BookOpen },
    { path: '/about', label: 'About', icon: Info },
    { path: '/wishlist', label: 'Wishlist', icon: Heart, badge: wishlistCount },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isCategoryActive = categoryLinks.some(link => location.pathname === link.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="transition-transform duration-300 hover:scale-105">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group flex items-center gap-2"
              >
                <span className={`font-body text-sm tracking-wider transition-all duration-500 ${
                  isActive(link.path) 
                    ? 'text-foreground' 
                    : 'text-muted-foreground group-hover:text-foreground'
                }`}>
                  {link.label}
                </span>
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent transition-all duration-500 ${
                    isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                />
              </Link>
            ))}

            {/* Categories Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              <button className="flex items-center gap-2 font-body text-sm tracking-wider text-muted-foreground hover:text-foreground transition-all duration-500">
                <span className={isCategoryActive ? 'text-foreground' : ''}>Categories</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${showCategories ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showCategories && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 glass-card border border-secondary/10 rounded-lg shadow-xl overflow-hidden"
                  >
                    {categoryLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                          isActive(link.path)
                            ? 'bg-accent/10 text-accent'
                            : 'text-muted-foreground hover:bg-muted/30 hover:text-foreground'
                        }`}
                      >
                        <link.icon size={16} />
                        <span className="font-body text-sm">{link.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group flex items-center gap-2"
              >
                {link.icon && (
                  <link.icon 
                    size={15} 
                    className={`transition-all duration-500 ${
                      isActive(link.path) 
                        ? 'text-secondary' 
                        : 'text-muted-foreground group-hover:text-secondary'
                    } ${link.badge ? 'fill-current' : ''}`}
                  />
                )}
                <span className={`font-body text-sm tracking-wider transition-all duration-500 ${
                  isActive(link.path) 
                    ? 'text-foreground' 
                    : 'text-muted-foreground group-hover:text-foreground'
                }`}>
                  {link.label}
                </span>
                {link.badge !== undefined && link.badge > 0 && (
                  <span className="absolute -top-2 -right-4 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-body font-medium">
                    {link.badge}
                  </span>
                )}
                <motion.div
                  className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent transition-all duration-500 ${
                    isActive(link.path) ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`}
                />
              </Link>
            ))}
            <Button variant="gold" size="sm" className="ml-4" asChild>
              <Link to="/holidays">Explore Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Wishlist Icon */}
            <Link to="/wishlist" className="relative p-2">
              <Heart 
                size={22} 
                className={`transition-all duration-500 ${
                  isActive('/wishlist') ? 'text-secondary fill-current' : 'text-muted-foreground'
                }`}
              />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-body font-medium">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button
              className="p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden glass-card border-t border-secondary/10"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-body text-lg py-3 px-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      isActive(link.path) 
                        ? 'text-foreground bg-secondary/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    {link.icon && <link.icon size={18} className={link.badge ? 'text-secondary' : ''} />}
                    {link.label}
                    {link.badge !== undefined && link.badge > 0 && (
                      <span className="ml-auto text-sm text-secondary font-medium">({link.badge})</span>
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Categories */}
              <div className="mt-4 mb-2 px-4 text-xs font-body tracking-widest uppercase text-muted-foreground">
                Categories
              </div>
              {categoryLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + index) * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-body text-lg py-3 px-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      isActive(link.path) 
                        ? 'text-foreground bg-accent/10' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                    }`}
                  >
                    <link.icon size={18} />
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Button variant="gold" className="mt-6 w-full" asChild>
                  <Link to="/holidays" onClick={() => setIsOpen(false)}>
                    Explore Now
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;