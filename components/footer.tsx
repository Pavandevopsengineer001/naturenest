"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image
                src="/nature-nest-logo.png"
                alt="NatureNest Estates Logo"
                width={300}
                height={140}
                className="h-32 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed font-light max-w-xs">
              Premium farm plots and luxury resort cottages in Telangana
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 hover:bg-white/10 rounded-lg transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2.5 hover:bg-white/10 rounded-lg transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2.5 hover:bg-white/10 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#home" className="text-white/70 hover:text-accent transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-white/70 hover:text-accent transition-colors font-light">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/70 hover:text-accent transition-colors font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-accent transition-colors font-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors font-light">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors font-light">
                  Legal Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-accent transition-colors font-light">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-6 text-lg">Contact</h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:9154658651"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors font-light"
              >
                <Phone size={18} />
                <span>+91 9154658651</span>
              </a>
              <a
                href="mailto:info@naturenestestates.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors font-light"
              >
                <Mail size={18} />
                <span>info@naturenest.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/70 font-light">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Kolanupaka & Aleru, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 font-light">
            <p>© {currentYear} NatureNest Estates. All rights reserved.</p>
            <p>Designed & Developed by NatureNest Team</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
