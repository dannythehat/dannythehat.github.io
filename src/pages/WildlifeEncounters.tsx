import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Binoculars, Heart, Shield, Camera } from 'lucide-react';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import StarField from '@/components/StarField';

const typedHolidays = holidays as Holiday[];

// Filter for wildlife destinations
const wildlifeHolidays = typedHolidays.filter(h => 
  h.tags?.includes('wildlife') || 
  h.tags?.includes('conservation') ||
  h.tags?.includes('primates') ||
  h.tags?.includes('nature')
);

const WildlifeEncounters = () => {
  return (
    <>
      <SEOHead
        title="Wildlife Encounters & Conservation Travel"
        description="Face-to-face with mountain gorillas, swim with Galápagos sea lions, witness Antarctic penguins. Ethical wildlife experiences that support conservation."
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
                <Binoculars className="w-8 h-8 text-accent" />
                <p className="text-secondary font-body tracking-widest uppercase text-sm">
                  Conservation Travel
                </p>
                <Binoculars className="w-8 h-8 text-accent" />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
                Wildlife Encounters
                <span className="text-gradient-gold block mt-2">That Change Lives</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                Lock eyes with a silverback gorilla. Swim alongside Galápagos sea lions. 
                Watch penguin colonies in Antarctica. These aren't just wildlife sightings—
                they're profound connections with nature that inspire conservation.
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
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Ethical</div>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">$1M+</div>
                <div className="text-sm text-muted-foreground">To Conservation</div>
              </div>
              <div className="text-center">
                <Binoculars className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Species</div>
              </div>
              <div className="text-center">
                <Camera className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-display font-bold text-foreground">∞</div>
                <div className="text-sm text-muted-foreground">Memories</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Wildlife Travel Section */}
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
                  Why Wildlife Encounters Matter
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  When you witness endangered species in their natural habitat, something 
                  shifts inside you. You become an advocate, a storyteller, and a guardian 
                  of the wild places that remain.
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
                    <Shield className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Conservation Impact
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Every permit purchased funds anti-poaching efforts, habitat protection, 
                    and local communities. Your visit directly protects endangered species.
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
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    Ethical Encounters
                  </h3>
                  <p className="text-muted-foreground font-body">
                    Strict guidelines ensure animal welfare. No touching, feeding, or 
                    disrupting natural behaviors. Observe, respect, protect.
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
                    Once-in-a-Lifetime
                  </h3>
                  <p className="text-muted-foreground font-body">
                    These species are critically endangered. The opportunity to see them 
                    may not exist for future generations. Witness them now.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Species */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Iconic Species You'll Encounter
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'Mountain Gorillas', population: '<1,000', status: 'Critically Endangered' },
                { name: 'Galápagos Tortoises', population: '15,000', status: 'Vulnerable' },
                { name: 'Antarctic Penguins', population: 'Millions', status: 'Threatened' },
                { name: 'Sea Lions', population: 'Varies', status: 'Protected' },
              ].map((species, index) => (
                <motion.div
                  key={species.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-background border border-muted-foreground/10"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {species.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    Population: {species.population}
                  </p>
                  <p className="text-xs text-accent font-semibold">
                    {species.status}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wildlife Destinations */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured Wildlife Experiences
              </h2>
              <p className="text-muted-foreground font-body text-lg">
                {wildlifeHolidays.length} extraordinary encounters with nature
              </p>
            </motion.div>

            {wildlifeHolidays.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground font-body text-lg mb-4">
                  Wildlife experiences coming soon!
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
                {wildlifeHolidays.map((holiday, index) => (
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
                Become a Wildlife Guardian
              </h2>
              <p className="text-xl text-muted-foreground font-body mb-8">
                These species need advocates. Your visit funds their protection. Your 
                stories inspire others. Your presence makes a difference.
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
                  Our Conservation Commitment
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

export default WildlifeEncounters;