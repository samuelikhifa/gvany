import SEO from '@/components/SEO'
import { motion } from 'framer-motion'
import { TrendingUp, BarChart, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const ConsultancyHome = () => {
  const features = [
    'Business Strategy & Transformation Consulting',
    'Operational Excellence & Process Optimization',
    'Organizational Design & Change Management',
    'Performance Improvement & Cost Reduction',
    'Supply Chain & Logistics Advisory',
    'Financial Advisory & Capital Raising Support',
    'Human Capital Development & Training',
    'Digital Transformation & Technology Implementation',
    'Market Entry & Expansion Strategies',
    'Governance, Risk & Compliance Advisory',
  ]

  return (
    <>
      <SEO
        title="Business & Management Consultancy | Yorbax – GVANY"
        description="Strategic brand marketing, sales distribution and market penetration services across Africa."
        canonical="/consultancy"
      />

      <div>
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#01A5F9] via-[#0189D1] to-[#01A5F9] text-white overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                    Yorbax Allied Solutions Ltd
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Streamline Operations.<br />Unlock Growth.
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-primary)' }}>
                  Offers consultancy and business support services, helping organizations streamline operations and unlock growth opportunities.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/consultancy/contact">
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn bg-white text-[#01A5F9] hover:bg-gray-100">
                      Get Started
                    </motion.button>
                  </Link>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
                <BarChart className="w-4 h-4" />
                <span>Our Services</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                What We <span className="text-gradient-primary">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-primary)' }}>
                Comprehensive consultancy and business support services tailored to drive sustainable growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-6 h-6 rounded-full bg-[#01A5F9]/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#01A5F9]" />
                  </div>
                  <span className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-sm bg-gradient-to-br from-[#01A5F9] to-[#FFFFFF] text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-white/90 mb-8" style={{ fontFamily: 'var(--font-primary)' }}>
                  Let’s partner to streamline your operations and unlock new growth opportunities
                </p>
                <Link to="/consultancy/contact">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn bg-white text-[#01A5F9] hover:bg-gray-100">
                    Contact Us Today
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


export default ConsultancyHome
