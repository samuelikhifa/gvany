import { motion } from 'framer-motion'
import { Ship, Plane, Package, Truck, Warehouse, FileCheck, Globe, Clock, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import LyxHero from './components/LyxHero'
import SEO from '@/components/SEO';
import { CTASection } from './components/CTASection'

const Home = () => {
  const services = [
    {
      icon: FileCheck,
      title: 'Customs Clearance',
      description: 'Expert customs brokerage and clearance services ensuring smooth cross-border trade.',
      link: '/custom-clearing/services'
    },
    {
      icon: Ship,
      title: 'Sea Freight',
      description: 'Comprehensive ocean freight solutions for bulk and containerized cargo worldwide.',
      link: '/custom-clearing/services'
    },
    {
      icon: Plane,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments.',
      link: '/custom-clearing/services'
    },
    {
      icon: Truck,
      title: 'Land Transport',
      description: 'Efficient road transport solutions across African borders and regions.',
      link: '/custom-clearing/services'
    },
    {
      icon: Warehouse,
      title: 'Warehousing',
      description: 'Secure storage and distribution facilities for your cargo needs.',
      link: '/custom-clearing/services'
    },
    {
      icon: Package,
      title: 'Freight Forwarding',
      description: 'End-to-end logistics management for seamless cargo movement.',
      link: '/custom-clearing/services'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times for customs clearance and freight forwarding'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Full compliance with international trade regulations and standards'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive partnerships across Africa and worldwide destinations'
    },
    {
      icon: TrendingUp,
      title: 'Cost Effective',
      description: 'Competitive rates without compromising on service quality'
    }
  ]


  return (
    <>
      <SEO
        title="Custom Clearing Services"
        description="Fast, reliable custom clearing and freight forwarding across Africa – LYX.gvany.com"
        canonical="/custom-clearing"
      />
      <div>
        <LyxHero page="home" />




        {/* About Preview Section */}
        <section className="section bg-gradient-to-br from-[#0188F4] to-[#0272CC] relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Excellence in Clearing & Forwarding
                </h2>
                <p
                  className="text-lg text-white/90 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Lyx Clearing & Forwarding Co. Ltd specializes in customs clearing and freight forwarding services, handling documentation and logistics to guarantee smooth cross-border trade.
                </p>
                <p
                  className="text-lg text-white/90 mb-8 leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  As a proud member of the GVANY family, we bring years of expertise and a commitment to excellence in every shipment.
                </p>
                <Link to="/custom-clearing/about">
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
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="card bg-white/10 backdrop-blur-sm p-6 text-white">
                    <Ship className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Sea Freight
                    </h4>
                    <p
                      className="text-sm text-white/80"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Global shipping
                    </p>
                  </div>

                  <div className="card bg-white/10 backdrop-blur-sm p-6 text-white mt-8">
                    <Plane className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Air Freight
                    </h4>
                    <p
                      className="text-sm text-white/80"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Fast delivery
                    </p>
                  </div>

                  <div className="card bg-white/10 backdrop-blur-sm p-6 text-white">
                    <FileCheck className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Customs
                    </h4>
                    <p
                      className="text-sm text-white/80"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Expert clearance
                    </p>
                  </div>

                  <div className="card bg-white/10 backdrop-blur-sm p-6 text-white mt-8">
                    <Truck className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Transport
                    </h4>
                    <p
                      className="text-sm text-white/80"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      Reliable delivery
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-5" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
                <Package className="w-4 h-4" />
                <span>What We Offer</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our <span className="text-gradient-primary">Services</span>
              </h2>
              <p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Comprehensive logistics solutions tailored to your business needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={service.link}>
                      <div className="card card-hover p-6 group">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#0188F4] to-[#0272CC] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3
                              className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0188F4] transition-colors"
                              style={{ fontFamily: 'var(--font-heading)' }}
                            >
                              {service.title}
                            </h3>
                          </div>
                        </div>
                        <p
                          className="text-gray-600 leading-relaxed"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Why Choose <span className="text-gradient-primary">Lyx</span>?
              </h2>
              <p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Your trusted partner for seamless logistics and customs solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E5F4FF] mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[#0188F4]" />
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-sm text-gray-600"
                      style={{ fontFamily: 'var(--font-primary)' }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>



        <CTASection page="home" />
      </div>
    </>
  )
}

export default Home