"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    title: "Cottage View",
    category: "Cottages",
    image: "/gallery-1-cottage-exterior.jpg",
  },
  {
    id: 2,
    title: "Resort Pool",
    category: "Amenities",
    image: "/gallery-2-resort-pool.jpg",
  },
  {
    id: 3,
    title: "Garden Pathway",
    category: "Landscape",
    image: "/gallery-3-garden-pathway.jpg",
  },
  {
    id: 4,
    title: "Sunset View",
    category: "Views",
    image: "/gallery-4-sunset-view.jpg",
  },
  {
    id: 5,
    title: "Community Center",
    category: "Amenities",
    image: "/gallery-5-community-center.jpg",
  },
  {
    id: 6,
    title: "Nature Trail",
    category: "Landscape",
    image: "/gallery-6-nature-trail.jpg",
  },
  {
    id: 7,
    title: "Dining Area",
    category: "Cottages",
    image: "/gallery-7-dining-area.jpg",
  },
  {
    id: 8,
    title: "Wellness Center",
    category: "Amenities",
    image: "/gallery-8-wellness-center.jpg",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState("All")

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-background">
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
            Visual Journey
          </p>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-8 tracking-tight">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Explore the beauty and luxury of NatureNest Estates through our curated collection
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full font-serif font-bold transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`group rounded-xl overflow-hidden cursor-pointer bg-muted hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent ${
                index === 0 || index === 4 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white">{image.title}</h3>
                    <p className="text-sm text-white/80 font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-accent transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.image || "/placeholder.svg"}
              alt={selectedImage.title}
              className="w-full rounded-xl max-h-96 object-cover"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground">{selectedImage.title}</h3>
              <p className="text-muted-foreground mt-2 font-medium">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
