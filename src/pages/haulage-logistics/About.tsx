import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Award, Shield, Lightbulb, Heart,  Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import HLHero from './components/HLHero'
import gvan55 from '../../assets/gvan55.jpg';
const HaulageLogisticsAbout = () => {
  const coreValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality in every marketing campaign and distribution channel we manage',
      color: '#E03E7D'
    },
    {
      icon: Shield,
      title: 'Compliance',
      description: 'Operating with full adherence to industry regulations and ethical marketing standards',
      color: '#01A5F9'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge marketing technology and data analytics for optimal results',
      color: '#E03E7D'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Building lasting partnerships focused on your unique business objectives and growth',
      color: '#01A5F9'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working seamlessly with your team to achieve shared marketing and sales goals',
      color: '#E03E7D'
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven',
      description: 'Committed to delivering measurable ROI and sustainable business growth',
      color: '#01A5F9'
    }
  ]

  const whoWeServe = [
    {
      title: 'FMCG Brands',
      description: 'Fast-moving consumer goods requiring extensive distribution networks and brand visibility',
      icon: '🛒'
    },
    {
      title: 'Healthcare Companies',
      description: 'Pharmaceutical and medical device manufacturers needing compliant distribution',
      icon: '💊'
    },
    {
      title: 'Technology Firms',
      description: 'Tech companies seeking market penetration and channel partner development',
      icon: '💻'
    },
    {
      title: 'Retail Chains',
      description: 'Retailers looking to optimize merchandising and customer engagement strategies',
      icon: '🏪'
    },
    {
      title: 'Manufacturers',
      description: 'Industrial manufacturers requiring B2B marketing and distribution solutions',
      icon: '🏭'
    },
    {
      title: 'Startups & SMEs',
      description: 'Growing businesses needing strategic market entry and brand development',
      icon: '🚀'
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
    <div>
      {/* Hero Section */}
      <HLHero page="about" />

      {/* Company Overview */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E03E7D]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 badge badge-primary mb-6">
                <Target className="w-4 h-4" />
                <span>Our Story</span>
              </div>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Driving Growth Through <span className="text-gradient-primary">Strategic Marketing</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Adret Integrated Services Ltd</strong> is a proud member of the GVANY family, specializing in comprehensive marketing, sales, and distribution solutions across Africa.
                </p>
                <p>
                  Since our inception, we have helped brands navigate complex market dynamics, reach their target customers effectively, and achieve sustainable growth through data-driven strategies and robust distribution networks.
                </p>
                <p>
                  Our integrated approach combines strategic marketing planning, creative excellence, sales enablement, and compliance-first distribution to deliver measurable results for our clients across diverse industries.
                </p>
                <p>
                  We believe in building long-term partnerships, not just client relationships. Your success is our success, and we're committed to going beyond expectations to help you achieve your business objectives.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/haulage-logistics/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    Explore Our Services
                  </motion.button>
                </Link>
                <Link to="/haulage-logistics/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-outline-primary"
                  >
                    Get In Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Single Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full flex justify-center"
            >
              <motion.img
                src={gvan55}
                alt="Lyx Clearing & Forwarding"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="rounded-2xl shadow-lg w-full max-w-4xl object-cover"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-secondary mb-4">
              <Zap className="w-4 h-4" />
              <span>Our Direction</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vision & <span className="text-gradient-secondary">Mission</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card card-hover group"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E03E7D] to-[#C72965] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Vision
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  To be Africa's most trusted integrated marketing and distribution partner, recognized for delivering exceptional results, maintaining ethical standards, and driving sustainable growth for brands across the continent.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card card-hover group"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#01A5F9] to-[#0189D1] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>

                <h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Mission
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower brands with strategic marketing insights, innovative distribution solutions, and compliant operations that ensure effective customer reach, market penetration, and measurable business growth across African markets.
                </p>
              </div>
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
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Award className="w-4 h-4" />
              <span>What Drives Us</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Core <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and action we take
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="card card-hover"
                >
                  <div className="p-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-md"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: value.color }} />
                    </div>

                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {value.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-secondary mb-4">
              <Users className="w-4 h-4" />
              <span>Our Clients</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Who We <span className="text-gradient-secondary">Serve</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored marketing and distribution solutions for diverse industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whoWeServe.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E03E7D]/20 to-[#01A5F9]/20 flex items-center justify-center flex-shrink-0 text-2xl">
                  {client.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {client.title}
                  </h3>
                  <p className="text-sm text-gray-600">{client.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-sm bg-gradient-to-br from-[#E03E7D] to-[#C72965] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-diagonal opacity-10" />

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
                Ready to Grow Your Brand?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Partner with Adret for strategic marketing solutions that deliver results
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/haulage-logistics/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white text-[#E03E7D] hover:bg-gray-100 w-full sm:w-auto"
                  >
                    Start Your Journey
                  </motion.button>
                </Link>
                <Link to="/haulage-logistics/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#E03E7D] w-full sm:w-auto"
                  >
                    Explore Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HaulageLogisticsAbout