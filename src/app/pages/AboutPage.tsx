import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Linkedin, Shield, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import { BarChart, Lightbulb } from 'lucide-react';

export function AboutPage() {
  const compliancelogos = [
    {
      title: 'GDPR',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767277916/gdps_xj17pv.png',
    },
    {
      title: 'HIPAA',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767277918/hipaa_uvvx1y.jpg',
    },
    {
      title: 'CIS',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767277915/CIS_aqcdag.png',
    },
    {
      title: 'NIST',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1767277920/NIST_t4khw9.jpg',
    },
  ];

  const founderafilliations = [
    {
      title: 'WQU',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768744656/eiz7u5frilo2d2oibmiv_bgx4er.avif',  
    },
    {
      title: 'DataCamp',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768744857/DataCamp_-_Grafika_0_moncws.png',  
    },
    {
      title: 'KNUST',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768744824/knust-logo-png_seeklogo-618224_pnia0o.png',  
    },
    {
      title: 'KumasiHive',
      logo: 'https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768744897/Kumasi_Hive_logo_wjfabu.jpg',  
    },    
  ];

  const rynStandards = [
    {
      number: '01',
      title: 'Contextual Intelligence',
      description:
        "We believe data without context is just noise. We don't just bring deep technical fluency in machine learning and governance; we bring situational fluency. We map our global technical standards to your specific local reality—whether that's the informal trade dynamics of Adum Market or the regulatory framework of a healthcare startup. We solve for your ecosystem, not a textbook scenario.",
    },
    {
      number: '02',
      title: 'Impact Over Activity',
      description:
        "Clients hire us for results, not research papers. We operate with a \"value-first\" bias. Every dashboard we build and every model we train must draw a straight line to a tangible business outcome—be it revenue recovered, waste reduced, or lives saved. If it doesn't move the needle, we don't build it.",
    },
    {
      number: '03',
      title: 'The Art of Listening',
      description:
        "We listen to solve, not to sell. We believe the most critical data points often come from the people on the ground, not just the servers. By practicing radical empathy, we bridge the gap between the C-Suite's vision and the operational reality, ensuring our solutions are embraced by the people who actually use them.",
    },
    {
      number: '04',
      title: 'Calm in the Complexity',
      description:
        'Data transformation is inherently messy. When scope creeps or data breaks, panic is not a strategy. We provide stabilizing leadership. Our team is trained to absorb complexity and project clarity, acting as the steady hand that guides your organization through the friction of change.',
    },
    {
      number: '05',
      title: 'The Discipline of Delivery',
      description:
        'Innovation requires rigor. We balance agility with governance. Every engagement is anchored in transparent roadmaps and clear protocols. We demystify the "black box" of data science, ensuring you always know where we are, what we found, and where we are going next.',
    },
    {
      number: '06',
      title: 'Stewards of Trust',
      description:
        'We treat your data with the reverence it deserves. Beyond compliance with NIST and GDPR, we adhere to an ethical code of stewardship. We act as a fiduciary for your information, providing unbiased truth—even when it challenges the status quo—and protecting your proprietary insights as if they were our own.',
    },
  ];

  const values = [
    {
      title: 'Act with Integrity',
      description:
        'We uphold the highest standards of ethical conduct in every project, ensuring transparency and trust with our clients and partners.',
    },
    {
      title: 'Make a Difference',
      description:
        'We believe data should drive meaningful change. Our work transforms businesses and empowers communities across Africa.',
    },
    {
      title: 'Care',
      description:
        'We approach every engagement with empathy, understanding the unique challenges faced by African enterprises and the people behind the numbers.',
    },
    {
      title: 'Work Together',
      description:
        'Collaboration is at our core. We build partnerships that strengthen capabilities and create lasting impact.',
    },
    {
      title: 'Reimagine the Possible',
      description:
        'We challenge conventional thinking and apply innovative solutions to complex data challenges in emerging markets.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      {/* Header */}
      <section className="pt-[120px] pb-[32px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-600 mb-4 tracking-wide uppercase text-sm"
        >
          About RYN Solutions
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-[#1a1a1a] tracking-tight"
          style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
        >
          The Principles That Guide Our Impact.
        </motion.h1>
      </section>

      

      {/* 1. The Manifesto (Hero Section) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl text-[#1a1a1a] mb-8 leading-tight"
            style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}
          >
            Data is abundant.
            <br />
            Clarity is rare.
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed"
          >
            <p>
              At RYN Solutions, we reject the idea that transformation is just about technology. It is about{' '}
              <strong>translation</strong>. We translate raw complexity into clear strategy, and technical capability
              into business resilience.
            </p>

            <p>
              We do not simply "manage data." We steward the decisions that shape the future of African commerce,
              healthcare, and enterprise. Our philosophy is built on a simple premise:{' '}
              <strong>Technology must serve the human need, not the other way around.</strong>
            </p>
          </motion.div>
        </motion.div>
      </section>

            {/* Header Section */}
      <section className="pt-[100px] pb-[12px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pr-[16px] pl-[16px]">
       {/*  <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl mb-8"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          About us
        </motion.h1>*/}
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[400px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1666290897041-68556d4d6e07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGlnaHdheSUyMGludGVyY2hhbmdlJTIwZGF3biUyMGFlcmlhbHxlbnwxfHx8fDE3NjcxMTI5NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="City Infrastructure"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 p-6 sm:p-8"
        >
          <p className="text-lg text-gray-800 max-w-4xl">
            RYN Solutions provides industry-focused data intelligence, analytics and research services to enhance
            value for African businesses navigating the digital economy.
          </p>
        </motion.div>
      </section>

      {/* 2. Who We Are */}
      <section id="who-we-are" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left - Sticky Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <h2
                className="text-3xl sm:text-4xl text-[#1a1a1a] mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Who We Are
              </h2>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              RYN Solutions is a forward-thinking intelligence firm serving the African commercial landscape.
            </p>

            <p>
              From digitizing informal markets in Kumasi to optimizing enterprise supply chains across the continent,
              we help clients build, accelerate, and sustain momentum. We bridge the gap between raw data and strategic
              decisions.
            </p>

            <p className="bg-[#e0f2f1] px-4 py-2 rounded">
              <strong className="text-[#0891b2]">Local Reality, Global Standard</strong> is not just our tagline—it is
              our methodology. We apply world-class analytical frameworks to the unique contexts of African enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. The RYN Standard (6 Pillars Grid) */}
      <section id="thinking" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            className="text-4xl sm:text-5xl text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            The RYN Standard
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our Thinking</p>
        </motion.div>

        {/* 2x3 Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rynStandards.map((standard, index) => (
            <motion.div
              key={standard.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-gray-200 p-8 hover:bg-[#0f4c81] hover:border-[#0f4c81] transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl text-gray-300 group-hover:text-white/40 transition-colors"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {standard.number}
                </span>
              </div>
              
              <h3
                className="text-2xl mb-4 text-[#1a1a1a] group-hover:text-white transition-colors"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {standard.title}
              </h3>

              <div className="border-t border-gray-200 group-hover:border-white/20 transition-colors mb-4"></div>

              <p className="text-gray-700 group-hover:text-white/90 leading-relaxed transition-colors text-sm">
                {standard.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. The RYN Equation Visual 
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#0f4c81]/5 to-[#0891b2]/5 p-12 sm:p-16 rounded-lg text-center"
        >
          <h3 className="text-2xl sm:text-3xl mb-12 text-gray-800" style={{ fontFamily: 'Georgia, serif' }}>
            The RYN Equation
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg sm:text-xl text-gray-700">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              Rigorous Science
            </motion.div>

            <span className="text-3xl text-[#0891b2]">+</span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              Business Strategy
            </motion.div>

            <span className="text-3xl text-[#0891b2]">+</span>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-6 py-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              Human Empathy
            </motion.div>
          </div>

          <div className="mt-8 text-3xl text-[#0891b2]">=</div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-2xl sm:text-3xl text-[#0f4c81] font-semibold"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Sustainable Growth
          </motion.div>
        </motion.div>
      </section> */}

      {/* 5. Our Commitments (Purpose & Values) */}
      <section id="values" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl text-[#1a1a1a] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Our Commitments
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            As professional advisors, we help our clients solve complex business problems. These are the commitments
            that guide our conduct:
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-[#0891b2] pl-6 py-2"
            >
              <div className="flex items-start gap-3 mb-3">
                <Check className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-1" />
                <h3 className="text-xl text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our People Section */}
      <section id="people" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl mb-8 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
            Our People
          </h2>

          {/*<h3 className="text-2xl sm:text-3xl mb-16 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
            Meet our Country Managing Partner
          </h3>*/}

          {/* Partner Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-200 shadow-lg">
              <img
                src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768746882/photo_2026-01-11_23-57-32_afl8jd.jpg"
                alt="Alhassan Fadillilah - CEO"
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-2xl mb-2 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
              Alhassan Fadillilah
            </h4>
            <p className="text-gray-600 mb-6 font-normal font-bold text-[16px]">Chief Executive Officer</p>

            {/* Founder Affiliations */}
            <div className="mb-8 w-full max-w-md">
              {/* <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">Affiliations</p>*/}
              <div className="grid grid-cols-4 gap-4">
                {founderafilliations.map((affiliation) => (
                  <motion.div
                    key={affiliation.title}
                    initial={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center p-3 bg-white rounded-lg border border-gray-200 hover:border-[#0891b2] transition-all hover:shadow-md"
                  >
                    <img
                      src={affiliation.logo}
                      alt={`${affiliation.title} Logo`}
                      className="w-full h-auto object-contain grayscale-0 hover:grayscale-0 transition-all"
                      style={{ maxHeight: '60px' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-gray-300 hover:border-[#0891b2]"
                onClick={() => window.open('https://www.linkedin.com/company/rynsolutions', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-gray-300 hover:border-[#0891b2]"
                onClick={() => (window.location.href = 'mailto:alhassanfadillilah07@gmail.com')}
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Governance & Compliance Section */}
      <section id="compliance" className="py-24 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
              >
                <Shield className="w-12 h-12 text-gray-600" />
              </motion.div>
            </div>

            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
              Data Stewardship & Security
            </h2>

            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Security is our baseline, aligned with top global infrastructure
            </p>
          </motion.div>

          {/* Compliance Details */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="w-16 h-16 flex-shrink-0"
                >
                  <img
                    src={compliancelogos.find((c) => c.title === 'NIST')?.logo}
                    alt="NIST Logo"
                    className="w-full h-full object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                    NIST Cybersecurity Framework 2.0
                  </h3>
                  <p className="text-sm text-gray-500">NIST CSF</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                We utilize a tier-1 approach to identify, protect, detect, respond, and recover from cyber risks,
                ensuring operational resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: 'spring' }}
                  className="w-16 h-16 flex-shrink-0"
                >
                  <img
                    src={compliancelogos.find((c) => c.title === 'CIS')?.logo}
                    alt="CIS Logo"
                    className="w-full h-full object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                    CIS Controls
                  </h3>
                  <p className="text-sm text-gray-500">Center for Internet Security</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                We implement the prioritized set of safeguards to mitigate the most prevalent cyber attacks against
                systems and networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="w-16 h-16 flex-shrink-0"
                >
                  <img
                    src={compliancelogos.find((c) => c.title === 'GDPR')?.logo}
                    alt="GDPR Logo"
                    className="w-full h-full object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                    GDPR & Data Protection Act, 2012
                  </h3>
                  <p className="text-sm text-gray-500">Act 843</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                We respect the sovereignty of your personal data. Privacy by design is embedded in our collection and
                processing protocols.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  className="w-16 h-16 flex-shrink-0"
                >
                  <img
                    src={compliancelogos.find((c) => c.title === 'HIPAA')?.logo}
                    alt="HIPAA Logo"
                    className="w-full h-full object-contain grayscale opacity-60 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
                <div>
                  <h3 className="text-lg mb-1 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
                    HIPAA Compliant
                  </h3>
                  <p className="text-sm text-gray-500">Health Insurance Portability and Accountability Act</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                We adhere to strict standards for protecting sensitive patient health information (PHI).
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Our Promise (Footer Statement) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-[#0891b2] pl-8 py-4"
        >
          <p className="text-2xl sm:text-3xl text-gray-800 leading-relaxed italic" style={{ fontFamily: 'Georgia, serif' }}>
            "We are not just consultants. We are your partners in the pursuit of clarity. When you work with RYN, you
            don't just get a data provider—you get a strategic ally committed to your long-term resilience."
          </p>
        </motion.div>
      </section>

      {/* --- BRIDGE: EXPLORE OUR WORK --- */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#f9f9f9]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl mb-6 text-[#1a1a1a]" style={{ fontFamily: 'Georgia, serif' }}>
            See Our Work in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From services to field experiments—explore how we translate principles into practice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Link to Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/services" className="group block h-full">
              <div className="bg-white border border-gray-200 hover:border-[#0891b2] hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                    alt="Services"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c81]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider">
                      <BarChart className="w-5 h-5" />
                      <span>Capabilities</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl mb-3 text-[#1a1a1a] group-hover:text-[#0891b2] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    Our Services
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    Explore our full capability matrix—from customer intelligence to ESG monitoring.
                  </p>
                  <div className="flex items-center text-[#0891b2] font-semibold group-hover:gap-2 transition-all">
                    View Services <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Link to Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/innovation" className="group block h-full">
              <div className="bg-white border border-gray-200 hover:border-[#0891b2] hover:shadow-lg transition-all duration-300 h-full flex flex-col overflow-hidden">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dtl9mw6kp/image/upload/v1768081762/ramon-salinero-vEE00Hx5d0Q-unsplash_1_pecoxg.jpg" 
                    alt="Innovation"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f4c81]/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider">
                      <Lightbulb className="w-5 h-5" />
                      <span>RYN Labs</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl mb-3 text-[#1a1a1a] group-hover:text-[#0891b2] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                    Innovation Labs
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    See how we test solutions in real markets—from Adum to healthcare facilities.
                  </p>
                  <div className="flex items-center text-[#0891b2] font-semibold group-hover:gap-2 transition-all">
                    View Labs <ChevronRight className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f4c81]/90 to-[#0891b2]/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlJTIwbWVldGluZ3xlbnwxfHx8fDE3NjcxMTM0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 bg-[rgba(80,28,18,0.9)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              We unite expertise and technology
            </h2>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">
              Building trust in data. Solving complex problems. Transforming African commerce.
            </p>
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white border-none px-6 py-2 text-sm font-light tracking-wide"
              onClick={() => (window.location.href = 'mailto:rynsolutions@protonmail.com')}
            >
              Start a Conversation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}