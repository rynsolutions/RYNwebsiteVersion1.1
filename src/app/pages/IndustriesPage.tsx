import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingCart,
  Heart,
  GraduationCap,
  Activity,
  ArrowRight,
  Download,
  FileText,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Lightbulb,
  BarChart,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { useChatbot } from "@/app/contexts/ChatbotContext";
import { Button } from '@/app/components/ui/button';

// --- Types ---
type SectorId = "retail" | "ngo" | "academic" | "health";

interface RelatedLink {
  title: string;
  subtitle: string;
  link: string;
  icon: React.ElementType;
  image: string;
}

interface SectorData {
  id: SectorId;
  label: string;
  icon: React.ElementType;
  tagline: string;
  title: string;
  description: string;
  heroImage: string; // New: Contextual Image
  reportTitle: string;
  capabilities: string[];
  cta: string;
  accentColor: string;
  relatedPage: RelatedLink; // New: Bridge to other pages
}

// --- Data Configuration ---
const SECTORS: SectorData[] = [
  {
    id: "retail",
    label: "Consumer Markets",
    icon: ShoppingCart,
    tagline: "The Informal Sector is the Real Sector",
    title: "Adum & Kejetia Market Intelligence",
    description:
      "We bridge the gap between corporate FMCGs and the informal traders who actually move the volume. We provide the first-ever structured data extraction path for informal merchants.",
    heroImage:
      "https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767045235/Screenshot_2025-12-29_215222_ll7rkk.png", // Busy Market Scene
    reportTitle:
      "The Silent Volume: Decoding Cash Flow in Kejetia Market",
    capabilities: [
      "WhatsApp-Integrated Sales Tracking",
      "Inventory Velocity Algorithms",
      "Supplier Performance Scoring",
      "Micro-Credit Risk Modeling",
    ],
    cta: "View Retail Solutions",
    accentColor: "text-blue-900",
    relatedPage: {
      title: "See the Pilot in Action",
      subtitle: "Explore RYN Labs: The Retail Experiment",
      link: "/innovation?from=retail",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2070&auto=format&fit=crop",
    },
  },
  {
    id: "ngo",
    label: "International Development",
    icon: Heart,
    tagline: "Donor-Ready Reporting",
    title: "Impact Evaluation & Monitoring",
    description:
      "Moving beyond anecdotal success stories. We design rigorous Monitoring & Evaluation (M&E) frameworks that satisfy international donor requirements and validate program efficacy.",
    heroImage:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop", // Field work / Humanitarian
    reportTitle:
      "Maximizing Program Impact: A Data-First Approach to Aid",
    capabilities: [
      "Real-time Field Data Collection",
      "Longitudinal Impact Studies",
      "Donor Compliance Dashboards",
      "Beneficiary Sentiment Analysis",
    ],
    cta: "Explore M&E Services",
    accentColor: "text-emerald-800",
    relatedPage: {
      title: "Deep Dive into Services",
      subtitle: "View our full Capability Matrix",
      link: "/services",
      icon: BarChart,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    },
  },
  {
    id: "academic",
    label: "Academic Research",
    icon: GraduationCap,
    tagline: "Defensible Conclusions",
    title: "Methodology & Statistical Support",
    description:
      "We support PhD candidates and research institutions in turning raw data into defensible theses. We ensure reproducibility, statistical significance, and visual clarity.",
    heroImage:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", // University / Library
    reportTitle:
      "The Reproducibility Crisis: Standardizing African Research Data",
    capabilities: [
      "Advanced SPSS/Python Analysis",
      "Methodology Consultation",
      "Publication-Ready Visualization",
      "Hypothesis Testing Frameworks",
    ],
    cta: "Academic Partnership",
    accentColor: "text-indigo-900",
    relatedPage: {
      title: "Upskill Your Analysis",
      subtitle: 'Join "The Researcher" Learning Track',
      link: "/learning",
      icon: BookOpen,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    },
  },
  {
    id: "health",
    label: "Public Health",
    icon: Activity,
    tagline: "Resource Efficiency",
    title: "Clinic & Patient Analytics",
    description:
      "Optimizing patient flow in resource-constrained environments. We deploy low-cost dashboards that help clinic administrators reduce wait times and manage inventory.",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop", // Medical / Lab
    reportTitle:
      "Optimizing Patient Flow in High-Volume Urban Clinics",
    capabilities: [
      "Patient Wait-Time Tracking",
      "Drug Inventory Forecasting",
      "Resource Utilization Metrics",
      "Staff Allocation Modeling",
    ],
    cta: "Healthcare Solutions",
    accentColor: "text-slate-900",
    relatedPage: {
      title: "Case Study: RIYAN Health",
      subtitle: "How we aligned tech with NCD goals",
      link: "/innovation?from=healthcare",
      icon: Lightbulb,
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    },
  },
];

export function IndustriesPage() {
  const [activeSector, setActiveSector] = useState<SectorData>(
    SECTORS[0],
  );
  const { openChatbot } = useChatbot();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* --- HERO SECTION (Cinematic) --- */}
      <section className="relative pt-32 pb-32 px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Infrastructure"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
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
                Industry Focus
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Context is <br />
              <span className="italic text-slate-400">
                Everything.
              </span>
            </h1>

            <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
              We deliver solutions calibrated to the unique
              realities of African commerce, development, and
              research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT (MASTER-DETAIL LAYOUT) --- */}
      <section className="py-12 lg:py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            {/* LEFT: NAVIGATION SIDEBAR */}
            <div className="lg:col-span-3">
              <div className="sticky top-32 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">
                  Select Sector
                </p>
                {SECTORS.map((sector) => (
                  <button
                    key={sector.id}
                    onClick={() => setActiveSector(sector)}
                    className={`w-full text-left px-4 py-4 rounded-lg flex items-center justify-between group transition-all duration-300 ${
                      activeSector.id === sector.id
                        ? "bg-white shadow-md border-l-4 border-slate-900"
                        : "hover:bg-slate-100 border-l-4 border-transparent"
                    }`}
                  >
                    <span
                      className={`font-medium ${activeSector.id === sector.id ? "text-slate-900" : "text-slate-500"}`}
                    >
                      {sector.label}
                    </span>
                    {activeSector.id === sector.id && (
                      <ChevronRight className="w-4 h-4 text-slate-900" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: CONTENT AREA */}
            <div className="lg:col-span-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSector.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  {/* Contextual Hero Image for Sector */}
                  <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
                    <img
                      src={activeSector.heroImage}
                      alt={activeSector.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs font-semibold uppercase tracking-wide mb-3">
                        <activeSector.icon className="w-3 h-3" />
                        {activeSector.label}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-serif">
                        {activeSector.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-12">
                    <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                      {activeSector.description}
                    </p>
                  </div>

                  {/* Flagship Report Card */}
                  <div className="bg-white border border-slate-200 rounded-xl p-8 mb-12 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-16 -mt-16 z-0" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start">
                      <div className="bg-slate-50 p-4 rounded-lg flex-shrink-0 border border-slate-100">
                        <FileText
                          className={`w-8 h-8 ${activeSector.accentColor}`}
                        />
                      </div>
                      <div className="flex-grow">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
                          Flagship Intelligence Report
                        </span>
                        <h3 className="text-xl font-medium text-slate-900 mb-3">
                          {activeSector.reportTitle}
                        </h3>
                        <button
                          className={`text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all ${activeSector.accentColor}`}
                        >
                          <Download className="w-4 h-4" />
                          Download Executive Summary
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Capabilities Grid */}
                  <div className="mb-16">
                    <h3 className="text-xl font-serif text-slate-900 mb-6">
                      Core Capabilities
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {activeSector.capabilities.map(
                        (cap, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-4 bg-white border border-slate-100 rounded-lg"
                          >
                            <CheckCircle2
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${activeSector.accentColor}`}
                            />
                            <span className="text-slate-700 text-sm font-medium">
                              {cap}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* --- BRIDGE: PREVIEW LINK TO RELATED PAGE --- */}
                  <div className="border-t border-slate-200 pt-12">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                      Recommended Next Step
                    </p>
                    <Link
                      to={activeSector.relatedPage.link}
                      className="group block"
                    >
                      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
                        <div className="grid md:grid-cols-2">
                          <div className="h-48 md:h-auto overflow-hidden relative">
                            <img
                              src={
                                activeSector.relatedPage.image
                              }
                              alt={
                                activeSector.relatedPage.title
                              }
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                          </div>
                          <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
                              <activeSector.relatedPage.icon className="w-4 h-4" />
                              <span>Related Capabilities</span>
                            </div>
                            <h3 className="text-2xl font-serif text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                              {activeSector.relatedPage.title}
                            </h3>
                            <p className="text-slate-500 mb-6">
                              {
                                activeSector.relatedPage
                                  .subtitle
                              }
                            </p>
                            <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                              Explore this section{" "}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-slate-900 mb-6">
            Ready to transform your sector?
          </h2>
          <p className="text-slate-600 mb-8">
            Let's discuss how data can drive efficiency in your
            specific context.
          </p>
          <Button
            onClick={() =>
              openChatbot(
                "I'd like to get in touch to learn how your industry leads can help transform my business.",
              )
            }
            className="bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-2 text-sm font-light tracking-wide"
          >
            Get in touch with our industry leads
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}