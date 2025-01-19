'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-red-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Settings size={24} className="text-red-500 mr-2" />
            <span className="text-xl font-bold text-gradient">Philotex Enterprise</span>
          </motion.div>
          <motion.nav 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['Home', 'Products', 'Services', 'About', 'Contact'].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-red-500 transition duration-300">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        </div>
        <motion.div 
          className="mt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} GearTech Auto Parts. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

