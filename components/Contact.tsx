"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setResponseMessage(data.message);
      } else {
        console.error('Error response:', data.message);
        setResponseMessage('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-gradient mb-12 text-center">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">Have questions about our high-performance parts? Our gear experts are ready to assist you.</p>
              <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="flex items-center">
                  <Phone className="text-red-500 mr-2" />
                  <span className="text-gray-300">+2348031360852, +2348157012422</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-red-500 mr-2" />
                  <span className="text-gray-300">philotexenterprise1@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-red-500 mr-2" />
                  <span className="text-gray-300">Along Airport road, Igwurita Ali, Port-harcourt Rivers State Nigeria</span>
                </div>
              </motion.div>
            </div>
            <motion.form className="space-y-4" onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <Input type="text" id="name" className="bg-black text-white border-red-600" value={formData.name} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <Input type="email" id="email" className="bg-black text-white border-red-600" value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <Textarea id="message" rows={4} className="bg-black text-white border-red-600" value={formData.message} onChange={handleChange} />
              </div>
              <Button type="submit" className="bg-red-600 text-white hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {responseMessage && <p className="mt-4 text-gray-300">{responseMessage}</p>}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
