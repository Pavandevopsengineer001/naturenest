"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Leaf } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Project Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Leaf size={20} className="text-primary-foreground" />
              </div>
              <span className="text-lg font-serif font-bold text-white leading-tight">
                THE DIVINE FARMS
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed font-light max-w-xs">
              Premium farm plots near Kolanupaka, Aler. Experience a new lifestyle close to nature with world-class amenities.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "Highlights", "Amenities", "Location", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-accent transition-colors font-light inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Developer */}
          <div>
            <h4 className="font-serif font-bold mb-5 text-lg">SRLN Infra Developers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-white/70 hover:text-accent transition-colors font-light">
                  About Us
                </Link>
              </li>
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
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-5 text-lg">Contact</h4>
            <div className="space-y-4 text-sm">
              <motion.a
                href="tel:6309123731"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors font-light"
              >
                <Phone size={18} />
                <span>+91 6309123731</span>
              </motion.a>
              <motion.a
                href="mailto:info@divinefarms.in"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors font-light"
              >
                <Mail size={18} />
                <span>info@divinefarms.in</span>
              </motion.a>
              <div className="flex items-start gap-3 text-white/70 font-light">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Near Kolanupaka, Aler, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 font-light gap-4">
            <p>© {currentYear} THE DIVINE FARMS by SRLN Infra Developers. All rights reserved.</p>
            <p className="text-xs">Project promotional website. Contact for complete details.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
