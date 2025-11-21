
// HOME PAGE
import { Wine, Award, Globe, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const BeveragesHome = () => {
  return (
    <div>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#0268AE] to-[#015489] text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <Wine className="w-12 h-12 mx-auto mb-4" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Quality Beverages<br />African & Global Standards
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg mb-8" style={{ fontFamily: 'var(--font-primary)' }}>
            Production, branding, and distribution of premium drinks
          </motion.p>
          <Link to="/beverages/contact"><button className="btn bg-[#0289DC] text-white hover:bg-[#0270B8]">Get Started</button></Link>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our <span className="text-[#0268AE]">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wine, title: 'Production', desc: 'State-of-the-art beverage manufacturing' },
              { icon: Award, title: 'Quality Control', desc: 'International quality standards' },
              { icon: Globe, title: 'Distribution', desc: 'Wide distribution network' },
              { icon: TrendingUp, title: 'Branding', desc: 'Brand development & marketing' }
            ].map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#E6F7FD] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#0289DC]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>{service.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>x

      <section className="section bg-gradient-to-br from-[#0289DC] to-[#0270B8] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Experience Quality</h2>
          <p className="text-base sm:text-lg mb-8" style={{ fontFamily: 'var(--font-primary)' }}>Partner with L'Antique for premium beverage solutions</p>
          <Link to="/beverages/contact"><button className="btn bg-white text-[#0289DC] hover:bg-gray-100">Contact Us Today</button></Link>
        </div>
      </section>
    </div>
  )
}

export default BeveragesHome
