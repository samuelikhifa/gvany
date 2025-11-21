
// import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp  } from 'lucide-react'
import { Link } from 'react-router-dom'

import gvany2 from '../../../assets/gvany2.webp';

interface HeroProps {
  page: 'home' | 'about' | 'services'
}

const HLHero = ({ page }: HeroProps) => {


  

 

  // Content for different pages
  const pageContent = {
    about: {
      title: 'About Adret Integrated Services',
      subtitle: 'Pioneering marketing, sales, and distribution solutions across Africa',
      badge: 'Who We Are'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions designed to grow your business and expand your market reach',
      badge: 'What We Offer'
      
    }
  }

  // Home page with slider
if (page === 'home') {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-start px-6 md:px-16">

      {/* Static Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1.3 }}
        transition={{ duration: 3 }}
        className="absolute inset-0"
      >
        <img
          src={gvany2}   // <--- CHANGE THIS TO ANY IMAGE YOU WANT
          alt="hero"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10 mt-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#01A5F9] mb-6"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Driving Sales Excellence Across Africa
              </h1>

              {/* Subtitle */}
              <p
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-primary)' }}
              >
                Transform your market presence with strategic sales and distribution solutions
              </p>

              {/* CTA Button */}
              <Link to="/haulage-logistics/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary ml-2 inline-flex items-center gap-3 text-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>

    </section>
  )
}

  // Static hero for other pages
  const content = pageContent[page]
  
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E03E7D] via-[#C72965] to-[#4A4A4A]" />
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      
      {/* Animated Shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#01A5F9]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 w-full py-20 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            >
              <div className="w-2 h-2 bg-[#01A5F9] rounded-full animate-pulse" />
              <span 
                className="text-white text-sm font-semibold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {content.badge}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {content.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              {content.subtitle}
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 h-1 w-24 bg-gradient-to-r from-[#01A5F9] to-transparent rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HLHero


