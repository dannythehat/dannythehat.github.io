import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Users, Check, ExternalLink, Heart, Share2 } from 'lucide-react';
import ukStaysData from '@/data/ukStays.json';
import { UKStay } from '@/types/ukStay';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useWishlist } from '@/contexts/WishlistContext';
import { useToast } from '@/hooks/use-toast';

const typedUKStays = ukStaysData as UKStay[];

const UKStayDetail = () => {
  const { slug } = useParams();
  const stay = typedUKStays.find(s => s.slug === slug);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();

  if (!stay) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-display mb-4">Stay Not Found</h1>
            <Button asChild>
              <Link to="/uk-stays">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to UK Stays
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const inWishlist = isInWishlist(stay.id);

  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(stay.id);
      toast({
        title: "Removed from wishlist",
        description: `${stay.title} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist({
        id: stay.id,
        title: stay.title,
        location: stay.location,
        imageUrl: stay.thumbnailUrl,
        price: stay.price,
        currency: stay.currency,
        type: 'uk-stay'
      });
      toast({
        title: "Added to wishlist",
        description: `${stay.title} has been added to your wishlist.`,
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: stay.title,
          text: stay.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Stay link copied to clipboard",
      });
    }
  };

  return (
    <>
      <SEOHead 
        title={`${stay.title} | ${stay.location}`}
        description={stay.description}
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={stay.imageUrl} 
            alt={stay.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back Button */}
          <div className="absolute top-24 left-4 md:left-8">
            <Button variant="secondary" asChild>
              <Link to="/uk-stays">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to UK Stays
              </Link>
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-24 right-4 md:right-8 flex gap-2">
            <Button 
              variant="secondary" 
              size="icon"
              onClick={handleWishlistToggle}
            >
              <Heart className={`w-5 h-5 ${inWishlist ? 'fill-primary text-primary' : ''}`} />
            </Button>
            <Button 
              variant="secondary" 
              size="icon"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {stay.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="capitalize">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl mb-3">
                  {stay.title}
                </h1>
                <p className="text-xl text-muted-foreground italic mb-4">
                  {stay.subtitle}
                </p>
                
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{stay.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{stay.capacity}</span>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <h2 className="font-display text-2xl mb-4">About This Stay</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {stay.longDescription}
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <h2 className="font-display text-2xl mb-6">Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {stay.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-lg p-8 shadow-lg"
              >
                <h2 className="font-display text-2xl mb-6">Amenities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {stay.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-lg p-8 shadow-lg sticky top-24"
              >
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary mb-2">
                    £{stay.price}
                  </div>
                  <div className="text-muted-foreground">{stay.duration}</div>
                </div>

                <div className="space-y-3 mb-6">
                  {stay.affiliateLinks.booking && (
                    <Button variant="gold" className="w-full" asChild>
                      <a href={stay.affiliateLinks.booking} target="_blank" rel="noopener noreferrer">
                        Book on Booking.com
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  
                  {stay.affiliateLinks.airbnb && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={stay.affiliateLinks.airbnb} target="_blank" rel="noopener noreferrer">
                        View on Airbnb
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  
                  {stay.affiliateLinks.direct && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={stay.affiliateLinks.direct} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  
                  {stay.affiliateLinks.canopyandstars && (
                    <Button variant="outline" className="w-full" asChild>
                      <a href={stay.affiliateLinks.canopyandstars} target="_blank" rel="noopener noreferrer">
                        Canopy & Stars
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-display text-lg mb-3">Region</h3>
                  <p className="text-muted-foreground">{stay.region}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Similar Stays */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl mb-8">More UK Stays</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {typedUKStays
                .filter(s => s.id !== stay.id && s.region === stay.region)
                .slice(0, 3)
                .map((similarStay) => (
                  <Link key={similarStay.id} to={`/uk-stays/${similarStay.slug}`}>
                    <div className="group">
                      <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                        <img 
                          src={similarStay.thumbnailUrl} 
                          alt={similarStay.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="font-display text-xl group-hover:text-primary transition-colors">
                        {similarStay.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {similarStay.location}
                      </p>
                      <div className="mt-2">
                        <span className="text-xl font-bold text-primary">£{similarStay.price}</span>
                        <span className="text-sm text-muted-foreground ml-2">per night</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default UKStayDetail;
