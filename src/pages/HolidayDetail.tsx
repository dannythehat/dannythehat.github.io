import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Mountain, ArrowLeft, Check, Calendar, 
  ExternalLink, ChevronRight 
} from 'lucide-react';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const typedHolidays = holidays as Holiday[];

const HolidayDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const holiday = typedHolidays.find(h => h.slug === slug);

  if (!holiday) {
    return <Navigate to="/holidays" replace />;
  }

  const difficultyColor = {
    Easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Moderate: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Advanced: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Challenging: 'bg-red-500/20 text-red-400 border-red-500/30',
    Expert: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Extreme: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }[holiday.difficulty] || 'bg-muted text-muted-foreground';

  return (
    <>
      <SEOHead
        title={`${holiday.title} - ${holiday.location}`}
        description={holiday.description}
        image={holiday.imageUrl}
        url={`https://beyondordinary.travel/holidays/${holiday.slug}`}
        type="article"
      />
      <Navbar />

      <main className="pt-20">
        {/* Hero Image */}
        <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={holiday.imageUrl}
            alt={holiday.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to="/holidays" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 font-body text-sm"
              >
                <ArrowLeft size={16} />
                Back to Destinations
              </Link>
              
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="outline" className={`${difficultyColor} font-body`}>
                  {holiday.difficulty}
                </Badge>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin size={14} className="text-secondary" />
                  <span className="font-body">{holiday.location}</span>
                </div>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                {holiday.title}
              </h1>
              <p className="mt-2 text-xl md:text-2xl font-display italic text-foreground/80">
                {holiday.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                    The Journey
                  </h2>
                  <p className="text-foreground/90 font-body leading-relaxed text-lg">
                    {holiday.longDescription}
                  </p>
                </motion.div>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {holiday.highlights.map((highlight, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30"
                      >
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="font-body text-foreground/90">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Itinerary */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Itinerary
                  </h2>
                  <div className="space-y-4">
                    {holiday.itinerary.map((day, index) => (
                      <div 
                        key={index}
                        className="relative pl-8 pb-8 border-l-2 border-border/30 last:pb-0"
                      >
                        <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-gold" />
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span className="font-body text-sm text-muted-foreground">
                            Day {day.day}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {day.title}
                        </h3>
                        <p className="mt-1 font-body text-foreground/80">
                          {day.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="sticky top-28 space-y-6"
                >
                  {/* Price Card */}
                  <div className="glass-card rounded-2xl p-6 border border-border/30">
                    <div className="text-center mb-6">
                      <p className="text-muted-foreground font-body text-sm">From</p>
                      <p className="text-4xl font-display font-bold text-gradient-gold">
                        ${holiday.price.toLocaleString()}
                      </p>
                      <p className="text-muted-foreground font-body text-sm">per person</p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between py-2 border-b border-border/20">
                        <span className="font-body text-muted-foreground">Duration</span>
                        <span className="font-body text-foreground">{holiday.duration}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border/20">
                        <span className="font-body text-muted-foreground">Difficulty</span>
                        <span className="font-body text-foreground">{holiday.difficulty}</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="font-body text-muted-foreground">Location</span>
                        <span className="font-body text-foreground text-right">{holiday.location}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button variant="gold" className="w-full" size="lg" asChild>
                        <a 
                          href={holiday.affiliateLinks.booking} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Book on Booking.com
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="mystical" className="w-full" size="lg" asChild>
                        <a 
                          href={holiday.affiliateLinks.viator} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Book on Viator
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {holiday.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="font-body text-xs capitalize"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Destinations CTA */}
        <section className="py-16 bg-muted/20 border-t border-border/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Explore More Adventures
            </h2>
            <Button variant="outline" asChild>
              <Link to="/holidays">
                View All Destinations
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HolidayDetail;
