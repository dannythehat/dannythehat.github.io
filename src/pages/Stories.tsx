import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, User, Calendar } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import storiesData from '@/data/stories.json';
import { Story } from '@/types/story';

const stories = storiesData.stories as Story[];
const featuredStories = stories.filter(s => s.featured);
const recentStories = stories.filter(s => !s.featured);

const Stories = () => {
  return (
    <>
      <SEOHead 
        title="Travel Stories | Beyond Ordinary"
        description="First-person accounts from the world's most extraordinary destinations. Read stories from Burning Man, Holi, the Northern Lights, and more."
      />
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/5 mb-6">
                <BookOpen className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body text-secondary">Travel Stories</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl text-gradient-gold mb-6">
                Stories from the Edge
              </h1>
              <p className="text-xl text-muted-foreground font-body">
                First-person accounts from destinations that changed us forever.
                <br />Real adventures, raw emotions, no filters.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Stories Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl text-foreground mb-2">Featured Stories</h2>
              <p className="text-muted-foreground font-body">Our most transformative adventures</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                >
                  <Link 
                    to={`/stories/${story.slug}`}
                    className="group block h-full"
                  >
                    <div className={`relative overflow-hidden rounded-2xl bg-card border border-border/50 h-full hover:border-secondary/50 transition-all duration-300 ${index === 0 ? 'min-h-[500px]' : ''}`}>
                      {/* Gradient background for visual interest */}
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
                      
                      <div className={`relative p-8 flex flex-col h-full ${index === 0 ? 'justify-end' : ''}`}>
                        {/* Category Badge */}
                        <Badge variant="secondary" className="w-fit mb-4">
                          {story.category}
                        </Badge>
                        
                        <h3 className={`font-display text-foreground group-hover:text-secondary transition-colors mb-4 ${index === 0 ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                          {story.title}
                        </h3>
                        
                        <p className={`text-muted-foreground font-body mb-6 ${index === 0 ? 'text-lg line-clamp-4' : 'line-clamp-3 text-sm'}`}>
                          {story.excerpt}
                        </p>
                        
                        {/* Meta Info */}
                        <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              <span>{story.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{story.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Stories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="font-display text-3xl text-foreground mb-2">More Stories</h2>
              <p className="text-muted-foreground font-body">Recent dispatches from the road</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentStories.map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={`/stories/${story.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-secondary/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
                      
                      <div className="relative p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge variant="outline" className="text-xs">{story.category}</Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(story.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-lg text-foreground group-hover:text-secondary transition-colors mb-3">
                          {story.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">
                          {story.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{story.readTime}</span>
                          </div>
                          <span className="text-secondary text-sm font-body group-hover:underline">Read story →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-12 text-center max-w-3xl mx-auto border-secondary/20"
            >
              <h2 className="font-display text-3xl text-foreground mb-4">
                Ready to Write Your Own Story?
              </h2>
              <p className="text-muted-foreground font-body mb-8">
                Every journey begins with a single step toward the extraordinary.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/holidays">
                  Explore Destinations
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Stories;
