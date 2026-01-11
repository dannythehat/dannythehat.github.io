import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Mountain, ExternalLink } from 'lucide-react';
import { Holiday } from '@/types/holiday';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { getDestinationImage } from '@/lib/destinationImages';
import WishlistButton from './WishlistButton';

interface HolidayCardProps {
  holiday: Holiday;
  index?: number;
  featured?: boolean;
}

const HolidayCard = ({ holiday, index = 0, featured = false }: HolidayCardProps) => {
  const difficultyColor = {
    Easy: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Moderate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Advanced: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    Challenging: 'bg-red-500/10 text-red-400 border-red-500/20',
    Expert: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    Extreme: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  }[holiday.difficulty] || 'bg-muted text-muted-foreground';

  const imageUrl = getDestinationImage(holiday.slug) || holiday.thumbnailUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl luxury-card border border-border/20 hover:border-secondary/30 transition-all duration-700
        ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <img
          src={imageUrl}
          alt={holiday.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Wishlist Button */}
        <div className="absolute top-4 right-14">
          <WishlistButton 
            holidayId={holiday.id} 
            holidayTitle={holiday.title}
            size="sm"
          />
        </div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className={`${difficultyColor} font-body text-xs backdrop-blur-md border`}>
            {holiday.difficulty}
          </Badge>
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-xl">
          <span className="text-secondary font-display text-lg font-semibold">
            ${holiday.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <MapPin size={14} className="text-secondary" />
          <span className="font-body tracking-wide">{holiday.location}</span>
        </div>

        <Link to={`/holidays/${holiday.slug}`}>
          <h3 className={`font-display text-foreground group-hover:text-secondary transition-colors duration-500 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
          }`}>
            {holiday.title}
          </h3>
        </Link>

        <p className="mt-2 text-secondary/80 font-display text-sm italic">
          {holiday.subtitle}
        </p>

        <p className={`mt-4 text-muted-foreground font-body text-sm leading-relaxed ${
          featured ? 'line-clamp-4' : 'line-clamp-3'
        }`}>
          {holiday.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-secondary/60" />
            <span className="font-body">{holiday.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain size={14} className="text-secondary/60" />
            <span className="font-body">{holiday.tags[0]}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-8">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/holidays/${holiday.slug}`}>
              View Details
            </Link>
          </Button>
          <Button variant="gold" size="sm" asChild>
            <a 
              href={holiday.affiliateLinks.gadventures || holiday.affiliateLinks.booking || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
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