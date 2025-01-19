'use client'
import { motion } from 'framer-motion'
import { Settings, PenToolIcon as Tool, Users } from 'lucide-react'

const features = [
  { icon: Settings, title: 'Precision Engineering', description: 'Every part is crafted to exacting standards for optimal performance.' },
  { icon: Tool, title: 'Quality Materials', description: 'We use only the highest grade materials for durability and reliability.' },
  { icon: Users, title: 'Expert Support', description: 'Our team of specialists is always ready to assist with your technical needs.' },
]

export default function AboutUs() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
            About Philotex Enterprise
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
          Philotex Enterprise Auto Parts is committed to delivering high-performance components 
            that push the boundaries of automotive engineering. Our passion for precision 
            and power drives everything we do.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg shadow-lg border border-red-600"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <feature.icon size={48} className="text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

