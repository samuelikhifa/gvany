import { Target, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const  AgroAlliedAbout = () => {
  return (
    <div>
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#E56732]/10 to-white">
        <div className="container-custom text-center">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
             Our About 
          </motion.h1>
          <p className="text-lg text-gray-600" style={{ fontFamily: 'var(--font-primary)' }}>
            An agro-allied business committed to sustainable food production
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-gray-700 mb-6" style={{ fontFamily: 'var(--font-primary)' }}>
            La Vie Est Belle Farms is an agro-allied enterprise focused on agricultural production, processing, and supply. We are dedicated to supporting food sustainability and security through efficient and responsible farming systems.
          </p>
          <p className="text-gray-700" style={{ fontFamily: 'var(--font-primary)' }}>
            Our operations integrate modern agricultural practices, value-chain processing, and reliable distribution to ensure quality food products that contribute to stronger and more resilient communities.
          </p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>
            Our <span className="text-[#DA9E1B]">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Excellence', desc: 'Delivering high-quality agricultural production and processes' },
              { icon: Users, title: 'Partnership', desc: 'Collaborating with farmers, suppliers, and communities for shared growth' },
              { icon: Award, title: 'Integrity', desc: 'Maintaining transparent, ethical, and responsible agricultural practices' }
            ].map((value, i) => {
              const Icon = value.icon
              return (
                <div key={i} className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-[#FFF4EF] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#E56732]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-primary)' }}>
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}



export default AgroAlliedAbout
