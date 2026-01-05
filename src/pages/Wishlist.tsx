import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Trash2, ArrowRight } from 'lucide-react';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import { Button } from '@/components/ui/button';
import { useWishlistContext } from '@/contexts/WishlistContext';

const typedHolidays = holidays as Holiday[];

const Wishlist = () => {
  const { wishlist, clearWishlist, wishlistCount } = useWishlistContext();

  const wishlistedHolidays = typedHolidays.filter(h => wishlist.includes(h.id));

  return (
    <>
      <SEOHead
        title="My Wishlist"
        description="Your saved dream destinations from Beyond Ordinary"
      />
      <Navbar />

      <main className="pt-24 min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-500/20 mb-6">
              <Heart className="w-8 h-8 text-rose-500 fill-current" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              My Wishlist
            </h1>
            <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
              {wishlistCount === 0 
                ? "You haven't saved any destinations yet. Start exploring and save the ones that call to you."
                : `You have ${wishlistCount} dream destination${wishlistCount === 1 ? '' : 's'} saved.`
              }
            </p>
            
            {wishlistCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-4 text-muted-foreground hover:text-destructive"
                onClick={clearWishlist}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            )}
          </motion.div>

          {wishlistCount === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="glass-card rounded-2xl p-12 max-w-lg mx-auto">
                <p className="text-muted-foreground font-body mb-6">
                  Your wishlist is empty. Browse our extraordinary destinations and click the heart to save your favorites.
                </p>
                <Button variant="gold" asChild>
                  <Link to="/holidays">
                    Explore Destinations
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistedHolidays.map((holiday, index) => (
                <HolidayCard 
                  key={holiday.id} 
                  holiday={holiday} 
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Wishlist;
