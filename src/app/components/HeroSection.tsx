import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Store, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const pathOptions = [
    {
      icon: TrendingUp,
      label: 'Grow my Business',
      description: 'Scale with data-driven insights',
      link: '/grow-my-business',
    },
    {
      icon: Store,
      label: 'Optimize my Store',
      description: 'Increase margins & reduce waste',
      link: '/services',
    },
    {
      icon: GraduationCap,
      label: 'Build my Career',
      description: 'Master data & analytics skills',
      link: '/learning',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Big 4 Style: Darker, more professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/80 to-slate-900/90" />
        
        {/* Subtle Grid - Financial/Editorial Feel */}
        <motion.div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#F8FAFC 1px, transparent 1px),
                              linear-gradient(90deg, #F8FAFC 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline - Minimal Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-slate-300/30 bg-slate-800/20 backdrop-blur-sm">
              <div className="h-px w-8 bg-slate-400" />
              <span className="text-xs font-medium tracking-[0.2em] text-slate-200 uppercase">
                Local Reality, Global Standard
              </span>
              <div className="h-px w-8 bg-slate-400" />
            </div>
          </motion.div>

          {/* Hero Title - Playfair Display Serif */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-8 max-w-5xl mx-auto leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Data that moves <span className="italic font-light text-slate-300">decisions</span>.
            <br />
            Evidence that drives <span className="italic font-light text-slate-300">growth</span>.
          </motion.h1>

          {/* Subtitle - Clean Sans-Serif */}
          <motion.p
            className="text-xl sm:text-2xl text-slate-300 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            RYN Solutions transforms raw data into actionable intelligence for African commerce,
            enterprises, and aspiring professionals.
          </motion.p>

          {/* Path Options - Big 4 Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8"
          >
            <p className="text-slate-400 mb-10 text-base font-light tracking-wide">I am looking to...</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-5xl mx-auto">
              {pathOptions.map((option, index) => (
                <motion.div
                  key={option.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="w-full sm:w-auto"
                  whileHover={{ y: -4 }}
                >
                  <Link
                    to={option.link}
                    className="group relative block w-full bg-white/5 backdrop-blur-sm border border-slate-300/20 hover:bg-white/10 hover:border-slate-300/40 px-8 py-6 transition-all duration-300"
                  >
                    {/* Top Border - Signature Element */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-300/20 group-hover:bg-slate-200 transition-all duration-300" />
                    
                    <div className="flex items-start gap-4 text-left">
                      {/* Icon */}
                      <div className="p-0 mt-1">
                        <option.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" strokeWidth={1.2} />
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <div className="text-white font-medium mb-1">{option.label}</div>
                        <div className="text-sm text-slate-400 font-light leading-relaxed">{option.description}</div>
                      </div>
                      
                      {/* Arrow - Appears on Hover */}
                      <ArrowRight 
                        className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1" 
                        strokeWidth={1.5}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator - Minimal */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border border-slate-400/40 flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-slate-400"
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}