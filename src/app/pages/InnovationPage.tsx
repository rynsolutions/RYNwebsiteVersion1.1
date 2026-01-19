import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  ArrowRight,
  Check,
  ChevronDown,
  LineChart,
  Microscope,
  ShieldCheck,
  Users,
  Building2,
  BookOpen,
  BarChart,
  // New imports for status
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Footer } from "../components/Footer";

// --- Types & Interfaces ---
interface DiagnosticProblem {
  id: string;
  title: string;
  issue: string;
  result: string;
}

// --- Data Constants ---
const DIAGNOSTIC_PROBLEMS: DiagnosticProblem[] = [
  {
    id: "1",
    title: "Product Cannibalization",
    issue: "New SKUs eating into existing sales.",
    result: "Flat revenue, double inventory cost.",
  },
  {
    id: "2",
    title: "Race-to-the-Bottom",
    issue: "Pricing wars driven by local density.",
    result: "Volume remains high, but margins vanish.",
  },
  {
    id: "3",
    title: "The Visibility Deficit",
    issue: "Reliance on foot traffic alone.",
    result: "Zero customer retention beyond the transaction.",
  },
  {
    id: "4",
    title: "Inventory Paralysis",
    issue: 'Capital tied up in "Dead Stock".',
    result: "Liquidation at a loss.",
  },
  {
    id: "5",
    title: "Pricing Guesswork",
    issue: "Pricing based on intuition, not elasticity.",
    result: "Leaving money on the table.",
  },
  {
    id: "6",
    title: "Supply Chain Shocks",
    issue: "Inconsistent delivery schedules.",
    result: "Operational paralysis.",
  },
];

const LAB_INPUTS = [
  {
    title: "Predictive Modeling",
    desc: "Forecasting demand before it happens.",
    icon: LineChart,
  },
  {
    title: "Behavioral Economics",
    desc: 'Understanding the "Why" behind the buy.',
    icon: Users,
  },
  {
    title: "Macro-Integration",
    desc: "Linking inflation rates to tomato prices.",
    icon: ShieldCheck,
  },
];

export function InnovationPage() {
  const [searchParams] = useSearchParams();
  const fromIndustry = searchParams.get("from");

  const [selectedRole, setSelectedRole] =
    useState<string>("trader");
  const [openAccordion, setOpenAccordion] = useState<
    string | null
  >(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    details: "",
  });

  // Submission Status State
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Sort pilots based on URL param
  const isHealthcareFirst = fromIndustry === "healthcare";

  // --- Handlers ---
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.details)
      return;

    setStatus("loading");

    // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxjzB2kILBJYCQit880GZpcUHNcVMlENo5wImrDNk66yPp2AyMYPFJ4PNMB_q6_oqboTg/exec";

    try {
      // Create form data object to send
      const dataToSubmit = new URLSearchParams({
        role: selectedRole,
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        details: formData.details,
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: dataToSubmit,
      });

      setStatus("success");

      // Clear form
      setFormData({
        name: "",
        email: "",
        organization: "",
        details: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative pt-32 pb-32 px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768081762/ramon-salinero-vEE00Hx5d0Q-unsplash_1_pecoxg.jpg"
            alt="Innovation Laboratory"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-slate-400"></div>
              <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
                RYN Labs
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-8">
              We don't just track the market. <br />
              <span className="italic text-slate-400">
                We test it.
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              RYN Labs exists to answer one core question:
              <span className="font-medium text-white">
                {" "}
                What actually works before you invest at scale?
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- METHODOLOGY (THE PROCESS) --- */}
      <section className="py-24 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "The MVP",
                desc: "Rapid prototyping of data models to fail fast and learn faster.",
              },
              {
                step: "02",
                title: "The Pilot",
                desc: "Live testing in controlled environments (e.g., Adum Market).",
              },
              {
                step: "03",
                title: "The Scale",
                desc: "Full deployment of productized analytics for maximum ROI.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                <div className="text-6xl font-serif text-slate-200 mb-4 group-hover:text-slate-300 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="absolute top-0 left-0 w-full h-px bg-slate-200 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PILOT STUDIES (CASE STUDIES) --- */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* PILOT 1: RETAIL (Adum) */}
          <div
            className={`grid lg:grid-cols-12 gap-12 ${isHealthcareFirst ? "order-2" : "order-1"}`}
          >
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-semibold tracking-wide uppercase rounded-full mb-6">
                  Active Pilot
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                  The Adum & Kejetia Intelligence Initiative
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Transforming African informal markets by
                  treating the shop floor as a data lab. We
                  identify "Profit Leaks" and plug them with
                  predictive intelligence.
                </p>
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
                  <h4 className="font-medium text-slate-900 mb-4 flex items-center gap-2">
                    <Microscope className="w-4 h-4 text-slate-500" />
                    Key Findings
                  </h4>
                  <ul className="space-y-3">
                    {DIAGNOSTIC_PROBLEMS.slice(0, 3).map(
                      (prob) => (
                        <li
                          key={prob.id}
                          className="text-sm text-slate-600 pb-3 border-b border-slate-200 last:border-0 last:pb-0"
                        >
                          <span className="font-medium text-slate-800 block mb-1">
                            {prob.title}
                          </span>
                          {prob.issue}
                        </li>
                      ),
                    )}
                  </ul>
                  <button className="mt-4 text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">
                    View full diagnostic report{" "}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              {/* Solution Card */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
                <div className="p-8 md:p-12 border-b border-slate-100">
                  <h3 className="text-2xl font-serif text-slate-900 mb-6">
                    The Intervention
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                        Inventory Intelligence
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        We deployed predictive alerts that tell
                        traders exactly when to restock
                        high-velocity items and when to halt
                        purchasing on dead stock.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                        Margin Protection
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        Dynamic pricing calculators that factor
                        in real-time transport costs and
                        overheads to establish a "True Price"
                        for profitability.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Diagnostic Accordion (Simplified) */}
                <div className="bg-slate-50 p-8 md:p-12">
                  <h3 className="text-lg font-medium text-slate-900 mb-6">
                    Systemic Friction Points Identified
                  </h3>
                  <div className="grid gap-4">
                    {DIAGNOSTIC_PROBLEMS.map((problem) => (
                      <div
                        key={problem.id}
                        className="bg-white border border-slate-200 rounded-lg overflow-hidden cursor-pointer"
                        onClick={() =>
                          setOpenAccordion(
                            openAccordion === problem.id
                              ? null
                              : problem.id,
                          )
                        }
                      >
                        <div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                          <span className="font-medium text-slate-800 text-sm">
                            <span className="text-slate-400 mr-3">
                              0{problem.id}
                            </span>
                            {problem.title}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${openAccordion === problem.id ? "rotate-180" : ""}`}
                          />
                        </div>
                        {openAccordion === problem.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            className="px-4 pb-4 bg-slate-50"
                          >
                            <div className="pt-2 text-sm text-slate-600 border-t border-slate-100">
                              <p className="mb-2">
                                <span className="font-semibold text-red-700">
                                  Issue:
                                </span>{" "}
                                {problem.issue}
                              </p>
                              <p>
                                <span className="font-semibold text-slate-900">
                                  Result:
                                </span>{" "}
                                {problem.result}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-slate-200" />

          {/* PILOT 2: HEALTHCARE (RIYAN) */}
          <div
            className={`grid lg:grid-cols-12 gap-12 ${isHealthcareFirst ? "order-1" : "order-2"}`}
          >
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold tracking-wide uppercase rounded-full mb-6">
                  Partnership
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">
                  RIYAN Health: NCD Data Alignment
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Fighting the silent killer of Non-Communicable
                  Diseases (NCDs) by aligning startup technology
                  with global public health goals.
                </p>
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 text-sm">
                        Regulatory Compliance
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Aligned with Ministry of Health & Global
                        Standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500 h-full flex flex-col">
                <div className="p-8 md:p-12 flex-grow">
                  <h3 className="text-2xl font-serif text-slate-900 mb-6">
                    Research Consulting & Infrastructure
                  </h3>
                  <div className="space-y-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-serif">
                        A
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-slate-900 mb-2">
                          Digital Infrastructure
                        </h4>
                        <p className="text-slate-600">
                          Developed the core web presence to
                          secure global visibility. We moved
                          beyond "marketing" sites to build an
                          evidence-based digital footprint.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-serif">
                        B
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-slate-900 mb-2">
                          Public Health Alignment
                        </h4>
                        <p className="text-slate-600">
                          Ensured that every data point
                          collected serves a broader public
                          health purpose, preventing data silos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-900/5 p-8 border-t border-emerald-900/10">
                  <p className="text-emerald-900 italic font-medium text-center">
                    "Technology must not just exist; it must
                    save lives through data-driven alignment."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INGREDIENTS (LAB INPUTS) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              The Laboratory Inputs
            </h2>
            <p className="text-slate-400">
              The technical ingredients behind our pilots.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LAB_INPUTS.map((input, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
              >
                <input.icon className="w-8 h-8 text-slate-400 mb-6 group-hover:text-white transition-colors" />
                <h3 className="text-xl font-medium mb-3 text-white">
                  {input.title}
                </h3>
                <p className="text-slate-400 font-light">
                  {input.desc}
                </p>
              </div>
            ))}
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
              From Labs to Real-World Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Link to Services */}
            <Link to="/services" className="group block">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                    alt="Services"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                    <BarChart className="w-4 h-4" />
                    <span>Capabilities</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    Productized Solutions
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    See how our pilot findings become scaled
                    commercial offerings.
                  </p>
                  <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                    View Services{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Link to Industries */}
            <Link to="/industries" className="group block">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Industries"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>Sector Focus</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    Industry Applications
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Explore how we tailor pilots to retail,
                    healthcare, and academic contexts.
                  </p>
                  <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                    View Industries{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Link to Learning */}
            <Link to="/insights" className="group block">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                    alt="Learning"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wider mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Knowledge Transfer</span>
                  </div>
                  <h3 className="text-2xl font-serif text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    Discover our Thinking
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Find the recent discoveries from our
                    research through executive storytelling.
                  </p>
                  <span className="flex items-center text-sm font-semibold text-slate-900 group-hover:gap-2 transition-all">
                    Explore Insights{" "}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- APPLICATION FORM --- */}
      <section
        className="py-24 px-6 lg:px-8 bg-white"
        id="apply"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-slate-900 mb-4">
              Be Part of the Evidence
            </h2>
            <p className="text-slate-600">
              We are looking for partners for our next cycle of
              pilots.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-900 mb-4">
                Select your role
              </label>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  {
                    id: "trader",
                    label: "Market Trader",
                    desc: "Join Adum Pilot",
                  },
                  {
                    id: "investor",
                    label: "Investor",
                    desc: "Back Retail Tech",
                  },
                  {
                    id: "startup",
                    label: "Startup",
                    desc: "Validate Product",
                  },
                ].map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    disabled={
                      status === "loading" ||
                      status === "success"
                    }
                    onClick={() => setSelectedRole(role.id)}
                    className={`p-4 text-left border rounded-xl transition-all duration-200 disabled:opacity-70 ${
                      selectedRole === role.id
                        ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-slate-900 text-sm">
                        {role.label}
                      </span>
                      {selectedRole === role.id && (
                        <Check className="w-4 h-4 text-slate-900" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500">
                      {role.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Input Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={
                    status === "loading" || status === "success"
                  }
                  className="bg-white border-slate-200 focus:border-slate-900 focus:ring-slate-900/5 h-12"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={
                    status === "loading" || status === "success"
                  }
                  className="bg-white border-slate-200 focus:border-slate-900 focus:ring-slate-900/5 h-12"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Organization / Company
              </label>
              <Input
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                disabled={
                  status === "loading" || status === "success"
                }
                className="bg-white border-slate-200 focus:border-slate-900 focus:ring-slate-900/5 h-12"
                placeholder="e.g., Kejetia Traders Association"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Project Details
              </label>
              <Textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                disabled={
                  status === "loading" || status === "success"
                }
                className="bg-white border-slate-200 focus:border-slate-900 focus:ring-slate-900/5 min-h-[120px] resize-none"
                placeholder="Briefly describe what you are looking to achieve..."
              />
            </div>

            <Button
              type="submit"
              disabled={
                status === "loading" || status === "success"
              }
              className={`w-full h-14 text-white text-base font-medium rounded-lg transition-all ${
                status === "success"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-slate-900 hover:bg-slate-800"
              }`}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing Application...
                </span>
              ) : status === "success" ? (
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Application Submitted
                </span>
              ) : (
                "Submit Application"
              )}
            </Button>

            {status === "success" && (
              <p className="text-sm text-center text-emerald-600 font-medium animate-in fade-in">
                Thank you! We have sent a confirmation to your
                email.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm text-center text-red-500 font-medium flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Something went wrong. Please try again later.
              </p>
            )}

            <p className="text-xs text-center text-slate-400 mt-4">
              Your data is treated with strict confidentiality
              in accordance with our privacy policy.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}