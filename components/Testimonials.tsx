'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  { name: 'Alex R.', text: 'GearTech parts took my build to the next level. Unmatched quality and performance.', rating: 5 },
  { name: 'Sarah L.', text: 'The custom installation service was top-notch. My car feels like a completely new machine.', rating: 5 },
  { name: 'Mike T.', text: 'Incredible support team. They helped me choose the perfect upgrades for my track day setup.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gradient mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Customer Feedback
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900 border-red-600 h-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-red-500 fill-current" />
                      ))}
                    </div>
                    <p className="mb-4 text-white">&quot;{testimonial.text}&quot;</p>
                    <p className="font-semibold text-gray-300">- {testimonial.name}</p>
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

