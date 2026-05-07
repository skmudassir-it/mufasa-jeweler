"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, User, Phone, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Catalogue", href: "#products" },
  { label: "Grillz", href: "#grillz" },
  {
    label: "Custom Jewelry",
    href: "#custom",
    children: [
      { label: "Rings", href: "#rings" },
      { label: "Necklaces", href: "#necklaces" },
      { label: "Bracelets", href: "#bracelets" },
      { label: "Pendants", href: "#pendants" },
    ],
  },
  { label: "Watches", href: "#watches" },
  {
    label: "Jewelry",
    href: "#jewelry",
    children: [
      { label: "Men's", href: "#mens" },
      { label: "Women's", href: "#womens" },
      { label: "Hip Hop", href: "#hiphop" },
    ],
  },
  { label: "Repair", href: "#repair" },
  { label: "Clearance", href: "#clearance" },
  { label: "Gallery", href: "#gallery" },
];

function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navLinks.map((link) => (
        <div
          key={link.label}
          className="relative"
          onMouseEnter={() => setOpenDropdown(link.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <a
            href={link.href}
            className="px-3 py-2 text-sm font-medium text-white/70 hover:text-gold-400 transition-colors duration-300 flex items-center gap-1"
          >
            {link.label}
            {link.children && <ChevronDown className="w-3 h-3" />}
          </a>
          {link.children && openDropdown === link.label && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-xl py-2 z-50">
              {link.children.map((child) => (
                <a
                  key={child.label}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-white/70 hover:text-gold-400 hover:bg-secondary/50 transition-colors"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="lg:hidden text-white/70 hover:text-gold-400">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-card border-border w-80 pt-16">
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-white/80 hover:text-gold-400 hover:bg-secondary/30 rounded-lg transition-colors"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 border-l border-border pl-4 mt-1 space-y-1">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-3 py-2 text-sm text-white/50 hover:text-gold-400 transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-2 bg-secondary/30 border-b border-border text-xs text-muted-foreground">
        <div className="flex items-center gap-6">
          <a href="tel:+19015551234" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <Phone className="w-3 h-3" /> (901) 555-1234
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3" /> 1270 Getwell Rd, Memphis, TN 38111
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a>
          <a href="#" className="hover:text-gold-400 transition-colors">About</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-4 lg:px-12 py-3">
        <div className="flex items-center gap-4">
          <MobileNav />
          <a href="/" className="flex items-center gap-2">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-black font-bold text-lg"
            >
              M
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-heading text-xl lg:text-2xl font-bold gold-text tracking-wide">MUFASA</div>
              <div className="text-[10px] text-gold-500/60 tracking-[0.2em] uppercase -mt-1">Jeweler</div>
            </div>
          </a>
        </div>

        <DesktopNav />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white/50 hover:text-gold-400">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/50 hover:text-gold-400 hidden sm:flex">
            <User className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/50 hover:text-gold-400 relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full gold-gradient text-black text-[10px] font-bold flex items-center justify-center">0</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
