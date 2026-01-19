import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Store, Building2, Heart, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";
import { useChatbot } from '@/app/contexts/ChatbotContext';

export function IndustriesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const { openChatWithMessage } = useChatbot();

  const industries = [
    {
      icon: Store,
      label: 'Retail & Markets',
      title: 'Transforming Informal Commerce',
      focus: 'Adum, Kejetia & Market Traders',
      painPoints: [
        'Unpredictable stockouts',
        'Cash flow management',
        'Dead stock eating into margins',
        'Pricing decisions based on guesswork',
      ],
      solution: 'Daily sales analytics & SKU intelligence',
      description:
        'We work directly with market traders to turn handwritten ledgers into actionable insights. Our mobile-first dashboards help you know what to restock, when to discount, and how to maximize your limited capital.',
      cta: 'See Market Solutions',
    },
    {
      icon: Building2,
      label: 'SMEs & Enterprise',
      title: 'Data Intelligence for Growing Businesses',
      focus: 'Companies Ready to Scale',
      painPoints: [
        'No clear performance metrics',
        'Decisions made on incomplete data',
        'Expensive enterprise software that doesn\'t fit',
        'Limited analytical talent',
      ],
      solution: 'Custom BI systems & decision coaching',
      description:
        'From small businesses to established enterprises, we build intelligence systems that grow with you. Get monthly reviews, strategic guidance, and tools designed for the African business context.',
      cta: 'Explore Enterprise Services',
    },
    {
      icon: Heart,
      label: 'NGOs',
      title: 'Evidence for Impact',
      focus: 'Development Programs & Social Impact',
      painPoints: [
        'Donor reporting requirements',
        'Measuring program effectiveness',
        'Limited M&E capacity',
        'Data collection challenges',
      ],
      solution: 'Impact evaluation & research methodology',
      description:
        'We help NGOs prove their impact with rigorous evaluation frameworks. From baseline studies to randomized trials, we provide the scientific evidence donors and stakeholders demand.',
      cta: 'NGO Research Services',
    },
    {
      icon: GraduationCap,
      label: 'Students',
      title: 'Building the Top 1% Talent',
      focus: 'Aspiring Data Professionals & Researchers',
      painPoints: [
        'Theory vs. practice gap',
        'Weak analysis chapters in theses',
        'No access to real datasets',
        'Limited career guidance',
      ],
      solution: 'Real-world datasets, thesis methodology support & career coaching',
      description:
        'We mentor students who want to master data analysis, research methods, and scientific thinking. Get access to our dataset library, methodology workshops, and one-on-one thesis support.',
      cta: 'Start Your Learning Journey',
    },
  ];

  return (
    <section id="industries" className="py-32 lg:py-40 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">Industries</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6 max-w-4xl">
            Solutions shaped by real-world context
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            We understand your unique challenges because we work in your environment
          </p>
        </motion.div>

        {/* Tab Selector - Big 4 Style */}
        <div className="flex flex-wrap justify-start gap-0 mb-12 border-b border-slate-200">
          {industries.map((industry, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative flex items-center gap-3 px-8 py-4 transition-all duration-300 ${
                activeTab === index
                  ? 'text-slate-900'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <industry.icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="hidden sm:inline font-light">{industry.label}</span>
              {/* Bottom border indicator */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900 transition-all duration-300 ${
                  activeTab === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-200 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="h-[2px] bg-slate-900" />
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Dark Background */}
              <div className="p-12 lg:p-16 bg-slate-900 border-r border-slate-800 relative overflow-hidden">
                {/* Large background number */}
                <span className="absolute bottom-8 right-8 text-[180px] font-serif text-white/5 font-light select-none pointer-events-none">
                  {String(activeTab + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 border border-slate-700 flex items-center justify-center">
                      {(() => {
                        const Icon = industries[activeTab].icon;
                        return <Icon className="w-6 h-6 text-slate-300" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs tracking-wide uppercase">We Serve</div>
                      <div className="text-white text-xl font-serif font-medium">{industries[activeTab].label}</div>
                    </div>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-serif font-medium text-white mb-6 leading-[1.1]">
                    {industries[activeTab].title}
                  </h3>

                  <div className="inline-block border border-slate-700 px-4 py-2 mb-10">
                    <p className="text-slate-300 text-sm font-light">
                      Focus: {industries[activeTab].focus}
                    </p>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-slate-400 text-xs tracking-wide uppercase mb-6">Common Pain Points:</h4>
                    <ul className="space-y-4">
                      {industries[activeTab].painPoints.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start gap-4 text-slate-300 font-light"
                        >
                          <div className="w-1 h-1 bg-slate-500 mt-2.5 flex-shrink-0" />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-slate-700 p-6">
                    <div className="text-slate-500 text-xs tracking-wide uppercase mb-3">Our Solution</div>
                    <div className="text-white text-xl font-serif font-medium leading-tight">{industries[activeTab].solution}</div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="p-12 lg:p-16 flex flex-col justify-between">
                <div>
                  <p className="text-lg text-slate-700 font-light leading-relaxed mb-10">
                    {industries[activeTab].description}
                  </p>

                  <div className="border border-slate-200 p-8 mb-10">
                    <h4 className="text-xs uppercase tracking-wide text-slate-500 mb-6">
                      Why Choose RYN?
                    </h4>
                    <ul className="space-y-4 text-slate-700 font-light">
                      <li className="flex items-start gap-3">
                        <span className="text-slate-900 font-medium">—</span>
                        <span>Proven track record in African markets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-900 font-medium">—</span>
                        <span>Affordable, context-appropriate solutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-900 font-medium">—</span>
                        <span>Ongoing support & coaching</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to='/grow-my-business'>
                  <Button className="group bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-3 text-sm font-light tracking-wide">
                    {industries[activeTab].cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </Button>
                  </Link> 
                  <Button 
                    variant="outline"
                    onClick={() => openChatWithMessage(`I'd like to schedule a consultation about ${industries[activeTab].label} solutions.`)}
                    className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-3 text-sm font-light tracking-wide"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}