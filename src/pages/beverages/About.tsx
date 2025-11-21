// ABOUT PAGE
import { Target, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const BeveragesAbout = () => {
  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0268AE]/10 to-white">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our  <span className="text-[#0268AE]">About</span>
          </motion.h1>
          <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>Premium beverage production and distribution</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-gray-700 mb-6" style={{ fontFamily: 'var(--font-primary)' }}>
            L'Antique Beverages Ltd is focused on beverage production, branding, and distribution, delivering quality drinks that meet both African and global standards.
          </p>
          <p className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>
            As part of GVANY, we combine international quality standards with local market expertise to deliver exceptional beverages.
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>Our <span className="text-[#0268AE]">Values</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Quality First', desc: 'Committed to international standards' },
              { icon: Users, title: 'Customer Focus', desc: 'Meeting market needs' },
              { icon: Award, title: 'Excellence', desc: 'Premium beverage production' }
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-[#E6F7FD] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#0289DC]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{value.title}</h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BeveragesAbout
