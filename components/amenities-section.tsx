"use client"

import { motion } from "framer-motion"
import { 
  Building2,
  Home,
  Tent,
  Waves,
  Umbrella,
  CircleDot,
  Baby,
  Trees,
  Flame,
  PartyPopper,
  Volleyball,
  Camera,
  Car,
  Sparkles
} from "lucide-react"

const amenities = [
  { name: "Clubhouse", icon: Building2, description: "Premium clubhouse for community gatherings" },
  { name: "Farm Cottage", icon: Home, description: "Comfortable cottage stay experience" },
  { name: "Glam Pod", icon: Tent, description: "Luxury glamping pods for unique stays" },
  { name: "Swimming Pool", icon: Waves, description: "Refreshing pool for all ages" },
  { name: "Beach View with Gazebo", icon: Umbrella, description: "Scenic beach-style relaxation area" },
  { name: "Box Cricket", icon: CircleDot, description: "Cricket pitch for sports enthusiasts" },
  { name: "Children's Play Area", icon: Baby, description: "Safe and fun play zone for kids" },
  { name: "Mahogany Plantation", icon: Trees, description: "Premium timber plantation on plots" },
  { name: "Fruit Plantation", icon: Sparkles, description: "Various fruit trees on your plot" },
  { name: "OAT with Campfire", icon: Flame, description: "Open air theater with campfire nights" },
  { name: "Party Lawn", icon: PartyPopper, description: "Spacious lawn for celebrations" },
  { name: "Beach Volleyball", icon: Volleyball, description: "Volleyball court for active fun" },
  { name: "Photo Session Lawn", icon: Camera, description: "Picturesque open lawn for photography" },
  { name: "40 & 30 Ft Roads", icon: Car, description: "Well-planned wide internal roads" },
]

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
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
            className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-bold text-sm mb-6"
          >
            1.5 Acres of Amenities
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            World-Class Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            THE DIVINE FARMS offers an exceptional range of amenities spread across 1.5 acres, designed for comfort, recreation, and a premium lifestyle experience
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-primary/20 transition-colors"
              >
                <amenity.icon size={28} className="text-accent" />
              </motion.div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-foreground tracking-tight mb-2">
                {amenity.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {amenity.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Farm Plot Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <h3 className="text-2xl font-serif font-bold mb-4">Farm Plot Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Mahogany Plantation on each plot</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Fruit Plantation included</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Curbing stones boundary marking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>40 & 30 feet wide internal roads</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
            <h3 className="text-2xl font-serif font-bold mb-4">Special Offers</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-bold">FREE Resort Membership</span> for all plot buyers
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="font-bold">Easy EMI Options</span> available
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Clear legal documentation</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Limited plots - Book now!</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
