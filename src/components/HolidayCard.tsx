import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mountain, ExternalLink } from 'lucide-react';
import { Holiday } from '@/types/holiday';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface HolidayCardProps {
  holiday: Holiday;
  index?: number;
  featured?: boolean;
}

const HolidayCard = ({ holiday, index = 0, featured = false }: HolidayCardProps) => {
  const difficultyColor = {
    Easy: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    Moderate: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    Advanced: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    Challenging: 'bg-red-500/20 text-red-400 border-red-500/30',
    Expert: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Extreme: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }[holiday.difficulty] || 'bg-muted text-muted-foreground';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-card border border-border/30 shadow-card
        ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={holiday.thumbnailUrl}
          alt={holiday.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className={`${difficultyColor} font-body text-xs backdrop-blur-sm`}>
            {holiday.difficulty}
          </Badge>
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4 glass-card px-3 py-1.5 rounded-full">
          <span className="text-secondary font-display font-semibold">
            ${holiday.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <MapPin size={14} className="text-secondary" />
          <span className="font-body">{holiday.location}</span>
        </div>

        <Link to={`/holidays/${holiday.slug}`}>
          <h3 className={`font-display font-semibold text-foreground group-hover:text-secondary transition-colors duration-300 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {holiday.title}
          </h3>
        </Link>

        <p className="mt-2 text-muted-foreground font-body text-sm italic">
          {holiday.subtitle}
        </p>

        <p className={`mt-4 text-foreground/80 font-body text-sm leading-relaxed ${
          featured ? 'line-clamp-4' : 'line-clamp-3'
        }`}>
          {holiday.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock size={14} />
            <span className="font-body">{holiday.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mountain size={14} />
            <span className="font-body">{holiday.tags[0]}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-6">
          <Button variant="mystical" size="sm" className="flex-1" asChild>
            <Link to={`/holidays/${holiday.slug}`}>
              View Details
            </Link>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <a 
              href={holiday.affiliateLinks.booking} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              Book <ExternalLink size={12} />
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
};

export default HolidayCard;
