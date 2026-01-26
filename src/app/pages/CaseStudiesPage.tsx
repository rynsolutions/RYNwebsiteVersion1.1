import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Network, 
  Wifi, 
  Activity, 
  BarChart3, 
  Users, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Store,
  Stethoscope,
  Building2,
  TrendingUp,
  Target,
  Zap,
  HeartPulse,
  Microscope,
  ClipboardList,
  FileBarChart,
  Database,
  Calendar,
  UtensilsCrossed,
  ThumbsUp,
  Trash2,
  DollarSign,
  GraduationCap,
  BookOpen,
  FileText,
  Search
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import { useChatbot } from '../contexts/ChatbotContext';

// --- Assets & Data ---

const INDUSTRIES = [
  { id: 'telco', label: 'Telecommunications', icon: Wifi },
  { id: 'retail', label: 'Consumer & Retail', icon: Store },
  { id: 'restaurants', label: 'Restaurants & Hospitality', icon: UtensilsCrossed },
  { id: 'health', label: 'Healthcare', icon: Activity },
  { id: 'finance', label: 'Financial Services', icon: BarChart3 },
  { id: 'education', label: 'Academia & Education', icon: GraduationCap },
];

// TELCO DATA
const TELCO_DATA = {
  hero: {
    badge: "Telecommunications Intelligence",
    title: "Predictive Customer",
    titleAccent: "Retention Architecture.",
    subtitle: "We help telecom providers turn subscriber data into actionable retention strategies. Working across Africa, UK, and US markets to reduce churn and maximize customer value.",
    image: "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768382180/Screenshot_2026-01-14_091417_a8izw0.png",
    badgeColor: "blue"
  },
  metrics: [
    { value: "22%", label: "Churn Reduction", sublabel: "First 6 months" },
    { value: "30%", label: "ARPU Increase", sublabel: "Via bundling" },
    { value: "85%", label: "Prediction Accuracy", sublabel: "XGBoost model" },
    { value: "$2.4M", label: "Revenue Saved", sublabel: "Annually" }
  ],
  intro: {
    title: "Supporting Data-Driven Resilience",
    description: [
      "Telecom providers face a simple truth: acquiring new customers costs more than keeping existing ones. We help you identify who's likely to leave and what will make them stay.",
      "Our approach combines behavioral analytics with machine learning to predict churn, segment customers, and automate retention offers—before customers even think about switching providers."
    ],
    diagnostics: {
      title: "Strategic Diagnostics",
      description: "We start by analyzing your subscriber data to find patterns you might be missing. Why do month-to-month customers leave faster? Which services create loyalty? We answer these questions before building solutions.",
      items: ["Subscriber Data Auditing", "Churn Vulnerability Assessment", "Service Gap Analysis"]
    }
  },
  specialists: [
    "Behavioral Data Scientists",
    "Customer Lifecycle Architects",
    "Pricing Strategy Consultants",
    "Machine Learning Engineers",
    "Telecommunications Analysts",
    "Python/R Developers"
  ],
  technicalSpotlight: {
    title: "Churn Prediction & Prevention",
    description: "Our models identify at-risk customers and recommend the right intervention at the right time. Think of it as giving your team a crystal ball and a playbook.",
    steps: ['1. Predict Risk', '2. Segment Customers', '3. Personalize Offers', '4. Automate Outreach']
  },
  useCases: [
    {
      title: "Subscriber Retention (Churn)",
      description: "AI flags high-risk customers based on contract type, usage patterns, and payment history—then triggers personalized retention offers automatically.",
      icon: Users
    },
    {
      title: "Service Bundling",
      description: "Identify which add-ons specific customer segments actually want. Fiber users might need security, while mobile-only users want streaming packages.",
      icon: Network
    },
    {
      title: "Support Agent Dashboard",
      description: "Give your support team real-time customer risk scores and suggested actions during calls. Turn every support interaction into a retention opportunity.",
      icon: Phone
    },
    {
      title: "Network Usage Forecasting",
      description: "Predict peak usage times by region so your engineering team can allocate bandwidth proactively and prevent outages.",
      icon: Activity
    },
    {
      title: "Customer Segmentation",
      description: "Group subscribers into behavioral tribes—loyal anchors, price-sensitive switchers, digital enthusiasts—for targeted marketing.",
      icon: Globe
    },
    {
      title: "Revenue Assurance",
      description: "Catch billing errors and fraudulent activity early by monitoring usage anomalies and payment patterns in real-time.",
      icon: ShieldCheck
    }
  ]
};

// HEALTHCARE DATA
const HEALTH_DATA = {
  hero: {
    badge: "Healthcare & Life Sciences Intelligence",
    title: "From Clinical Trials to Bedside Operations:",
    titleAccent: "Precision Intelligence for Health.",
    subtitle: "When a p-value determines a billion-dollar drug's future and a 10-minute delay costs lives, data matters. We help research institutes, pharma companies, and hospitals make better decisions faster.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    badgeColor: "emerald"
  },
  metrics: [
    { value: "p=0.730", label: "Early Detection", sublabel: "Ineffective treatment" },
    { value: "35%", label: "Wait Time Reduction", sublabel: "ER optimization" },
    { value: "95%", label: "Data Accuracy", sublabel: "Unified records" },
    { value: "$8M+", label: "R&D Saved", sublabel: "Failed trials" }
  ],
  intro: {
    title: "Biostatistics Meets Operations",
    description: [
      "Healthcare data lives in silos. Researchers run trials without talking to hospital operations. Doctors can't access complete patient histories. Administrators react to crises instead of preventing them.",
      "We connect these dots. Our team combines rigorous biostatistics (R/SAS) to validate clinical trials with operational analytics to optimize patient flow and resource allocation."
    ],
    diagnostics: {
      title: "Clinical & Operational Audits",
      description: "We speak both languages—the statistical rigor of research and the practical realities of hospital management. Whether you're publishing a trial or fixing ER bottlenecks, we help.",
      items: ["Clinical Trial Design", "Hospital Workflow Analysis", "Patient Record Integration"]
    }
  },
  specialists: [
    "Biostatisticians (R/SAS)",
    "Epidemiologists",
    "Hospital Administrators",
    "Clinical Research Scientists",
    "Health Data Engineers",
    "Compliance Specialists (HIPAA/GDPR)"
  ],
  technicalSpotlight: {
    title: "Integrated Health Analytics",
    description: "Whether you're validating a clinical trial or reducing wait times, we provide end-to-end solutions that connect lab research with lobby operations.",
    steps: ['1. Clinical Validator', '2. Operations Dashboard', '3. Patient 360', '4. Disease Tracking']
  },
  useCases: [
    {
      title: "Clinical Research: Kill Bad Drugs Early",
      description: "We use survival analysis to identify failing treatments before you waste years and millions. A recent PBC trial showed no benefit (p=0.730)—we caught it early, saving the investment for better candidates.",
      icon: Microscope
    },
    {
      title: "Predictive Patient Flow",
      description: "We model admission patterns to predict ER surges, helping hospitals staff appropriately. One client reduced wait times by 35% by shifting from fixed to predictive scheduling.",
      icon: Calendar
    },
    {
      title: "Disease Tracking Dashboards",
      description: "Monitor regional NCD trends so you can position resources—insulin, specialists, equipment—before outbreaks happen, not after.",
      icon: HeartPulse
    },
    {
      title: "Unified Patient Records",
      description: "Merge fragmented systems into one clean profile. Doctors get complete histories instantly instead of hunting through disconnected databases.",
      icon: Database
    },
    {
      title: "RCT Analysis & Publication Support",
      description: "Statistical pipelines that ensure your trial data is clean, compliant, and publication-ready. We handle randomization validation, Table 1 generation, and survival analysis.",
      icon: FileBarChart
    },
    {
      title: "Hospital Command Center",
      description: "Real-time dashboards showing bed occupancy, wait times, and staffing ratios. Make decisions based on current data, not yesterday's reports.",
      icon: ClipboardList
    }
  ]
};

// FINANCIAL SERVICES DATA
const FINANCE_DATA = {
  hero: {
    badge: "Financial Services Intelligence",
    title: "Navigating Volatile Markets with",
    titleAccent: "Precision Intelligence.",
    subtitle: "When a single tweet can crash a currency, historical charts aren't enough. We help forex traders, boutique banks, and investment firms predict volatility before it hits the ticker.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop",
    badgeColor: "violet"
  },
  metrics: [
    { value: "5 Days", label: "Early Warning", sublabel: "Volatility forecasts" },
    { value: "24/7", label: "Audit Monitoring", sublabel: "Automated compliance" },
    { value: "95%", label: "Confidence Level", sublabel: "Price predictions" },
    { value: "60%", label: "Faster Audits", sublabel: "AI-powered scanning" }
  ],
  intro: {
    title: "Hybrid Financial Intelligence",
    description: [
      "Traditional risk management is broken. Most firms rely on historical data—driving forward while staring in the rearview mirror. But the next crisis rarely looks like the last one.",
      "We combine quantitative analysis (the math) with real-time sentiment analysis (AI reading the news). This hybrid approach helps you see market fear days before it impacts your P&L, giving you time to hedge positions and protect liquidity."
    ],
    diagnostics: {
      title: "CapitalGuard™ Framework",
      description: "We don't just crunch numbers—our systems read the world. By monitoring bond yields, oil prices, and global news sentiment simultaneously, we give you a complete picture of what's moving your markets.",
      items: ["Volatility Forecasting", "Liquidity Monitoring", "Automated Compliance"]
    }
  },
  specialists: [
    "Econometricians",
    "Algorithmic Traders",
    "Risk Compliance Officers",
    "Quantitative Analysts",
    "Financial Data Engineers",
    "Regulatory Advisors"
  ],
  technicalSpotlight: {
    title: "CapitalGuard: Architecture of Resilience",
    description: "We don't just give you reports—we build systems. Our flagship platform combines volatility forecasting, sentiment analysis, and automated auditing to keep you solvent and profitable.",
    steps: ['1. Volatility Cone', '2. Sentiment Engine', '3. Ledger Bot', '4. Risk Dashboard']
  },
  useCases: [
    {
      title: "Forex Volatility Shield",
      description: "GARCH models track price drivers—not just prices. We monitor bond yields, oil, and news sentiment to forecast volatility 5 days ahead, so you can adjust stops before chaos hits.",
      icon: TrendingUp
    },
    {
      title: "Fiscal Health Monitoring",
      description: "Real-time dashboards track treasury yields and inflation indices. Get a 'Fiscal Health Score' that alerts you when external factors threaten liquidity—before quarterly reports.",
      icon: HeartPulse
    },
    {
      title: "Automated Auditing",
      description: "ML-powered bots scan every transaction 24/7. Unusual patterns get flagged instantly. Move from annual audits to continuous assurance without hiring more staff.",
      icon: ShieldCheck
    },
    {
      title: "Credit Risk Segmentation",
      description: "Smart models categorize loan applicants by future default probability. Lend safely, reduce bad debt, and make data-driven credit decisions.",
      icon: Users
    },
    {
      title: "Algorithmic Trading Strategy",
      description: "Backtest thousands of strategies against historical data to find optimal signals for specific market conditions. Turn hunches into statistical edges.",
      icon: Target
    },
    {
      title: "Regulatory Compliance Scanner",
      description: "NLP systems scan changing regulations and automatically flag policies needing updates. Stay compliant without the manual headache.",
      icon: CheckCircle2
    }
  ]
};

// CONSUMER & RETAIL DATA
const RETAIL_DATA = {
  hero: {
    badge: "Consumer & Retail Intelligence",
    title: "From Adum to Aisle 4:",
    titleAccent: "Retail Intelligence that Moves Product.",
    subtitle: "Every box in your warehouse is trapped money. Every empty shelf is a lost sale. We help distributors, supermarkets, and high-volume traders know exactly what to buy, when to restock, and how to price it.",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2070&auto=format&fit=crop",
    badgeColor: "amber"
  },
  metrics: [
    { value: "15%", label: "Average Ticket Increase", sublabel: "Basket analysis" },
    { value: "90%", label: "Admin Time Saved", sublabel: "Auto-ordering" },
    { value: "300%", label: "Seasonal Accuracy", sublabel: "Demand forecasts" },
    { value: "60 Days", label: "Dead Stock Alert", sublabel: "Cash flow optimizer" }
  ],
  intro: {
    title: "Knowing 'Why' It Sold",
    description: [
      "Most retailers know what they sold today. Very few know what they missed. Whether you're managing a distribution hub in Adum or a modern retail chain, the blindness is the same—restocking by gut feeling, guessing customer wants, losing margins on slow-moving goods.",
      "We move you from counting cash to predicting demand. By analyzing sales history, seasonality, and competitor pricing, we turn your warehouse from a storage unit into a high-velocity cash machine."
    ],
    diagnostics: {
      title: "RetailNexus™ Framework",
      description: "You don't need complex charts—you need to know which container to order. Our systems analyze 3 years of sales cycles to predict demand spikes weeks in advance, so you never miss a sale or overstock slow items.",
      items: ["Demand Forecasting", "Basket Analysis", "Automated Reordering"]
    }
  },
  specialists: [
    "Supply Chain Architects",
    "Consumer Psychologists",
    "Retail Data Engineers",
    "Pricing Strategists",
    "Inventory Analysts",
    "POS Integration Specialists"
  ],
  technicalSpotlight: {
    title: "RetailNexus: The Architecture of Commerce",
    description: "We don't just give advice—we build dashboards that run your shop. Our platform predicts demand, kills dead stock, and optimizes your team's performance.",
    steps: ['1. Inventory Brain', '2. Dead Stock Killer', '3. Sales Coach', '4. Price Optimizer']
  },
  useCases: [
    {
      title: "The Velocity Engine",
      description: "Analyze 3 years of sales to learn that Product A sells 300% faster in November. Get restock alerts 2 weeks before you run out—never miss a sale again.",
      icon: Zap
    },
    {
      title: "Market Basket Analysis",
      description: "Scan millions of receipts to find patterns. 70% of diaper buyers also buy beer. Position items to trigger impulse buys and increase ticket size by 15%.",
      icon: Store
    },
    {
      title: "Automated Procurement",
      description: "Connect sales data to supplier orders. When stock hits critical levels, the system drafts purchase orders automatically—cut admin time by 90%.",
      icon: Cpu
    },
    {
      title: "Dead Stock Management",
      description: "Flag items that haven't sold in 60 days. Calculate the exact discount needed to clear them immediately, freeing up cash for profitable goods.",
      icon: Target
    },
    {
      title: "Dynamic Pricing Intelligence",
      description: "Analyze competitor prices and demand in real-time. Find the sweet spot—high enough for profit, low enough to move stock fast.",
      icon: TrendingUp
    },
    {
      title: "Customer Segmentation",
      description: "Separate wholesale buyers from retail shoppers. Create targeted offers for high-value clients and optimize your sales approach per segment.",
      icon: Users
    }
  ]
};

// RESTAURANTS & HOSPITALITY DATA
const RESTAURANTS_DATA = {
  hero: {
    badge: "Restaurants & Hospitality Intelligence",
    title: "Transforming 'Gut Feeling' into",
    titleAccent: "Mathematical Revenue Growth.",
    subtitle: "A 5% margin increase can double your net profit. Yet most owners rely on intuition for prices and menus. We build GastroIntel™—intelligence that engineers your menu for maximum profit and minimum waste.",
    image: "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768574035/Screenshot_2026-01-16_142918_lpssgx.png",
    badgeColor: "orange"
  },
  metrics: [
    { value: "25%", label: "Revenue Per Seat", sublabel: "Menu optimization" },
    { value: "30%", label: "Waste Reduction", sublabel: "Predictive prep" },
    { value: "40%", label: "Margin Improvement", sublabel: "Price engineering" },
    { value: "85%", label: "Sentiment Accuracy", sublabel: "Review analysis" }
  ],
  intro: {
    title: "The Science of the Perfect Menu",
    description: [
      "Great food brings customers in. Great math keeps the doors open. Most restaurateurs know what sells—but do you know which items are killing your food cost? Do you know exactly how much to prep on a rainy Tuesday versus a sunny Friday?",
      "We move you from guessing prep levels to predictive operations. By analyzing your sales mix, ingredient costs, and customer reviews, we turn your menu from a list of dishes into a strategic revenue tool."
    ],
    diagnostics: {
      title: "GastroIntel™ Framework",
      description: "You don't need a data scientist in the kitchen—you need a system that shows where money is leaking. We map every dish by contribution margin and sales volume to identify 'Stars' and eliminate 'Dogs' killing your food cost.",
      items: ["Menu Engineering", "Sentiment Analysis", "Waste Control"]
    }
  },
  specialists: [
    "Executive Chefs",
    "Revenue Managers",
    "Operations Architects",
    "Pricing Strategists",
    "Customer Experience Analysts",
    "F&B Data Engineers"
  ],
  technicalSpotlight: {
    title: "GastroIntel: The Architecture of Dining",
    description: "We don't just give reports—we build playbooks for your kitchen. Our platform combines menu engineering, sentiment analysis, and demand forecasting to maximize profit per guest.",
    steps: ['1. Menu Matrix', '2. Sentiment Engine', '3. Table Turner', '4. Prep Predictor']
  },
  useCases: [
    {
      title: "Menu Engineering (Profit Matrix)",
      description: "Map every dish by profitability and popularity. Identify 'Dogs' (low profit/low sales) that slow your kitchen and create waste—remove them to speed service and cut costs instantly.",
      icon: UtensilsCrossed
    },
    {
      title: "Sentiment Analysis (Feedback Loop)",
      description: "NLP reads thousands of reviews to categorize complaints—'steak was cold' vs. 'waiter was rude.' Know exactly what to fix and which high-rated items can handle price increases.",
      icon: ThumbsUp
    },
    {
      title: "Demand Forecasting (Prep Predictor)",
      description: "Forecast tonight's covers based on history, weather, and local events. Chef knows exactly how much to prep—waste drops by 30% when you're not throwing fresh fish in the bin.",
      icon: Calendar
    },
    {
      title: "Dynamic Pricing",
      description: "Adjust prices on delivery apps and happy hours based on demand surges. Maximize revenue during peak times without leaving money on the table.",
      icon: DollarSign
    },
    {
      title: "Table Turn Optimization",
      description: "Analyze service times to find bottlenecks in the meal experience. Serve more guests per night without rushing them—improve both revenue and satisfaction.",
      icon: Target
    },
    {
      title: "Staff Rostering",
      description: "Align schedules with predicted customer traffic. Stop paying waiters to stand around in empty restaurants—roster efficiently based on real demand patterns.",
      icon: Users
    }
  ]
};

// ACADEMIA & EDUCATION DATA
const EDUCATION_DATA = {
  hero: {
    badge: "Academia & Education Intelligence",
    title: "Struggling with your thesis data or",
    titleAccent: "just stuck on Chapter 4?",
    subtitle: "RYN Solutions partners with you to automate the hard parts of research. We turn messy survey data into clear, high-grade results. Finish your degree with confidence!",
    image: "https://images.unsplash.com/photo-1722248540590-ba8b7af1d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY4MzgxNDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badgeColor: "indigo"
  },
  metrics: [
    { value: "70%", label: "Time Saved", sublabel: "On data analysis" },
    { value: "95%", label: "Accuracy Rate", sublabel: "Statistical tests" },
    { value: "3 Weeks", label: "Average Turnaround", sublabel: "Chapter 4 completion" },
    { value: "100+", label: "Students Helped", sublabel: "This year" }
  ],
  intro: {
    title: "Supporting Academic Success for Students",
    description: [
      "Let's face it: Writing a thesis is hard. You have to be a writer, a statistician, and a formatter all at once. We handle the technical side. We help students clean up their messy Excel sheets, run the right statistical tests, and structure their arguments logically.",
      "Our mix of Data Automation and Academic Coaching means you stop fighting with software and start writing. Whether you need to clean a survey or run a complex regression, we give you the tools to pass."
    ],
    diagnostics: {
      title: "Research Intelligence Services",
      description: "We specialize in the 'heavy lifting' of research. We offer automated data cleaning, rigorous statistical analysis, and thesis structuring. We help you save weeks of frustration and avoid losing marks on methodology.",
      items: ["Data Cleaning", "Statistical Analysis", "Thesis Structuring"]
    }
  },
  specialists: [
    "PhD Statisticians",
    "Academic Editors",
    "Data Visualizers",
    "Research Assistants",
    "Python/R Coders",
    "Survey Design Experts"
  ],
  technicalSpotlight: {
    title: "The Stat Pack: Architecture for Discovery",
    description: "We built a custom code package that handles your Chapter 4. It cleans your survey data automatically and generates the exact 'Publication-Ready' tables and charts you need for your results. It turns raw numbers into a finished chapter.",
    steps: ['1. The Lit Review Bot', '2. The Stat Pack', '3. The Defense Deck', '4. Citation Manager']
  },
  useCases: [
    {
      title: "Survey Data Cleaning",
      description: "We automatically detect and remove 'bad data' (like incomplete answers or bot responses) from your survey results, ensuring your analysis is clean and valid.",
      icon: Database
    },
    {
      title: "Hypothesis Testing",
      description: "We look at your variables and recommend the exact statistical test to use (e.g., 'Use a T-Test here, not ANOVA'), preventing you from making methodological errors.",
      icon: Target
    },
    {
      title: "Literature Mapping",
      description: "We use AI to visualize connections between thousands of papers, helping you find the key authors and research gaps for your Literature Review instantly.",
      icon: Search
    },
    {
      title: "Smart Proofreading",
      description: "We use advanced tools to check your grammar and tone, ensuring your writing sounds academic, objective, and formal before you hand it in.",
      icon: FileText
    },
    {
      title: "Reference Management",
      description: "We set up automated workflows that capture every paper you read and format your bibliography perfectly, so you never lose marks on a missing comma.",
      icon: BookOpen
    },
    {
      title: "Results Visualization",
      description: "Generate publication-ready charts and tables that meet your university's formatting standards. Turn complex data into clear, persuasive visuals.",
      icon: FileBarChart
    }
  ]
};

// RELATED CAPABILITIES CONFIGURATION
const RELATED_CAPABILITIES = {
  telco: [
    {
      title: "Customer Experience Intelligence",
      description: "Beyond churn—understand the full customer journey and optimize every touchpoint.",
      icon: Users,
      link: "/services"
    },
    {
      title: "Operational Resilience",
      description: "Network optimization, predictive maintenance, and supply chain intelligence.",
      icon: Zap,
      link: "/services"
    },
    {
      title: "Financial Risk Analytics",
      description: "Revenue assurance, fraud detection, and pricing optimization.",
      icon: BarChart3,
      link: "/services"
    }
  ],
  health: [
    {
      title: "Clinical Trial Design",
      description: "Statistical consulting for RCT design, power analysis, and protocol validation.",
      icon: Microscope,
      link: "/services"
    },
    {
      title: "Hospital Operations Intelligence",
      description: "Predictive analytics for patient flow, resource allocation, and staff optimization.",
      icon: Building2,
      link: "/services"
    },
    {
      title: "Public Health Analytics",
      description: "Regional disease tracking, NCD monitoring, and population health management.",
      icon: HeartPulse,
      link: "/services"
    }
  ],
  finance: [
    {
      title: "Algorithmic Trading Systems",
      description: "Build quantitative strategies with robust backtesting and real-time signal generation.",
      icon: Target,
      link: "/services"
    },
    {
      title: "Credit Risk Modeling",
      description: "Predictive models for loan defaults, portfolio optimization, and capital allocation.",
      icon: ShieldCheck,
      link: "/services"
    },
    {
      title: "Market Sentiment Analytics",
      description: "NLP-powered analysis of news, social media, and filings to predict market movements.",
      icon: TrendingUp,
      link: "/services"
    }
  ],
  retail: [
    {
      title: "Dynamic Pricing Intelligence",
      description: "Real-time competitor monitoring and demand-based pricing to maximize margins.",
      icon: DollarSign,
      link: "/services"
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end visibility from procurement to delivery with predictive logistics.",
      icon: Network,
      link: "/services"
    },
    {
      title: "Customer Lifetime Value",
      description: "Predict which customers will spend more over time and target them strategically.",
      icon: Users,
      link: "/services"
    }
  ],
  restaurants: [
    {
      title: "Revenue Management Systems",
      description: "Optimize table turns, pricing, and promotions to maximize covers and profit per seat.",
      icon: TrendingUp,
      link: "/services"
    },
    {
      title: "Kitchen Intelligence",
      description: "Real-time dashboards for prep efficiency, waste tracking, and labor productivity.",
      icon: Activity,
      link: "/services"
    },
    {
      title: "Guest Experience Analytics",
      description: "Sentiment analysis of reviews and feedback to improve service quality continuously.",
      icon: ThumbsUp,
      link: "/services"
    }
  ],
  education: [
    {
      title: "Institutional Research Analytics",
      description: "Enrollment forecasting, retention modeling, and program performance evaluation.",
      icon: BarChart3,
      link: "/services"
    },
    {
      title: "Learning Outcomes Assessment",
      description: "Statistical analysis of student performance data to measure teaching effectiveness.",
      icon: CheckCircle2,
      link: "/services"
    },
    {
      title: "Grant Writing Support",
      description: "Data visualization and statistical validation for research funding applications.",
      icon: FileText,
      link: "/services"
    }
  ]
};


export function CaseStudiesPage() {
  const { openChatbot } = useChatbot();
  const { id } = useParams<{ id: string }>();
  
  // Validate industry ID and redirect if invalid
  const validIds = ['telco', 'health', 'finance', 'retail', 'restaurants', 'education'];
  if (id && !validIds.includes(id)) {
    return <Navigate to="/case-studies" replace />;
  }
  
  const activeTab = id || 'telco';
  
  // Get current data based on active tab
  const currentData = activeTab === 'health' 
    ? HEALTH_DATA 
    : activeTab === 'finance' 
    ? FINANCE_DATA 
    : activeTab === 'retail'
    ? RETAIL_DATA
    : activeTab === 'restaurants'
    ? RESTAURANTS_DATA
    : activeTab === 'education'
    ? EDUCATION_DATA
    : TELCO_DATA;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden py-32">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={currentData.hero.image}
            alt={currentData.hero.badge}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 backdrop-blur-md border text-xs font-bold uppercase tracking-widest mb-6 rounded-full ${
              currentData.hero.badgeColor === 'blue' 
                ? 'bg-blue-500/20 border-blue-400/30 text-blue-300'
                : currentData.hero.badgeColor === 'emerald'
                ? 'bg-emerald-500/20 border-emerald-400/30 text-emerald-300'
                : currentData.hero.badgeColor === 'violet'
                ? 'bg-violet-500/20 border-violet-400/30 text-violet-300'
                : currentData.hero.badgeColor === 'amber'
                ? 'bg-amber-500/20 border-amber-400/30 text-amber-300'
                : currentData.hero.badgeColor === 'indigo'
                ? 'bg-indigo-500/20 border-indigo-400/30 text-indigo-300'
                : 'bg-orange-500/20 border-orange-400/30 text-orange-300'
            }`}>
              {activeTab === 'health' ? <Activity className="w-3 h-3" /> : activeTab === 'finance' ? <BarChart3 className="w-3 h-3" /> : activeTab === 'retail' ? <Store className="w-3 h-3" /> : activeTab === 'restaurants' ? <UtensilsCrossed className="w-3 h-3" /> : activeTab === 'education' ? <GraduationCap className="w-3 h-3" /> : <Wifi className="w-3 h-3" />}
              {currentData.hero.badge}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
              {currentData.hero.title} <br />
              <span className={`italic ${
                currentData.hero.badgeColor === 'blue' 
                  ? 'text-blue-400' 
                  : currentData.hero.badgeColor === 'emerald' 
                  ? 'text-emerald-400'
                  : currentData.hero.badgeColor === 'violet'
                  ? 'text-violet-400'
                  : currentData.hero.badgeColor === 'amber'
                  ? 'text-amber-400'
                  : currentData.hero.badgeColor === 'indigo'
                  ? 'text-indigo-400'
                  : 'text-orange-400'
              }`}>
                {currentData.hero.titleAccent}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mb-10">
              {currentData.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  const message = activeTab === 'health' ? 'I want to schedule a consultation' : activeTab === 'education' ? 'I want to connect with your team' : 'I want to schedule a diagnostic audit';
                  openChatbot(message);
                }}
                className={`h-12 md:h-14 px-6 md:px-8 text-white font-semibold text-base md:text-lg w-full sm:w-auto ${
                  currentData.hero.badgeColor === 'slate' 
                    ? 'bg-slate-600 hover:bg-slate-500'
                    : currentData.hero.badgeColor === 'indigo'
                    ? 'bg-indigo-600 hover:bg-indigo-500'
                    : 'bg-emerald-600 hover:bg-emerald-500'
                }`}>
                {activeTab === 'health' ? 'Schedule Consultation' : activeTab === 'education' ? 'Connect With Us' : 'Schedule Diagnostic Audit'}
              </Button>
              <Link to="/services">
                <Button variant="outline" className="h-12 md:h-14 px-6 md:px-8 border-slate/20 text-black hover:bg-white/10 font-medium w-full sm:w-auto">
                  View Methodology
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BREADCRUMB / BACK NAV IGATION --- */}
      <div className="bg-slate-50 border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            to="/case-studies" 
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>
      </div>

      {/* --- IMPACT METRICS BANNER --- */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {currentData.metrics.map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif text-slate-900 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-slate-900 uppercase tracking-wide">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {metric.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTRODUCTION & DIAGNOSTICS --- */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              key={`intro-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-slate-300" />
                <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">Case Study</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                {currentData.intro.title}
              </h2>
              <div className={`w-20 h-1 mb-8 ${
                currentData.hero.badgeColor === 'blue' ? 'bg-blue-900' : 'bg-emerald-900'
              }`} />
              {currentData.intro.description.map((para, idx) => (
                <p key={idx} className="text-lg text-slate-600 leading-relaxed mb-6">
                  {para}
                </p>
              ))}
            </motion.div>
            
            <motion.div 
              key={`diag-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100"
            >
              <h3 className="text-2xl font-serif text-slate-900 mb-6">
                {currentData.intro.diagnostics.title}
              </h3>
              <p className="text-slate-600 mb-8">
                {currentData.intro.diagnostics.description}
              </p>
              <ul className="space-y-4 mb-8">
                {currentData.intro.diagnostics.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className={`w-5 h-5 ${
                      currentData.hero.badgeColor === 'blue' ? 'text-blue-900' : 'text-emerald-900'
                    }`} />
                    {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={() => {
                  const message = activeTab === 'health' ? 'I want to request a consultation' : 'I want to start my audit';
                  openChatbot(message);
                }}
                variant="outline" 
                className="w-full border-slate-300 hover:bg-white hover:border-slate-900 text-slate-900"
              >
                {activeTab === 'health' ? 'Request Consultation' : 'Start Your Audit'}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE NETWORK (TRUST SECTION) --- */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Image/Visual */}
            <motion.div 
              key={`network-img-${activeTab}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute -top-10 -left-10 w-32 h-32 border-t-2 border-l-2 rounded-tl-3xl ${
                currentData.hero.badgeColor === 'blue' ? 'border-blue-500/30' : 'border-emerald-500/30'
              }`} />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="RYN Network Team" 
                className="rounded-lg shadow-2xl grayscale-[20%] w-full"
              />
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 border-b-2 border-r-2 rounded-br-3xl ${
                currentData.hero.badgeColor === 'blue' ? 'border-blue-500/30' : 'border-emerald-500/30'
              }`} />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              key={`network-content-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                {activeTab === 'health' 
                  ? 'The Clinical Domain Network'
                  : 'The Analytics Domain Network'}
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {activeTab === 'health'
                  ? 'Healthcare data is sensitive and complex. You need partners who understand HIPAA/GDPR compliance and the nuances of medical metadata. We work with the best minds in biostatistics and hospital operations.'
                  : 'Building exceptional retention systems requires deep industry expertise. We have built relationships with leading data scientists and behavioral economists who guide our hypotheses and validate our models.'}
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {currentData.specialists.map((specialist, i) => (
                  <div key={i} className="flex items-center gap-3 py-2 border-b border-white/10">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      currentData.hero.badgeColor === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'
                    }`} />
                    <span className="text-sm font-medium text-slate-200">{specialist}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/about">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8">
                    Meet Our Specialists
                  </Button>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPOTLIGHT --- */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            key={`tech-${activeTab}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             {/* <div className={`inline-flex items-center justify-center p-4 rounded-full mb-8 ${
              currentData.hero.badgeColor === 'blue' ? 'bg-blue-50' : 'bg-emerald-50'
            }`}>
              <Cpu className={`w-6 h-6 ${
                currentData.hero.badgeColor === 'blue' ? 'text-blue-900' : 'text-emerald-900'
              }`} />
            </div> */}
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
              {currentData.technicalSpotlight.title}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {currentData.technicalSpotlight.description}
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {currentData.technicalSpotlight.steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-50 border border-slate-100 rounded-lg hover:border-slate-300 transition-all"
              >
                <span className="font-serif text-lg font-medium text-slate-900">{step}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services">
              <Button variant="outline" className="gap-2">
                See Our Technical Stack <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- USE CASES GRID --- */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">
              {activeTab === 'education' ? 'Education AI Use Cases' : activeTab === 'health' ? 'Healthcare AI Use Cases' : activeTab === 'finance' ? 'Finance AI Use Cases' : activeTab === 'retail' ? 'Retail AI Use Cases' : activeTab === 'restaurants' ? 'Hospitality AI Use Cases' : 'Telecom AI Use Cases'}
            </h2>
            <p className="text-slate-600">Real-world applications across the value chain.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentData.useCases.map((useCase, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                  currentData.hero.badgeColor === 'blue'
                    ? 'bg-blue-50 group-hover:bg-blue-600'
                    : 'bg-emerald-50 group-hover:bg-emerald-600'
                }`}>
                  <useCase.icon className={`w-6 h-6 transition-colors ${
                    currentData.hero.badgeColor === 'blue'
                      ? 'text-blue-900 group-hover:text-white'
                      : 'text-emerald-900 group-hover:text-white'
                  }`} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {useCase.description}
                </p>
                <div 
                  onClick={() => openChatbot(`I'm interested in learning more about ${useCase.title}`)}
                  className={`flex items-center text-sm font-semibold cursor-pointer group-hover:gap-2 transition-all ${
                    currentData.hero.badgeColor === 'blue' ? 'text-blue-900' : 'text-emerald-900'
                  }`}
                >
                  Let's Connect <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRIDGE: INSIGHTS CONNECTION --- */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop" 
                alt="Data Analysis" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#0891b2] font-bold uppercase tracking-widest text-xs mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Industry Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                Read the Research Behind the Results.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {activeTab === 'health'
                  ? 'Dive deeper into healthcare intelligence with our published research on clinical trials, patient outcomes, and the economics of evidence-based medicine in emerging markets.'
                  : 'Dive deeper into telecommunications intelligence with our published research on subscriber behavior, churn patterns, and the economics of customer retention in emerging markets.'}
              </p>
              <Link to="/insights">
                <Button variant="outline" className="h-12 px-8 border-slate-300 text-slate-900 hover:bg-white hover:border-slate-900">
                  Browse Insights Library <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- BRIDGE: INNOVATION LINK --- */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
           <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
            alt="Innovation Lab" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
         {/*  <div className={`inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-8`}>
            <Zap className={currentData.hero.badgeColor === 'blue' ? 'w-6 h-6 text-blue-400' : 'w-6 h-6 text-emerald-400'} />
          </div>*/}
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            {activeTab === 'health' 
              ? 'Ready to validate your research?'
              : 'Ready to test these models?'}
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            {activeTab === 'health'
              ? "Don't commit to full-scale trials yet. Run a controlled Clinical Validation Pilot with RYN Labs to ensure your methodology is publication-ready."
              : "Don't commit to a full rollout yet. Run a controlled Retention Pilot with RYN Labs to validate the 'Save Offer' algorithms first."}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => openChatbot('I want to request a free pilot program')}
              className={`h-14 px-8 text-white font-semibold w-full sm:w-auto ${
                currentData.hero.badgeColor === 'slate'
                  ? 'bg-slate-600 hover:bg-slate-500'
                  : 'bg-emerald-600 hover:bg-emerald-500'
              }`}
            >
              Request a Free Pilot
            </Button>
            <Link to="/innovation">
              <Button variant="outline" className="h-14 px-8 border:bg-white/20 text-black hover:bg-white/10 w-full sm:w-auto">
                Visit RYN Labs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- RELATED SERVICES --- */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">Explore Related Capabilities</h2>
            <p className="text-slate-600">
              {activeTab === 'health'
                ? 'Integrated solutions for healthcare providers and research institutions.'
                : activeTab === 'finance'
                ? 'Integrated solutions for financial institutions and trading firms.'
                : activeTab === 'retail'
                ? 'Integrated solutions for retailers, distributors, and commerce platforms.'
                : activeTab === 'restaurants'
                ? 'Integrated solutions for restaurants, cafés, and hospitality operators.'
                : activeTab === 'education'
                ? 'Integrated solutions for students, researchers, and academic institutions.'
                : 'Integrated solutions for telecommunications providers.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {RELATED_CAPABILITIES[activeTab as keyof typeof RELATED_CAPABILITIES].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-slate-200 hover:border-slate-900 transition-all group"
              >
                <service.icon className="w-8 h-8 text-slate-600 mb-4 group-hover:text-slate-900 transition-colors" />
                <h3 className="text-xl font-serif text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link to={service.link}>
                  <div className="flex items-center text-sm font-semibold text-slate-900 cursor-pointer group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}