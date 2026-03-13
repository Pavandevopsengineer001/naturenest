"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Clock, Car, Plane, Building, Route, Church, Star } from "lucide-react"

const distances = [
  { place: "Warangal Highway", time: "5 Mins", icon: Route },
  { place: "Yadadri Temple", time: "15 Mins", icon: Church },
  { place: "Komuravelli Temple", time: "15 Mins", icon: Church },
  { place: "RRR (Regional Ring Road)", time: "18 Mins", icon: Route },
  { place: "AIIMS Hospital", time: "20 Mins", icon: Building },
  { place: "Warangal Textile Park & Airport", time: "60 Mins", icon: Plane },
]

const locationHighlights = [
  "Adjacent to Aler to Siddipet Highway",
  "Near Someshwara Swamy Temple",
  "Near Jain Mandir, Kolanupaka (2000+ years old)",
  "Adjacent to proposed KYKK Road (Keesara-Yadadri-Kolanpaka-Komuravelli)",
  "Upcoming infrastructure developments in the area",
  "Peaceful countryside with clean air and water",
]

export function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />
      
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
            Prime Location
          </motion.span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Near Kolanupaka, Aler
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Strategically positioned with excellent connectivity to major temples, highways, and cities
          </p>
        </motion.div>

        {/* Distance Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {distances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-5 rounded-xl bg-card border border-border text-center hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <item.icon size={24} className="text-primary" />
              </div>
              <p className="text-2xl font-serif font-bold text-primary mb-1">{item.time}</p>
              <p className="text-xs text-muted-foreground leading-tight">{item.place}</p>
            </motion.div>
          ))}
        </div>

        {/* Location Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Location Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="w-14 h-14 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
              >
                <MapPin size={28} className="text-accent" />
              </motion.div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
                  Location Highlights
                </h3>
                <p className="text-muted-foreground mt-1">THE DIVINE FARMS</p>
              </div>
            </div>
            
            {/* Location Highlights List */}
            <div className="space-y-4">
              {locationHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <Star size={18} className="text-accent flex-shrink-0 mt-1" />
                  <span className="text-sm sm:text-base">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Location Tag */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-8 p-5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl flex items-center gap-3 text-primary font-serif font-bold border border-primary/20"
            >
              <Navigation size={20} />
              <span>Near Kolanupaka, Aler, Telangana</span>
            </motion.div>
          </motion.div>

          {/* Why This Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-8 tracking-tight">
              Why This Location?
            </h3>
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-serif font-bold text-lg mb-2 flex items-center gap-2">
                  <Church size={20} className="text-accent" />
                  Spiritual Hub
                </h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  Near famous temples including Yadadri (15 mins), Komuravelli (15 mins), Someshwara Swamy Temple, and the historic 2000-year-old Kolanupaka Jain Temple.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-serif font-bold text-lg mb-2 flex items-center gap-2">
                  <Route size={20} className="text-accent" />
                  Excellent Connectivity
                </h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  Adjacent to Aler-Siddipet Highway, 5 mins from Warangal Highway, and close to the proposed KYKK Road (Keesara-Yadadri-Kolanpaka-Komuravelli).
                </p>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="font-serif font-bold text-lg mb-2 flex items-center gap-2">
                  <Car size={20} className="text-accent" />
                  Easy Access
                </h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  18 mins to RRR (Regional Ring Road), 20 mins to AIIMS, and 60 mins to Warangal Textile Park & Airport.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 tracking-tight text-center">
            Explore on Map
          </h3>
          <div className="rounded-2xl overflow-hidden h-80 sm:h-96 border border-border shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60880.02278131231!2d79.07854368750!3d17.4522397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb902e56e0001d%3A0x3bcb902e56e0001d!2sKolanupaka%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="THE DIVINE FARMS Location Map"
            />
          </div>
          <p className="text-muted-foreground text-sm mt-4 text-center font-light">
            Exact project location will be shared upon inquiry. Contact us for site visit arrangements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
