import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, TrendingUp, BarChart, Truck, Plane, Sprout, Building2, Briefcase, Package } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  shortDesc?: string
  logo: string
  color: string
  link: string
  features?: string[]
  stats?: Record<string, string>
  index?: number
}

const ServiceCard = ({ 
  title, 
  description, 
  shortDesc,
  logo, 
  color, 
  link, 
  features = [],
  stats = {},
  index = 0 
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Icon fallback based on service type
  const getFallbackIcon = () => {
    const iconMap = {
      'Marketing': <BarChart className="w-8 h-8" />,
      'Haulage': <Truck className="w-8 h-8" />,
      'Custom': <Plane className="w-8 h-8" />,
      'Agro': <Sprout className="w-8 h-8" />,
      'Real Estate': <Building2 className="w-8 h-8" />,
      'Consultancy': <Briefcase className="w-8 h-8" />
    }

    for (const [key, icon] of Object.entries(iconMap)) {
      if (title.includes(key)) return icon
    }
    return <Package className="w-8 h-8" />
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1
      }
    }
  }

  const contentVariants = {
    initial: { opacity: 1 },
    hover: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const detailsVariants = {
    initial: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    hover: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.3
      }
    }
  }

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ 
          y: -12,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative h-[400px] rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: `linear-gradient(135deg, ${color}15 0%, ${color}05 100%)`
        }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`
          }}
        />

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Card Content Container */}
        <div className="relative h-full p-8 flex flex-col">
          {/* Logo/Icon Section */}
          <motion.div
            animate={{
              scale: isHovered ? 0.9 : 1,
              y: isHovered ? -10 : 0
            }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className="relative">
              {!imageError && logo ? (
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg"
                  style={{ 
                    backgroundColor: `${color}20`,
                    border: `2px solid ${color}40`
                  }}
                >
                  <img
                    src={logo}
                    alt={`${title} icon`}
                    className="w-full h-full object-contain p-3"
                    onError={() => setImageError(true)}
                  />
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${color}20` }}
                >
                  {getFallbackIcon()}
                </motion.div>
              )}

              {/* Animated Ring */}
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.3, 1] : 1,
                  opacity: isHovered ? [0.5, 0, 0.5] : 0
                }}
                transition={{
                  duration: 2,
                  repeat: isHovered ? Infinity : 0
                }}
                className="absolute inset-0 rounded-2xl"
                style={{ 
                  border: `3px solid ${color}`,
                  filter: 'blur(2px)'
                }}
              />
            </div>
          </motion.div>

          {/* Default Content */}
          <motion.div
            variants={contentVariants}
            animate={isHovered ? "hover" : "initial"}
            className="flex-1 relative z-10"
          >
            <motion.h3 
              className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300"
              style={{ 
                fontFamily: 'var(--font-heading)',
                color: isHovered ? 'white' : color
              }}
            >
              {title}
            </motion.h3>
            
            <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
              {description}
            </p>

            {/* Stats Preview */}
            {Object.keys(stats).length > 0 && (
              <div className="flex gap-4 mb-4">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="group-hover:text-white/90 transition-colors">
                    <div className="text-xl font-bold" style={{ color: isHovered ? 'white' : color }}>
                      {String(value)}
                    </div>
                    <div className="text-xs text-gray-500 group-hover:text-white/70 capitalize">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Hover Details Content */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                variants={detailsVariants}
                initial="initial"
                animate="hover"
                exit="initial"
                className="absolute inset-0 p-8 flex flex-col justify-center z-20"
              >
                <h3 
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title}
                </h3>

                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {shortDesc || description}
                </p>

                {/* Features List */}
                {features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {features.slice(0, 4).map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 text-white/90 text-sm"
                      >
                        <div 
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 text-white font-semibold"
                >
                  <span>Learn More</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action - Always Visible */}
          <motion.div 
            className="relative z-30 flex items-center justify-between mt-auto pt-4"
            animate={{
              y: isHovered ? -50 : 0,
              opacity: isHovered ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            <span 
              className="text-sm font-semibold"
              style={{ color }}
            >
              View Service
            </span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${color}20` }}
            >
              <ArrowRight className="w-5 h-5" style={{ color }} />
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          animate={{
            boxShadow: isHovered 
              ? `0 0 0 2px ${color}, 0 20px 40px -10px ${color}60`
              : '0 0 0 0px transparent'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Shine Effect on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 0.5, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              style={{ skewX: -20 }}
            />
          )}
        </AnimatePresence>

        {/* Corner Badge */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center z-20"
          style={{ 
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : `${color}20`,
            backdropFilter: isHovered ? 'blur(10px)' : 'none'
          }}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, 180, 360] : 0
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          <TrendingUp 
            className="w-6 h-6" 
            style={{ color: isHovered ? 'white' : color }} 
          />
        </motion.div>
      </motion.div>
    </a>
  )
}

export default ServiceCard
