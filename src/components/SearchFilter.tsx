import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Holiday } from '@/types/holiday';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SearchFilterProps {
  holidays: Holiday[];
  onFilter: (filtered: Holiday[]) => void;
}

const difficultyLevels = ['Easy', 'Moderate', 'Advanced', 'Challenging', 'Expert', 'Extreme'];
const allTags = ['skiing', 'arctic', 'aurora', 'extreme', 'wilderness', 'cycling', 'mountains', 
  'adventure', 'wildlife', 'trekking', 'conservation', 'jungle', 'train', 'desert', 'sahara',
  'island', 'nature', 'beaches', 'photography', 'camping', 'geological', 'unique', 'cultural',
  'indigenous', 'remote', 'history', 'volcano', 'running', 'political', 'urban', 'bucket-list'];

const SearchFilter = ({ holidays, onFilter }: SearchFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const applyFilters = () => {
    let filtered = holidays;

    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(h => 
        h.title.toLowerCase().includes(term) ||
        h.location.toLowerCase().includes(term) ||
        h.description.toLowerCase().includes(term) ||
        h.tags.some(t => t.toLowerCase().includes(term))
      );
    }

    // Difficulty
    if (selectedDifficulties.length > 0) {
      filtered = filtered.filter(h => selectedDifficulties.includes(h.difficulty));
    }

    // Tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter(h => 
        h.tags.some(t => selectedTags.includes(t))
      );
    }

    // Price
    filtered = filtered.filter(h => 
      h.price >= priceRange[0] && h.price <= priceRange[1]
    );

    onFilter(filtered);
  };

  const toggleDifficulty = (diff: string) => {
    setSelectedDifficulties(prev => 
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDifficulties([]);
    setSelectedTags([]);
    setPriceRange([0, 10000]);
    onFilter(holidays);
  };

  const hasActiveFilters = searchTerm || selectedDifficulties.length > 0 || 
    selectedTags.length > 0 || priceRange[0] > 0 || priceRange[1] < 10000;

  // Apply filters whenever they change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setTimeout(() => applyFilters(), 0);
  };

  return (
    <div className="w-full space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search destinations, locations, or activities..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            onKeyUp={applyFilters}
            className="pl-12 h-12 bg-card border-border/50 focus:border-secondary text-foreground placeholder:text-muted-foreground"
          />
        </div>
        <Button
          variant={showFilters ? 'mystical' : 'outline'}
          size="lg"
          onClick={() => setShowFilters(!showFilters)}
          className="h-12 px-6"
        >
          <SlidersHorizontal className="w-5 h-5 mr-2" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 w-2 h-2 rounded-full bg-secondary" />
          )}
        </Button>
      </div>

      {/* Expanded Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="glass-card rounded-2xl p-6 space-y-6">
              {/* Difficulty Filter */}
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-3">
                  Difficulty Level
                </h4>
                <div className="flex flex-wrap gap-2">
                  {difficultyLevels.map(diff => (
                    <Badge
                      key={diff}
                      variant={selectedDifficulties.includes(diff) ? 'default' : 'outline'}
                      className={`cursor-pointer transition-all ${
                        selectedDifficulties.includes(diff) 
                          ? 'bg-secondary text-secondary-foreground' 
                          : 'hover:border-secondary'
                      }`}
                      onClick={() => { toggleDifficulty(diff); setTimeout(applyFilters, 0); }}
                    >
                      {diff}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Tags Filter */}
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-3">
                  Adventure Type
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['extreme', 'wildlife', 'cultural', 'nature', 'photography', 'trekking', 'unique'].map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? 'default' : 'outline'}
                      className={`cursor-pointer capitalize transition-all ${
                        selectedTags.includes(tag) 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:border-primary'
                      }`}
                      onClick={() => { toggleTag(tag); setTimeout(applyFilters, 0); }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground mb-3">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}+
                </h4>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    placeholder="Min"
                    value={priceRange[0]}
                    onChange={(e) => {
                      setPriceRange([parseInt(e.target.value) || 0, priceRange[1]]);
                      setTimeout(applyFilters, 0);
                    }}
                    className="w-32 bg-muted/50"
                  />
                  <span className="text-muted-foreground self-center">to</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    value={priceRange[1]}
                    onChange={(e) => {
                      setPriceRange([priceRange[0], parseInt(e.target.value) || 10000]);
                      setTimeout(applyFilters, 0);
                    }}
                    className="w-32 bg-muted/50"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-2 border-t border-border/30">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All
                </Button>
                <Button variant="gold" size="sm" onClick={applyFilters}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchFilter;
