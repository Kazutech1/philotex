'use client'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import './HeroStyles.css'; // Importing a CSS file for rugged styles

export default function Hero() {
  return (
    <section id="home" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Unleash Your Engine's Potential
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Precision-engineered auto parts for unparalleled performance and reliability.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-600 text-white hover:bg-red-700">
                Explore Products <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <div className="flex justify-center items-center bg-black p-5">
              <div className="relative">
                <div
                  className="absolute inset-0 -z-10 rounded-lg border-4 border-red-500 rugged-border"
                ></div>
                <img
                  src="https://www.toyotaofclermont.com/blogs/6088/wp-content/uploads/2024/10/Clermont-Toyota-auto-parts-tips-1024x511.jpg"
                  alt="High-performance auto part"
                  className="rounded-lg shadow-lg max-w-[600px] h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
