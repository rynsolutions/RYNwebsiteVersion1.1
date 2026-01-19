import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useChatbot } from '@/app/contexts/ChatbotContext';

export function Navigation() {
  const { openChatbot } = useChatbot();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewingAs, setViewingAs] = useState<'business' | 'student'>('business');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Learning', href: '/learning' },
    { label: 'Innovation', href: '/innovation' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="h-10 w-10 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767103815/RYN_SOLUTIONS_LOGO-removebg-preview1_sbpdjp.png"
                  alt="RYN Solutions Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div className="ml-2 flex flex-col leading-tight text-left">
                <span className="text-xl font-serif font-medium text-slate-900">RYN</span>
                <span className="text-[10px] font-medium tracking-[0.15em] text-slate-600 uppercase">Solutions</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-light tracking-wide transition-colors relative group ${
                  location.pathname === item.href 
                    ? 'text-slate-900' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.label}
                {/* Underline indicator */}
                <span 
                  className={`absolute bottom-[-8px] left-0 h-[1px] bg-slate-900 transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Pathfinder Toggle - Refined Design */}
            <div className="flex items-center border border-slate-200 p-1">
              <button
                onClick={() => setViewingAs('business')}
                className={`px-4 py-2 text-xs font-light tracking-wide transition-all ${
                  viewingAs === 'business'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Business
              </button>
              <button
                onClick={() => setViewingAs('student')}
                className={`px-4 py-2 text-xs font-light tracking-wide transition-all ${
                  viewingAs === 'student'
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Student
              </button>
            </div>

            <Button
              onClick={() => openChatbot("I'd like to book a consultation to discuss my business needs")}
              className="bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-2 text-sm font-light tracking-wide"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 overflow-hidden"
          >
            <div className="px-8 py-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-2 text-base font-light tracking-wide transition-colors ${
                    location.pathname === item.href 
                      ? 'text-slate-900' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-6 space-y-4 border-t border-slate-200">
                <div className="flex items-center border border-slate-200 p-1">
                  <button
                    onClick={() => setViewingAs('business')}
                    className={`flex-1 py-2 text-xs font-light tracking-wide transition-all ${
                      viewingAs === 'business'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    Business
                  </button>
                  <button
                    onClick={() => setViewingAs('student')}
                    className={`flex-1 py-2 text-xs font-light tracking-wide transition-all ${
                      viewingAs === 'student'
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    Student
                  </button>
                </div>
                <Button 
                  onClick={() => {
                    openChatbot("I'd like to book a consultation to discuss my business needs");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white border-none py-3 text-sm font-light tracking-wide"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}