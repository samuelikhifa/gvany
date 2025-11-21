import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

interface WhoWeHelpProps {
  items: string[]
}

const WhoWeHelp = ({ items }: WhoWeHelpProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <div className="bg-secondary/20 p-3 rounded-full mr-4">
          <Users className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-primary">Who We Help</h2>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start"
          >
            <span className="text-secondary mr-3 text-xl font-bold">•</span>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default WhoWeHelp
