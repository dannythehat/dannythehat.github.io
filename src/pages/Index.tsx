import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Mountain, Globe } from 'lucide-react';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import StarField from '@/components/StarField';
import { Button } from '@/components/ui/button';

const typedHolidays = holidays as Holiday[];
const featuredHolidays = typedHolidays.filter(h => h.featured);

const Index = () => {
  return (
    <>
      <SEOHead />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
          <StarField />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          
          <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-secondary font-body tracking-[0.3em] uppercase text-sm mb-6"
              >
                Escape the Expected
              </motion.p>
              
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-foreground">Travel</span>
                <br />
                <span className="text-gradient-mystical">Beyond Ordinary</span>
              </h1>
              
              <p className="mt-8 text-xl md:text-2xl font-display italic text-foreground/80">
                Where Wander Meets Wonder
              </p>
              
              <p className="mt-6 text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed">
                Curated journeys to Earth's most extraordinary places. From unnamed Arctic peaks 
                to ancient tribal kingdoms—adventures that transform perspective.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="gold" size="lg" className="text-base px-8" asChild>
                  <Link to="/holidays">
                    Explore Destinations
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base border-border/50 hover:border-secondary" asChild>
                  <a href="#featured">View Featured</a>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
              >
                <div className="w-1 h-2 rounded-full bg-secondary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Strip */}
        <section className="bg-muted/30 py-8 border-y border-border/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { icon: Compass, text: "Hand-picked destinations" },
                { icon: Mountain, text: "Expert-led expeditions" },
                { icon: Globe, text: "Sustainable travel" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-secondary" />
                  <span className="font-body text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Holidays */}
        <section id="featured" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-secondary font-body tracking-widest uppercase text-sm mb-4">
                Featured Journeys
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Extraordinary Escapes
              </h2>
              <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
                Our most breathtaking adventures, carefully selected for those who dare 
                to venture beyond the ordinary.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredHolidays.map((holiday, index) => (
                <HolidayCard 
                  key={holiday.id} 
                  holiday={holiday} 
                  index={index}
                  featured={index === 0}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="mystical" size="lg" asChild>
                <Link to="/holidays">
                  View All Destinations
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mystical opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Ready to Transform Your Travel?
              </h2>
              <p className="mt-4 text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                Join thousands of adventurers who've discovered that the most memorable 
                journeys happen beyond the guidebooks.
              </p>
              <Button variant="gold" size="lg" className="mt-8" asChild>
                <Link to="/holidays">
                  Start Your Journey
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
