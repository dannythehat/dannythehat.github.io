import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const stats = [
  { icon: MapPin, value: "47+", label: "Destinations", suffix: "" },
  { icon: Users, value: "12K", label: "Adventurers", suffix: "+" },
  { icon: Calendar, value: "8", label: "Years", suffix: "" },
  { icon: TrendingUp, value: "98", label: "Satisfaction", suffix: "%" },
];

const StatsBar = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-accent/5 to-secondary/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background/80" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 mb-4 group-hover:bg-secondary/20 transition-all duration-500"
              >
                <stat.icon className="w-5 h-5 text-secondary" />
              </motion.div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display text-4xl md:text-5xl font-light text-foreground tracking-tight">
                  {stat.value}
                </span>
                <span className="font-display text-2xl text-secondary">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-muted-foreground font-body text-sm tracking-wider uppercase mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;