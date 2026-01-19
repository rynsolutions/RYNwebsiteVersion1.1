import { motion } from 'motion/react';
import { 
  Wifi, 
  Activity, 
  BarChart3, 
  Store, 
  UtensilsCrossed, 
  GraduationCap,
  ArrowRight,
  TrendingUp,
  Layers,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import { useChatbot } from '@/app/contexts/ChatbotContext';

// --- Data Configuration ---

const CASE_STUDIES = [
  {
    id: 'telco',
    badge: 'Telecommunications',
    title: 'Predictive Customer Retention Architecture',
    description: 'We help telecom providers turn subscriber data into actionable retention strategies. Working across Africa, UK, and US markets to reduce churn and maximize customer value.',
    image: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768382180/Screenshot_2026-01-14_091417_a8izw0.png',
    icon: Wifi,
    colorTheme: 'blue', // Tailwind semantic color reference
    metrics: [
      { value: '22%', label: 'Churn Reduction' },
      { value: '30%', label: 'ARPU Increase' },
      { value: '85%', label: 'Prediction Accuracy' }
    ]
  },
  {
    id: 'health',
    badge: 'Healthcare & Life Sciences',
    title: 'From Clinical Trials to Bedside Operations',
    description: 'When a p-value determines a billion-dollar drug\'s future and a 10-minute delay costs lives, data matters. We help research institutes and hospitals make better decisions faster.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    icon: Activity,
    colorTheme: 'emerald',
    metrics: [
      { value: 'p=0.73', label: 'Early Detection' },
      { value: '35%', label: 'Wait Time Reduction' },
      { value: '95%', label: 'Data Accuracy' }
    ]
  },
  {
    id: 'finance',
    badge: 'Financial Services',
    title: 'Navigating Volatile Markets with Precision',
    description: 'When a single tweet can crash a currency, historical charts aren\'t enough. We help forex traders and boutique banks predict volatility before it hits the ticker.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    icon: BarChart3,
    colorTheme: 'violet',
    metrics: [
      { value: '5 Days', label: 'Early Warning' },
      { value: '24/7', label: 'Audit Monitoring' },
      { value: '95%', label: 'Confidence Level' }
    ]
  },
  {
    id: 'retail',
    badge: 'Consumer & Retail',
    title: 'From Adum to Aisle 4: Retail Intelligence',
    description: 'Every box in your warehouse is trapped money. We help distributors and high-volume traders know exactly what to buy, when to restock, and how to price it.',
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2070&auto=format&fit=crop',
    icon: Store,
    colorTheme: 'amber',
    metrics: [
      { value: '15%', label: 'Ticket Increase' },
      { value: '90%', label: 'Time Saved' },
      { value: '300%', label: 'Seasonal Accuracy' }
    ]
  },
  {
    id: 'restaurants',
    badge: 'Restaurants & Hospitality',
    title: 'Transforming Gut Feeling into Revenue',
    description: 'A 5% margin increase can double your net profit. We build GastroIntel™—intelligence that engineers your menu for maximum profit.',
    image: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768574035/Screenshot_2026-01-16_142918_lpssgx.png',
    icon: UtensilsCrossed,
    colorTheme: 'orange',
    metrics: [
      { value: '25%', label: 'Revenue Per Seat' },
      { value: '30%', label: 'Waste Reduction' },
      { value: '40%', label: 'Margin Improvement' }
    ]
  },
  {
    id: 'education',
    badge: 'Academia & Education',
    title: 'Supporting Academic Success for Students',
    description: 'RYN Solutions partners with you to automate the hard parts of research. We turn messy survey data into clear, high-grade results.',
    image: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768574374/Screenshot_2026-01-16_143818_jcbdyq.png',
    icon: GraduationCap,
    colorTheme: 'indigo',
    metrics: [
      { value: '70%', label: 'Time Saved' },
      { value: '95%', label: 'Accuracy Rate' },
      { value: '3 Wks', label: 'Turnaround' }
    ]
  }
];

// Map theme strings to Tailwind classes
const getColorClasses = (theme: string) => {
  const styles: Record<string, { badge: string; accent: string; hoverBorder: string; bgSoft: string }> = {
    blue: { 
      badge: 'bg-blue-500', 
      accent: 'text-blue-600', 
      hoverBorder: 'group-hover:border-blue-500',
      bgSoft: 'bg-blue-50'
    },
    emerald: { 
      badge: 'bg-emerald-600', 
      accent: 'text-emerald-700', 
      hoverBorder: 'group-hover:border-emerald-600',
      bgSoft: 'bg-emerald-50'
    },
    violet: { 
      badge: 'bg-violet-600', 
      accent: 'text-violet-700', 
      hoverBorder: 'group-hover:border-violet-600',
      bgSoft: 'bg-violet-50'
    },
    amber: { 
      badge: 'bg-amber-500', 
      accent: 'text-amber-700', 
      hoverBorder: 'group-hover:border-amber-500',
      bgSoft: 'bg-amber-50'
    },
    orange: { 
      badge: 'bg-orange-600', 
      accent: 'text-orange-700', 
      hoverBorder: 'group-hover:border-orange-600',
      bgSoft: 'bg-orange-50'
    },
    indigo: { 
      badge: 'bg-indigo-600', 
      accent: 'text-indigo-700', 
      hoverBorder: 'group-hover:border-indigo-600',
      bgSoft: 'bg-indigo-50'
    }
  };
  return styles[theme] || styles.blue;
};

export function CaseStudiesOverviewPage() {
  const { chatbotOpen, setChatbotOpen } = useChatbot();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Global Data Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>Proven Impact</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
              Real Solutions for <br />
              <span className="italic text-slate-400">Real Challenges.</span>
            </h1>
            
            <p className="md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto text-[14px] font-bold">
              Explore how RYN Solutions transforms data into competitive advantage across 
              telecommunications, healthcare, finance, retail, and education.
            </p>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2 text-[rgb(123,173,183)] font-bold italic">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                6 Industry Verticals
              </span>
              <span className="flex items-center gap-2 font-bold italic">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Data-Driven Results
              </span>
              <span className="flex items-center gap-2 font-bold italic">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Global Standards
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CASE STUDIES GRID --- */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study, idx) => {
              const styles = getColorClasses(study.colorTheme);
              
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <Link to={`/case-studies/${study.id}`} className="block h-full">
                    <div className={`group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full flex flex-col ${styles.hoverBorder}`}>
                      
                      {/* Card Image */}
                      <div className="relative h-60 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.badge} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
                        
                        <div className="absolute top-4 left-4">
                          <span className={`${styles.badge} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded shadow-sm`}>
                            {study.badge}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <study.icon className={`w-5 h-5 ${styles.accent}`} />
                          <span className={`text-xs font-bold uppercase tracking-wide ${styles.accent}`}>
                            Case Study
                          </span>
                        </div>

                        <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-blue-900 transition-colors leading-tight">
                          {study.title}
                        </h3>
                        
                        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                          {study.description}
                        </p>

                        {/* Metrics Bar */}
                        <div className={`grid grid-cols-3 gap-2 p-4 rounded-lg ${styles.bgSoft} mb-6`}>
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <div className={`text-sm font-serif font-bold ${styles.accent}`}>
                                {metric.value}
                              </div>
                              <div className="text-[10px] text-slate-500 uppercase tracking-tight mt-1">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Link Indicator */}
                        <div className="flex items-center justify-end text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                          Read Full Story <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- BRIDGE: METHODOLOGY PREVIEW --- */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                 <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Analysis Methodology" 
                  className="w-full h-full object-cover"
                />
                {/* Overlay Text/Graphic */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur p-6 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Layers className="w-5 h-5 text-blue-600" />
                    <span className="text-xs font-bold uppercase text-slate-500">The Framework</span>
                  </div>
                  <p className="text-slate-900 font-serif text-lg leading-tight">
                    Every result above is built on our 4-Step Analytical Engine.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                <LineChart className="w-3 h-3" />
                <span>Our Methodology</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
                How we achieve these numbers.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Results like "22% Churn Reduction" don't happen by accident. They are the result of a 
                rigorous, proprietary process that moves from raw data extraction to predictive modeling 
                and final operational deployment.
              </p>
              
              <div className="space-y-4 mb-10">
                {['1. Diagnostic Audit', '2. Hypothesis Generation', '3. Predictive Modeling', '4. Operational Integration'].map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <span className="font-serif text-slate-400 font-bold text-lg">0{i + 1}</span>
                    <span className="font-medium text-slate-900">{step}</span>
                  </div>
                ))}
              </div>

              <Link to="/services">
                <Button className="h-14 px-8 bg-slate-900 text-white hover:bg-slate-800">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}