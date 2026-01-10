import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Calendar, MapPin, Sparkles, BookOpen, Clock, Star } from 'lucide-react';
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
import SevenWonders from '@/components/SevenWonders';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo.png';
import { calendarImages } from '@/lib/calendarImages';

const typedHolidays = holidays as Holiday[];
const featuredHolidays = typedHolidays.filter(h => h.featured);
const featuredStories = (storiesData.stories as Story[]).filter(s => s.featured).slice(0, 3);

// 8K Quality Hero Images from Unsplash
const heroImages = {
  main: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=3840&q=95', // Maldives overwater bungalows at sunset
  island: 'https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=3840&q=95', // Aerial tropical island
  villa: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=3840&q=95', // Luxury overwater villa
  mountains: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=3840&q=95', // Epic mountain landscape
  aurora: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=3840&q=95', // Northern lights
  desert: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=3840&q=95', // Desert dunes sunset
};

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
  // Parallax refs and scroll progress
  const heroRef = useRef<HTMLElement>(null);
  const showcaseRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const { scrollYProgress: showcaseProgress } = useScroll({
    target: showcaseRef,
    offset: ["start end", "end start"]
  });
  
  // Hero parallax transforms
  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "30%"]);
  const heroImageScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const heroContentY = useTransform(heroProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  
  // Showcase parallax transforms
  const showcaseBgY = useTransform(showcaseProgress, [0, 1], ["0%", "15%"]);

  return (
    <>
      <SEOHead />
      <Navbar />
      
      <main>
        {/* Hero Section with stunning 8K tropical image + Parallax */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image - 8K Quality with Parallax */}
          <motion.div 
            className="absolute inset-0 will-change-transform"
            style={{ y: heroImageY, scale: heroImageScale }}
          >
            <img 
              src={heroImages.main}
              alt="Luxury tropical paradise at sunset" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20"
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <StarField />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-secondary/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          {/* Palm leaf decorations - Enhanced */}
          <div className="absolute top-0 left-0 w-80 h-80 opacity-30 pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <defs>
                <linearGradient id="palmGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(42 90% 60%)" />
                  <stop offset="100%" stopColor="hsl(42 70% 45%)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <path d="M0 0 Q50 80, 20 180 Q40 120, 80 100 Q30 90, 0 0" fill="url(#palmGold)" opacity="0.7" filter="url(#glow)" />
              <path d="M30 0 Q70 60, 50 150 Q60 100, 100 80 Q50 70, 30 0" fill="url(#palmGold)" opacity="0.5" filter="url(#glow)" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 opacity-30 pointer-events-none transform scale-x-[-1]">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path d="M0 0 Q50 80, 20 180 Q40 120, 80 100 Q30 90, 0 0" fill="url(#palmGold)" opacity="0.7" filter="url(#glow)" />
              <path d="M30 0 Q70 60, 50 150 Q60 100, 100 80 Q50 70, 30 0" fill="url(#palmGold)" opacity="0.5" filter="url(#glow)" />
            </svg>
          </div>
          
          <motion.div 
            className="container mx-auto px-4 pt-24 pb-16 relative z-10"
            style={{ y: heroContentY, opacity: heroOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Logo as hero centerpiece with glow effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8 relative"
              >
                <motion.div
                  className="absolute inset-0 blur-3xl opacity-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-full h-full bg-gradient-gold" />
                </motion.div>
                <img 
                  src={logoImage} 
                  alt="Beyond Ordinary" 
                  className="h-48 md:h-64 lg:h-80 w-auto mx-auto drop-shadow-2xl relative z-10"
                />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl font-display italic text-foreground/95 mb-2"
              >
                Where Wander Meets Wonder
              </motion.p>
              
              {/* Star rating decoration */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-1 mb-6"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">Curated Excellence</span>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-muted-foreground font-body max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
              >
                Curated journeys to Earth's most extraordinary places. From unnamed Arctic peaks 
                to ancient tribal kingdoms—adventures that transform perspective and ignite the soul.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="gold" size="lg" className="text-base px-10 h-16 text-lg shadow-2xl shadow-secondary/50" asChild>
                  <Link to="/holidays">
                    Explore Destinations
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-base border-secondary/50 hover:border-secondary h-16 bg-background/30 backdrop-blur-md text-lg" asChild>
                  <a href="#featured">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Stories
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Scroll Indicator - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-secondary/50 flex justify-center pt-2 backdrop-blur-sm bg-background/10"
              >
                <motion.div 
                  className="w-1.5 h-2.5 rounded-full bg-secondary"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Stats Bar */}
        <StatsBar />

        {/* Image Showcase Section - 8K Quality with Parallax */}
        <section ref={showcaseRef} className="py-24 bg-background relative overflow-hidden">
          {/* Background decoration with parallax */}
          <motion.div 
            className="absolute inset-0 opacity-30 will-change-transform"
            style={{ y: showcaseBgY }}
          >
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-secondary font-body tracking-[0.3em] uppercase text-xs mb-4 block">
                Visual Journey
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-4">
                Destinations That{' '}
                <span className="text-gradient-gold italic">Defy Description</span>
              </h2>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                Every image tells a story. Every destination transforms a life.
              </p>
              <div className="section-divider mt-8" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Image 1 - Island Aerial */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/5] shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={heroImages.island}
                  alt="Private island aerial view" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Private Islands
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">Secluded Paradise Awaits</h3>
                </div>
              </motion.div>
              
              {/* Image 2 - Overwater Villa */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/5] shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <img 
                  src={heroImages.villa}
                  alt="Luxury overwater villa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Overwater Luxury
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">Wake Up in Paradise</h3>
                </div>
              </motion.div>

              {/* Image 3 - Mountains */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/5] shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <img 
                  src={heroImages.mountains}
                  alt="Epic mountain landscape" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Mountain Majesty
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">Touch the Sky</h3>
                </div>
              </motion.div>

              {/* Image 4 - Aurora */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/5] shadow-2xl md:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <img 
                  src={heroImages.aurora}
                  alt="Northern lights dancing over Arctic landscape" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Arctic Wonders
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground">Dance with the Aurora</h3>
                </div>
              </motion.div>

              {/* Image 5 - Desert */}
              <motion.div 
                className="relative rounded-2xl overflow-hidden group aspect-[4/5] shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <img 
                  src={heroImages.desert}
                  alt="Desert dunes at golden hour" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary font-body text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Desert Dreams
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">Endless Horizons</h3>
                </div>
              </motion.div>
            </div>
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
                    className="group block relative overflow-hidden rounded-2xl aspect-[4/5] hover-scale shadow-2xl"
                  >
                    <img 
                      src={calendarImages[festival.monthId]} 
                      alt={festival.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm shadow-lg">
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

        {/* 7 Wonders of the World */}
        <SevenWonders />

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
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 h-full hover:border-secondary/50 transition-all duration-300 p-6 hover:shadow-2xl">
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

        {/* CTA Section - Enhanced */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImages.main}
              alt="Call to action background" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto border-secondary/30 shadow-2xl"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-16 h-16 text-secondary mx-auto mb-6" />
              </motion.div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Transform Your Travel?
              </h2>
              <p className="mt-4 text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Join thousands of adventurers who've discovered that the most memorable 
                journeys happen beyond the guidebooks.
              </p>
              <Button variant="gold" size="lg" className="mt-10 px-12 h-16 text-lg shadow-2xl shadow-secondary/50" asChild>
                <Link to="/holidays">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-6 h-6" />
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