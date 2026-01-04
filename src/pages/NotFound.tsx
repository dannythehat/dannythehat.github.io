import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Compass } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead title="Page Not Found" />
      <Navbar />
      
      <main className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
        <StarField />
        
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-8xl md:text-9xl font-display font-bold text-gradient-mystical mb-8">
              404
            </p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Lost in the Wilderness
            </h1>
            <p className="text-muted-foreground font-body text-lg mb-8">
              Even the most seasoned explorers sometimes wander off the path. 
              This destination doesn't exist—but thousands of real adventures await.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/">
                  <Home className="mr-2 w-5 h-5" />
                  Return Home
                </Link>
              </Button>
              <Button variant="mystical" size="lg" asChild>
                <Link to="/holidays">
                  <Compass className="mr-2 w-5 h-5" />
                  Explore Destinations
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default NotFound;
