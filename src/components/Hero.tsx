import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Truck, Building2, Briefcase, Wheat, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import gva7 from '../assets/gva7.webp';
import gvany1 from '../assets/gvany1.webp';
import gv8 from '../assets/gv8.webp';
import gva8 from '../assets/gva8.webp';
import gv1 from '../assets/gv1.webp';
import gv5 from '../assets/gv5.webp';
import gv6 from '../assets/gv6.webp';
import gg from '../assets/gg.webp';

// Hero content configuration for different pages
const heroContent = {
  home: {
    title: "Adding Value",
    subtitle: "Across Africa",
    description: "Your trusted partner in marketing, distribution, logistics, and business excellence across the African continent.",
    buttons: [
      { text: "Explore Our Services", to: "/services", primary: true, icon: ArrowRight },
      { text: "Get In Touch", to: "/contact", primary: false }
    ],
    hasSlider: true,
    gradient: "from-[#01A5F9] via-[#0189D1] to-[#016FA3]",
    backgroundImage: gva7,
  },
  about: {
    title: "Our Story",
    subtitle: "Trust, Dependability, Professionalism",
    description: "Committed to delivering quality projects and services across Nigeria, Kenya, Uganda, Ghana, and Ivory Coast.",
    buttons: [
      // { text: "Meet Our Team", to: "/about#team", primary: true },
      { text: "Our Values", to: "/about#values", primary: false }
    ],
    hasSlider: false,
    backgroundImage: gv6,
    gradient: "from-[#E56732] via-[#D14E1F] to-[#B83D15]"
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive Solutions for Your Business",
    description: "From logistics to real estate, we provide integrated services that drive growth and efficiency.",
    buttons: [
      { text: "View All Services", to: "/services", primary: true },
      { text: "Request Quote", to: "/contact", primary: false }
    ],
    hasSlider: false,
    gradient: "from-[#956582] via-[#7A4F69] to-[#5F3D52]",
    backgroundImage: gv5,
  },

  contact: {
    title: "Let's Connect",
    subtitle: "We're Here to Help",
    description: "Reach out to us for inquiries, partnerships, or to learn more about our services.",
    buttons: [
      { text: "Send Message", to: "/contact#form", primary: true }
    ],
    hasSlider: false,
    gradient: "from-[#0189D1] via-[#01A5F9] to-[#33B6FA]",
    backgroundImage: gg,
  }
}

// Image slider data for homepage
const sliderImages = [
  {
    id: 1,
    url: gva7,
    alt: "Logistics and Supply Chain",
    // caption: "Efficient Supply Chain Solutions",
    fallback: "linear-gradient(135deg, #01A5F9 0%, #0189D1 100%)"
  },
  {
    id: 2,
    url: gv8,
    alt: "Agro-Allied Services",
    // caption: "Sustainable Agriculture",
    fallback: "linear-gradient(135deg, #10B981 0%, #059669 100%)"
  },
  {
    id: 3,
    url: gvany1,
    alt: "Real Estate Development",
    // caption: "Premium Real Estate",
    fallback: "linear-gradient(135deg, #E56732 0%, #D14E1F 100%)"
  },
  {
    id: 4,
    url: gva8,
    alt: "Business Consultancy",
    // caption: "Expert Consultancy Services",
    fallback: "linear-gradient(135deg, #956582 0%, #7A4F69 100%)"
  },
  {
    id: 5,
    url: gv1,
    alt: "Marketing and Distribution",
    // caption: "Nationwide Distribution Network",
    fallback: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)"
  }
]

type HeroPage = 'home' | 'about' | 'services'  | 'contact'

const Hero = ({ page = 'home' }: { page?: HeroPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoadError, setImageLoadError] = useState<Record<number, boolean>>({})

  const content = heroContent[page as keyof typeof heroContent] || heroContent.home
  const { title, subtitle, description, buttons, hasSlider, gradient, backgroundImage } = content

  // Auto-play slider
  useEffect(() => {
    if (hasSlider && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [hasSlider, isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const handleImageError = (imageId: number) => {
    setImageLoadError((prev) => ({ ...prev, [imageId]: true }))
  }

  return (
 <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">


      {/* Background Layer */}
      {hasSlider ? (
        // Slider Background for Home
        <div className="absolute inset-0 z-0 object-top">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 2, scale: 1 }}
              exit={{ opacity: 0, scale: 1.7 }}
              transition={{ duration: 1.7 }}
              className="absolute inset-0"
            >
              {imageLoadError[sliderImages[currentSlide].id] ? (
                <div 
                  className="w-full h-full"
                  style={{ background: sliderImages[currentSlide].fallback }}
                />
              ) : (
                <img
                  src={sliderImages[currentSlide].url}
                  alt={sliderImages[currentSlide].alt}
                  className="w-full h-full object-cover object-top"
                  onError={() => handleImageError(sliderImages[currentSlide].id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {/* Dot Indicators */}
            <div className="flex items-center gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-[#E56732]'
                      : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors ml-2"
              aria-label={isAutoPlaying ? 'Pause slider' : 'Play slider'}
            >
              {isAutoPlaying ? (
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-white" />
                  <div className="w-0.5 h-3 bg-white" />
                </div>
              ) : (
                <Play className="w-3 h-3 text-white ml-0.5" />
              )}
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slide Caption */}
          <motion.div
            key={`caption-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-20 md:bottom-24 left-4 md:left-8 z-20"
          >
            {/* <div className="badge badge-secondary text-sm md:text-base px-4 py-2">
              {sliderImages[currentSlide].caption}
            </div> */}
          </motion.div>
        </div>
      ) : (
        // Static Background for Other Pages
        <div className="absolute inset-0 z-0">
          {backgroundImage ? (
            <>
              <img
                src={backgroundImage}
                alt={`${page} hero background`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.nextSibling) {
                    (target.nextSibling as HTMLElement).style.display = 'block'
                  }
                }}
              />
              <div className={`hidden absolute inset-0 bg-gradient-to-br ${gradient}`} />
              <div className="absolute inset-0 bg-black/60" />
            </>
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          )}
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {/* Breadcrumb Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block mb-6"
            >
              <div className="badge glass text-white border-white/30 text-sm">
                Welcome to GVANY
              </div>
            </motion.div>

            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {title}
              <br />
              <span className="text-[#E56732] text-shadow-lg">
                {subtitle}
              </span>
            </h1>

            <p 
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 ">
              {buttons.map((button: any, index: number) => {
                const Icon = button.icon
                return button.primary ? (
                  <Link key={index} to={button.to}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-secondary w-full sm:w-auto group"
                    >
                      <span>{button.text}</span>
                      {Icon && <Icon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                    </motion.button>
                  </Link>
                ) : (
                  <Link key={index} to={button.to}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-outline-primary bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#01A5F9] w-full sm:w-auto"
                    >
                      {button.text}
                    </motion.button>
                  </Link>
                )
              })}
            </div>

        
          </motion.div>

          {/* Image/Visual Content (Only for Home) */}
          {hasSlider && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#E56732]/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#01A5F9]/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              {/* Feature Cards */}
              <div className="relative grid grid-cols-2 gap-4">
  <motion.div
    whileHover={{ y: -5 }}
    className="card glass p-6 hover-glow-primary"
  >
    <Truck className="w-10 h-10 text-white mb-3" />
    <h3 className="font-bold text-white mb-2">Logistics</h3>
    <p className="text-gray-300 text-sm">Efficient supply chain solutions</p>
  </motion.div>
  
  <motion.div
    whileHover={{ y: -5 }}
    className="card glass p-6 hover-glow-secondary mt-8"
  >
    <Wheat className="w-10 h-10 text-white mb-3" />
    <h3 className="font-bold text-white mb-2">Agro-Allied</h3>
    <p className="text-gray-300 text-sm">Sustainable agriculture</p>
  </motion.div>
  
  <motion.div
    whileHover={{ y: -5 }}
    className="card glass p-6 hover-glow-primary"
  >
    <Building2 className="w-10 h-10 text-white mb-3" />
    <h3 className="font-bold text-white mb-2">Real Estate</h3>
    <p className="text-gray-300 text-sm">Premium properties</p>
  </motion.div>
  
  <motion.div
    whileHover={{ y: -5 }}
    className="card glass p-6 hover-glow-secondary mt-8"
  >
    <Briefcase className="w-10 h-10 text-white mb-3" />
    <h3 className="font-bold text-white mb-2">Consultancy</h3>
    <p className="text-gray-300 text-sm">Expert business advice</p>
  </motion.div>
</div>

            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/60 text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-1 h-2 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero