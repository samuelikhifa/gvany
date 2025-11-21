import { motion } from 'framer-motion'
import {
  Award, Users, Target, TrendingUp, Shield, Lightbulb,
  Heart, Handshake, Building2,
  ArrowRight, Star
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import gvan0 from '../assets/gvan0.webp';

const About = () => {
  const coreValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering superior quality in every project and service we undertake',
      color: '#01A5F9'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building trust through transparency, ethical conduct, and honest dealings',
      color: '#E56732'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing modern solutions and creative approaches to drive business transformation',
      color: '#956582'
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'Growing together with our clients, fostering lasting relationships based on mutual success',
      color: '#10B981'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Dedicated to continuous growth and profitability while recognizing diverse business needs',
      color: '#F59E0B'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Investing in our African workforce through training and capacity building programs',
      color: '#6366F1'
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
      <Hero page="about" />

      {/* Company Overview */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#01A5F9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E56732]/5 rounded-full blur-3xl" />

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
                <Building2 className="w-4 h-4" />
                <span>Our Story</span>
              </div>

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Who We <span className="text-gradient-primary">Are</span>
              </h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">GVANY Sales and Distribution Company Limited</strong> is a limited liability company duly registered with the Corporate Affairs Commission of Nigeria. We are a leading provider of comprehensive business solutions across Africa.
                </p>
                <p>
                  With strategic presence in Nigeria, Kenya, Uganda, Ghana, and Ivory Coast, we have built a reputation for excellence, reliability, and innovation in connecting businesses with opportunities across the continent.
                </p>
                <p>
                  Our integrated approach combines marketing expertise, logistics capabilities, and strategic consulting to deliver value at every touchpoint. We operate with a predominantly African workforce, committed to training and capacity building.
                </p>
                <p>
                  At GVANY, our strength is rooted in the philosophy of providing customers with much more than just products and services - we ensure owners, operators, and customers benefit from expert advice before decisions and comprehensive support after.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    <span>Our Services</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                <Link to="/contact">
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
            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={gvan0}
                  alt="Description of your image"

                  className="w-full h-auto object-cover"
                />

                {/* Optional overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Decorative Elements (optional - keep if you want the glow effects) */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#01A5F9]/10 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E56732]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-sm bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 badge badge-primary mb-4">
              <Target className="w-4 h-4" />
              <span>Our Direction</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Vision & <span className="text-gradient-secondary">Mission</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#01A5F9]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="p-8 md:p-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#01A5F9] to-[#33B6FA] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Vision
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the leader in our chosen field of business, ensuring that great value is added to owners, operators, and customer's interests across Africa and beyond.
                </p>

                
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card card-hover group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E56732]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              <div className="p-8 md:p-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#E56732] to-[#ED8559] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Our Mission
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  To deliver quality projects and products while rendering the best services to all our customers across the globe through professionalism, continuous growth, and recognition of diverse business needs.
                </p>

                
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 badge badge-secondary mb-4">
              <Star className="w-4 h-4" />
              <span>What Drives Us</span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Core <span className="text-gradient-accent">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card card-hover group"
                >
                  <div className="p-6 md:p-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${value.color}20` }}
                    >
                      <Icon className="h-7 w-7" style={{ color: value.color }} />
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


      {/* CTA Section */}
      <section className="section-sm bg-gradient-to-br from-[#E56732] to-[#D14E1F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ready to Partner With Us?
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Join hundreds of businesses trusting GVANY for their African operations
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white text-[#E56732] hover:bg-gray-100 w-full sm:w-auto"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-white/10 border-2 border-white text-white hover:bg-white hover:text-[#E56732] w-full sm:w-auto"
                  >
                    View Our Services
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

export default About