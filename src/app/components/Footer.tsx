import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useChatbot } from '@/app/contexts/ChatbotContext';

export function Footer() {
  const { openChatbot } = useChatbot();

  const services = [
    { name: 'Business Intelligence', href: '/services#bi-dashboards' },
    { name: 'Data Coaching', href: '/services#data-coaching' },
    { name: 'Research & Evaluation', href: '/services#research-support' },
    { name: 'AI & Automation', href: '/grow-my-business' },
  ];

  const industries = [
    { name: 'Retail & Markets', href: '/industries#retail' },
    { name: 'SMEs & Enterprise', href: '/industries#healthcare' },
    { name: 'NGOs', href: '/industries#ngo' },
    { name: 'Students & Researchers', href: '/industries#students' },
  ];

  const resources = [
    { name: 'Articles', href: '/insights' },
    { name: 'Learning Center', href: '/learning' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Business Transformation', href: '/grow-my-business' },
  ];

  const insights = [
    { name: 'Publications and Insights', href: '/insights' },
    { name: 'Reports and Whitepapers', href: '/insights' },
  ];

  const aboutus = [
    { name: 'Who We Are', href: '/about#who-we-are' },
    { name: 'Our Thinking and Philosophy', href: '/about#thinking' },
    { name: 'Our Purpose and Values', href: '/about#values' },
    { name: 'Our People', href: '/about#people' },
    { name: 'Connect With Us', href: '/about#contact' },
    { name: 'Ethics Compliant', href: '/about#compliance' },
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Conversion Flow - Big 4 Style */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
          <div className="grid md:grid-cols-3 gap-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-r border-slate-200 pr-8 py-6"
            >
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-4 leading-tight">
                See how we've helped businesses like yours
              </h3>
              <Link to="/case-studies">
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-2 text-sm font-light tracking-wide"
                >
                  Read Case Studies
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-r border-slate-200 px-8 py-6"
            >
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-4 leading-tight">
                Explore our tailored solutions
              </h3>
              <Link to="/services">
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-2 text-sm font-light tracking-wide"
                >
                  View Solutions
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pl-8 py-6"
            >
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-4 leading-tight">
                Let's discuss your needs
              </h3>
              <Button 
                onClick={() => openChatbot("I'd like to book a consultation to discuss my business needs")}
                className="bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-2 text-sm font-light tracking-wide"
              >
                Book Consultation
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-3xl font-serif font-medium text-slate-900">RYN</span>
              <span className="text-xs font-medium tracking-[0.15em] text-slate-600 uppercase">Solutions</span>
            </div>
            <p className="text-slate-600 font-light leading-relaxed mb-8 max-w-md">
              Transforming raw data into actionable intelligence for African commerce, enterprises, and aspiring
              professionals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 font-light">
                <Mail className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                <span>rynsolutions@protonmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 font-light">
                <Phone className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                <span>+233 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 font-light">
                <MapPin className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                <span>Kumasi, Ghana</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-medium text-sm tracking-wide uppercase mb-6 pb-3 border-b border-slate-200">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-slate-900 font-medium text-sm tracking-wide uppercase mb-6 pb-3 border-b border-slate-200">
              Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-slate-900 font-medium text-sm tracking-wide uppercase mb-6 pb-3 border-b border-slate-200">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second Row for Insights and About Us */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2"></div>

          {/* Insights */}
          <div>
            <h4 className="text-slate-900 font-medium text-sm tracking-wide uppercase mb-6 pb-3 border-b border-slate-200">
              Insights
            </h4>
            <ul className="space-y-3">
              {insights.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="lg:col-span-2">
            <h4 className="text-slate-900 font-medium text-sm tracking-wide uppercase mb-6 pb-3 border-b border-slate-200">
              About Us
            </h4>
            <ul className="space-y-3">
              {aboutus.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Single Row with Copyright, Social, Legal Links & Disclaimer */}
        <div className="border-t border-slate-200 pt-10 pb-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            {/* Left: Copyright */}
            <div className="text-slate-500 text-sm font-light text-center lg:text-left">
              © {new Date().getFullYear()} RYN Solutions. All rights reserved.
            </div>

            {/* Center: Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/rynsolutions/"
                className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all text-slate-600"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://x.com/rynsolutions"
                className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all text-slate-600"
              >
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/233506928565"
                className="w-10 h-10 border border-slate-200 flex items-center justify-center hover:bg-slate-900 hover:border-slate-900 hover:text-white transition-all text-slate-600"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>

            {/* Right: Legal Links */}
            <div className="flex gap-6 text-sm font-light text-center lg:text-right">
              <Link to="/privacy-policy" className="text-slate-500 hover:text-slate-900 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-slate-500 hover:text-slate-900 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer - Same Row */}
          <div className="pt-4">
            <p className="text-xs text-slate-400 font-light leading-relaxed text-center">
              RYN Solutions (Research and Analytics Yield Nexus) is a trading name of YIELDNEXUS CONSULT, legally incorporated under the Office of the Registrar of Companies (ORC) in Ghana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}