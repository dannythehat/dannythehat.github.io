import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, AlertCircle, Link as LinkIcon, DollarSign, Shield, Scale } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using beyondordinary.travel (the \"Website\"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website."
        },
        {
          subtitle: "Modifications",
          text: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after changes are posted constitutes your acceptance of the modified terms."
        },
        {
          subtitle: "Eligibility",
          text: "You must be at least 18 years old to use this website. By using our website, you represent and warrant that you are at least 18 years of age and have the legal capacity to enter into these terms."
        }
      ]
    },
    {
      icon: LinkIcon,
      title: "Nature of Our Service",
      content: [
        {
          subtitle: "Referral Service",
          text: "Beyond Ordinary Adventures is a travel inspiration and referral website. We curate and showcase extraordinary travel experiences from various tour operators, booking platforms, and travel service providers. We do not directly provide travel services, accommodations, or tours."
        },
        {
          subtitle: "Third-Party Bookings",
          text: "When you click on links to book experiences, you will be redirected to third-party websites operated by our affiliate partners (including but not limited to Viator, GetYourGuide, Booking.com, G Adventures, Intrepid Travel, and others). All bookings, transactions, and travel arrangements are made directly with these third-party providers."
        },
        {
          subtitle: "No Direct Liability",
          text: "We are not responsible for the services provided by third-party operators, including the quality, safety, legality, or any other aspect of the travel experiences. Any issues, disputes, or claims related to bookings must be addressed directly with the respective service provider."
        }
      ]
    },
    {
      icon: DollarSign,
      title: "Affiliate Disclosure",
      content: [
        {
          subtitle: "Commission-Based Model",
          text: "Beyond Ordinary Adventures participates in affiliate marketing programs. When you click on affiliate links and make purchases through our partner websites, we may earn a commission at no additional cost to you. This commission helps us maintain and improve our website and continue curating extraordinary travel experiences."
        },
        {
          subtitle: "Editorial Independence",
          text: "Our affiliate relationships do not influence our editorial content or recommendations. We only feature destinations and experiences that we genuinely believe offer extraordinary value and align with our mission of curating beyond-ordinary adventures."
        },
        {
          subtitle: "Pricing Transparency",
          text: "Prices displayed on our website are for informational purposes only and may not reflect current pricing. Final prices, availability, and booking terms are determined by our affiliate partners. We recommend verifying all details directly with the service provider before booking."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Disclaimers and Limitations",
      content: [
        {
          subtitle: "Content Accuracy",
          text: "While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, completeness, or reliability of any content on our website. Travel information, prices, availability, and descriptions are subject to change without notice."
        },
        {
          subtitle: "Travel Risks",
          text: "Travel, especially to remote or extreme destinations, involves inherent risks. You acknowledge that adventure travel activities may be physically demanding and potentially dangerous. You assume all risks associated with travel and adventure activities booked through our affiliate partners."
        },
        {
          subtitle: "No Guarantees",
          text: "We do not guarantee the availability, quality, safety, or suitability of any travel experiences featured on our website. We are not responsible for cancellations, delays, injuries, losses, damages, or expenses incurred during travel."
        },
        {
          subtitle: "Medical and Insurance Advice",
          text: "We are not qualified to provide medical, insurance, or legal advice. You are responsible for obtaining appropriate travel insurance, medical clearances, vaccinations, visas, and any other requirements for your chosen destinations."
        }
      ]
    },
    {
      icon: Shield,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "No Liability for Third-Party Services",
          text: "To the fullest extent permitted by law, Beyond Ordinary Adventures, its owners, employees, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or any travel services booked through our affiliate partners."
        },
        {
          subtitle: "Maximum Liability",
          text: "In no event shall our total liability to you for all damages, losses, and causes of action exceed the amount paid by us to you, if any, or one hundred dollars ($100), whichever is less."
        },
        {
          subtitle: "Third-Party Disputes",
          text: "Any disputes, claims, or issues related to bookings, travel services, cancellations, refunds, or other matters must be resolved directly with the respective third-party service provider. We are not a party to any agreements between you and third-party providers."
        }
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Copyright and Trademarks",
          text: "All content on this website, including text, graphics, logos, images, and software, is the property of Beyond Ordinary Adventures or its content suppliers and is protected by international copyright and trademark laws."
        },
        {
          subtitle: "Limited License",
          text: "You are granted a limited, non-exclusive, non-transferable license to access and use the website for personal, non-commercial purposes. You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content without our express written permission."
        },
        {
          subtitle: "User-Generated Content",
          text: "If you submit content to our website (such as reviews, comments, or photos), you grant us a worldwide, royalty-free, perpetual license to use, reproduce, modify, and display such content in connection with our services."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Beyond Ordinary Adventures</title>
        <meta name="description" content="Read the terms and conditions for using Beyond Ordinary Adventures. Important information about our affiliate relationships and service limitations." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-hero">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center">
                <Scale className="w-10 h-10 text-background" />
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
                Terms & Conditions
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Please read these terms carefully before using our website and booking travel experiences.
              </p>
              <p className="text-sm text-muted-foreground/70 mt-4">
                Last Updated: January 8, 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-2xl"
            >
              <p className="text-foreground/90 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") govern your use of beyondordinary.travel and the services 
                provided by Beyond Ordinary Adventures ("we," "us," or "our"). By accessing or using our website, 
                you agree to comply with and be bound by these Terms.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Please read these Terms carefully. If you do not agree with any part of these Terms, you should 
                not use our website.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Sections */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-background" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gradient-silver">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="font-display text-xl font-semibold text-primary mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl space-y-8">
            {/* User Conduct */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-mystical mb-6">
                User Conduct
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a manner that does not infringe 
                the rights of others or restrict their use of the website. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Attempting to gain unauthorized access to our systems or networks</li>
                <li>Transmitting viruses, malware, or other harmful code</li>
                <li>Scraping, harvesting, or collecting data from our website without permission</li>
                <li>Impersonating others or providing false information</li>
                <li>Using our website for any illegal or fraudulent purposes</li>
                <li>Interfering with the proper functioning of the website</li>
              </ul>
            </motion.div>

            {/* Links to Third-Party Websites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-mystical mb-6">
                Links to Third-Party Websites
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Our website contains links to third-party websites operated by our affiliate partners and other 
                external sites. These links are provided for your convenience and information.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We have no control over the content, privacy policies, or practices of third-party websites and 
                assume no responsibility for them. We encourage you to review the terms and privacy policies of 
                any third-party websites you visit. Your interactions with third-party websites are solely between 
                you and the third party.
              </p>
            </motion.div>

            {/* Indemnification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-mystical mb-6">
                Indemnification
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Beyond Ordinary Adventures, its owners, 
                employees, affiliates, and partners from any claims, damages, losses, liabilities, and expenses 
                (including legal fees) arising from your use of our website, violation of these Terms, or 
                infringement of any third-party rights.
              </p>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-mystical mb-6">
                Governing Law and Jurisdiction
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United Kingdom, 
                without regard to its conflict of law provisions.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Any disputes arising from these Terms or your use of our website shall be subject to the exclusive 
                jurisdiction of the courts of the United Kingdom.
              </p>
            </motion.div>

            {/* Severability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-mystical mb-6">
                Severability
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining 
                provisions shall continue in full force and effect. The invalid provision shall be modified to 
                the minimum extent necessary to make it valid and enforceable.
              </p>
            </motion.div>

            {/* Entire Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-mystical mb-6">
                Entire Agreement
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and 
                Beyond Ordinary Adventures regarding your use of our website and supersede all prior agreements 
                and understandings, whether written or oral.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl bg-gradient-gold"
            >
              <h2 className="font-display text-3xl font-bold text-background mb-6">
                Questions About These Terms?
              </h2>
              <p className="text-background/90 leading-relaxed mb-4">
                If you have any questions or concerns about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-background/90">
                <p><strong>Email:</strong> hello@beyondordinary.travel</p>
                <p><strong>Website:</strong> beyondordinary.travel</p>
              </div>
              <p className="text-background/80 text-sm mt-6">
                We will respond to your inquiry within 5 business days.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Terms;