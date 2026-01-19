import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from '../components/Footer';
import { 
  TrendingUp, 
  Target, 
  Megaphone, 
  BarChart3, 
  Users, 
  Star, 
  Search, 
  ClipboardList,
  Globe,
  Zap,
  Brain,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Store,
  Building2,
  Home,
  Rocket,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useChatbot } from '@/app/contexts/ChatbotContext';
import { Button } from '@/app/components/ui/button';

type BusinessType = 'restaurants' | 'hotels' | 'real-estate' | 'startups' | 'ngos';

interface Sector {
  id: BusinessType;
  label: string;
  icon: React.ElementType;
  description: string;
}

const sectors: Sector[] = [
  { 
    id: 'restaurants', 
    label: 'Restaurants', 
    icon: Store,
    description: 'Scale dining experiences with data-driven customer engagement'
  },
  { 
    id: 'hotels', 
    label: 'Hotels', 
    icon: Building2,
    description: 'Transform hospitality through intelligence and digital presence'
  },
  { 
    id: 'real-estate', 
    label: 'Real Estate', 
    icon: Home,
    description: 'Accelerate property sales with market insights and automation'
  },
  { 
    id: 'startups', 
    label: 'Startups', 
    icon: Rocket,
    description: 'Build traction, validate markets, and scale operations efficiently'
  },
  { 
    id: 'ngos', 
    label: 'NGOs', 
    icon: Heart,
    description: 'Amplify impact through data, engagement, and donor intelligence'
  },
];

const blueprintData: Record<BusinessType, {
  title: string;
  pillars: Array<{
    icon: React.ElementType;
    title: string;
    description: string;
    details: string[];
  }>;
}> = {
  restaurants: {
    title: 'Revenue & Customer Engagement Blueprint',
    pillars: [
      {
        icon: Users,
        title: 'Customer Intelligence',
        description: 'Personalized engagement that costs less than acquiring new customers',
        details: [
          'Capture customer data (social handles, preferences, visit patterns)',
          'Automated personalized outreach on birthdays, festivals, celebrations',
          'Loyalty program design based on behavioral analytics',
          'Re-engagement campaigns for dormant customers'
        ]
      },
      {
        icon: Star,
        title: 'Review & Trends Analysis',
        description: 'Real-time feedback loops to improve satisfaction and experience',
        details: [
          'Web scraping for customer reviews across all platforms',
          'Sentiment analysis to identify pain points and delights',
          'Trending dish identification for optimized inventory',
          'Staff performance insights from feedback patterns'
        ]
      },
      {
        icon: Search,
        title: 'Competitor Intelligence',
        description: 'Market positioning through strategic analysis',
        details: [
          'Peer benchmarking on service, ambiance, pricing, location',
          'Menu gap analysis and differentiation opportunities',
          'Market share tracking and growth opportunity mapping',
          'Best practice identification from top performers'
        ]
      },
      {
        icon: ClipboardList,
        title: 'Strategic Surveys',
        description: 'Primary research to validate decisions and uncover insights',
        details: [
          'Custom surveys for menu development and service improvements',
          'Customer satisfaction scoring (NPS, CSAT)',
          'Market demand validation for new locations or concepts',
          'Price sensitivity and willingness-to-pay studies'
        ]
      }
    ]
  },
  hotels: {
    title: 'Hospitality Transformation Blueprint',
    pillars: [
      {
        icon: Users,
        title: 'Guest Experience Intelligence',
        description: 'Personalized stays that drive loyalty and premium pricing',
        details: [
          'Guest preference profiling across all touchpoints',
          'Automated pre-arrival personalization and upsell campaigns',
          'Post-stay engagement and review generation',
          'VIP tier management and exclusive benefits design'
        ]
      },
      {
        icon: Star,
        title: 'Reputation Management',
        description: 'Monitor and enhance your brand across all platforms',
        details: [
          'Real-time review monitoring (TripAdvisor, Google, Booking.com)',
          'Automated response templates for common feedback',
          'Service quality trends and improvement tracking',
          'Crisis detection and rapid response protocols'
        ]
      },
      {
        icon: Search,
        title: 'Market Positioning',
        description: 'Competitive intelligence for occupancy optimization',
        details: [
          'Competitor rate shopping and dynamic pricing recommendations',
          'Amenity benchmarking and differentiation strategy',
          'Seasonal demand forecasting and capacity planning',
          'Channel mix optimization (OTA vs. Direct bookings)'
        ]
      },
      {
        icon: ClipboardList,
        title: 'Guest Insights Research',
        description: 'Data-driven decisions for renovations and services',
        details: [
          'Guest satisfaction surveys across journey stages',
          'Amenity preference studies for ROI-focused upgrades',
          'Corporate client needs assessment for B2B growth',
          'Event and conference market opportunity analysis'
        ]
      }
    ]
  },
  'real-estate': {
    title: 'Property Sales Acceleration Blueprint',
    pillars: [
      {
        icon: Users,
        title: 'Buyer Intelligence',
        description: 'Convert leads faster with personalized engagement',
        details: [
          'Lead scoring based on browsing behavior and demographics',
          'Automated follow-up sequences for property inquiries',
          'Buyer journey mapping and conversion optimization',
          'Referral program design for existing clients'
        ]
      },
      {
        icon: Star,
        title: 'Market Sentiment Analysis',
        description: 'Understand buyer preferences and market dynamics',
        details: [
          'Social listening for neighborhood perception and trends',
          'Review analysis of competitor developments',
          'Price sensitivity mapping by property type and location',
          'Feature preference trends (sustainability, smart home, etc.)'
        ]
      },
      {
        icon: Search,
        title: 'Competitive Landscape',
        description: 'Strategic positioning in your target markets',
        details: [
          'Inventory tracking and pricing analysis of comparable properties',
          'Sales velocity benchmarking by developer and location',
          'Amenity comparison and differentiation opportunities',
          'Marketing spend efficiency analysis across competitors'
        ]
      },
      {
        icon: ClipboardList,
        title: 'Market Research',
        description: 'Validate development decisions with data',
        details: [
          'Demand studies for property types and price points',
          'Location desirability scoring and expansion analysis',
          'Buyer persona development through surveys',
          'Financing preference and affordability studies'
        ]
      }
    ]
  },
  startups: {
    title: 'Startup Growth & Validation Blueprint',
    pillars: [
      {
        icon: Users,
        title: 'Customer Acquisition',
        description: 'Build your early adopter base and prove product-market fit',
        details: [
          'Ideal customer profile (ICP) development through data',
          'Multi-channel acquisition campaigns (social, search, partnerships)',
          'Onboarding optimization and activation rate improvement',
          'Referral and viral loop engineering'
        ]
      },
      {
        icon: Star,
        title: 'Product & Market Validation',
        description: 'Test assumptions and iterate based on real feedback',
        details: [
          'A/B testing infrastructure for features and messaging',
          'User feedback collection and sentiment analysis',
          'Churn analysis and retention improvement strategies',
          'Feature prioritization based on customer impact'
        ]
      },
      {
        icon: Search,
        title: 'Competitive Intelligence',
        description: 'Position your startup in a crowded market',
        details: [
          'Competitor feature matrix and gap analysis',
          'Pricing strategy benchmarking and optimization',
          'Market share estimation and growth trajectory modeling',
          'Partnership and acquisition opportunity identification'
        ]
      },
      {
        icon: ClipboardList,
        title: 'Market Sizing & Research',
        description: 'Build investor-grade market intelligence',
        details: [
          'Total addressable market (TAM/SAM/SOM) calculation',
          'Customer willingness-to-pay and pricing research',
          'Market entry strategy validation through surveys',
          'Investor pitch data room preparation'
        ]
      }
    ]
  },
  ngos: {
    title: 'Impact Amplification Blueprint',
    pillars: [
      {
        icon: Users,
        title: 'Donor & Supporter Engagement',
        description: 'Build lasting relationships that fund your mission',
        details: [
          'Donor segmentation and personalized communication strategies',
          'Automated thank-you campaigns and impact reporting',
          'Major donor identification through wealth screening',
          'Volunteer engagement and retention programs'
        ]
      },
      {
        icon: Star,
        title: 'Impact Measurement',
        description: 'Quantify and communicate your outcomes',
        details: [
          'KPI framework design for programs and initiatives',
          'Beneficiary feedback collection and sentiment analysis',
          'Outcome tracking dashboards for stakeholder reporting',
          'Story mining from data for fundraising narratives'
        ]
      },
      {
        icon: Search,
        title: 'Funding Landscape Intelligence',
        description: 'Identify and secure grants and partnerships',
        details: [
          'Grant opportunity tracking and matching algorithms',
          'Foundation and corporate giving trend analysis',
          'Peer NGO benchmarking for best practices',
          'Partnership opportunity identification with aligned organizations'
        ]
      },
      {
        icon: ClipboardList,
        title: 'Needs Assessment Research',
        description: 'Design programs based on community realities',
        details: [
          'Community needs surveys and participatory research',
          'Program effectiveness evaluation through RCTs',
          'Stakeholder mapping and engagement planning',
          'Policy advocacy data collection and analysis'
        ]
      }
    ]
  }
};

export function GrowMyBusinessPage() {
  const [selectedSector, setSelectedSector] = useState<BusinessType>('restaurants');
  const { openChatbot } = useChatbot();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop)` }}
          />
          <motion.div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#F8FAFC 1px, transparent 1px),
                                linear-gradient(90deg, #F8FAFC 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 border border-slate-400/30 bg-slate-800/30 backdrop-blur-sm mb-8">
              <div className="h-px w-8 bg-slate-400" />
              <span className="text-xs font-medium tracking-[0.2em] text-slate-300 uppercase">
                Business Transformation
              </span>
              <div className="h-px w-8 bg-slate-400" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 leading-[1.1]">
              We scale and transform businesses to gain{' '}
              <span className="italic font-light text-slate-300">wider traction</span>,{' '}
              <span className="italic font-light text-slate-300">collaboration</span>, and{' '}
              <span className="italic font-light text-slate-300">revenue</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
              A holistic approach to business intelligence, digital presence, and strategic growth—tailored to your sector's unique challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sector Selector */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-4">
              Are you a...
            </h2>
            <p className="text-slate-600 font-light">
              Select your business type to see our tailored transformation blueprint
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.button
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedSector(sector.id)}
                className={`group relative p-6 border-2 transition-all duration-300 text-left ${
                  selectedSector === sector.id
                    ? 'bg-slate-900 border-slate-900 shadow-lg'
                    : 'bg-white border-slate-200 hover:border-slate-400 hover:shadow-md'
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <sector.icon 
                  className={`w-8 h-8 mb-4 transition-colors ${
                    selectedSector === sector.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-900'
                  }`}
                  strokeWidth={1.5}
                />
                
                <h3 className={`font-medium mb-2 transition-colors ${
                  selectedSector === sector.id ? 'text-white' : 'text-slate-900'
                }`}>
                  {sector.label}
                </h3>
                
                <p className={`text-sm font-light leading-relaxed transition-colors ${
                  selectedSector === sector.id ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {sector.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-slate-300" />
              <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                Service Execution Engine
              </span>
              <div className="h-px w-12 bg-slate-300" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 mb-6 leading-[1.1]">
              What we deliver for you
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              Three integrated service pillars that transform how you engage customers, understand markets, and scale operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1: Digital Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-slate-50 border border-slate-200 p-8 hover:border-slate-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 border border-slate-300 bg-white flex items-center justify-center mb-6 group-hover:border-slate-900 transition-colors">
                <Megaphone className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-serif text-slate-900 mb-4">
                Digital Marketing & Media
              </h3>
              
              <p className="text-slate-600 font-light mb-6 leading-relaxed">
                Build a vibrant digital presence that attracts and converts your ideal customers
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">SEO-optimized websites with conversion focus</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Social media content (Reels, posters, carousels)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">AI-powered video creation and automation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Print media (flyers, brochures, brand collateral)</span>
                </div>
              </div>
            </motion.div>

            {/* Service 2: Business Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-slate-50 border border-slate-200 p-8 hover:border-slate-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 border border-slate-300 bg-white flex items-center justify-center mb-6 group-hover:border-slate-900 transition-colors">
                <Brain className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-serif text-slate-900 mb-4">
                Business Intelligence
              </h3>
              
              <p className="text-slate-600 font-light mb-6 leading-relaxed">
                Turn data into strategic decisions that drive growth and competitive advantage
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Market research and A/B testing frameworks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">AI-powered automation of business processes</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Data analytics and visualization dashboards</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Predictive modeling and trend forecasting</span>
                </div>
              </div>
            </motion.div>

            {/* Service 3: Outsourcing & R&D */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-slate-50 border border-slate-200 p-8 hover:border-slate-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 border border-slate-300 bg-white flex items-center justify-center mb-6 group-hover:border-slate-900 transition-colors">
                <Zap className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-serif text-slate-900 mb-4">
                Outsourcing & Product R&D
              </h3>
              
              <p className="text-slate-600 font-light mb-6 leading-relaxed">
                Free up your time to focus on strategy while we handle execution and innovation
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Product research and market validation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Operations support for busy founders</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Technical feasibility and prototyping</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-slate-700 font-light">Vendor management and quality assurance</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4-Pillar Blueprint */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSector}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-16 text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-12 bg-slate-300" />
                  <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
                    Proposal Framework
                  </span>
                  <div className="h-px w-12 bg-slate-300" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 mb-6 leading-[1.1]">
                  4-Pillar {blueprintData[selectedSector].title}
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                  Our comprehensive approach to transforming your{' '}
                  {sectors.find(s => s.id === selectedSector)?.label.toLowerCase()} business
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {blueprintData[selectedSector].pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border border-slate-200 p-8 hover:border-slate-900 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 border border-slate-300 bg-slate-50 flex items-center justify-center flex-shrink-0">
                        <pillar.icon className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif text-slate-900 mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-sm text-slate-600 font-light leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pl-16">
                      {pillar.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                          <span className="text-sm text-slate-700 font-light leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Value Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-900 border-2 border-slate-700 p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                  <div className="w-16 h-16 border border-slate-600 bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-white mb-3">
                      Complete Digital Transformation Package
                    </h3>
                    <p className="text-slate-300 font-light leading-relaxed">
                      In addition to our 4-pillar business intelligence framework, you receive an SEO-optimized website with proven traction strategies, vibrant media presence across all channels, and continuous consumer engagement systems that keep your brand top-of-mind.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 mb-6 leading-[1.1]">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
              Let's discuss how our holistic approach can drive traction, collaboration, and revenue for your organization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => openChatbot("I'd like to schedule a consultation to discuss business transformation for my organization.")}
                className="group inline-flex items-center gap-2 p-[20px] bg-slate-900 text-white border-2 border-slate-900 hover:bg-slate-800 transition-all duration-300 px-[13px] py-[27px] px-[12px]"
              >
                <span className="font-medium">Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Button>

              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-300 hover:border-slate-900 transition-all duration-300"
              >
                <span className="font-medium">View Case Studies</span>
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}