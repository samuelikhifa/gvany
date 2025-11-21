import { Briefcase, Target, Users, TrendingUp, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '@/components/SEO'

const AgroAlliedHome = () => {
  return (
    <>
      <SEO
        title="Agro-Allied & Agricultural Solutions | La Vie Est Belle – GVANY"
        description="Modern farming, agro-processing, inputs supply and value chain development across Africa."
        canonical="/agro-allied"
      />
      <div>
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-[#E56732] to-[#D14E1F] text-white">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <Briefcase className="w-12 h-12 mx-auto mb-4" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl sm:text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              La Vie Est Belle Farms
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg mb-8" style={{ fontFamily: 'var(--font-primary)' }}>
              Engaged in production, processing, and supply to support food sustainability and security.
            </motion.p>
            <Link to="/agro-allied/contact"><button className="btn bg-white text-[#E56732] hover:bg-gray-100">Get Started</button></Link>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Our <span className="text-[#DA9E1B]">Services</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Target, title: 'Crop Production', desc: 'Efficient cultivation and high-yield farming systems' },
                { icon: Users, title: 'Agro Processing', desc: 'Value-added processing for improved supply chains' },
                { icon: TrendingUp, title: 'Supply & Distribution', desc: 'Reliable delivery of farm products to markets' },
                { icon: Award, title: 'Food Security Support', desc: 'Solutions that strengthen sustainability and food access' }
              ].map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#FFF4EF] flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-[#E56732]" />
                    </div>
                    <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>{service.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section bg-gradient-to-br from-[#DA9E1B] to-[#C28915] text-white">
          <div className="container-custom text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Partner With La Vie Est Belle Farms</h2>
            <p className="text-lg mb-8" style={{ fontFamily: 'var(--font-primary)' }}>
              Join us in advancing sustainable agriculture and ensuring reliable food systems.
            </p>
            <Link to="/agro-allied/contact"><button className="btn bg-white text-[#DA9E1B] hover:bg-gray-100">Contact Us Today</button></Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default AgroAlliedHome
