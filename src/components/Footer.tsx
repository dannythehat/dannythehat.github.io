import { Link } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/beyondordinary', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@beyondordinary', label: 'YouTube' },
    { icon: Twitter, href: 'https://twitter.com/beyondordinary', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@beyondordinary.travel', label: 'Email' },
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
                to="/holidays?difficulty=extreme" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                Extreme Adventures
              </Link>
              <Link 
                to="/holidays?tag=wildlife" 
                className="text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                Wildlife Encounters
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Beyond Ordinary. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs font-body">
            Affiliate disclosure: We earn commissions from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
