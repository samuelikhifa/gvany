import { motion } from 'framer-motion'
import { Target, Award, Users, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const  RealEstateAbout = () => {
  const values = [
    { icon: Award, title: 'Quality', description: 'Premium properties meeting highest standards' },
    { icon: Shield, title: 'Trust', description: 'Transparent dealings and reliable service' },
    { icon: Users, title: 'Client Focus', description: 'Tailored solutions for diverse needs' },
    { icon: TrendingUp, title: 'Growth', description: 'Building wealth through real estate' }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#2C5333] to-[#1F3A24] text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              About <span className="text-[#E56732]">Sekiando</span>
            </h1>
            <p className="text-lg text-white/90">Building trust through premium real estate</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trusted <span className="text-[#2C5333]">Real Estate Partner</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                <strong className="text-gray-900">Sekiando Allied Solutions Ltd</strong> is part of the GVANY family, specializing in comprehensive real estate services across Africa.
              </p>
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#E56732] to-[#CC5128] flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Africa's leading provider of premium real estate solutions, recognized for quality, integrity, and client-focused service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#2C5333] to-[#1F3A24] flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional real estate services through property development, management, sales, and rentals tailored to client needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Core <span className="text-gradient-secondary">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 text-center hover:-translate-y-2 transition-transform"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E56732]/10 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E56732]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm bg-gradient-to-br from-[#E56732] to-[#CC5128] text-white">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us Today</h2>
            <p className="text-lg mb-8 text-white/90">Experience excellence in real estate</p>
            <Link to="/contact">
              <button className="btn bg-white text-[#E56732] hover:bg-gray-100">
                Get Started
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



export default RealEstateAbout
