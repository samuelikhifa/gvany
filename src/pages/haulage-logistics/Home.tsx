import { motion } from 'framer-motion'
import { TrendingUp, Target, Users, BarChart3, ShoppingCart, Megaphone, ArrowRight, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import HLHero from './components/HLHero'
import { CTASection } from './components/CTASection'
import SEO from '@/components/SEO'

const HaulageLogisticsHome = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Marketing Strategy & Planning',
      description: 'Data-driven marketing strategies that position your brand for success in competitive markets.',
      color: '#E03E7D',
      features: ['Market Research', 'Brand Positioning', 'Campaign Planning']
    },

    {
      icon: Target,
      title: 'Brand Development',
      description: 'Create powerful brand identities that resonate with your target audience and drive loyalty.',
      color: '#01A5F9',
      features: ['Brand Identity', 'Visual Design', 'Brand Guidelines']
    },
    {
      icon: ShoppingCart,
      title: 'Sales & Distribution',
      description: 'Optimize your sales channels and distribution networks for maximum market penetration.',
      color: '#E03E7D',
      features: ['Channel Strategy', 'Partner Network', 'Sales Optimization']
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Leverage digital channels to reach and engage your customers effectively across platforms.',
      color: '#01A5F9',
      features: ['Social Media', 'Content Marketing', 'SEO & SEM']
    },
    {
      icon: Users,
      title: 'Sales Enablement',
      description: 'Equip your sales team with tools, training, and resources to close deals efficiently.',
      color: '#E03E7D',
      features: ['Sales Training', 'CRM Setup', 'Performance Tracking']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Transform data into actionable insights that drive business growth and optimization.',
      color: '#01A5F9',
      features: ['Data Analysis', 'Market Intelligence', 'ROI Tracking']
    }
  ]




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      <SEO
        title="Haulage & Logistics Solutions | Adret – GVANY"
        description="End-to-end haulage, transportation and supply chain logistics across Africa. On time, every time."
        canonical="/haulage-logistics"
      />
      <div>
        {/* Hero Section */}
        <HLHero page="home" />


        {/* About Preview */}
        <section className="section  bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E03E7D]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />

          <div className="container-custom relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 badge badge-primary mb-6">
                  <Award className="w-4 h-4" />
                  <span>Who We Are</span>
                </div>

                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Your Strategic <span className="text-gradient-primary">Marketing Partner</span>
                </h2>

                <p
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  <strong className="text-gray-900">Adret Integrated Services Ltd</strong> specializes in marketing, sales, and distribution solutions. As a proud member of the GVANY family, we help clients reach their customers effectively while maintaining full compliance with industry standards.
                </p>

                <p
                  className="text-lg text-gray-600 mb-8 leading-relaxed"
                  style={{ fontFamily: 'var(--font-primary)' }}
                >
                  Our integrated approach combines strategic marketing, creative excellence, and robust distribution networks to deliver measurable results for brands across Africa.
                </p>

                <Link to="/haulage-logistics/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    <span>Discover Our Story</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Visual Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card card-gradient-primary p-6 text-white"
                  >
                    <Megaphone className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Marketing
                    </h4>
                    <p className="text-sm text-white/80">
                      Strategic campaigns
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card card-gradient-secondary p-6 text-white mt-8"
                  >
                    <Target className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Branding
                    </h4>
                    <p className="text-sm text-white/80">
                      Identity design
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card card-gradient-secondary p-6 text-white"
                  >
                    <ShoppingCart className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Sales
                    </h4>
                    <p className="text-sm text-white/80">
                      Channel optimization
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="card card-gradient-primary p-6 text-white mt-8"
                  >
                    <BarChart3 className="w-10 h-10 mb-3" />
                    <h4
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Analytics
                    </h4>
                    <p className="text-sm text-white/80">
                      Data insights
                    </p>
                  </motion.div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E03E7D]/10 rounded-full blur-3xl animate-pulse-slow" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#01A5F9]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section pt-0 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern-dots opacity-5" />

          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 badge badge-secondary mb-4">
                <TrendingUp className="w-4 h-4" />
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
                Comprehensive marketing and distribution solutions for business growth
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="card card-hover group"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}08 0%, ${service.color}03 100%)`
                    }}
                  >
                    <div className="p-6">
                      <motion.div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md"
                        style={{ backgroundColor: service.color }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <h3
                        className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E03E7D] transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {service.title}
                      </h3>

                      <p
                        className="text-gray-600 leading-relaxed mb-4"
                        style={{ fontFamily: 'var(--font-primary)' }}
                      >
                        {service.description}
                      </p>

                      {/* Feature tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${service.color}15`,
                              color: service.color
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA to Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/haulage-logistics/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-primary"
                >
                  View All Services
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>



        {/* CTA Section */}
        <CTASection page="home" />
      </div>
    </>
  )
}

export default HaulageLogisticsHome