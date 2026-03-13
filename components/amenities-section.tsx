"use client"

import { motion } from "framer-motion"
import { 
  Waves, 
  Home, 
  Sunrise, 
  Tent, 
  Sprout, 
  Footprints, 
  Shield, 
  Building2,
  Trees,
  Car,
  Zap,
  Droplets
} from "lucide-react"

const amenities = [
  { name: "Swimming Pool", icon: Waves, description: "Refreshing pool area" },
  { name: "Cottages", icon: Home, description: "Comfortable stay options" },
  { name: "Sunrise Point", icon: Sunrise, description: "Scenic viewing area" },
  { name: "Play Area", icon: Tent, description: "Kids entertainment zone" },
  { name: "Organic Farming", icon: Sprout, description: "Grow your own food" },
  { name: "Walking Trails", icon: Footprints, description: "Nature walking paths" },
  { name: "24/7 Security", icon: Shield, description: "Gated community safety" },
  { name: "Clubhouse", icon: Building2, description: "Community gatherings" },
  { name: "Landscaped Gardens", icon: Trees, description: "Beautiful green spaces" },
  { name: "Wide Roads", icon: Car, description: "Well-planned infrastructure" },
  { name: "Electricity", icon: Zap, description: "Underground cabling" },
  { name: "Water Supply", icon: Droplets, description: "24/7 bore water" },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent font-serif font-medium tracking-[0.15em] uppercase text-xs sm:text-sm mb-6">
            World-Class Facilities
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Premium Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            THE DIVINE FARMS offers a comprehensive range of amenities designed for comfort, relaxation, and a premium lifestyle experience
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 sm:p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <amenity.icon size={24} className="text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-foreground tracking-tight mb-1">
                {amenity.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-xl bg-secondary/30 border border-secondary/50 text-center"
        >
          <p className="text-muted-foreground font-light">
            <span className="text-foreground font-medium">Note:</span> Additional amenities and features may be added. 
            Contact us for the complete amenities list and project brochure.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
