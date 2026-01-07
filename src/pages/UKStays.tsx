import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Sparkles, TreePine, Home } from 'lucide-react';
import ukStaysData from '@/data/ukStays.json';
import { UKStay } from '@/types/ukStay';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const typedUKStays = ukStaysData as UKStay[];

const UKStays = () => {
  const featuredStays = typedUKStays.filter(stay => stay.featured);
  const allStays = typedUKStays;

  // Group stays by region
  const staysByRegion = allStays.reduce((acc, stay) => {
    if (!acc[stay.region]) {
      acc[stay.region] = [];
    }
    acc[stay.region].push(stay);
    return acc;
  }, {} as Record<string, UKStay[]>);

  return (
    <>
      <SEOHead 
        title="UK Unique Stays | Treehouses, Yurts & Extraordinary Accommodations"
        description="Discover the UK's most extraordinary stays. From award-winning treehouses to luxury yurts, find your perfect escape in England, Scotland, and Wales."
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <TreePine className="w-8 h-8 text-primary" />
                <Home className="w-8 h-8 text-primary" />
              </div>
              
              <h1 className="font-display text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                UK Unique Stays
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-body mb-8">
                Treehouses, Yurts & Extraordinary Escapes Across Britain
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From RIBA award-winning treehouses suspended in ancient woodland to luxury Mongolian yurts 
                with private hot tubs—discover the UK's most extraordinary places to stay.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Stays */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-12">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl">Featured Stays</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredStays.map((stay, index) => (
                <motion.div
                  key={stay.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/uk-stays/${stay.slug}`}>
                    <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                      <img 
                        src={stay.thumbnailUrl} 
                        alt={stay.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Tags */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {stay.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="capitalize">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl group-hover:text-primary transition-colors">
                        {stay.title}
                      </h3>
                      <p className="text-sm text-muted-foreground italic">{stay.subtitle}</p>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{stay.location}</span>
                      </div>
                      
                      <p className="text-muted-foreground line-clamp-2">
                        {stay.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <span className="text-2xl font-bold text-primary">£{stay.price}</span>
                          <span className="text-sm text-muted-foreground ml-2">{stay.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{stay.capacity}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stays by Region */}
        {Object.entries(staysByRegion).map(([region, stays]) => (
          <section key={region} className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl md:text-4xl mb-8">{region}</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stays.map((stay, index) => (
                  <motion.div
                    key={stay.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/uk-stays/${stay.slug}`}>
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                        <img 
                          src={stay.thumbnailUrl} 
                          alt={stay.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {stay.tags.slice(0, 2).map(tag => (
                            <Badge key={tag} variant="secondary" className="capitalize">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="font-display text-xl group-hover:text-primary transition-colors">
                          {stay.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{stay.location}</span>
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {stay.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <span className="text-xl font-bold text-primary">£{stay.price}</span>
                            <span className="text-xs text-muted-foreground ml-2">per night</span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Users className="w-3 h-3" />
                            <span>{stay.capacity}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Ready for Your UK Adventure?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Each stay supports sustainable tourism and local communities. Book your extraordinary escape today.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/holidays">
                Explore Worldwide Adventures
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default UKStays;
