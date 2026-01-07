import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, TreePine, Home } from 'lucide-react';
import ukStaysData from '@/data/ukStays.json';
import { UKStay } from '@/types/ukStay';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const typedUKStays = ukStaysData as UKStay[];
const featuredUKStays = typedUKStays.filter(stay => stay.featured).slice(0, 3);

const UKStaysPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
            <TreePine className="w-4 h-4 text-primary" />
            <Home className="w-4 h-4 text-primary" />
            <span className="text-sm font-body text-primary">UK Unique Stays</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            Extraordinary UK Escapes
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            From award-winning treehouses to luxury yurts—discover Britain's most extraordinary places to stay
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredUKStays.map((stay, index) => (
            <motion.div
              key={stay.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/uk-stays/${stay.slug}`}
                className="group block h-full"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                  <img 
                    src={stay.thumbnailUrl} 
                    alt={stay.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {stay.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="capitalize">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary-foreground" />
                    </div>
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
                  
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-primary">£{stay.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">per night</span>
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
            <Link to="/uk-stays">
              <TreePine className="mr-2 w-5 h-5" />
              Explore All UK Stays
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UKStaysPreview;
