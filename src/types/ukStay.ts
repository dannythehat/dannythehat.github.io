export interface UKStay {
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
  capacity: string;
  imageUrl: string;
  thumbnailUrl: string;
  highlights: string[];
  amenities: string[];
  affiliateLinks: {
    booking?: string;
    airbnb?: string;
    coolstays?: string;
    canopyandstars?: string;
    uniquehideaways?: string;
    hostunusual?: string;
    hipcamp?: string;
    direct?: string;
  };
  tags: string[];
  featured: boolean;
  region: string;
}
