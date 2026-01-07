import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Calendar, MapPin, Sparkles, BookOpen, Clock } from 'lucide-react';
import holidays from '@/data/holidays.json';
import calendarData from '@/data/calendarEvents.json';
import storiesData from '@/data/stories.json';
import { Story } from '@/types/story';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import StarField from '@/components/StarField';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import NewsletterSignup from '@/components/NewsletterSignup';
import StatsBar from '@/components/StatsBar';
import UKStaysPreview from '@/components/UKStaysPreview';
import { Button } from '@/components/ui/button';
import heroTropical from '@/assets/hero-tropical.jpg';
import islandAerial from '@/assets/island-aerial.jpg';
import overwaterVilla from '@/assets/overwater-villa.jpg';
import logoImage from '@/assets/logo.png';
import { calendarImages } from '@/lib/calendarImages';

const typedHolidays = holidays as Holiday[];
const featuredHolidays = typedHolidays.filter(h => h.featured);
const featuredStories = (storiesData.stories as Story[]).filter(s => s.featured).slice(0, 3);

// 3 Featured Festivals - the most visually spectacular
const featuredFestivals = [
  { 
    name: "Holi Festival", 
    location: "India", 
    dates: "March 25", 
    monthId: 3,
    description: "Explode into color during the world's most vibrant celebration",
    image: "march"
  },
  { 
    name: "Rio Carnival", 
    location: "Brazil", 
    dates: "February 9-17", 
    monthId: 2,
    description: "Samba through the streets in Earth's greatest party",
    image: "february"
  },
  { 
    name: "Burning Man", 
    location: "Nevada, USA", 
    dates: "August 25 - September 2", 
    monthId: 8,
    description: "Join 80,000 souls in the desert's most surreal gathering",
    image: "august"
  }
];

const Index = () => {
  return (
    <>
      <SEOHead />
      <Navbar />
      
      <main>
        {/* Hero Section with stunning tropical image */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroTropical} 
              alt="Luxury tropical paradise at night" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
          </div>
          
          <StarField />
          
          {/* Palm leaf decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-40 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="palmGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(42 80% 55%)" />
                  <stop offset="100%" stopColor="hsl(42 60% 40%)" />
                </linearGradient>
              </defs>
              <path d="M0 0 Q50 80, 20 180 Q40 120, 80 100 Q30 90, 0 0" fill="url(#palmGold)" opacity="0.6" />
              <path d="M30 0 Q70 60, 50 150 Q60 100, 100 80 Q50 70, 30 0" fill="url(#palmGold)" opacity="0.4" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-40 pointer-events-none transform scale-x-[-1]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M0 0 Q50 80, 20 180 Q40 120, 80 100 Q30 90, 0 0" fill="url(#palmGold)" opacity="0.6" />
              <path d="M30 0 Q70 60, 50 150 Q60 100, 100 80 Q50 70, 30 0" fill="url(#palmGold)" opacity="0.4" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Logo as hero centerpiece */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8"
              >
                <img 
                  src={logoImage} 
                  alt="Beyond Ordinary" 
                  className="h-48 md:h-64 lg:h-80 w-auto mx-auto drop-shadow-2xl"
                />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl font-display italic text-foreground/90"
              >
                Where Wander Meets Wonder
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-muted-foreground font-body max-w-2xl mx-auto text-lg leading-relaxed"
              >
                Curated journeys to Earth's most extraordinary places. From unnamed Arctic peaks 
                to ancient tribal kingdoms—adventures that transform perspective.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="gold" size="lg" className="text-base px-8 h-14" asChild>
                  <Link to="/holidays">
                    Explore Destinations
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base border-secondary/50 hover:border-secondary h-14 bg-background/20 backdrop-blur-sm" asChild>
                  <a href="#featured">
                    <Play className="mr-2 w-4 h-4" />
                    Watch Stories
                  </a>
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
                className="w-6 h-10 rounded-full border-2 border-secondary/40 flex justify-center pt-2"
              >
                <div className="w-1 h-2 rounded-full bg-secondary" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* Image Showcase Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={islandAerial} 
                  alt="Private island aerial view" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2">Private Islands</p>
                  <h3 className="font-display text-2xl text-foreground">Secluded Paradise Awaits</h3>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={overwaterVilla} 
                  alt="Luxury overwater villa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2">Overwater Luxury</p>
                  <h3 className="font-display text-2xl text-foreground">Wake Up in Paradise</h3>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Festivals Section */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body text-secondary">Must-See Events</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
                World's Greatest Festivals
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                Three extraordinary celebrations that will transform how you see the world
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredFestivals.map((festival, index) => (
                <motion.div
                  key={festival.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Link 
                    to="/calendar" 
                    className="group block relative overflow-hidden rounded-2xl aspect-[4/5] hover-scale"
                  >
                    <img 
                      src={calendarImages[festival.monthId]} 
                      alt={festival.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm">
                        <span className="font-body text-sm text-background font-medium">{festival.dates}</span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 text-secondary mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-body text-sm">{festival.location}</span>
                      </div>
                      <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {festival.name}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground line-clamp-2">
                        {festival.description}
                      </p>
                      
                      {/* Explore Arrow */}
                      <div className="mt-4 flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                        <span className="font-body text-sm">Explore Festival</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button variant="mystical" size="lg" asChild>
                <Link to="/calendar">
                  <Calendar className="mr-2 w-5 h-5" />
                  View Full Calendar
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
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

        {/* UK Stays Preview Section */}
        <UKStaysPreview />

        {/* Featured Stories Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
                <BookOpen className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body text-secondary">Travel Stories</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
                Stories from the Edge
              </h2>
              <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
                First-person accounts from destinations that changed us forever
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/stories/${story.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 h-full hover:border-secondary/50 transition-all duration-300 p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
                      
                      <div className="relative">
                        <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-body mb-4">
                          {story.category}
                        </span>
                        
                        <h3 className="font-display text-xl text-foreground group-hover:text-secondary transition-colors mb-3">
                          {story.title}
                        </h3>
                        
                        <p className="text-muted-foreground font-body text-sm line-clamp-3 mb-4">
                          {story.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{story.readTime}</span>
                          </div>
                          <span className="text-secondary group-hover:underline">Read story →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Button variant="mystical" size="lg" asChild>
                <Link to="/stories">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Read All Stories
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <NewsletterSignup />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-ocean opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto border-secondary/20"
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
