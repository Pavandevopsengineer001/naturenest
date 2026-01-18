"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustHighlights } from "@/components/trust-highlights"
import { ProjectsSection } from "@/components/projects-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { LocationSection } from "@/components/location-section"
import { GallerySection } from "@/components/gallery-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustHighlights />
      <ProjectsSection />
      <AmenitiesSection />
      <LocationSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <MobileCTA />
    </main>
  )
}
