import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import holidays from '@/data/holidays.json';
import { Holiday } from '@/types/holiday';

interface CategoryPreviewProps {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  link: string;
  gradient?: string;
}

const typedHolidays = holidays as Holiday[];

const CategoryPreview = ({ 
  title, 
  description, 
  category, 
  icon: Icon, 
  link,
  gradient = "from-secondary/10 to-primary/10"
}: CategoryPreviewProps) => {
  // Get holidays for this category - filter by tags since category doesn't exist
  const categoryHolidays = typedHolidays
    .filter(h => h.tags?.some(tag => tag.toLowerCase().includes(category.toLowerCase())))
    .slice(0, 3);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className={`absolute top-20 right-10 w-96 h-96 bg-gradient-to-br ${gradient} rounded-full blur-3xl animate-pulse-slow`} />
        <div className={`absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br ${gradient} rounded-full blur-3xl animate-pulse-slow`} style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
            <Icon className="w-4 h-4 text-secondary" />
            <span className="text-sm font-body text-secondary">{category}</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {categoryHolidays.map((holiday, index) => (
            <motion.div
              key={holiday.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link 
                to={`/holidays/${holiday.slug}`}
                className="group block relative overflow-hidden rounded-2xl aspect-[4/5] hover-scale shadow-2xl"
              >
                <img 
                  src={holiday.thumbnailUrl}
                  alt={holiday.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-secondary/90 backdrop-blur-sm shadow-lg">
                    <span className="font-body text-sm text-background font-medium">
                      From ${holiday.price.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <span className="font-body text-sm">{holiday.location}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {holiday.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-2">
                    {holiday.description}
                  </p>
                  
                  {/* Explore Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="font-body text-sm">Explore</span>
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
            <Link to={link}>
              <Icon className="mr-2 w-5 h-5" />
              View All {category}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryPreview;