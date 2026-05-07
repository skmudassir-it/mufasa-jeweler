"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function DesktopNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
              isActive ? "text-gold-400" : "text-white/70 hover:text-gold-400"
            }`}
          >
            {link.label}
            {isActive && (
              <motion.div layoutId="nav-underline" className="h-0.5 bg-gold-500 mt-0.5 rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="lg:hidden text-white/70 hover:text-gold-400">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-card border-border w-80 pt-16">
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-2 px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive ? "text-gold-400 bg-gold-500/10" : "text-white/80 hover:text-gold-400 hover:bg-secondary/30"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
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
          <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact Us</Link>
          <Link href="/about" className="hover:text-gold-400 transition-colors">About</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-4 lg:px-12 py-3">
        <div className="flex items-center gap-4">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Mufasa Jeweler" width={50} height={45} className="object-contain" />
            <div className="hidden sm:block">
              <div className="font-heading text-xl lg:text-2xl font-bold gold-text tracking-wide">MUFASA</div>
              <div className="text-[10px] text-gold-500/60 tracking-[0.2em] uppercase -mt-1">Jeweler</div>
            </div>
          </Link>
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
