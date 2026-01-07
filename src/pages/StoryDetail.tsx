import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import storiesData from '@/data/stories.json';
import { Story } from '@/types/story';

const stories = storiesData.stories as Story[];

const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find(s => s.slug === slug);
  
  if (!story) {
    return <Navigate to="/stories" replace />;
  }
  
  // Get related stories (same category, excluding current)
  const relatedStories = stories
    .filter(s => s.category === story.category && s.id !== story.id)
    .slice(0, 2);
  
  // Split content into paragraphs
  const paragraphs = story.content.split('\n\n');
  
  return (
    <>
      <SEOHead 
        title={`${story.title} | Beyond Ordinary Stories`}
        description={story.excerpt}
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
              className="max-w-4xl mx-auto"
            >
              {/* Back Link */}
              <Link 
                to="/stories" 
                className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mb-8 font-body"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Stories
              </Link>
              
              {/* Category */}
              <Badge variant="secondary" className="mb-4">
                {story.category}
              </Badge>
              
              {/* Title */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                {story.title}
              </h1>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-body">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" />
                  <span>{story.author}</span>
                  <span className="text-muted-foreground/50">·</span>
                  <span className="text-sm">{story.authorRole}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span>{new Date(story.publishDate).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>{story.readTime}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Excerpt/Intro */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-foreground/90 font-display italic mb-12 leading-relaxed border-l-4 border-secondary pl-6"
              >
                {story.excerpt}
              </motion.p>
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg prose-invert max-w-none"
              >
                {paragraphs.map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-muted-foreground font-body text-lg leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
              
              {/* Tags */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <div className="flex flex-wrap gap-2">
                  {story.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
              
              {/* Share */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-border"
              >
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share this story
                </p>
                <SocialShare 
                  url={window.location.href}
                  title={story.title}
                  description={story.excerpt}
                />
              </motion.div>
              
              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-2xl font-display text-background">
                    {story.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-display text-lg text-foreground">{story.author}</p>
                    <p className="text-secondary font-body text-sm">{story.authorRole}</p>
                    <p className="text-muted-foreground font-body text-sm mt-2">
                      Exploring the world's most extraordinary places and sharing stories that inspire adventure.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="font-display text-2xl text-foreground mb-8">More {story.category} Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedStories.map(related => (
                    <Link 
                      key={related.id}
                      to={`/stories/${related.slug}`}
                      className="group block p-6 rounded-2xl bg-card border border-border/50 hover:border-secondary/50 transition-all"
                    >
                      <Badge variant="outline" className="mb-3 text-xs">{related.category}</Badge>
                      <h3 className="font-display text-lg text-foreground group-hover:text-secondary transition-colors mb-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{related.excerpt}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{related.readTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <Button variant="mystical" size="lg" asChild>
              <Link to="/stories">
                <BookOpen className="mr-2 w-5 h-5" />
                Read More Stories
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default StoryDetail;
