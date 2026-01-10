import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Music, Users, Sparkles } from 'lucide-react';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import StarField from '@/components/StarField';

const typedHolidays = holidays as Holiday[];

// Filter for festival destinations
const festivalHolidays = typedHolidays.filter(h => 
  h.tags?.includes('festival') || h.tags?.includes('celebration')
);

const Festivals = () => {
  return (
    <>
      <SEOHead
        title="World Festivals & Cultural Celebrations"
        description="Experience the world's most vibrant festivals—from Rio Carnival to Holi in India. Join millions in celebration and create unforgettable memories."
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
                <Sparkles className="w-8 h-8 text-accent" />
                <p className="text-secondary font-body tracking-widest uppercase text-sm">
                  Cultural Celebrations
                </p>
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
                Join the World's
                <span className="text-gradient-gold block mt-2">Greatest Festivals</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                From Rio's explosive Carnival to India's colorful Holi, experience humanity's 
                most joyous celebrations. Dance in the streets, connect with locals, and 
                understand cultures through their most sacred and spirited traditions.
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
                <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">12+</div>
                <div className="text-sm text-muted-foreground">Annual Festivals</div>
              </div>
              <div className="text-center">
                <Music className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">Millions</div>
                <div className="text-sm text-muted-foreground">Participants</div>
              </div>
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Unforgettable</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Festivals Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Why Experience Festivals?
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  Festivals reveal the soul of a culture—the music, food, traditions, and 
                  values that define a people. They're moments when strangers become friends, 
                  barriers dissolve, and pure joy takes over.
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
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Cultural Immersion
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Experience traditions passed down through generations. Understand the 
                    spiritual and historical significance behind each celebration.
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
                    <Music className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Pure Joy
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Dance in the streets, throw colored powder, watch spectacular parades. 
                    These are moments of uninhibited celebration.
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
                    <Sparkles className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Lifelong Memories
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Festival experiences stay with you forever. The colors, sounds, and 
                    connections become stories you'll tell for years.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Festival Destinations */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured Festival Experiences
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                {festivalHolidays.length} extraordinary celebrations around the world
              </p>
            </motion.div>

            {festivalHolidays.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body text-lg mb-4">
                  Festival experiences coming soon!
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
                {festivalHolidays.map((holiday, index) => (
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
                Ready to Celebrate?
              </h2>
              <p className="text-xl text-muted-foreground font-body mb-8">
                Join us for the world's most incredible festivals. Limited spots available 
                for each celebration—book early to secure your place.
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

export default Festivals;