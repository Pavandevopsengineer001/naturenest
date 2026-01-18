"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Zap } from "lucide-react"

const locations = [
  {
    title: "Kolanupaka",
    description:
      "The heart of our development with direct highway access and proximity to the 2000-year-old Jain temple",
    highlights: ["Main Highway Access", "Jain Temple Nearby", "Commercial Hub"],
    coordinates: "17°30'N 79°0'E",
  },
  {
    title: "Aleru",
    description: "Premium location offering serene surroundings with excellent connectivity to major cities",
    highlights: ["Scenic Beauty", "City Connectivity", "Future Growth Corridor"],
    coordinates: "17°28'N 79°5'E",
  },
]

const distances = [
  { from: "Hyderabad City", to: "45 km", icon: "🏙️" },
  { from: "International Airport", to: "38 km", icon: "✈️" },
  { from: "Upcoming 200 ft Road", to: "Adjacent", icon: "🛣️" },
  { from: "Highway Access", to: "Direct", icon: "🚗" },
]

export function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-serif font-medium tracking-[0.15em] uppercase text-xs sm:text-sm mb-6">
            Strategic Location
          </p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Location Advantages
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Perfectly positioned in the growing corridor with excellent connectivity and investment potential
          </p>
        </motion.div>

        {/* Distance Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {distances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-card border border-border text-center hover:shadow-lg hover:border-accent transition-all duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-sm text-muted-foreground mb-3 font-light">{item.from}</p>
              <p className="text-2xl font-serif font-bold text-primary tracking-tight">{item.to}</p>
            </motion.div>
          ))}
        </div>

        {/* Locations Detail */}
        <div className="grid lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-10 rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <MapPin size={32} className="text-accent flex-shrink-0 mt-1" />
                <h3 className="text-3xl font-serif font-bold text-foreground tracking-tight">{location.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 font-light">{location.description}</p>

              {/* Highlights */}
              <div className="space-y-4 mb-8">
                {location.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-foreground font-medium">
                    <Zap size={20} className="text-primary flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Coordinates */}
              <div className="p-5 bg-primary/8 rounded-lg flex items-center gap-3 text-primary font-serif font-bold border border-primary/20">
                <Navigation size={20} />
                <span>{location.coordinates}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-serif font-bold text-foreground mb-8 tracking-tight">Explore on Map</h3>
          <div className="rounded-xl overflow-hidden h-96 border border-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121760.04556262462!2d79.07854368750!3d17.4522397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb902e56e0001d%3A0x3bcb902e56e0001d!2sKolanupaka%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
