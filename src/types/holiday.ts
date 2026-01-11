export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface AffiliateLinks {
  gadventures?: string;
  booking?: string;
  viator?: string;
}

export interface Holiday {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  longDescription: string;
  price: number;
  currency: string;
  duration: string;
  difficulty: string;
  imageUrl: string;
  thumbnailUrl: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  affiliateLinks: AffiliateLinks;
  tags: string[];
  featured: boolean;
  category?: string;
}
