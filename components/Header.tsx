'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

const menuItems = ['Home', 'Products', 'Services', 'About', 'Contact']

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      className="bg-black py-4 sticky top-0 z-50 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Settings size={32} className="text-red-600" />
            </motion.div>
            <span className="text-2xl font-bold text-gradient">Philotex Enterperise</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-red-500 transition duration-300"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <motion.nav 
            className="mt-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-white hover:text-red-500 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}

