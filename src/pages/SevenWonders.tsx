import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Landmark, MapPin, Camera, Award } from 'lucide-react';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import StarField from '@/components/StarField';

const typedHolidays = holidays as Holiday[];

// Filter for Seven Wonders and UNESCO sites
const wonderHolidays = typedHolidays.filter(h => 
  h.tags?.includes('unesco') || 
  h.title.toLowerCase().includes('machu picchu') ||
  h.title.toLowerCase().includes('petra') ||
  h.title.toLowerCase().includes('taj mahal')
);

const SevenWonders = () => {
  return (
    <>
      <SEOHead
        title="Seven Wonders of the World & UNESCO Sites"
        description="Visit the New Seven Wonders of the World and UNESCO World Heritage Sites. From Machu Picchu to Petra, experience humanity's greatest achievements."
      />
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-hero overflow-hidden">
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Landmark className="w-8 h-8 text-accent" />
                <p className="text-secondary font-body tracking-widest uppercase text-sm">
                  World Heritage
                </p>
                <Landmark className="w-8 h-8 text-accent" />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
                The Seven Wonders
                <span className="text-gradient-gold block mt-2">& UNESCO Treasures</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                Stand before humanity's greatest architectural and natural achievements. 
                From ancient civilizations to modern marvels, these sites represent the 
                pinnacle of human creativity, engineering, and cultural significance.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
            >
              <div className="text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">7</div>
                <div className="text-sm text-muted-foreground">New Wonders</div>
              </div>
              <div className="text-center">
                <Landmark className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">1,100+</div>
                <div className="text-sm text-muted-foreground">UNESCO Sites</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">167</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <Camera className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">Photo Ops</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The New Seven Wonders */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The New Seven Wonders
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  Chosen by over 100 million votes in 2007, these monuments represent 
                  the world's most iconic and culturally significant structures.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Machu Picchu', location: 'Peru', available: true },
                  { name: 'Petra', location: 'Jordan', available: false },
                  { name: 'Christ the Redeemer', location: 'Brazil', available: false },
                  { name: 'Great Wall of China', location: 'China', available: false },
                  { name: 'Taj Mahal', location: 'India', available: false },
                  { name: 'Colosseum', location: 'Italy', available: false },
                  { name: 'Chichén Itzá', location: 'Mexico', available: false },
                ].map((wonder, index) => (
                  <motion.div
                    key={wonder.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-lg border ${
                      wonder.available 
                        ? 'bg-accent/5 border-accent/20' 
                        : 'bg-muted/30 border-muted-foreground/10'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">
                          {wonder.name}
                        </h3>
                        <p className="text-muted-foreground font-body text-sm flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {wonder.location}
                        </p>
                      </div>
                      {wonder.available && (
                        <span className="px-3 py-1 bg-accent text-background text-xs font-semibold rounded-full">
                          Available
                        </span>
                      )}
                      {!wonder.available && (
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Visit Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Why These Sites Matter
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  These aren't just tourist attractions—they're testaments to human 
                  ingenuity, spirituality, and the desire to create something that 
                  transcends time.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Landmark className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Historical Significance
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Walk where ancient civilizations thrived. Touch stones placed by 
                    hands thousands of years ago. Feel the weight of history.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Architectural Mastery
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Marvel at engineering feats that still baffle modern scientists. 
                    Precision, beauty, and scale that defies explanation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Bucket List Moments
                  </h3>
                  <p className="text-muted-foreground font-body">
                    These are the places you've dreamed about since childhood. 
                    Seeing them in person is a life-defining experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Destinations */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Available Wonder Experiences
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                {wonderHolidays.length} extraordinary journeys to world heritage sites
              </p>
            </motion.div>

            {wonderHolidays.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body text-lg mb-4">
                  Wonder experiences coming soon!
                </p>
                <Link 
                  to="/holidays"
                  className="inline-block px-8 py-3 bg-accent text-background font-body font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  Explore All Destinations
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wonderHolidays.map((holiday, index) => (
                  <HolidayCard 
                    key={holiday.id} 
                    holiday={holiday} 
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Start Your Wonder Journey
              </h2>
              <p className="text-xl text-muted-foreground font-body mb-8">
                These sites have waited centuries for you. Don't wait any longer to 
                experience them. Expert guides, small groups, and unforgettable moments await.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/holidays"
                  className="px-8 py-4 bg-accent text-background font-body font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                >
                  View All Destinations
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-background/10 backdrop-blur-sm text-foreground font-body font-semibold rounded-lg border border-foreground/20 hover:bg-background/20 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SevenWonders;