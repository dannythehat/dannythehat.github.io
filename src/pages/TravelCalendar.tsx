import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { calendarImages } from '@/lib/calendarImages';
import calendarData from '@/data/calendarEvents.json';

interface Festival {
  name: string;
  location: string;
  dates: string;
  highlight?: boolean;
}

interface MonthData {
  id: number;
  name: string;
  theme: string;
  description: string;
  festivals: Festival[];
}

const TravelCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1);
  const months = calendarData.months as MonthData[];
  const currentMonthData = months.find(m => m.id === selectedMonth)!;

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedMonth(prev => prev === 1 ? 12 : prev - 1);
    } else {
      setSelectedMonth(prev => prev === 12 ? 1 : prev + 1);
    }
  };

  return (
    <>
      <SEOHead 
        title="Travel Calendar - World Festivals & Events | Beyond Ordinary"
        description="Discover the world's most spectacular festivals and events. Plan your extraordinary journey around Holi, Rio Carnival, Oktoberfest, and more."
      />
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body text-secondary">Plan Your Journey by Season</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl text-gradient-gold mb-6">
                Travel Calendar
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover extraordinary festivals and events around the world. 
                Time your adventures to experience humanity's most spectacular celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Month Navigator */}
        <section className="py-8 border-y border-border/20 bg-card/30 backdrop-blur-sm sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigateMonth('prev')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide">
                {months.map((month) => (
                  <button
                    key={month.id}
                    onClick={() => setSelectedMonth(month.id)}
                    className={`px-4 py-2 rounded-full font-body text-sm whitespace-nowrap transition-all duration-300 ${
                      selectedMonth === month.id
                        ? 'bg-gradient-gold text-background shadow-gold'
                        : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/20'
                    }`}
                  >
                    {month.name}
                  </button>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => navigateMonth('next')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Month Display */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMonth}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image Side */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-mystical rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <img 
                      src={calendarImages[selectedMonth]} 
                      alt={`${currentMonthData.name} - ${currentMonthData.theme}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Month Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-secondary/30">
                        <span className="font-display text-2xl text-gradient-gold">{currentMonthData.name}</span>
                      </div>
                    </div>
                    
                    {/* Theme Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                        {currentMonthData.theme}
                      </h2>
                      <p className="font-body text-muted-foreground">
                        {currentMonthData.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Festivals List Side */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-8">
                    <Calendar className="w-6 h-6 text-secondary" />
                    <h3 className="font-display text-2xl text-foreground">Featured Festivals & Events</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {currentMonthData.festivals.map((festival, index) => (
                      <motion.div
                        key={festival.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative p-5 rounded-xl border transition-all duration-300 hover:shadow-card cursor-pointer ${
                          festival.highlight 
                            ? 'bg-gradient-card border-secondary/30 shadow-gold/20' 
                            : 'bg-card/50 border-border/20 hover:border-border/40'
                        }`}
                      >
                        {festival.highlight && (
                          <div className="absolute -top-2 -right-2">
                            <Star className="w-5 h-5 text-secondary fill-secondary" />
                          </div>
                        )}
                        
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h4 className={`font-display text-lg mb-1 ${
                              festival.highlight ? 'text-gradient-gold' : 'text-foreground'
                            }`}>
                              {festival.name}
                            </h4>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span className="font-body text-sm">{festival.location}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="font-body text-sm text-secondary">{festival.dates}</span>
                          </div>
                        </div>
                        
                        {/* Placeholder for future vacation links */}
                        <div className="mt-3 pt-3 border-t border-border/20 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-muted-foreground font-body">
                            Vacation packages coming soon...
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Year Overview Grid */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl text-gradient-silver mb-4">
                Explore All Months
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Click any month to discover its unique festivals and plan your extraordinary adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {months.map((month, index) => (
                <motion.button
                  key={month.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setSelectedMonth(month.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className={`group relative overflow-hidden rounded-xl aspect-[4/3] ${
                    selectedMonth === month.id ? 'ring-2 ring-secondary ring-offset-2 ring-offset-background' : ''
                  }`}
                >
                  <img 
                    src={calendarImages[month.id]} 
                    alt={month.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                    <h3 className="font-display text-xl text-foreground mb-1">{month.name}</h3>
                    <p className="font-body text-xs text-muted-foreground line-clamp-1">{month.theme}</p>
                    <div className="mt-2 flex items-center gap-1 text-secondary">
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs">{month.festivals.length} events</span>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-display text-4xl text-gradient-gold mb-6">
                Ready to Experience These Festivals?
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Browse our curated destinations and find the perfect adventure to pair with these extraordinary events.
              </p>
              <Button variant="mystical" size="lg" asChild>
                <Link to="/holidays">Explore Destinations</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TravelCalendar;
