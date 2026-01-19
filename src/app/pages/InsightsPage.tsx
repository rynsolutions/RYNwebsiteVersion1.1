import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  FileText,
  Download,
  ChevronRight,
  BookOpen,
  Briefcase,
  Lightbulb,
  Building2,
  Target,
  Users,
  // New imports for the form state
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Footer } from "../components/Footer";

// --- Assets & Data ---

const FEATURED_STORY = {
  title:
    "The Silent Volume: Decoding Cash Flow in the Informal Sector",
  subtitle:
    "Traditional economic indicators miss 40% of African commerce. Our latest Adum Market study reveals how real-time vendor data is closing the visibility gap.",
  image:
    "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop",
  category: "Flagship Report",
  readTime: "12 min read",
  author: "RYN Intelligence Unit",
  link: "https://www.linkedin.com/pulse/adum-market-intelligence-report-2025-rynsolutions-5r9ef",
};

// Featured case studies/news from previous pages
const FEATURED_INSIGHTS = [
  {
    title: "Customer Intelligence Success: 22% Churn Reduction",
    description:
      "How predictive modeling transformed customer retention for a leading telecoms provider.",
    category: "Case Study",
    link: "/services",
  },
  {
    title: "The Adum Market Pilot: Real-Time Commerce Data",
    description:
      "Inside our flagship innovation lab tracking 200+ vendors in Ghana's busiest market.",
    category: "Innovation Lab",
    link: "/innovation",
  },
];

// Trending topics from across the site
const TRENDING_INSIGHTS = [
  {
    title: "Inventory Velocity Algorithm",
    description:
      "25% reduction in perishable waste for Kejetia traders",
    category: "Retail Innovation",
    link: "/innovation",
  },
  {
    title: "ESG Data Standards for African Markets",
    description: "New framework for environmental monitoring",
    category: "Public Stewardship",
    link: "/services",
  },
  {
    title: "The Reproducibility Crisis in African Research",
    description: "Why 60% of thesis data fails validation",
    category: "Academic",
    link: "/learning",
  },
];

const LATEST_ARTICLES = [
  {
    id: 1,
    category: "Retail Intelligence",
    title:
      "Stock Wisely, Sell More: The Inventory Velocity Algorithm",
    subtitle:
      "How predictive modeling reduced perishable waste by 25% in our Kejetia pilots.",
    image:
      "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045276/Screenshot_2025-12-29_215308_lkoxjj.png",
    type: "Case Study",
    readTime: "6 min",
    date: "Oct 24, 2025",
    link: "https://www.linkedin.com/pulse/retail-intelligence-stock-wisely-sell-more-rynsolutions-qjtuf",
  },
  {
    id: 2,
    category: "Public Health",
    title:
      "Data vs. Disease: Aligning Tech with NCD Prevention",
    subtitle:
      "Lessons from the RIYAN Health partnership on connecting patient data to policy outcomes.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    type: "Interview",
    readTime: "8 min",
    date: "Oct 18, 2025",
    link: "/innovation",
  },
  {
    id: 3,
    category: "Academic Research",
    title:
      "The Reproducibility Crisis: Standardizing African Data",
    subtitle:
      "Why 60% of local thesis data fails validation tests, and the methodology to fix it.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    type: "Whitepaper",
    readTime: "5 min",
    date: "Oct 10, 2025",
    link: "https://www.linkedin.com/pulse/analytical-core-why-analysis-crown-jewel-thesis-research-r1gof",
  },
  {
    id: 4,
    category: "Strategy",
    title:
      "The Agility Advantage: Navigating Ambiguity with Data",
    subtitle:
      "Adapting data intelligence strategies for wise management and improving business outcomes.",
    image:
      "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015771/Screenshot_2025-12-24_211846_rw6sza.png",
    type: "Technical Brief",
    readTime: "7 min",
    date: "Sep 28, 2025",
    link: "https://www.linkedin.com/pulse/agility-advantage-navigating-ambiguity-data-rynsolutions-i4pxc",
  },
  {
    id: 5,
    category: "Talent Strategy",
    title: "Decoding the Top 1%: What Global Employers Want",
    subtitle:
      "Our analysis of 500+ data role job descriptions reveals a shift from 'tools' to 'decision making'.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    type: "Career Report",
    readTime: "7 min",
    date: "Sep 15, 2025",
    link: "https://www.linkedin.com/pulse/decoding-top-1-what-global-employers-actually-look-rynsolutions-t16pf",
  },
  {
    id: 6,
    category: "Supply Chain",
    title: "The Last Mile Problem in Medical Logistics",
    subtitle:
      "Using geospatial data to optimize delivery routes for rural clinics.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    type: "Article",
    readTime: "5 min",
    date: "Sep 02, 2025",
    link: "https://www.linkedin.com/pulse/sustainability-strategy-reducing-dead-stock-rynsolutions-dlt6f",
  },
  {
    id: 7,
    category: "Market Research",
    title: "The Adum Market Intelligence Report 2025",
    subtitle:
      "Why 'Gut Feeling' is Costing Traders 20% in Margins",
    image:
      "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045235/Screenshot_2025-12-29_215222_ll7rkk.png",
    type: "Flagship Report",
    readTime: "10 min",
    date: "Aug 20, 2025",
    link: "https://www.linkedin.com/pulse/adum-market-intelligence-report-2025-rynsolutions-5r9ef",
  },
  {
    id: 8,
    category: "Leadership",
    title:
      "Think Fast, Decide Boldly: The CEO's Guide to Real-Time Data",
    subtitle:
      "How modern leaders are using real-time analytics to make confident decisions in uncertain times.",
    image:
      "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045796/CEO_think_1_aeq6os.jpg",
    type: "Executive Brief",
    readTime: "9 min",
    date: "Aug 05, 2025",
    link: "https://www.linkedin.com/pulse/think-fast-decide-boldly-ceos-guide-real-time-data-rynsolutions-jnk3f",
  },
  {
    id: 9,
    category: "Business Strategy",
    title:
      "Why Some Businesses Outperform Others: Evidence from the Field",
    subtitle:
      "Data-driven insights from 100+ African enterprises reveal the competitive advantage.",
    image:
      "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015194/Screenshot_2025-12-26_024948_rdo3nk.png",
    type: "Research Paper",
    readTime: "11 min",
    date: "Jul 22, 2025",
    link: "https://www.linkedin.com/pulse/why-some-businesses-outperform-others-evidence-from-field-2tbwf",
  },
];

export function InsightsPage() {
  const [selectedTopic, setSelectedTopic] = useState("All");

  // --- NEW: Newsletter Logic ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwE3B98bAlXThSuqzcaI2Nps1B5NVo77CVX76Yzu5w9_eQfkoooivFLZoCHJxKUAjED/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email: email }),
      });

      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* --- HERO: THE BIG STORY --- */}

      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FEATURED_STORY.image}
            alt="Featured Story"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 pb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fb923c] text-white text-xs font-bold uppercase tracking-widest mb-6">
                <FileText className="w-3 h-3" />
                {FEATURED_STORY.category}
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-[1.1] drop-shadow-lg">
                {FEATURED_STORY.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mb-8 font-light leading-relaxed drop-shadow-md">
                {FEATURED_STORY.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button
                  className="h-14 px-8 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-lg"
                  onClick={() =>
                    window.open(FEATURED_STORY.link, "_blank")
                  }
                >
                  Read Full Report
                </Button>
                <div className="flex items-center gap-4 text-white/80 text-sm pl-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />{" "}
                    {FEATURED_STORY.readTime}
                  </span>
                  <span className="w-px h-4 bg-white/30" />
                  <span>{FEATURED_STORY.author}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FILTER & TRENDING --- */}
      <section className="py-12 border-b border-slate-100 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "Retail",
                "Health",
                "Finance",
                "Academic",
                "Tech",
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedTopic === topic
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <TrendingUp className="w-4 h-4 text-[#fb923c]" />
              <span>Trending:</span>
              <Link
                to="/innovation"
                className="text-slate-900 cursor-pointer hover:underline"
              >
                Inventory Algorithms
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                to="/services"
                className="text-slate-900 cursor-pointer hover:underline"
              >
                NCD Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED SPOTLIGHT (from across the site) --- */}
      <section className="py-16 px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Featured Work
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_INSIGHTS.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white border border-slate-200 p-8 hover:border-slate-900 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest">
                    {item.category}
                  </span>
                  <Target className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Link to={item.link}>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    Explore{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDITORIAL GRID (Part 1) --- */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {LATEST_ARTICLES.slice(0, 3).map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => {
                  if (article.id === 2) {
                    window.location.href =
                      "/innovation#partnerships";
                  } else {
                    window.open(article.link, "_blank");
                  }
                }}
              >
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold uppercase tracking-wide">
                      {article.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <span className="text-[#0891b2]">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-[#0891b2] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {article.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-900">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />{" "}
                      {article.readTime}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center">
                      Read Article{" "}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRIDGE: PREVIEW LINK (Insight -> Innovation) --- */}

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#fb923c] font-bold uppercase tracking-widest text-xs mb-4">
                <Lightbulb className="w-4 h-4" />
                <span>From Insight to Action</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                See the "Inventory Velocity" Algorithm in
                Action.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The article above isn't just theory. We deployed
                this exact model in the Adum Market Pilot,
                resulting in a 25% reduction in dead stock for
                participating traders.
              </p>
              <Link to="/innovation">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-slate-300 text-slate-900 hover:bg-black hover:border-black-900"
                >
                  View the Retail Innovation Pilot{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Data Pilot Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL GRID (Part 2) --- */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {LATEST_ARTICLES.slice(3, 6).map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() =>
                  window.open(article.link, "_blank")
                }
              >
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold uppercase tracking-wide">
                      {article.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <span className="text-[#0891b2]">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-[#0891b2] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {article.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-900">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />{" "}
                      {article.readTime}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center">
                      Read Article{" "}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRIDGE: PREVIEW LINK (Insight -> Services) --- */}

      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070&auto=format&fit=crop"
                alt="Customer Intelligence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 text-[#0891b2] font-bold uppercase tracking-widest text-xs mb-4">
                <Building2 className="w-4 h-4" />
                <span>Proven Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                From Analysis to Implementation.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The Customer Intelligence frameworks you read
                about above? We've deployed them for Fortune 500
                clients, achieving 22% churn reduction and 3x
                ROI within 12 months.
              </p>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-slate-300 text-slate-900 hover:bg-white hover:border-slate-900"
                >
                  Explore Our Services{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- EDITORIAL GRID (Part 3) --- */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {LATEST_ARTICLES.slice(6, 9).map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() =>
                  window.open(article.link, "_blank")
                }
              >
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold uppercase tracking-wide">
                      {article.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                    <span className="text-[#0891b2]">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-[#0891b2] transition-colors leading-tight">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {article.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-900">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3 h-3" />{" "}
                      {article.readTime}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center">
                      Read Article{" "}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* --- BRIDGE: PREVIEW LINK (Insight -> Learning) --- */}

      <section className="py-24 px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Master the Methodology.
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Interested in the "Reproducibility Crisis" article?
            We teach the exact Python and R frameworks used to
            validate this data in our "Researcher" learning
            track.
          </p>
          <Link to="/learning">
            <Button className="h-14 px-10 bg-[rgb(15,15,39)] hover:bg-[#0891b2]/90 text-white font-semibold text-lg">
              View Learning Syllabus
            </Button>
          </Link>
        </div>
      </section>

      {/* --- BRIDGE: PREVIEW LINK (Insight -> Industries) --- */}

      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-slate-600 font-bold uppercase tracking-widest text-xs mb-4">
                <Users className="w-4 h-4" />
                <span>Industry Expertise</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                Sector-Specific Intelligence.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Every industry has unique challenges. Explore
                how we've adapted our methodologies for retail,
                healthcare, finance, education, and public
                sector organizations across Africa.
              </p>
              <Link to="/industries">
                <Button
                  variant="outline"
                  className="h-12 px-8 border-slate-300 text-slate-900 hover:bg-white hover:border-slate-900"
                >
                  Explore Industries We Serve{" "}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070&auto=format&fit=crop"
                alt="Industry Sectors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER --- */}
      <section className="py-24 px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-slate-900 mb-4">
            Intelligence, delivered.
          </h2>
          <p className="text-slate-600 mb-8">
            Join 2,000+ executives and researchers who receive
            our "Signal vs Noise" weekly briefing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={
                status === "loading" || status === "success"
              }
              placeholder="Enter your professional email"
              className="flex-1 h-14 px-6 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            />
            <Button
              onClick={handleSubscribe}
              disabled={
                status === "loading" || status === "success"
              }
              className={`h-14 px-8 text-white font-medium transition-all duration-300 min-w-[160px] ${
                status === "success"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              {status === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : status === "success" ? (
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Subscribed</span>
                </div>
              ) : (
                "Subscribe Free"
              )}
            </Button>
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm mt-4 font-medium animate-in fade-in slide-in-from-top-1">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}