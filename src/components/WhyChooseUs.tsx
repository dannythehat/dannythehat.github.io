import { motion } from 'framer-motion';
import { Shield, Heart, Compass, Award } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: "Curated by Explorers",
    description: "Every destination hand-picked by adventurers who've been there. No tourist traps—only authentic, transformative experiences.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Expert guides, emergency protocols, and comprehensive travel insurance included. Adventure boldly, travel safely.",
  },
  {
    icon: Heart,
    title: "Sustainable Travel",
    description: "We partner with local communities and conservation projects. Your adventure directly supports the places you visit.",
  },
  {
    icon: Award,
    title: "Best Price Guaranteed",
    description: "Compare our curated packages with any competitor. We match or beat any price for the same quality experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Subtle warm gradient */}
      <div className="absolute inset-0 bg-gradient-section" />
      
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-body tracking-[0.3em] uppercase text-xs mb-6 block"
          >
            Why Beyond Ordinary
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground font-light">
            Travel Different,{' '}
            <span className="text-gradient-gold italic">Travel Better</span>
          </h2>
          <div className="section-divider mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center group"
            >
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative mb-8"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/10 border border-secondary/20 group-hover:border-secondary/40 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                </div>
              </motion.div>
              
              <h3 className="font-display text-xl text-foreground mb-4 group-hover:text-secondary transition-colors duration-500">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;