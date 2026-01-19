import { motion } from 'motion/react';
import { Scale, AlertTriangle, Cpu, FileText, ShieldAlert, Gavel } from 'lucide-react';
import { Footer } from '../components/Footer';

export function TermsOfServicePage() {
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
              <Scale className="w-6 h-6 text-emerald-400" />
              <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">
                Legal Framework
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Terms of Service
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
                <FileText className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">1. The Engagement Framework</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed">
                    Welcome to RYN Solutions. These Terms of Service govern your use of our digital platforms, including our AI Agents, and define the boundaries of our consulting relationships. Think of this as the "Rules of Engagement" for our partnership.
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
                <Cpu className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">2. AI Agent Disclaimer (Usage & Reliability)</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Our digital platforms utilize advanced Large Language Model (LLM) technology to provide instant support. By using these tools, you acknowledge that:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h3 className="text-xl font-medium text-amber-900 mb-3">Information, Not Advice:</h3>
                      <p className="text-slate-700 leading-relaxed">
                        The AI Agent provides informational guidance based on available data. It does not constitute binding legal, financial, or academic advice.
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                      <h3 className="text-xl font-medium text-amber-900 mb-3">Accuracy & Verification:</h3>
                      <p className="text-slate-700 leading-relaxed">
                        While our models are calibrated for high precision, AI technology can occasionally generate inaccuracies ("hallucinations"). Critical business decisions should always be verified with a human representative of RYN Solutions.
                      </p>
                    </div>
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
                <AlertTriangle className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">3. Intellectual Property</h2>
                <div className="prose prose-slate max-w-none">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-3">Your Right:</h3>
                      <p className="text-slate-700 leading-relaxed">
                        You own the raw data you provide, the final reports we generate for you, and the specific business insights derived for your unique context.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-3">Our Right:</h3>
                      <p className="text-slate-700 leading-relaxed">
                        We own the "RYN Methodology"—our proprietary algorithms, codebases, survey frameworks, and generalized knowledge capital used to create those results.
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
                <ShieldAlert className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">4. Liability & Expectations</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed">
                    Data is a map, not a guarantee. RYN Solutions provides high-confidence predictive modeling and strategic advice based on available data. However, global markets are volatile. We cannot guarantee specific revenue outcomes. We are liable for the accuracy of our analysis methodology, but the final business decision—and its outcome—rests with you.
                  </p>
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
                <Gavel className="w-6 h-6 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-serif text-slate-900 mb-4">5. Governing Law</h2>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    RYN Solutions is a trading name of YIELDNEXUS CONSULT, legally incorporated under the Office of the Registrar of Companies (ORC) in Ghana.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    All disputes arising from these terms or our services shall be resolved in accordance with the laws of the Republic of Ghana. By accessing our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
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
