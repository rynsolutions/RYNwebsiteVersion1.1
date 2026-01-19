import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  BarChart3, 
  Globe, 
  Zap, 
  ArrowRight, 
  Plane, 
  Utensils, 
  Landmark, 
  Activity, 
  Cpu,
  BookOpen,
  Lightbulb,
  Building2
} from 'lucide-react';
import { Footer } from '../components/Footer';

// --- Data Structure ---

const SERVICES = [
  {
    title: "Customer & Experience Intelligence",
    description: "Turning raw behavior into loyalty. We move beyond demographics to predict churn and micro-segment audiences.",
    icon: Users,
    capabilities: ["Churn Prevention Models", "Micro-Segmentation Engines", "Brand Sentiment Pulse", "A/B Testing Protocols"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Operational Resilience",
    description: "Optimizing the backbone of your business. From supply chain logistics to inventory velocity.",
    icon: Zap,
    capabilities: ["Predictive Maintenance", "Flight Delay Prediction", "Menu Engineering", "Inventory Optimization"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Financial Risk & Capital Markets",
    description: "Navigating volatility with precision. Algorithmic strategies for institutional investors and fiscal planning.",
    icon: BarChart3,
    capabilities: ["Algorithmic Market Strategy", "Forex Volatility Modeling", "Fiscal Health Monitoring", "Automated Auditing"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "ESG & Public Stewardship",
    description: "Data for a sustainable future. Monitoring environmental impact and institutional performance.",
    icon: Globe,
    capabilities: ["Environmental Air Quality", "Water Safety Analytics", "Educational District Planning", "Public Health Dashboards"],
    image: "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768082882/Screenshot_2026-01-10_220501_stdxq2.png"
  }
];

const INDUSTRIES = [
  {
    id: 'telecom',
    name: 'Telecommunications',
    icon: Cpu,
    challenge: 'High acquisition costs and volatile customer loyalty.',
    solution: 'Precision Retention Architecture.',
    desc: 'We help telecom giants move from generic mass-texting to personalized packages. By utilizing Customer Segmentation, we identify exactly which subscribers need a data upgrade vs. a discount.'
  },
  {
    id: 'finance',
    name: 'Financial Services',
    icon: Landmark,
    challenge: 'Market volatility and information overload.',
    solution: 'Predictive Volatility Modeling.',
    desc: 'For traders and institutions, intuition is not enough. We deploy Algorithmic Strategies that analyze historical patterns to forecast asset performance in milliseconds.'
  },
  {
    id: 'aviation',
    name: 'Aviation & Transport',
    icon: Plane,
    challenge: 'Unpredictable disruptions costing millions in delays.',
    solution: 'Operational Continuity Systems.',
    desc: 'We deploy Flight Delay Prediction models using weather and traffic data, allowing management to proactively adjust schedules and turn chaotic delays into managed pivots.'
  },
  {
    id: 'retail',
    name: 'Consumer & Hospitality',
    icon: Utensils,
    challenge: 'Thin margins and changing consumer tastes.',
    solution: 'Menu Engineering.',
    desc: 'We do not just track sales; we analyze combinations. Through Menu Optimization, we engineer offerings that drive higher ticket sizes while reducing perishable waste.'
  },
  {
    id: 'public',
    name: 'Public Sector & Health',
    icon: Activity,
    challenge: 'Managing invisible environmental threats.',
    solution: 'Civic Data Stewardship.',
    desc: 'From Water Quality Analysis to Air Quality Prediction, we provide municipalities with the dashboards needed to ensure compliance and protect public health.'
  }
];

export function ServicesPage() {
  const [activeIndustry, setActiveIndustry] = useState(INDUSTRIES[0]);

  return (
    <>
      <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-slate-200">
        
        {/* --- CINEMATIC HERO SECTION --- */}
        <section className="relative pt-32 pb-32 px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
              alt="Strategic Analysis" 
              className="w-full h-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-slate-400"></div>
                <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
                  Capabilities & Industry Focus
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
                Data that <br />
                <span className="italic text-slate-400">compels action.</span>
              </h1>
              
              <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                We bridge the gap between academic rigor and commercial profit. 
                Our solutions are designed to drive decisive outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SERVICES GRID --- */}
        <section className="py-24 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Our Capabilities</span>
              <h2 className="text-3xl font-serif mt-2">The Science of Decision Making</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {SERVICES.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-slate-200 hover:shadow-xl transition-all duration-300 group overflow-hidden"
                >
                  {/* Contextual Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-serif mb-4 group-hover:text-blue-900 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="border-t border-slate-100 pt-6">
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-center text-sm text-slate-500">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INDUSTRY MATRIX --- */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Left: Industry List */}
              <div className="lg:col-span-4 space-y-2">
                <div className="mb-8">
                  <span className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Industries</span>
                  <h2 className="text-3xl font-serif mt-2">Tailored Solutions</h2>
                </div>
                
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind)}
                    className={`w-full text-left p-4 flex items-center justify-between group transition-all duration-300 ${
                      activeIndustry.id === ind.id 
                        ? 'bg-slate-900 text-white shadow-lg' 
                        : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <span className="font-medium text-lg">{ind.name}</span>
                    {activeIndustry.id === ind.id && <ArrowRight className="w-5 h-5" />}
                  </button>
                ))}
              </div>

              {/* Right: Detail Content */}
              <div className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndustry.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="h-full flex flex-col justify-center"
                  >
                    <div className="bg-slate-50 border border-slate-100 p-8 md:p-16">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-white shadow-sm">
                          <activeIndustry.icon className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl font-serif text-slate-900">{activeIndustry.solution}</h3>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">The Challenge</h4>
                          <p className="text-xl text-slate-900 font-light">
                            {activeIndustry.challenge}
                          </p>
                        </div>

                        <div className="h-px w-full bg-slate-200" />

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">The RYN Solution</h4>
                          <p className="text-lg text-slate-600 leading-relaxed">
                            {activeIndustry.desc}
                          </p>
                        </div>
                      </div>

                      <div className="mt-12 flex items-center text-slate-900 font-medium cursor-pointer group">
                        Explore our {activeIndustry.name} Case Studies
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* --- BRIDGE: PREVIEW LINKS TO OTHER PAGES --- */}
        <section className="py-24 px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Explore More
              </p>
              <h2 className="text-3xl font-serif text-slate-900">
                See How We Apply These Capabilities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Link to Industries */}
              <Link to="/industries" className="group block">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                      alt="Industry Focus"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      <Building2 className="w-4 h-4" />
                      <span>Sector Intelligence</span>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Industry Focus Areas
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      From retail markets to public health—see how we tailor our approach to your sector's unique reality.
                    </p>
                    <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                      Explore Industries <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Link to Innovation */}
              <Link to="/innovation" className="group block">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768081762/ramon-salinero-vEE00Hx5d0Q-unsplash_1_pecoxg.jpg" 
                      alt="Innovation Lab"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      <Lightbulb className="w-4 h-4" />
                      <span>RYN Labs</span>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Field Experiments
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      Real pilots in Adum Market and healthcare facilities testing what actually works before you scale.
                    </p>
                    <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                      See the Experiments <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Link to Learning */}
              <Link to="/learning" className="group block">
                <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                      alt="Learning Programs"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      <BookOpen className="w-4 h-4" />
                      <span>Executive Education</span>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Learning Tracks
                    </h3>
                    <p className="text-slate-600 mb-6 flex-grow">
                      Build internal data capability with our executive programs designed for African enterprise reality.
                    </p>
                    <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                      View Courses <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}