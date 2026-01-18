"use client"

import { motion } from "framer-motion"

const amenities = [
  { name: "Swimming Pool", icon: "🏊" },
  { name: "Cottages", icon: "🏡" },
  { name: "Beach-View Seating", icon: "🌅" },
  { name: "Play Area", icon: "🎪" },
  { name: "Organic Farming", icon: "🌾" },
  { name: "Walking Trails", icon: "🥾" },
  { name: "24/7 Security", icon: "🔒" },
  { name: "Clubhouse", icon: "🏛️" },
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
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Premium Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Enjoy a lifestyle of luxury and comfort with our comprehensive range of world-class amenities
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 hover:bg-card/80"
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground text-balance tracking-tight">
                {amenity.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
