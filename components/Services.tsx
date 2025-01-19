'use client'
import { motion } from 'framer-motion'
import { Settings, Truck, Headphones, PenToolIcon as Tool } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  { name: 'Custom Installation', icon: Settings, description: 'Professional fitting by certified performance technicians' },
  { name: 'Fast Shipping', icon: Truck, description: 'Quick delivery to get your project moving' },
  { name: '24/7 Support', icon: Headphones, description: 'Round-the-clock assistance from our expert team' },
  { name: 'Performance Tuning', icon: Tool, description: 'Optimize your vehicle\'s performance with our tuning services' },
]

export default function Services() {
  return (
    <section id="services" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gradient mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black border-red-600 h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CardHeader>
                    <service.icon size={48} className="text-red-500 mb-4" />
                    <CardTitle className="text-white">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{service.description}</p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

