import { motion } from 'framer-motion'

interface ServiceHeroProps {
  title: string
  subtitle: string
  image?: string
}

const ServiceHero = ({ title, subtitle, image }: ServiceHeroProps) => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-primary-dark">
      {/* Background Image Overlay */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceHero
