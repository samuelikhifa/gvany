import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

interface CTASectionProps {
  page: 'home' | 'about' | 'services'
}

const CTASection = ({ page }: CTASectionProps) => {
  // Define content for each page
  const content = {
    home: {
      title: 'Ready to Transform Your Business?',
      description: 'Partner with GVANY and unlock the potential of the African market with our comprehensive solutions',
      primaryButton: {
        text: 'Get Started Today',
        link: '/contact',
        icon: ArrowRight
      },
      secondaryButton: {
        text: 'Explore Services',
        link: '/services',
        icon: ArrowRight
      }
    },
    about: {
      title: 'Let\'s Build Success Together',
      description: 'Join hands with Africa\'s trusted partner in sales, distribution, and logistics excellence',
      primaryButton: {
        text: 'Partner With Us',
        link: '/contact',
        icon: Phone
      },
      secondaryButton: {
        text: 'View Our Services',
        link: '/services',
        icon: ArrowRight
      }
    },
    services: {
      title: 'Ready to Get Started?',
      description: 'Contact us today and discover how our tailored solutions can drive your business growth across Africa',
      primaryButton: {
        text: 'Contact Us Now',
        link: '/contact',
        icon: ArrowRight
      },
      secondaryButton: null
    }
  }

  const currentContent = content[page]
  const PrimaryIcon = currentContent.primaryButton.icon
  const SecondaryIcon = currentContent.secondaryButton?.icon

  return (
    <section className="section bg-gradient-to-br from-[#01A5F9] via-[#0189D1] to-[#01A5F9] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E56732] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl animate-float" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {currentContent.title}
          </motion.h2>

          {/* Description */}
          {currentContent.description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              {currentContent.description}
            </motion.p>
          )}

          {/* Buttons Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 ${currentContent.secondaryButton ? 'justify-center' : 'justify-center'} items-center`}
          >
            {/* Primary Button */}
            <Link to={currentContent.primaryButton.link}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(229, 103, 50, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#E56732] to-[#D14E1F] text-white px-8 py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(229,103,50,0.4)] transition-all duration-300 group"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>{currentContent.primaryButton.text}</span>
                <PrimaryIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Secondary Button (only for home and about pages) */}
            {currentContent.secondaryButton && SecondaryIcon && (
              <Link to={currentContent.secondaryButton.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center gap-3 hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-lg group"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span>{currentContent.secondaryButton.text}</span>
                  <SecondaryIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            )}
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection