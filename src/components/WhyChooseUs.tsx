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
    <section className="py-24 bg-muted/20 border-y border-border/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-body tracking-widest uppercase text-sm mb-4">
            Why Beyond Ordinary
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Travel Different, Travel Better
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-mystical mb-6 shadow-glow transition-transform group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
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
