import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Ensure this matches your installed package version
import {
  Clock,
  ArrowRight,
  TrendingUp,
  Store,
  GraduationCap,
  Sparkles,
  X,
  ExternalLink,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function InsightsSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [previewInsight, setPreviewInsight] =
    useState<any>(null);

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
      // We use no-cors mode because Google Scripts redirects, which browser security often blocks in strict mode.
      // 'no-cors' allows the request to go through to the sheet, but we won't get a readable JSON response.
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ email: email }),
      });

      // Assume success if no network error occurred
      setStatus("success");
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };
  // -----------------------------

  const filters = [
    { id: "all", label: "All Insights" },
    { id: "business", label: "Business Growth" },
    { id: "retail", label: "Retail Tactics" },
    { id: "student", label: "Student/Career" },
    { id: "innovation", label: "Innovation" },
  ];

  const insights = [
    {
      category: "business",
      title: "The Adum Market Intelligence Report 2025",
      subtitle:
        "Why 'Gut Feeling' is Costing Traders 20% in Margins",
      tags: ["Market Research", "Featured"],
      readTime: "6 min",
      featured: true,
      icon: TrendingUp,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045235/Screenshot_2025-12-29_215222_ll7rkk.png",
      link: "https://www.linkedin.com/pulse/adum-market-intelligence-report-2025-rynsolutions-5r9ef",
    },
    {
      category: "business",
      title:
        "The Agility Advantage: Navigating Ambiguity with Data",
      tags: ["Strategy"],
      readTime: "4 min",
      icon: TrendingUp,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015771/Screenshot_2025-12-24_211846_rw6sza.png",
      link: "https://www.linkedin.com/pulse/agility-advantage-navigating-ambiguity-data-rynsolutions-i4pxc",
    },
    {
      category: "business",
      title:
        "Why Some Businesses Outperform Others: Evidence from the Field",
      tags: ["Case Study"],
      readTime: "5 min",
      icon: TrendingUp,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015194/Screenshot_2025-12-26_024948_rdo3nk.png",
      link: "https://www.linkedin.com/pulse/why-some-businesses-outperform-others-evidence-from-field-2tbwf",
    },
    {
      category: "business",
      title:
        "Think Fast, Decide Boldly: The CEO's Guide to Real-Time Data",
      tags: ["Leadership"],
      readTime: "7 min",
      icon: TrendingUp,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045796/CEO_think_1_aeq6os.jpg",
      link: "https://www.linkedin.com/pulse/think-fast-decide-boldly-ceos-guide-real-time-data-rynsolutions-jnk3f",
    },
    {
      category: "retail",
      title: "Retail Intelligence: Stock Wisely, Sell More",
      tags: ["Operations"],
      readTime: "5 min",
      icon: Store,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045276/Screenshot_2025-12-29_215308_lkoxjj.png",
      link: "https://www.linkedin.com/pulse/retail-intelligence-stock-wisely-sell-more-rynsolutions-qjtuf",
    },
    {
      category: "retail",
      title:
        "The Silent Salesman: Using Shelf Data to Influence Buying",
      tags: ["Marketing"],
      readTime: "6 min",
      icon: Store,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015264/Screenshot_2025-12-28_221419_dypssc.png",
      link: "https://www.linkedin.com/pulse/silent-salesman-using-shelf-data-influence-buying-rynsolutions-stduf",
    },
    {
      category: "retail",
      title: "Sustainability as Strategy: Reducing Dead Stock",
      tags: ["Inventory"],
      readTime: "4 min",
      icon: Store,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015242/diverse-storehouse-employees-checking-cardboard-boxes_rs59gh.jpg",
      link: "https://www.linkedin.com/pulse/sustainability-strategy-reducing-dead-stock-rynsolutions-dlt6f",
    },
    {
      category: "student",
      title:
        "Decoding the Top 1%: What Global Employers Actually Look For",
      tags: ["Career"],
      readTime: "8 min",
      icon: GraduationCap,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015262/top_1_employers_iwhjqh.jpg",
      link: "https://www.linkedin.com/pulse/decoding-top-1-what-global-employers-actually-look-rynsolutions-t16pf",
    },
    {
      category: "student",
      title:
        "Thesis Methodology: Why Analysis is the Most Important Chapter",
      tags: ["Academic"],
      readTime: "6 min",
      icon: GraduationCap,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015419/Screenshot_2025-12-29_133614_u0wzyh.png",
      link: "https://www.linkedin.com/pulse/analytical-core-why-analysis-crown-jewel-thesis-research-r1gof",
    },
    {
      category: "student",
      title: "Become a Data Professional: The Skill Roadmap",
      tags: ["Career"],
      readTime: "6 min",
      icon: GraduationCap,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767046117/Screenshot_2025-12-29_110649_icac27.png",
      link: "https://www.linkedin.com/pulse/become-data-professional-skill-roadmap-rynsolutions-kuybf",
    },
    {
      category: "innovation",
      title: "The AI Revolution in Ghana: Hype vs. Utility",
      tags: ["Technology"],
      readTime: "7 min",
      icon: Sparkles,
      image:
        "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767015179/freepik_assistant_1767008661467_nqmqe2.png",
      link: "https://www.linkedin.com/pulse/ai-revolution-ghana-hype-vs-utility-rynsolutions-afeyf",
    },
  ];

  const filteredInsights =
    selectedFilter === "all"
      ? insights
      : insights.filter(
          (insight) => insight.category === selectedFilter,
        );

  return (
    <section id="insights" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-slate-300" />
            <span className="text-xs font-medium tracking-[0.2em] text-slate-500 uppercase">
              Insights
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-medium text-slate-900 leading-[1.1] mb-6 max-w-4xl">
            The Knowledge Bank
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl">
            Evidence-based insights from the field, research,
            and real-world practice
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-start gap-0 mb-16 border-b border-slate-200">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`relative px-8 py-4 text-sm font-light tracking-wide transition-all duration-300 ${
                selectedFilter === filter.id
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {filter.label}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-slate-900 transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-slate-200 mb-20"
        >
          {filteredInsights.map((insight, index) => (
            <motion.article
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => setPreviewInsight(insight)}
              className={`group relative bg-white border-r border-b border-slate-200 hover:bg-slate-50 transition-all duration-300 cursor-pointer ${
                insight.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* ... (Keep your existing Article card content exactly as is) ... */}
              {/* For brevity, I am not repeating the inner content of the card, paste your existing card code here */}
              <div
                className={`relative overflow-hidden ${insight.featured ? "h-80" : "h-64"}`}
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {insight.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-light tracking-wide backdrop-blur-sm ${tag === "Featured" ? "bg-slate-900 text-white" : "bg-white/90 border border-slate-200 text-slate-900"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`p-8 lg:p-10 flex flex-col ${insight.featured ? "min-h-[280px]" : "min-h-[240px]"}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-0">
                    <insight.icon
                      className="w-6 h-6 text-slate-600 group-hover:text-slate-900 transition-colors"
                      strokeWidth={1.2}
                    />
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-light">
                    <Clock
                      className="w-4 h-4"
                      strokeWidth={1.5}
                    />
                    <span>{insight.readTime}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3
                    className={`mb-3 font-serif font-medium text-slate-900 group-hover:text-slate-700 transition-colors leading-tight ${insight.featured ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"}`}
                  >
                    {insight.title}
                  </h3>
                  {insight.subtitle && (
                    <p className="text-slate-600 font-light leading-relaxed text-base">
                      {insight.subtitle}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-end pt-6 mt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-900 group-hover:gap-3 transition-all">
                    <span className="text-sm font-light tracking-wide">
                      Read Article
                    </span>
                    <ArrowRight
                      className="w-4 h-4"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* --- UPDATED NEWSLETTER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-serif font-medium text-white mb-6 leading-tight">
              Get the intelligence before your competitors do
            </h3>
            <p className="text-slate-300 font-light leading-relaxed mb-10 text-lg">
              Join 2,000+ business leaders receiving weekly
              insights on data, strategy, and African commerce
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                disabled={
                  status === "loading" || status === "success"
                }
                className="bg-white border-none text-slate-900 px-6 py-3 flex-1 font-light disabled:opacity-80"
              />

              <Button
                onClick={handleSubscribe}
                disabled={
                  status === "loading" || status === "success"
                }
                className={`border-none px-8 py-3 text-sm font-light tracking-wide whitespace-nowrap transition-all duration-300 ${
                  status === "success"
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-white hover:bg-slate-100 text-slate-900"
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
                  "Subscribe Now"
                )}
              </Button>
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm mt-4 font-light">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </motion.div>
      </div>

      {/* Preview Modal (Keep exactly as is) */}
      <AnimatePresence>
        {previewInsight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setPreviewInsight(null)}
          >
            {/* ... (Keep your existing Modal content exactly as is) ... */}
            {/* Paste your existing modal code here */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewInsight(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 flex items-center justify-center transition-all"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <div className="overflow-y-auto max-h-[90vh]">
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <img
                    src={previewInsight.image}
                    alt={previewInsight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {previewInsight.tags.map(
                      (tag: string, i: number) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-light tracking-wide backdrop-blur-sm ${tag === "Featured" ? "bg-slate-900 text-white" : "bg-white/90 border border-slate-200 text-slate-900"}`}
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <div className="p-10 lg:p-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-0">
                      <previewInsight.icon
                        className="w-8 h-8 text-slate-700"
                        strokeWidth={1.2}
                      />
                    </div>
                    <div className="flex items-center gap-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock
                          className="w-4 h-4"
                          strokeWidth={1.5}
                        />
                        <span className="text-sm font-light">
                          {previewInsight.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-serif font-medium text-slate-900 mb-6 leading-[1.1]">
                    {previewInsight.title}
                  </h2>
                  {previewInsight.subtitle && (
                    <p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
                      {previewInsight.subtitle}
                    </p>
                  )}
                  <div className="bg-slate-50 border-l-2 border-slate-900 p-8 mb-10">
                    <p className="text-slate-700 font-light italic leading-relaxed">
                      Click below to read the full article on
                      LinkedIn and explore detailed insights,
                      data-driven analysis, and actionable
                      recommendations.
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white border-none px-8 py-3 text-sm font-light tracking-wide"
                      onClick={() => {
                        window.open(
                          previewInsight.link,
                          "_blank",
                          "noopener,noreferrer",
                        );
                        setPreviewInsight(null);
                      }}
                    >
                      <span>Read Full Article on LinkedIn</span>
                      <ExternalLink
                        className="w-5 h-5 ml-2"
                        strokeWidth={1.5}
                      />
                    </Button>
                  </motion.div>
                  <div className="mt-10 pt-10 border-t border-slate-200">
                    <p className="text-sm text-slate-500 font-light text-center">
                      Published by RYN Solutions • Premium
                      insights for African commerce
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}