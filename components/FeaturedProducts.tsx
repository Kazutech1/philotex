'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

const products = [
  { name: 'Suspension Parts', image: 'https://mypartsng.com/wp-content/uploads/Untitled-design-4.webp' },
  { name: 'Brake Parts',  image: 'https://mypartsng.com/wp-content/uploads/Untitled-design-3.webp' },
  { name: 'Engine Parts',  image: 'https://mypartsng.com/wp-content/uploads/Untitled-design-5.webp' },
  { name: 'Engine Oil & Other Fluids', image: 'https://mypartsng.com/wp-content/uploads/Untitled-design.webp' },
  { name: 'Filters',  image: 'https://mypartsng.com/wp-content/uploads/Untitled-design-1.webp' },
  { name: 'Auto Care Products',  image: 'https://mypartsng.com/wp-content/uploads/Untitled-design-6.webp' },
]

export default function FeaturedProducts() {
  return (
    <section id="products" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gradient mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-black border-red-600 overflow-hidden flex justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <CardContent className="p-4">
                    <img 
                      src={product.image || "/placeholder.svg"} 
                      alt={product.name} 
                      width={300} 
                      height={300} 
                      className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                    
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

