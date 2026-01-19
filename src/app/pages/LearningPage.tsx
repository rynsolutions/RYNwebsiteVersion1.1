import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  BookOpen, 
  BarChart, 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Clock, 
  Signal,
  Building2,
  Lightbulb
} from 'lucide-react';
import { Footer } from '../components/Footer';
import { useChatbot } from '@/app/contexts/ChatbotContext';

// --- Assets & Data ---

const LEARNING_TRACKS = [
  {
    id: 'foundations',
    title: 'Data Foundations',
    subtitle: 'Corporate Literacy: Excel, SQL, and Visualization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    duration: '8 weeks',
    level: 'Beginner',
    outcomes: ['Build automated dashboards', 'Clean messy corporate data', 'Master SQL queries'],
    tags: ['Excel', 'SQL', 'PowerBI']
  },
  {
    id: 'researcher',
    title: 'The Academic Researcher',
    subtitle: 'Thesis Analysis, Methodology, and Reproducibility',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop',
    duration: '12 weeks',
    level: 'Intermediate',
    outcomes: ['Complete thesis analysis', 'Advanced SPSS/R scripting', 'Publication-ready charts'],
    tags: ['R', 'SPSS', 'Python', 'Stats']
  },
  {
    id: 'retail',
    title: 'The Retail Analyst',
    subtitle: 'Inventory, Supply Chain & Sales Intelligence',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    duration: '10 weeks',
    level: 'Advanced',
    outcomes: ['Demand forecasting models', 'Inventory optimization', 'Price elasticity analysis'],
    tags: ['Supply Chain', 'Forecasting', 'Profit Modeling']
  }
];

const RESOURCES = [
  {
    title: 'Top Careers in AI & Data (Ghana Edition)',
    desc: '2026 Salary bands & demand signals.',
    icon: BarChart,
  },
  {
    title: 'The 12-Week Roadmap',
    desc: 'A step-by-step guide to the top 1% of skills.',
    icon: Trophy,
  },
  {
    title: 'Thesis Analysis Primer',
    desc: 'Why results matter more than raw data.',
    icon: BookOpen,
  },
];

export function LearningPage() {
  const [userType, setUserType] = useState('student');
  const { openChatbot } = useChatbot();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* --- HERO SECTION WITH CINEMATIC BACKGROUND --- */}
      
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
            alt="Executive Education" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium tracking-wide">The Top 1% Promise</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-8">
              Don't just learn Data. <br/>
              <span className="italic text-slate-300">Master the Decision.</span>
            </h1>

            <p className="text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed text-[15px] font-normal font-bold">
              We bridge the gap between academic theory and corporate reality. 
              Join the cohort that is redefining African data intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => openChatbot("I'd like to explore your data analytics courses and learning tracks.")}
                className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-100 font-medium text-lg"
              >
                Explore Courses
              </Button>
              <Button 
                onClick={() => openChatbot("I'm interested in sponsoring a fellow through your learning program.")}
                variant="outline" 
                className="h-14 px-8 border-white/30 text-black hover:bg-white/10 hover:text-white font-medium text-lg"
              >
                Sponsor a Fellow
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LEARNING TRACKS (COURSE CATALOG) --- */}
      
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Executive Learning Tracks</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Curated curriculums designed for high-impact outcomes. Choose your specialization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEARNING_TRACKS.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Course Thumbnail */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={track.image} 
                    alt={track.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium">
                      {track.level}
                    </span>
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {track.duration}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 flex-grow">{track.subtitle}</p>
                  
                  <div className="space-y-3 mb-8">
                    {track.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {track.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-slate-500 bg-slate-50 px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      onClick={() => openChatbot(`I'd like to view the syllabus for the ${track.title} learning track.`)}
                      className="w-full bg-slate-900 text-white hover:bg-slate-800"
                    >
                      View Syllabus
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INSIGHTS LINK PREVIEW (The "Bridge") --- */}
      
      <section className="py-12 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <Link to="/insights" className="group relative block overflow-hidden bg-white border border-slate-200 hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Insights" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500" />
              </div>
              
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-900 font-semibold uppercase tracking-wider text-xs mb-4">
                  <Signal className="w-4 h-4" />
                  <span>Research & Intelligence</span>
                </div>
                <h3 className="text-3xl font-serif text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                  See what we are learning in the field.
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Our curriculum isn't just theory. It is built on real-world data extracted from our pilots in Kejetia, Adum, and healthcare facilities.
                </p>
                <div className="flex items-center text-slate-900 font-medium group-hover:translate-x-2 transition-transform">
                  Read the latest Insights <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* --- ADDITIONAL BRIDGE LINKS --- */}
      <section className="py-12 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
              Explore More
            </p>
            <h2 className="text-3xl font-serif text-slate-900">
              See How Learning Connects to Real-World Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Link to Services */}
            <Link to="/services" className="group block">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                <div className="grid md:grid-cols-2">
                  <div className="h-48 md:h-auto overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                      alt="Services"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      <BarChart className="w-4 h-4" />
                      <span>Capabilities</span>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Our Services
                    </h3>
                    <p className="text-slate-600 mb-6">
                      These skills translate directly into the solutions we deploy for clients.
                    </p>
                    <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                      View Services <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Link to Innovation */}
            <Link to="/innovation" className="group block">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full">
                <div className="grid md:grid-cols-2">
                  <div className="h-48 md:h-auto overflow-hidden relative">
                    <img 
                      src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768081762/ramon-salinero-vEE00Hx5d0Q-unsplash_1_pecoxg.jpg" 
                      alt="Innovation"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                      <Lightbulb className="w-4 h-4" />
                      <span>RYN Labs</span>
                    </div>
                    <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                      Field Labs
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Apply what you learn in real pilot environments—from Adum to healthcare.
                    </p>
                    <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                      Explore Labs <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FREE RESOURCES --- */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-slate-900 mb-12 text-center">Open Source Knowledge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {RESOURCES.map((res, index) => (
              <div key={index} className="bg-slate-50 p-8 border border-slate-100 hover:border-slate-300 transition-colors">
                <res.icon className="w-10 h-10 text-slate-700 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium text-slate-900 mb-2">{res.title}</h3>
                <p className="text-slate-500 mb-8">{res.desc}</p>
                <button 
                  onClick={() => openChatbot(`I'd like to download the resource: ${res.title}`)}
                  className="flex items-center text-sm font-semibold text-blue-900 hover:gap-2 transition-all"
                >
                  <Download className="w-4 h-4 mr-2" /> Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEGMENTED CTA --- */}
      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Choose your path</h2>
          
          <Tabs defaultValue="student" className="w-full" onValueChange={setUserType}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white/10 p-1 rounded-full mb-12">
              {['student', 'employee', 'employer'].map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab}
                  className="rounded-full data-[state=active]:bg-white data-[state=active]:text-slate-900 capitalize"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="max-w-2xl mx-auto">
              <TabsContent value="student" className="mt-0 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl mb-4">Launch your career with evidence.</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  Get the skills you need to write a defensible thesis and land your first role in the top 1% of data professionals.
                </p>
                <Button 
                  onClick={() => openChatbot("I'd like to get the student checklist for launching my career in data analytics.")}
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 h-12"
                >
                  Get Student Checklist
                </Button>
              </TabsContent>
              
              <TabsContent value="employee" className="mt-0 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl mb-4">Future-proof your role.</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  Move from "reporting" to "predicting." Master the tools that your company needs to survive the next decade.
                </p>
                <Button 
                  onClick={() => openChatbot("I'd like to learn about your upcoming learning cohorts for professionals.")}
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 h-12"
                >
                  See Upcoming Cohorts
                </Button>
              </TabsContent>

              <TabsContent value="employer" className="mt-0 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-2xl mb-4">Build a Data-Driven Culture.</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  Don't just hire data scientists; build data intuition across your entire teams. We offer bespoke corporate training.
                </p>
                <Button 
                  onClick={() => openChatbot("I'd like to partner with RYN Labs for corporate data training and culture building.")}
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 h-12"
                >
                  Partner with RYN Labs
                </Button>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}