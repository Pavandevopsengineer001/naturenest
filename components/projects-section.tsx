"use client"

import { motion } from "framer-motion"
import { Leaf, Sun, TrendingUp, Shield, MapPin, Home, Trees, Sparkles, Gift, CreditCard } from "lucide-react"

const highlights = [
  {
    icon: Leaf,
    title: "Natural Green Environment",
    description: "Surrounded by lush greenery, mahogany trees, and fruit plantations that rejuvenate your soul",
  },
  {
    icon: Sun,
    title: "Weekend Getaway Feeling",
    description: "Escape the city stress with cottages, glam pods, swimming pool, and beach-view gazebo",
  },
  {
    icon: TrendingUp,
    title: "Smart Future Investment",
    description: "Located in a high-growth corridor near proposed KYKK Road with excellent appreciation potential",
  },
  {
    icon: Shield,
    title: "Clear Legal Documentation",
    description: "100% transparent documentation with complete legal protection for your peace of mind",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Near Yadadri Temple, Komuravelli Temple, AIIMS, RRR, and major highways",
  },
  {
    icon: Home,
    title: "Premium Amenities",
    description: "Clubhouse, swimming pool, OAT with campfire, party lawn, sports facilities & more",
  },
  {
    icon: Trees,
    title: "Plantation Benefits",
    description: "Mahogany & fruit plantation on every plot with curbing stones boundary",
  },
  {
    icon: Sparkles,
    title: "1.5 Acres of Facilities",
    description: "World-class amenities spread across 1.5 acres for your comfort and entertainment",
  },
]

export function ProjectsSection() {
  return (
    <section id="highlights" className="py-16 sm:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm mb-6"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Project Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Discover what makes THE DIVINE FARMS the perfect choice for your dream farmland investment
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-14 h-14 bg-gradient-to-br from-primary/15 to-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary/25 group-hover:to-accent/20 transition-colors"
              >
                <highlight.icon size={28} className="text-primary" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3 tracking-tight">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Price & Offers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-5 py-2 bg-accent text-accent-foreground rounded-full text-sm font-bold mb-6"
            >
              <Gift size={18} />
              Limited Time Offer
            </motion.div>
            
            <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Attractive Pricing & Easy EMI Options
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
              Premium farm plots at competitive prices with flexible payment plans. 
              <span className="font-bold"> FREE Resort Membership</span> for all plot buyers!
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <CreditCard size={20} className="text-accent" />
                <span className="font-medium">EMI Available</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Gift size={20} className="text-accent" />
                <span className="font-medium">Free Resort Membership</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/90">
                <Shield size={20} className="text-accent" />
                <span className="font-medium">Clear Title</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:6309123731"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-accent text-accent-foreground font-serif font-bold rounded-xl hover:shadow-2xl transition-all duration-300 text-lg shadow-lg"
              >
                Get Price Details
              </motion.a>
              <motion.a
                href="https://wa.me/916309123731?text=Hi!%20I'm%20interested%20in%20THE%20DIVINE%20FARMS%20project.%20Please%20share%20pricing%20details."
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/15 backdrop-blur-md text-primary-foreground font-serif font-bold rounded-xl hover:bg-white/25 transition-all duration-300 border border-white/30 text-lg"
              >
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
