import { motion } from 'motion/react';
import { Database, FlaskConical, Briefcase, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from "react-router-dom";
import { useChatbot } from '@/app/contexts/ChatbotContext';

export function LearningSection() {
  const { openChatWithMessage } = useChatbot();

  const tracks = [
    {
      icon: Database,
      title: 'The Analyst',
      subtitle: 'Master the tools of modern data work',
      skills: ['SQL & Database Querying', 'Excel Power User', 'PowerBI & Visualization', 'Data Cleaning'],
      duration: '8 weeks',
      level: 'Beginner to Intermediate',
      outcome: 'Build dashboards that drive decisions',
    },
    {
      icon: FlaskConical,
      title: 'The Researcher',
      subtitle: 'Scientific analysis for academic excellence',
      skills: ['Research Methodology', 'Statistical Analysis', 'Thesis Writing', 'Literature Review'],
      duration: '6 weeks',
      level: 'Undergraduate to PhD',
      outcome: 'Defend your thesis with confidence',
    },
    {
      icon: Briefcase,
      title: 'The Strategist',
      subtitle: 'Business intelligence for leaders',
      skills: ['KPI Design', 'Decision Frameworks', 'Performance Metrics', 'Strategic Analysis'],
      duration: '4 weeks',
      level: 'Managers & Executives',
      outcome: 'Lead with data-informed confidence',
    },
  ];

  return (
    <section id="learning" className="py-32 lg:py-40 bg-slate-50">
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
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">Learning Tracks</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6 max-w-4xl">
            Build skills the future demands
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Join the vanguard of African Data Professionals
          </p>
        </motion.div>

        {/* Learning Tracks - Big 4 Grid Layout */}
        <div className="grid md:grid-cols-3 gap-0 border-l border-slate-200 mb-20">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-300 relative"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header */}
              <div className="p-10 border-b border-slate-200">
                <div className="mb-8">
                  <track.icon className="w-10 h-10 text-slate-700 group-hover:text-slate-900 transition-colors" strokeWidth={1.2} />
                </div>
                <h3 className="text-2xl font-serif font-medium text-slate-900 mb-3 leading-tight">{track.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{track.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="flex items-center justify-between mb-8 text-sm text-slate-500 font-light">
                  <span>{track.duration}</span>
                  <span className="px-3 py-1 border border-slate-200 text-xs tracking-wide uppercase">
                    {track.level}
                  </span>
                </div>

                <h4 className="text-xs uppercase tracking-wide text-slate-500 mb-6">
                  What You'll Learn:
                </h4>
                <ul className="space-y-4 mb-8">
                  {track.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 font-light">
                      <span className="text-slate-900 font-medium mt-1">—</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>

                <div className="border border-slate-200 p-6 mb-8">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">Learning Outcome</div>
                  <div className="text-slate-900 font-light leading-relaxed">{track.outcome}</div>
                </div>

                
                <Button 
                  onClick={() => openChatWithMessage(`I'm interested in the ${track.title} learning track. Can you provide more details?`)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-3 text-sm font-light tracking-wide group/btn"
                >
                  Explore Track
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.5} />
                </Button>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student CTA - Big 4 Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 overflow-hidden relative"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-slate-900" />
          
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-12 lg:p-16 bg-slate-900 border-r border-slate-800 relative overflow-hidden">
              {/* Large background number */}
              <span className="absolute bottom-8 right-8 text-[180px] font-serif text-white/5 font-light select-none pointer-events-none">
                03
              </span>

              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl font-serif font-medium text-white mb-6 leading-[1.1]">
                  Special Focus: Thesis & Research Support
                </h3>
                <p className="text-slate-300 font-light leading-relaxed mb-10 text-lg">
                  Discover scientific research and analysis. Learn why the 'Results' section makes or breaks your thesis.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    'One-on-one methodology coaching',
                    'Statistical analysis support (SPSS, R, Python, Stata)',
                    'Thesis structure & writing guidance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-300 font-light">
                      <span className="text-white font-medium mt-1">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => openChatWithMessage("I'm interested in Thesis & Research Support. Can you provide more information?")}
                  className="bg-white hover:bg-slate-100 text-slate-900 border-none px-8 py-3 text-sm font-light tracking-wide"
                >
                  Start Learning Today
                </Button>
              </div>
            </div>

            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-12">
                <div className="text-6xl lg:text-7xl font-serif font-light text-slate-900 mb-3">
                  500+
                </div>
                <div className="text-slate-600 font-light leading-relaxed">Students supported with thesis work</div>
              </div>
              <div className="mb-12">
                <div className="text-6xl lg:text-7xl font-serif font-light text-slate-900 mb-3">
                  94%
                </div>
                <div className="text-slate-600 font-light leading-relaxed">Achieved First Class or Distinction</div>
              </div>
              <div>
                <div className="text-6xl lg:text-7xl font-serif font-light text-slate-900 mb-3">
                  50+
                </div>
                <div className="text-slate-600 font-light leading-relaxed">Now working in data & analytics roles</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}