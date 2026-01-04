import { motion } from 'framer-motion';
import { TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const stats = [
  { icon: MapPin, value: "47+", label: "Countries" },
  { icon: Users, value: "12K+", label: "Adventurers" },
  { icon: Calendar, value: "8", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction" },
];

const StatsBar = () => {
  return (
    <section className="py-12 bg-gradient-mystical">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary-foreground/70" />
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="text-primary-foreground/70 font-body text-sm">
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
