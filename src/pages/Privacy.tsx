import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Eye, Cookie, Lock, Mail, Globe } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you use our website, we may collect personal information that you voluntarily provide, including your name, email address, and any other information you choose to share through our newsletter signup or contact forms."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings."
        }
      ]
    },
    {
      icon: Globe,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide, maintain, and improve our website services, including sending you newsletters, travel inspiration, and updates about extraordinary adventures if you've subscribed."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how visitors interact with our site, which helps us improve content, user experience, and the quality of our curated travel recommendations."
        },
        {
          subtitle: "Marketing Communications",
          text: "With your consent, we may send you promotional emails about new destinations, special offers from our affiliate partners, and travel inspiration. You can unsubscribe at any time using the link in our emails."
        }
      ]
    },
    {
      icon: Lock,
      title: "How We Share Your Information",
      content: [
        {
          subtitle: "Affiliate Partners",
          text: "When you click on affiliate links and make bookings through our partner sites (such as Viator, GetYourGuide, Booking.com, G Adventures, and others), you will be redirected to their websites. These partners have their own privacy policies, and we encourage you to review them. We may receive commission information but do not receive your personal booking details."
        },
        {
          subtitle: "Service Providers",
          text: "We work with trusted third-party service providers who help us operate our website, including hosting services, email marketing platforms, and analytics providers. These providers are contractually obligated to protect your information and use it only for the services they provide to us."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights, your safety, or the safety of others."
        }
      ]
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "These cookies are necessary for the website to function properly and cannot be disabled. They include session cookies that remember your preferences during your visit."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use Google Analytics and similar services to understand how visitors use our site. These cookies collect anonymous information about page views, time spent on pages, and navigation patterns."
        },
        {
          subtitle: "Affiliate Tracking Cookies",
          text: "When you click on affiliate links, cookies are placed to track your journey and ensure we receive proper credit for referrals. These cookies typically last 30-90 days depending on the affiliate partner."
        },
        {
          subtitle: "Managing Cookies",
          text: "You can control and delete cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website."
        }
      ]
    },
    {
      icon: Shield,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information. Contact us at hello@beyondordinary.travel to request access to your data."
        },
        {
          subtitle: "Opt-Out of Marketing",
          text: "You can unsubscribe from our marketing emails at any time by clicking the 'unsubscribe' link in any email or by contacting us directly."
        },
        {
          subtitle: "Data Deletion",
          text: "You have the right to request deletion of your personal information, subject to certain legal exceptions. We will respond to deletion requests within 30 days."
        },
        {
          subtitle: "Do Not Track",
          text: "Some browsers have 'Do Not Track' features. Currently, there is no industry standard for responding to these signals, but we respect your privacy choices and minimize data collection."
        }
      ]
    },
    {
      icon: Mail,
      title: "Third-Party Links and Services",
      content: [
        {
          subtitle: "Affiliate Partner Websites",
          text: "Our website contains links to third-party websites operated by our affiliate partners, including tour operators, booking platforms, and travel service providers. We are not responsible for the privacy practices of these external sites. When you leave our website, we encourage you to read the privacy policies of each site you visit."
        },
        {
          subtitle: "Social Media",
          text: "We may include social media features and widgets on our site. These features may collect your IP address and set cookies. Your interactions with these features are governed by the privacy policies of the respective social media companies."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Beyond Ordinary Adventures</title>
        <meta name="description" content="Learn how Beyond Ordinary Adventures collects, uses, and protects your personal information. Our commitment to your privacy and data security." />
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
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-mystical flex items-center justify-center">
                <Shield className="w-10 h-10 text-background" />
              </div>
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gradient-mystical">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
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
                Beyond Ordinary Adventures ("we," "us," or "our") operates beyondordinary.travel (the "Website"). 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                We are committed to protecting your privacy and ensuring transparency about our data practices. 
                By using our website, you consent to the data practices described in this policy.
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
                  <div className="w-12 h-12 rounded-lg bg-gradient-mystical flex items-center justify-center flex-shrink-0">
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

        {/* Additional Important Information */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl space-y-8">
            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-gold mb-6">
                Data Security
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure hosting infrastructure</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Data backup and recovery procedures</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </motion.div>

            {/* International Data Transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-gold mb-6">
                International Data Transfers
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your country 
                of residence, where data protection laws may differ. By using our website, you consent to the 
                transfer of your information to countries outside your country of residence, including the United 
                States and European Union, which may have different data protection rules.
              </p>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-gold mb-6">
                Children's Privacy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website is not intended for children under the age of 18. We do not knowingly collect personal 
                information from children under 18. If you are a parent or guardian and believe your child has 
                provided us with personal information, please contact us, and we will delete such information from 
                our systems.
              </p>
            </motion.div>

            {/* Changes to Privacy Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="font-display text-3xl font-bold text-gradient-gold mb-6">
                Changes to This Privacy Policy
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes 
                by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage 
                you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl bg-gradient-mystical"
            >
              <h2 className="font-display text-3xl font-bold text-background mb-6">
                Contact Us
              </h2>
              <p className="text-background/90 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us:
              </p>
              <div className="space-y-2 text-background/90">
                <p><strong>Email:</strong> hello@beyondordinary.travel</p>
                <p><strong>Website:</strong> beyondordinary.travel</p>
              </div>
              <p className="text-background/80 text-sm mt-6">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;