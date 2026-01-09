import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
    </svg>
  );

  const PinterestIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
    </svg>
  );

  const socialLinks = [
    { Icon: Instagram, href: 'https://instagram.com/beyondordinary', label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { Icon: Youtube, href: 'https://youtube.com/@beyondordinary', label: 'YouTube', color: 'hover:bg-[#FF0000]' },
    { Icon: TikTokIcon, href: 'https://tiktok.com/@beyondordinary', label: 'TikTok', color: 'hover:bg-[#000000]' },
    { Icon: Facebook, href: 'https://facebook.com/beyondordinary', label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { Icon: PinterestIcon, href: 'https://pinterest.com/beyondordinary', label: 'Pinterest', color: 'hover:bg-[#E60023]' },
    { Icon: Linkedin, href: 'https://linkedin.com/company/beyondordinary', label: 'LinkedIn', color: 'hover:bg-[#0A66C2]' },
    { Icon: Mail, href: 'mailto:hello@beyondordinary.travel', label: 'Email', color: 'hover:bg-secondary' },
  ];

  return (
    <footer className="bg-gradient-hero border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 text-muted-foreground font-body max-w-md leading-relaxed">
              We curate the world's most extraordinary travel experiences—journeys that 
              transform perspective and ignite the spirit of adventure.
            </p>
            
            {/* Social Media - Prominent */}
            <div className="mt-8">
              <h4 className="font-display text-sm text-foreground mb-4 tracking-wider uppercase">Follow Our Journey</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full bg-muted/50 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/70 font-body">
                📹 Watch our latest travel videos & shorts on YouTube, TikTok & Instagram
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/holidays" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                All Destinations
              </Link>
              <Link 
                to="/uk-stays" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                UK Stays
              </Link>
              <Link 
                to="/calendar" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                Travel Calendar
              </Link>
              <Link 
                to="/stories" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                Travel Stories
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                About Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Stay Inspired</h4>
            <p className="text-muted-foreground text-sm font-body mb-4">
              Get weekly travel inspiration delivered to your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg bg-muted/50 backdrop-blur-sm border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-secondary transition-colors text-sm"
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Beyond Ordinary Adventures. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 text-center md:text-right">
            <Link 
              to="/privacy" 
              className="text-muted-foreground/60 hover:text-muted-foreground text-xs font-body transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="text-muted-foreground/60 hover:text-muted-foreground text-xs font-body transition-colors"
            >
              Terms & Conditions
            </Link>
            <p className="text-muted-foreground/60 text-xs font-body">
              Affiliate disclosure: We earn commissions from qualifying purchases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;