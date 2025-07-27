import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Share2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-purple-700 text-white pt-10 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-purple-500 pb-4 mb-4">
          <nav className="flex flex-wrap gap-4 justify-center md:justify-start text-sm font-semibold uppercase tracking-wide">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/about" className="hover:underline">About Us</Link>
            <span className="hidden md:inline">|</span>
            <Link href="/contact" className="hover:underline">Join</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://www.ieee.org/sitemap.html" className="hover:underline" target="_blank" rel="noopener noreferrer">Sitemap</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://www.ieee.org/accessibility_statement.html" className="hover:underline" target="_blank" rel="noopener noreferrer">Accessibility</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://www.ieee.org/about/corporate/governance/p9-26.html" className="hover:underline" target="_blank" rel="noopener noreferrer">Nondiscrimination Policy</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://www.ieee.org/about/corporate/governance/ethics.html" className="hover:underline" target="_blank" rel="noopener noreferrer">IEEE Ethics Reporting</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://www.ieee.org/about/corporate/governance/terms.html" className="hover:underline" target="_blank" rel="noopener noreferrer">Terms and Conditions</Link>
            <span className="hidden md:inline">|</span>
            <Link href="https://www.ieee.org/security-privacy.html" className="hover:underline" target="_blank" rel="noopener noreferrer">IEEE Privacy Policy</Link>
          </nav>
          <div className="flex gap-4 justify-center mt-4 md:mt-0">
            <Link href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer"><Share2 className="w-5 h-5" /></Link>
            <Link href="https://twitter.com/IEEEorg" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5" /></Link>
            <Link href="https://www.facebook.com/IEEE.org" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5" /></Link>
            <Link href="https://www.linkedin.com/company/ieee/" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></Link>
            <Link href="https://www.youtube.com/user/IEEEorg" target="_blank" rel="noopener noreferrer"><Youtube className="w-5 h-5" /></Link>
            <Link href="https://www.instagram.com/ieeeorg/" target="_blank" rel="noopener noreferrer"><Instagram className="w-5 h-5" /></Link>
          </div>
        </div>
        <div className="text-xs text-purple-100 text-center md:text-left">
          <div className="mb-1">© Copyright 2025 IEEE – All rights reserved. Use of this website signifies your agreement to the IEEE Terms and Conditions.</div>
          <div>A public charity, IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity.</div>
        </div>
      </div>
    </footer>
  )
} 