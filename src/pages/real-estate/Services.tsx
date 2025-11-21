import { motion } from 'framer-motion'
import { Building2, Key, Home, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
const  RealEstateServices = () => {
  const services = [
    {
      icon: Building2,
      title: 'Property Development',
      description: 'Residential and commercial developments across prime African locations',
      features: [
        'Residential projects',
        'Commercial spaces',
        'Mixed-use developments',
        'Quality construction'
      ]
    },
    {
      icon: Key,
      title: 'Sales & Rentals',
      description: 'Comprehensive property sales and rental services for all client needs',
      features: [
        'Property sales',
        'Rental services',
        'Lease management',
        'Market analysis'
      ]
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Professional management ensuring your investment maintains its value',
      features: [
        'Facility management',
        'Tenant relations',
        'Maintenance services',
        'Property oversight'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Expert guidance on real estate investments and market opportunities',
      features: [
        'Market insights',
        'Investment strategy',
        'Portfolio management',
        'ROI optimization'
      ]
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E56732]/10 to-white">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-4xl md:text-5xl font-bold mb-4" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our <span className="text-[#2C5333]">Services</span>
          </motion.h1>
          <p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#E56732] to-[#CC5128] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 
                    className="text-2xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-gray-600 mb-6"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li 
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2C5333]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm bg-gradient-to-br from-[#2C5333] to-[#1F3A24] text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Ready to Get Started?
            </h2>
            <p 
              className="text-lg text-white/90 mb-8"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Let's discuss your property needs today
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-[#E56732] text-white hover:bg-[#CC5128]"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default  RealEstateServices