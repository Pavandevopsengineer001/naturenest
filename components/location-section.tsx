"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Zap, Clock, Car, Plane, Building, Route } from "lucide-react"

const distances = [
  { from: "Hyderabad City", to: "~70 km", icon: Building, time: "1.5 hrs drive" },
  { from: "RGI Airport", to: "~60 km", icon: Plane, time: "1 hr drive" },
  { from: "Warangal", to: "~80 km", icon: Car, time: "1.5 hrs drive" },
  { from: "NH-163 Highway", to: "Near", icon: Route, time: "Direct access" },
]

const locationHighlights = [
  "Near famous 2000-year-old Kolanupaka Jain Temple",
  "Upcoming 200 ft road development nearby",
  "Strategic growth corridor location",
  "Easy weekend getaway from Hyderabad",
  "Proposed infrastructure developments in the area",
  "Peaceful countryside with clean air and water",
]

export function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-secondary/20">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight text-balance">
            Near Kolanupaka, Aler
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Perfectly positioned in a growing corridor with excellent connectivity and investment potential
          </p>
        </motion.div>

        {/* Distance Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {distances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl bg-card border border-border text-center hover:shadow-lg hover:border-primary transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={24} className="text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2 font-light">{item.from}</p>
              <p className="text-2xl font-serif font-bold text-primary tracking-tight">{item.to}</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-muted-foreground text-xs">
                <Clock size={12} />
                <span>{item.time}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-xl bg-card border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
                  Project Location
                </h3>
                <p className="text-muted-foreground mt-1">THE DIVINE FARMS</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">
              Located near the historic Kolanupaka area in Aler Mandal, our project offers the perfect balance of 
              peaceful countryside living with excellent connectivity to major cities.
            </p>

            {/* Location Highlights */}
            <div className="space-y-3">
              {locationHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 text-foreground">
                  <Zap size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Coordinates */}
            <div className="mt-8 p-5 bg-primary/8 rounded-lg flex items-center gap-3 text-primary font-serif font-bold border border-primary/20">
              <Navigation size={20} />
              <span>Near Kolanupaka, Aler, Telangana</span>
            </div>
          </motion.div>

          {/* Why This Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 rounded-xl bg-primary text-primary-foreground"
          >
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-6 tracking-tight">
              Why This Location?
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Spiritual Significance</h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  Near the famous 2000-year-old Kolanupaka Jain Temple, adding cultural and spiritual value to the location.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Growth Potential</h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  Located in a designated growth corridor with upcoming infrastructure projects including proposed 200 ft road.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Perfect Weekend Escape</h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  Just 1.5 hours from Hyderabad - close enough for weekend visits, far enough for peaceful retreat.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg mb-2">Natural Beauty</h4>
                <p className="text-primary-foreground/80 font-light leading-relaxed">
                  Surrounded by lush greenery, clean air, and pristine natural landscapes away from city pollution.
                </p>
              </div>
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
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Explore on Map
          </h3>
          <div className="rounded-xl overflow-hidden h-80 sm:h-96 border border-border shadow-lg">
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
