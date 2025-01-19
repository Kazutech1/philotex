'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const brands = [
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
  '/placeholder.svg?height=100&width=100',
]

const trapezoidStyle = {
  clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 85%)',
};

export default function Brands() {
  return (
    <section className="bg-gray-900 py-20" style={trapezoidStyle}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-red-500 mb-12 text-center neon-text">Brands We Carry</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-4 rounded-lg shadow-lg border border-red-500 neon-border flex items-center justify-center"
            >
              <Image src={brand || "/placeholder.svg"} alt={`Brand ${index + 1}`} width={100} height={100} className="filter invert" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

