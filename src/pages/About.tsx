import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Compass, Heart, Globe, Shield, Users, Sparkles } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Compass,
      title: "Uncharted Territory",
      description: "We seek the roads less traveled, the slopes without names, and the experiences that can't be found in guidebooks."
    },
    {
      icon: Heart,
      title: "Authentic Connection",
      description: "Every journey is designed to create genuine moments—with nature, culture, and yourself."
    },
    {
      icon: Globe,
      title: "Conservation First",
      description: "We partner only with operators who prioritize environmental protection and local community support."
    },
    {
      icon: Shield,
      title: "Safety & Expertise",
      description: "Adventure doesn't mean reckless. Our partners are vetted experts with impeccable safety records."
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Intimate experiences that preserve the magic of discovery without the crowds."
    },
    {
      icon: Sparkles,
      title: "Beyond Ordinary",
      description: "We curate experiences that transform travelers into storytellers."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Beyond Ordinary Adventures</title>
        <meta name="description" content="Discover the story behind Beyond Ordinary Adventures. We curate extraordinary travel experiences to the world's most remote and remarkable destinations." />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
                <span className="text-gradient-mystical">Where Wander</span>
                <br />
                <span className="text-gradient-gold">Meets Wonder</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We believe the most extraordinary experiences exist beyond the reach of ordinary travel.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-12 rounded-2xl"
            >
              <h2 className="font-display text-4xl font-bold mb-6 text-gradient-silver">Our Story</h2>
              <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
                <p>
                  Beyond Ordinary Adventures was born from a simple realization: the world's most transformative experiences 
                  aren't found in glossy brochures or crowded tourist hotspots. They exist in the unnamed Arctic slopes where 
                  the aurora dances overhead, on the precipitous edge of Bolivia's Death Road, and in the eyes of a silverback 
                  gorilla deep in Congo's primordial jungle.
                </p>
                <p>
                  We're not just another travel company. We're curators of the extraordinary, seekers of the sublime, and 
                  believers in the power of adventure to transform lives. Every destination we feature has been personally 
                  vetted, every operator carefully selected, and every experience designed to push boundaries while respecting 
                  the delicate balance between exploration and preservation.
                </p>
                <p>
                  From the frozen wilderness of Svalbard to the volcanic landscapes of Ethiopia, from converted lighthouses 
                  on the British coast to treehouses suspended in ancient forests—we seek out experiences that defy convention 
                  and ignite the imagination.
                </p>
                <p className="text-xl font-display text-gradient-gold">
                  Because life is too short for ordinary adventures.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-mystical">
                What We Stand For
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our values guide every destination we curate and every partnership we forge.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl hover:shadow-glow transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-mystical flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 md:p-12 rounded-2xl text-center"
            >
              <h2 className="font-display text-4xl font-bold mb-6 text-gradient-gold">Our Mission</h2>
              <p className="text-xl text-foreground/90 leading-relaxed mb-8">
                To connect adventurous souls with the world's most extraordinary experiences while supporting 
                conservation efforts and local communities. We believe that responsible travel can be a force 
                for good—protecting endangered species, preserving pristine wilderness, and empowering the 
                people who call these remarkable places home.
              </p>
              <div className="inline-block px-8 py-4 bg-gradient-mystical rounded-full">
                <p className="font-display text-2xl font-semibold text-background">
                  Adventure with Purpose
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Ready to Go <span className="text-gradient-gold">Beyond Ordinary?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our curated collection of extraordinary adventures and start planning your next unforgettable journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/holidays"
                  className="px-8 py-4 bg-gradient-mystical text-background font-semibold rounded-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                >
                  Explore International Adventures
                </a>
                <a
                  href="/uk-stays"
                  className="px-8 py-4 bg-gradient-gold text-background font-semibold rounded-lg hover:shadow-gold transition-all duration-300 hover:-translate-y-1"
                >
                  Discover UK Stays
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;