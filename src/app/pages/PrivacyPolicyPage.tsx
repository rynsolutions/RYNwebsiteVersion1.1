import { motion } from 'motion/react';
import { Shield, Lock, Database, Globe, FileCheck, Scale } from 'lucide-react';
import { Footer } from '../components/Footer';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-emerald-400" />
              <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
                Legal Framework
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            
            <div className="text-slate-300 space-y-2">
              <p className="font-light">Last Updated: January 19, 2026</p>
              <p className="font-light">Jurisdiction: Kumasi, Ghana</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Section 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">1. Our Pledge to You</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Trust is the currency of consulting. At RYN Solutions, we deal with the most sensitive aspects of your business and academic research. We do not treat privacy as a mere compliance checkbox; we treat it as a structural component of our architecture.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    This document explains, in plain English, how we handle the intelligence you entrust to us while interacting with our digital services and AI agents.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">2. Data Architecture: What We Collect</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    We distinguish between <strong>Client Data (Business Intelligence)</strong> and <strong>Interaction Data (Conversational & Functional)</strong>.
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-3">Client Data:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      This is the specific dataset or project file you provide for analysis. We do not own this data. We are the architects; you own the building.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-3">Interaction Data (AI Agent):</h3>
                    <p className="text-slate-700 leading-relaxed">
                      When you interact with our AI Chatbot, we process the text of that conversation to generate immediate, relevant responses.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium text-blue-900 mb-3">The "Privacy-First" Separation:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We utilize a split-architecture. General conversation logs are processed anonymously. If you choose to provide Personal Identifiable Information (PII) such as your Name or Email, you are redirected to a secure, encrypted form environment separate from the chat window.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-slate-900 mb-3">Visitor Data:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      We collect minimal functional operational data (cookies) solely to ensure our digital services remain secure, fast, and responsive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">3. Third-Party Infrastructure (The "Black Box" Principle)</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    To deliver high-speed intelligence, we leverage enterprise-grade third-party AI infrastructure and cloud processors.
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">Data Processing:</h3>
                      <p className="text-slate-700 leading-relaxed">
                        Your queries may be processed by trusted global providers to generate natural language responses.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-2">Data Sovereignty:</h3>
                      <p className="text-slate-700 leading-relaxed">
                        These providers process data strictly for the purpose of generating the response. We do not authorize these providers to use your confidential business data to train their public models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">4. How We Use Intelligence</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    We are in the business of Insight. We use data solely to:
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-slate-700">
                      <span className="text-slate-900 font-medium mt-1">—</span>
                      <span>Train specific models for your unique business case.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <span className="text-slate-900 font-medium mt-1">—</span>
                      <span>Calibrate our internal sector benchmarks.</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-700">
                      <span className="text-slate-900 font-medium mt-1">—</span>
                      <span>Facilitate communication regarding project updates or security alerts.</span>
                    </li>
                  </ul>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-emerald-900 mb-3">The "Zero-Sale" Rule:</h3>
                    <p className="text-slate-700 leading-relaxed">
                      RYN Solutions never sells, rents, or trades client data to third-party brokers. Your data stays within our ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">5. Security Infrastructure</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed">
                    We employ industry-standard encryption protocols (AES-256) for data at rest and in transit. We maintain strict access controls, ensuring that only authorized consultants and automated agents with specific clearance can access sensitive datasets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
