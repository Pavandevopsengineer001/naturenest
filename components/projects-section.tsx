"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Ruler, IndianRupee } from "lucide-react"

const projects = [
  {
    id: "1",
    name: "NatureNest Kolanupaka",
    location: "Kolanupaka, Telangana",
    plotSize: "1000 - 2000 Sq.Ft",
    startingPrice: "25 Lakhs onwards",
    image: "/project-1-nature-cottage-farm-land.jpg",
    description: "Premium farm plots with direct access to the main highway",
  },
  {
    id: "2",
    name: "NatureNest Aleru Greens",
    location: "Aleru, Telangana",
    plotSize: "1500 - 2500 Sq.Ft",
    startingPrice: "35 Lakhs onwards",
    image: "/project-2-luxury-resort-cottages.jpg",
    description: "Resort-style cottages with premium amenities and facilities",
  },
  {
    id: "3",
    name: "NatureNest Valley Retreat",
    location: "Kolanupaka Valley",
    plotSize: "2000 - 3000 Sq.Ft",
    startingPrice: "45 Lakhs onwards",
    image: "/project-3-valley-retreat-landscape.jpg",
    description: "Exclusive valley plots with stunning panoramic views",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
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
            Our Portfolio
          </p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">
            Explore Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Discover our three flagship developments, each offering unique advantages and investment opportunities
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {project.name}
                </h3>

                <p className="text-muted-foreground mb-6 text-sm">
                  {project.description}
                </p>

                {/* Details */}
                <div className="space-y-4 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-primary" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ruler size={18} className="text-primary" />
                    <span className="text-sm">{project.plotSize}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee size={18} className="text-accent" />
                    <span className="text-sm font-bold text-accent">
                      {project.startingPrice}
                    </span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  <Link
                    href={`/project/${project.id}`}
                    className="flex-1 px-4 py-3 bg-primary text-primary-foreground font-bold rounded-lg text-center text-sm"
                  >
                    View Details
                  </Link>

                  <a
                    href="tel:9154658651"
                    className="flex-1 px-4 py-3 border border-accent text-accent font-bold rounded-lg text-center text-sm"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
