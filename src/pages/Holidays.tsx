import { useState } from 'react';
import { motion } from 'framer-motion';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HolidayCard from '@/components/HolidayCard';
import StarField from '@/components/StarField';
import SearchFilter from '@/components/SearchFilter';

const typedHolidays = holidays as Holiday[];

const Holidays = () => {
  const [filteredHolidays, setFilteredHolidays] = useState<Holiday[]>(typedHolidays);

  return (
    <>
      <SEOHead
        title="Extraordinary Destinations"
        description="Explore our curated collection of the world's most unique travel experiences. From Arctic expeditions to jungle treks."
      />
      <Navbar />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 bg-gradient-hero overflow-hidden">
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <p className="text-secondary font-body tracking-widest uppercase text-sm mb-4">
                {typedHolidays.length} Extraordinary Journeys
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground">
                Destinations That
                <span className="text-gradient-gold block mt-2">Defy Imagination</span>
              </h1>
              <p className="mt-6 text-muted-foreground font-body text-lg">
                Each journey is selected for its ability to transform perspective 
                and create memories that last a lifetime.
              </p>
            </motion.div>

            {/* Search & Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <SearchFilter 
                holidays={typedHolidays} 
                onFilter={setFilteredHolidays} 
              />
            </motion.div>
          </div>
        </section>

        {/* Holiday Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {filteredHolidays.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground font-body text-lg mb-4">
                  No destinations match your criteria.
                </p>
                <p className="text-muted-foreground/60 font-body text-sm">
                  Try adjusting your filters or search term.
                </p>
              </motion.div>
            ) : (
              <>
                <p className="text-muted-foreground font-body text-sm mb-8">
                  Showing {filteredHolidays.length} destination{filteredHolidays.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredHolidays.map((holiday, index) => (
                    <HolidayCard 
                      key={holiday.id} 
                      holiday={holiday} 
                      index={index}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Holidays;
