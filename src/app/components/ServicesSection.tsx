import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BarChart3, Users, FlaskConical, Brain, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useChatbot } from '@/app/contexts/ChatbotContext';

export function ServicesSection() {
  const { openChatbot } = useChatbot();
  const [expandedService, setExpandedService] = useState<number | null>(0);

  const services = [
    {
      icon: BarChart3,
      number: '01',
      title: 'Business & Retail Intelligence',
      tag: 'For Store Owners',
      offerings: ['Sales revenue analytics', 'Inventory optimization', 'Pricing analysis'],
      outcome: 'Increased revenue, reduced losses, better stock decisions.',
      link: '/',
    },
    {
      icon: Users,
      number: '02',
      title: 'Data Coaching & Decision Support',
      tag: 'Flagship Service',
      offerings: ['Monthly performance reviews', 'Decision frameworks', "The Manager's Action Plan"],
      outcome: "We don't just send reports; we sit with you to interpret them.",
      featured: true,
      link: '/',
    },
    {
      icon: FlaskConical,
      number: '03',
      title: 'Research, Evaluation & Impact Analysis',
      tag: 'For NGOs & Academia',
      offerings: ['Academic research', 'Thesis support', 'Program evaluation (NGOs)'],
      outcome: 'Defensible evidence for donors and universities.',
      link: '/',
    },
    {
      icon: Brain,
      number: '04',
      title: 'Data, AI & Automation',
      tag: 'Innovation',
      offerings: ['Low-cost BI systems', 'Custom dashboards', 'AI forecasting'],
      outcome: 'Modern tools that work in African contexts.',
      link: '/',
    },
  ];

  return (
    <section id="services" className="py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">Our Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6 max-w-4xl">
            Services designed to turn data into measurable results
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Choose the solution that fits your needs, or let us design a custom approach
          </p>
        </motion.div>

        <div className="space-y-0 border-t border-slate-200">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group border-b border-slate-200 transition-all duration-300 ${
                service.featured ? 'bg-slate-50/50' : 'bg-white'
              }`}
            >
              <button
                onClick={() => setExpandedService(expandedService === index ? null : index)}
                className="w-full text-left p-8 lg:p-10 hover:bg-slate-50/50 transition-colors relative"
              >
                {/* Top accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-slate-900 transition-all duration-300 ${
                  expandedService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                }`} />

                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6 lg:gap-8 flex-1">
                    {/* Number - Large Serif */}
                    <span className="text-4xl lg:text-5xl font-serif text-slate-300 font-light select-none min-w-[60px]">
                      {service.number}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-3">
                        {/* Icon - Thin Stroke */}
                        <div className="flex items-center gap-4">
                          <service.icon 
                            className="w-7 h-7 text-slate-700 group-hover:text-slate-900 transition-colors" 
                            strokeWidth={1.2}
                          />
                          <h3 className="text-2xl lg:text-3xl font-serif font-medium text-slate-900 leading-tight">
                            {service.title}
                          </h3>
                        </div>
                        
                        {/* Tag - Minimal */}
                        <span className="inline-flex items-center px-3 py-1 border border-slate-200 text-xs font-light tracking-wide text-slate-600 uppercase w-fit">
                          {service.tag}
                        </span>
                      </div>
                      <p className="text-base text-slate-600 font-light leading-relaxed">{service.outcome}</p>
                    </div>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: expandedService === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-2"
                  >
                    <ChevronDown className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 lg:px-10 pb-10 pt-0">
                      <div className="pl-0 lg:pl-[76px] border-t border-slate-200 pt-8">
                        <h4 className="text-base font-medium text-slate-900 mb-6 tracking-wide uppercase text-xs">
                          What's Included:
                        </h4>
                        <ul className="space-y-4 mb-8">
                          {service.offerings.map((offering, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-start gap-4"
                            >
                              <div className="flex-shrink-0 w-1 h-1 bg-slate-900 mt-2.5" />
                              <span className="text-slate-700 font-light leading-relaxed">{offering}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button 
                            onClick={() => openChatbot(`I'd like to learn more about ${service.title}`)}
                            className="group bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-2 text-sm font-light tracking-wide"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                          </Button>
                          <Button 
                            onClick={() => openChatbot(`I'd like to request a consultation about ${service.title}`)}
                            variant="outline" 
                            className="border-slate-300 text-slate-900 hover:bg-slate-50 px-6 py-2 text-sm font-light tracking-wide"
                          >
                            Request Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Big 4 Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border border-slate-200 p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-900" />
          
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl lg:text-4xl font-serif font-medium text-slate-900 mb-4 leading-tight">
              Not sure what you need?
            </h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              Let's discuss your challenges and find the right solution together
            </p>
            <Button 
              onClick={() => openChatbot("I'd like to book a free advisory session to discuss my challenges")}
              className="bg-slate-900 hover:bg-slate-800 text-white border-none px-8 py-3 text-sm font-light tracking-wide"
            >
              Book a Free Advisory Session
            </Button>
          </div>

          {/* Large background number */}
          <span className="absolute bottom-8 right-8 text-[180px] font-serif text-slate-100 font-light select-none pointer-events-none opacity-30">
            04
          </span>
        </motion.div>
      </div>
    </section>
  );
}