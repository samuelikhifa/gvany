// import SEO from '@/components/SEO'
import { motion } from 'framer-motion'
import { Building2, Home, Key, TrendingUp, Shield, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../../components/SEO';
const RealEstateHome = () => {
  const services = [
    {
      icon: Building2,
      title: 'Property Development',
      description: 'Residential and commercial developments across prime African locations',
      color: '#E56732'
    },
    {
      icon: Key,
      title: 'Sales & Rentals',
      description: 'Comprehensive property sales and rental services for all client needs',
      color: '#2C5333'
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Professional management ensuring your investment maintains its value',
      color: '#E56732'
    },
    {
      icon: TrendingUp,
      title: 'Investment Advisory',
      description: 'Expert guidance on real estate investments and market opportunities',
      color: '#2C5333'
    }
  ]



  const features = [
    {
      icon: Shield,
      title: 'Trusted Partner',
      description: 'Part of the established GVANY family of companies'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium properties meeting the highest standards'
    },
    {
      icon: TrendingUp,
      title: 'Market Expertise',
      description: 'Deep knowledge of African real estate markets'
    }
  ]

  return (
    <>
      <SEO
        title="Luxury Real Estate & Property Development | L’Antique – GVANY"
        description="Premium residential and commercial real estate across Africa. Elegance, prestige, timeless value."
        canonical="/real-estate"
      />
        <div>
          {/* Hero Section */}
          <section className="relative pt-20 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-[#E56732] via-[#CC5128] to-[#2C5333] text-white overflow-hidden">
            <div className="absolute inset-0 bg-pattern-dots opacity-10" />

            <div className="container-custom relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-semibold">Sekiando Allied Solutions Ltd</span>
                  </div>

                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Premium Property Solutions<br />Across Africa
                  </h1>

                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Property development, sales, management, and rentals tailored to diverse client needs
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">


                    <Link to="/real-estate/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#E56732] w-full sm:w-auto"
                      >
                        Contact Us
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>



          {/* About Preview */}
          <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#E56732]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2C5333]/5 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-flex items-center gap-2 badge badge-[#2C5333] mb-6">
                    <Building2 className="w-4 h-4" />
                    <span>Who We Are</span>
                  </div>

                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Your Trusted <span className="text-[#2C5333]">Real Estate Partner</span>
                  </h2>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    <strong className="text-gray-900">Sekiando Allied Solutions Ltd</strong> is a proud member of the GVANY family, specializing in comprehensive real estate services across Africa.
                  </p>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    From property development to management, sales, and rentals, we provide tailored solutions that meet the diverse needs of our clients while maintaining the highest standards of quality and service.
                  </p>

                  <Link to="/real-estate/about">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary"
                    >
                      Learn More About Us
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <motion.div
                          key={feature.title}
                          whileHover={{ scale: 1.05 }}
                          className={`card p-6 ${index === 1 ? 'mt-8' : ''}`}
                        >
                          <Icon className="w-10 h-10 text-[#E56732] mb-3" />
                          <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="section bg-white">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 badge badge-secondary mb-4">
                  <Home className="w-4 h-4" />
                  <span>Our Services</span>
                </div>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Comprehensive <span className="text-gradient-secondary">Real Estate Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  From development to management, we handle all your property needs
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="card card-hover"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}08 0%, ${service.color}03 100%)`
                      }}
                    >
                      <div className="p-6">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                          style={{ backgroundColor: service.color }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center mt-12"
              >
                <Link to="/real-estate/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn text-[#E56732]"
                  >
                    View All Services
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-sm bg-gradient-to-br from-[#2C5333] to-[#1F3A24] text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-dots opacity-10" />

            <div className="container-custom relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Ready to Find Your Dream Property?
                  </h2>
                  <p className="text-lg text-white/90 mb-8">
                    Let us help you discover the perfect space for your needs
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/real-estate/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn bg-[#E56732] text-white hover:bg-[#CC5128] w-full sm:w-auto"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                    </Link>

                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </>
      )
}


export default RealEstateHome
