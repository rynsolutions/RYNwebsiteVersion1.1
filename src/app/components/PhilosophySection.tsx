import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Database, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

// Define strict types for the pillars
interface Pillar {
  icon: React.ElementType;
  number: string;
  title: string;
  description: string;
}

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const pillars: Pillar[] = [
    {
      icon: Database,
      number: '01',
      title: 'Evidence over Assumptions',
      description:
        'We rely on verifiable data, not intuition. In a market of guesses, facts are your competitive advantage.',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Clarity over Complexity',
      description:
        "If an insight can't be explained simply, it isn't useful. We turn complex SQL into plain English.",
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Impact over Outputs',
      description:
        "Dashboards don't create value — decisions do. We measure success by your revenue growth, not report length.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section 
      ref={containerRef} 
      className="relative py-32 lg:py-40 bg-white overflow-hidden"
    >
      {/* Subtle Grid Pattern - Editorial/Financial Journal Feel */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
      />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        
        {/* Header Section - Big 4 Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">Our Approach</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
            Data requires <span className="italic font-light text-slate-600">discipline</span>, not just tools.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Three principles that define our methodology
          </p>
        </motion.div>

        {/* Cards Grid - 12 Column Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              variants={itemVariants}
              className="group relative lg:col-span-4 border-r border-slate-200 last:border-r-0"
            >
              {/* 1px Top Border - Signature Big 4 Element */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-200 group-hover:bg-slate-900 transition-all duration-500" />
              
              {/* Card Content */}
              <div className="pt-16 pb-12 px-8 lg:px-10 min-h-[480px] flex flex-col">
                
                {/* Header with Icon and Number */}
                <div className="flex justify-between items-start mb-12">
                  {/* Thin-Stroke Icon */}
                  <div className="p-0 group-hover:scale-105 transition-transform duration-300">
                    <pillar.icon 
                      strokeWidth={1.2} 
                      className="w-10 h-10 text-slate-700 group-hover:text-slate-900 transition-colors duration-300" 
                    />
                  </div>
                  
                  {/* Large Semi-Transparent Serif Number */}
                  <span 
                    className="text-8xl font-serif text-slate-100 font-light select-none pointer-events-none absolute top-8 right-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ lineHeight: 1 }}
                  >
                    {pillar.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-6 leading-tight relative z-10">
                  {pillar.title}
                </h3>
                
                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed font-light mb-auto relative z-10">
                  {pillar.description}
                </p>

                {/* Hover State - "Explore" Link */}
                <Link to='/about#values'>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center text-sm font-medium text-slate-900 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                    <span className="mr-2 tracking-wide">Explore principle</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </div>
                </Link>
                  
              </div>

              {/* Vertical Divider on Mobile */}
              <div className="lg:hidden h-px w-full bg-slate-200" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}