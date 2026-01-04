import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    toast({
      title: "Welcome to Beyond Ordinary!",
      description: "You'll receive our curated adventures in your inbox.",
    });

    setTimeout(() => {
      setStatus('idle');
      setEmail('');
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-mystical opacity-30" />
      <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 px-8 py-12 md:px-16 md:py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-secondary font-body tracking-widest uppercase text-sm mb-4">
            Join the Expedition
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Adventures Delivered to Your Inbox
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto mb-8">
            Be the first to discover new extraordinary destinations, exclusive deals, 
            and travel stories that inspire wanderlust.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status !== 'idle'}
              className="h-12 bg-background/50 border-border/50 focus:border-secondary text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
          <Button 
            type="submit" 
            variant="gold"
            size="lg"
            disabled={status !== 'idle'}
            className="h-12 px-8"
          >
            {status === 'loading' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === 'success' ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </motion.form>

        <p className="text-muted-foreground/60 text-xs font-body mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </motion.div>
  );
};

export default NewsletterSignup;
