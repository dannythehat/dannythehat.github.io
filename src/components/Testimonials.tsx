import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Elena Rodriguez",
    location: "Barcelona, Spain",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "The Death Road descent was the most exhilarating experience of my life. Beyond Ordinary arranged everything flawlessly—professional guides, top gear, and an adventure I'll never forget.",
    trip: "Bolivia Death Road",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    location: "San Francisco, USA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "Watching the aurora while skiing down unnamed slopes in Svalbard was surreal. This isn't travel—it's transformation. Worth every penny.",
    trip: "Arctic Unnamed Slopes",
    rating: 5,
  },
  {
    id: 3,
    name: "Amara Okafor",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "The gorilla trek in Congo changed my perspective on conservation. Staring into a silverback's eyes just meters away—indescribable. Beyond Ordinary made it possible safely.",
    trip: "Congo Gorilla Trek",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body tracking-widest uppercase text-sm mb-4">
            Traveler Stories
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tales from the Extraordinary
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-secondary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/90 font-body leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Trip badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-body">
                  {testimonial.trip}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondary/30"
                />
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-sm font-body">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
