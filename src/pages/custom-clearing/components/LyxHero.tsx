import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Package, Ship, Plane, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import gva9 from '../../../assets/gva9.webp';
import gva6 from '../../../assets/gva6.webp';
import gva4 from '../../../assets/gva4.webp';

interface HeroProps {
  page: 'home' | 'about' | 'services' | 'contact'
}

const LyxHero = ({ page }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Home page slider content
  const slides = [
    {
      title: 'Your Trusted Partner in Global Logistics',
      subtitle: 'Seamless customs clearing and freight forwarding solutions across Africa and beyond',
      cta: 'Get Started',
      link: '/custom-clearing/contact',
      icon: Ship,
      image: gva6, // Placeholder for actual image
    },
    {
      title: 'Fast, Reliable Freight Forwarding',
      subtitle: 'Air, sea, and land transport solutions tailored to your business needs',
      cta: 'Our Services',
      link: '/custom-clearing/services',
      icon: Plane,
      image: gva9,
    },
    {
      title: 'Expert Customs Clearance Services',
      subtitle: 'Navigate complex regulations with confidence and speed',
      cta: 'Learn More',
      link: '/custom-clearing/about',
      icon: Package,
      image: gva4,
    }
  ]

  // Auto-slide effect for home page
  useEffect(() => {
    if (page === 'home') {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [page])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Content for different pages
  const pageContent = {
    about: {
      title: 'About Lyx Clearing & Forwarding',
      subtitle: 'Excellence in customs clearing and freight forwarding since our inception',
      badge: 'Who We Are'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive logistics solutions for your business growth',
      badge: 'What We Offer'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to streamline your logistics? Contact us today',
      badge: 'Contact Us'
    }
  }

  // Home page with slider
  if (page === 'home') {
    return (
      <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-start px-6 md:px-16">
        {/* Slider Background */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            {/* Background Image Placeholder */}
            <div className="absolute inset-0">
              {/* Replace with actual image: */}
              <img src={slides[currentSlide].image} alt="" className="w-full h-full object-cover object-top" />
            </div>
            
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#222222]/80 via-[#0272CC]/70 to-transparent" /> */}
            
            {/* Animated Pattern */}
            <div className="absolute inset-0 bg-pattern-dots opacity-10" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative h-full  flex items-center z-10">
          <div className="container-custom">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF7A00] mb-6"
                  >
                    {(() => {
                      const Icon = slides[currentSlide].icon
                      return <Icon className="w-8 h-8 text-white" />
                    })()}
                  </motion.div>

                  {/* Title */}
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {slides[currentSlide].title}
                  </h1>

                  {/* Subtitle */}
                  <p 
                    className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
                    style={{ fontFamily: 'var(--font-primary)' }}
                  >
                    {slides[currentSlide].subtitle}
                  </p>

                  {/* CTA Button */}
                  <Link to={slides[currentSlide].link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary inline-flex items-center gap-3 text-lg"
                    >
                      <span>{slides[currentSlide].cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container-custom">
            <div className="flex items-center justify-between">
              {/* Dots */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-12 bg-[#FF7A00]' 
                        : 'w-2 bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 flex items-center justify-center transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </div>
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
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0188F4] via-[#0272CC] to-[#222222]" />
      <div className="absolute inset-0 bg-pattern-dots opacity-10" />
      
      {/* Animated Shapes */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#FF7A00]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 w-full py-20 md:py-24 mt-8">
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
              <div className="w-2 h-2 bg-[#FF7A00] rounded-full animate-pulse" />
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
              className="mt-8 h-1 w-24 bg-gradient-to-r from-[#FF7A00] to-transparent rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LyxHero