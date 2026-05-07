import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl font-bold gold-text tracking-wide mb-4">MUFASA</div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your one-stop destination for premium gold, diamond, and custom jewelry in Memphis. Crafted with soul since 2010.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold-400 hover:bg-gold-500/10 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-gold-400 hover:bg-gold-500/10 transition-all">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Catalogue", href: "/products" },
                { label: "Gallery", href: "/gallery" },
                { label: "Repair", href: "/repair" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="block text-sm text-muted-foreground hover:text-gold-400 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Categories</h4>
            <div className="space-y-2">
              {["Rings", "Earrings", "Necklaces", "Bracelets", "Pendants", "Grillz"].map((l) => (
                <Link key={l} href={`/products?cat=${encodeURIComponent(l)}`} className="block text-sm text-muted-foreground hover:text-gold-400 transition-colors">{l}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Visit Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold-500" />
                <span>1270 Getwell Rd<br />Memphis, TN 38111</span>
              </div>
              <a href="tel:+19015551234" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="w-4 h-4 text-gold-500" />
                (901) 555-1234
              </a>
              <a href="mailto:info@mufasajeweler.com" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Mail className="w-4 h-4 text-gold-500" />
                info@mufasajeweler.com
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold-500" />
                <span>Mon-Sat: 10AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Mufasa Jeweler. All rights reserved.
      </div>
    </footer>
  );
}
