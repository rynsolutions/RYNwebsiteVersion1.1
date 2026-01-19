import { HeroSection } from '../components/HeroSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { ServicesSection } from '../components/ServicesSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { InsightsSection } from '../components/InsightsSection';
import { LearningSection } from '../components/LearningSection';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BarChart, Building2, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

export function HomePage() {
  const heroImage = "https://images.unsplash.com/photo-1722838630740-47b1269ac3b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFya2V0JTIwdHJhZGluZ3xlbnwxfHx8fDE3NjY1NzQxODl8MA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <>
      <SEO 
        title="RYN Solutions - Proven Business Intelligence Solutions That Drive Revenue Growth"
        description="RYN Solutions transforms raw data into actionable intelligence for African commerce, enterprises, and aspiring professionals. Local Reality, Global Standard."
        url="https://rynsolutions.org"
      />
      <main>
        <HeroSection heroImage={heroImage} />
        <PhilosophySection />
        <ServicesSection />
        <IndustriesSection />
        <InsightsSection />
        <LearningSection />
        
        {/* --- EXPLORE MORE: PILLAR PAGES PREVIEW --- */}
        <section className="py-24 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-12 bg-slate-300" />
                <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                  Dive Deeper
                </span>
                <div className="h-px w-12 bg-slate-300" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-medium text-slate-900 leading-[1.1] mb-6">
                Explore Our Capabilities
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                Detailed insights into how we serve African commerce, research, and enterprise intelligence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Services Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link to="/services" className="group block h-full">
                  <div className="bg-slate-50 border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                        alt="Services"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <BarChart className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                        Services
                      </h3>
                      <p className="text-sm text-slate-600 font-light mb-4 flex-grow">
                        Full capability matrix and solutions catalog
                      </p>
                      <span className="flex items-center text-sm font-medium text-slate-900 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Industries Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/industries" className="group block h-full">
                  <div className="bg-slate-50 border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                        alt="Industries"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                        Industries
                      </h3>
                      <p className="text-sm text-slate-600 font-light mb-4 flex-grow">
                        Sector-specific intelligence and research
                      </p>
                      <span className="flex items-center text-sm font-medium text-slate-900 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Learning Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/insights" className="group block h-full">
                  <div className="bg-slate-50 border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768575721/Screenshot_2026-01-16_145456_ln4v9k.png" 
                        alt="Learning"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                        Insights
                      </h3>
                      <p className="text-sm text-slate-600 font-light mb-4 flex-grow">
                        Discover thinking and Executive Intelligence
                      </p>
                      <span className="flex items-center text-sm font-medium text-slate-900 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Innovation Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/innovation" className="group block h-full">
                  <div className="bg-slate-50 border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="h-40 overflow-hidden relative">
                      <img 
                        src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768081762/ramon-salinero-vEE00Hx5d0Q-unsplash_1_pecoxg.jpg" 
                        alt="Innovation"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-10 h-10 border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <Lightbulb className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                        Innovation
                      </h3>
                      <p className="text-sm text-slate-600 font-light mb-4 flex-grow">
                        RYN Labs field experiments and pilots
                      </p>
                      <span className="flex items-center text-sm font-medium text-slate-900 group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4 ml-1" strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}