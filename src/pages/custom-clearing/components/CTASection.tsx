
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

interface CTASectionProps {
  page: 'home' | 'about' | 'services' 
}

export const CTASection = ({ page }: CTASectionProps) => {
  const content = {
    home: {
      title: 'Ready to Streamline Your Logistics?',
      description: 'Get expert customs clearing and freight forwarding services tailored to your business needs',
      primaryButton: {
        text: 'Get a Quote',
        link: '/custom-clearing/contact',
        icon: ArrowRight
      },
      secondaryButton: {
        text: 'Our Services',
        link: '/custom-clearing/services',
        icon: ArrowRight
      }
    },
    about: {
      title: 'Partner With Us Today',
      description: 'Experience seamless customs clearing and reliable freight forwarding across Africa',
      primaryButton: {
        text: 'Contact Us',
        link: '/custom-clearing/contact',
        icon: Phone
      },
      secondaryButton: {
        text: 'View Services',
        link: '/custom-clearing/services',
        icon: ArrowRight
      }
    },
    services: {
      title: 'Need Our Services?',
      description: 'Contact our team to discuss your logistics and customs clearing requirements',
      primaryButton: {
        text: 'Get Started',
        link: '/custom-clearing/contact',
        icon: ArrowRight
      },
      secondaryButton: null
    },
  
  }

  const currentContent = content[page]
  const PrimaryIcon = currentContent.primaryButton.icon
  const SecondaryIcon = currentContent.secondaryButton?.icon

  return (
    <section className="section bg-gradient-to-br from-[#0188F4] via-[#0272CC] to-[#0188F4] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7A00] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="absolute inset-0 bg-pattern-dots opacity-20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
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

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center`}
          >
            <Link to={currentContent.primaryButton.link}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255, 122, 0, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FF7A00] to-[#E66D00] text-white px-8 py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(255,122,0,0.4)] transition-all duration-300 group"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span>{currentContent.primaryButton.text}</span>
                <PrimaryIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

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

