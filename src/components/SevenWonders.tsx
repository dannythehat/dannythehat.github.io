import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ExternalLink, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// The New 7 Wonders of the World (2007) - all are visitable
const sevenWonders = [
  {
    name: "Great Wall of China",
    location: "China",
    description: "The world's longest man-made structure stretching over 13,000 miles across northern China.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    visitInfo: "Multiple sections open year-round. Mutianyu & Badaling most accessible.",
    link: "https://www.viator.com/Great-Wall-of-China/d22140-ttd"
  },
  {
    name: "Petra",
    location: "Jordan",
    description: "Ancient rose-red city carved into cliffs, featuring the iconic Treasury temple.",
    image: "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?w=800&q=80",
    visitInfo: "Open daily. Night tours available on Mon, Wed, Thu.",
    link: "https://www.viator.com/Petra/d970-ttd"
  },
  {
    name: "Christ the Redeemer",
    location: "Rio de Janeiro, Brazil",
    description: "Iconic Art Deco statue of Jesus overlooking Rio from Corcovado mountain.",
    image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?w=800&q=80",
    visitInfo: "Open daily 8am-7pm. Train or van access available.",
    link: "https://www.viator.com/Rio-de-Janeiro-attractions/Christ-the-Redeemer-Statue/d712-a806"
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    description: "15th-century Incan citadel perched high in the Andes Mountains.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    visitInfo: "Requires advance booking. Daily visitor limits apply.",
    link: "https://www.viator.com/Machu-Picchu/d5087-ttd"
  },
  {
    name: "Chichen Itza",
    location: "Mexico",
    description: "Ancient Mayan city featuring the stunning El Castillo pyramid.",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80",
    visitInfo: "Open daily 8am-5pm. Equinox events in March & September.",
    link: "https://www.viator.com/Chichen-Itza/d23379-ttd"
  },
  {
    name: "Colosseum",
    location: "Rome, Italy",
    description: "Ancient Roman amphitheater that once hosted gladiatorial contests.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    visitInfo: "Open daily. Underground & arena floor tours available.",
    link: "https://www.viator.com/Rome-attractions/Colosseum/d511-a18"
  },
  {
    name: "Taj Mahal",
    location: "Agra, India",
    description: "Marble mausoleum built by Emperor Shah Jahan for his beloved wife.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    visitInfo: "Open sunrise to sunset (closed Fridays). Best at dawn.",
    link: "https://www.viator.com/Agra-attractions/Taj-Mahal/d4553-a785"
  }
];

const SevenWonders = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
            <Crown className="w-4 h-4 text-secondary" />
            <span className="text-sm font-body text-secondary">Bucket List</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            7 Wonders of the World
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Visit humanity's greatest architectural achievements—all open for exploration
          </p>
        </motion.div>

        {/* Scrollable grid on mobile, 4+3 layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {sevenWonders.slice(0, 4).map((wonder, index) => (
            <motion.div
              key={wonder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={wonder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
              >
                <img 
                  src={wonder.image} 
                  alt={wonder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Wonder Number Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="font-display text-lg text-background font-bold">{index + 1}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="font-body text-xs">{wonder.location}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {wonder.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2 mb-3">
                    {wonder.description}
                  </p>
                  <div className="text-xs text-secondary/80 font-body">
                    ⏰ {wonder.visitInfo}
                  </div>
                  
                  {/* Book Now Arrow */}
                  <div className="mt-3 flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="font-body text-sm font-medium">Book Tours</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Second row - 3 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sevenWonders.slice(4).map((wonder, index) => (
            <motion.div
              key={wonder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 4) * 0.1 }}
            >
              <a
                href={wonder.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] hover:scale-[1.02] transition-transform duration-300 shadow-2xl"
              >
                <img 
                  src={wonder.image} 
                  alt={wonder.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Wonder Number Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="font-display text-lg text-background font-bold">{index + 5}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <MapPin className="w-3 h-3" />
                    <span className="font-body text-xs">{wonder.location}</span>
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {wonder.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground line-clamp-2 mb-3">
                    {wonder.description}
                  </p>
                  <div className="text-xs text-secondary/80 font-body">
                    ⏰ {wonder.visitInfo}
                  </div>
                  
                  {/* Book Now Arrow */}
                  <div className="mt-3 flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="font-body text-sm font-medium">Book Tours</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </a>
            </motion.div>
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
              Explore All Destinations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SevenWonders;
