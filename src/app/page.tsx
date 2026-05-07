"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Sparkles, Shield, Gem, Clock, Wrench, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ═══════════ DATA ════════════════════════════════════════

const slides = [
  {
    title: "MUFASA JEWELER",
    subtitle: "Premium Jewelry • Watches • Repair • Custom",
    cta: "View Catalogue",
    image: "/hero-bg.png",
  },
  {
    title: "CUSTOM DESIGN",
    subtitle: "Crafted For You, Sparkled With Soul",
    cta: "Contact Us",
    image: "/pendant-custom.png",
  },
  {
    title: "PROFESSIONAL REPAIR",
    subtitle: "Where Broken Pieces Shine Again",
    cta: "Get Quote",
    image: "/repair-workshop.png",
  },
];

const products = [
  { name: "10KT Women's Ring", price: "$399", category: "Rings", image: "/products/ring-10kt-women.jpg" },
  { name: "10KT Women's Earrings", price: "$565", category: "Earrings", image: "/products/earrings-10kt-women.jpg" },
  { name: "14KT Women's Ring", price: "$899", category: "Rings", image: "/products/ring-14kt-women.jpg" },
  { name: "2.1 CTW Cross Pendant", price: "$1,800", category: "Pendants", image: "/products/pendant-cross-diamond.jpg" },
  { name: "Hip Hop Diamond Pendant", price: "$1,575", category: "Hip Hop", image: "/products/pendant-hiphop-diamond.jpg" },
  { name: "Diamond Ring 14KT", price: "$2,399", category: "Rings", image: "/ring-diamond.png" },
  { name: "Diamond Earrings", price: "$3,200", category: "Earrings", image: "/earrings-diamond.png" },
  { name: "Gold Cuban Chain", price: "$4,999", category: "Hip Hop", image: "/chain-gold.png" },
];

const categories = [
  { name: "Rings", subtitle: "Men & Women's", image: "/ring-diamond.png" },
  { name: "Earrings", subtitle: "Gold & Diamond", image: "/earrings-diamond.png" },
  { name: "Hip Hop", subtitle: "Chains & Grillz", image: "/chain-gold.png" },
  { name: "Watches", subtitle: "Luxury Timepieces", image: "/watch-luxury.png" },
  { name: "Custom", subtitle: "Bespoke Design", image: "/pendant-custom.png" },
  { name: "Grillz", subtitle: "Custom Gold Teeth", image: "/grillz-gold.png" },
];

const galleryImages = [
  "/store-display.png", "/bracelet-tennis.png", "/chain-gold.png",
  "/ring-diamond.png", "/earrings-diamond.png", "/pendant-custom.png",
  "/repair-workshop.png", "/watch-luxury.png",
];

const features = [
  { icon: Shield, title: "Certified Authentic", desc: "Every piece comes with a certificate of authenticity and full appraisal." },
  { icon: Gem, title: "Premium Quality", desc: "Only the finest gold, diamonds, and precious stones make the cut." },
  { icon: Wrench, title: "Expert Repair", desc: "On-site master jewelers restore your treasured pieces with precision." },
  { icon: Clock, title: "Same Day Service", desc: "Many services completed same-day including cleaning and sizing." },
];

// ═══════════ HERO SLIDER ═══════════════════════════════

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const s = slides[current];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image src={s.image} alt={s.title} fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Gold particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: "0vh", x: Math.random() * 100 + "%" }}
            animate={{ opacity: [0, 0.8, 0], y: "100vh" }}
            transition={{ duration: 4 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute w-[2px] h-[2px] bg-gold-400 rounded-full"
            style={{ left: Math.random() * 100 + "%" }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }}
            className="inline-block mb-6 px-6 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 inline text-gold-400 mr-2" />
            <span className="text-gold-400 text-sm font-medium tracking-wider">EST. 2010 • MEMPHIS, TN</span>
          </motion.div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="gold-text">{s.title}</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-xl">
          {s.subtitle}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
          <Button className="gold-gradient text-black font-semibold px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform shadow-xl shadow-gold-500/20">
            {s.cta} <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-gold-500" : "bg-white/30 hover:bg-white/50"}`} />
        ))}
      </div>
    </section>
  );
}

// ═══════════ PRODUCTS ══════════════════════════════════

function FeaturedProducts() {
  return (
    <section id="products" className="py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> FEATURED <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Newest Items</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Discover our latest collection of premium jewelry, handpicked for exceptional quality and timeless elegance.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500 gold-glow-hover">
              <div className="aspect-square relative overflow-hidden bg-secondary">
                <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-gold-500/10 text-gold-400 border border-gold-500/20 backdrop-blur-sm">{p.category}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button size="sm" className="w-full gold-gradient text-black font-semibold text-xs">Quick View</Button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />))}
                </div>
                <h3 className="font-medium text-sm text-white/90 group-hover:text-gold-400 transition-colors truncate">{p.name}</h3>
                <p className="text-gold-400 font-bold mt-1">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 rounded-full px-8">View All Products <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
      </div>
    </section>
  );
}

// ═══════════ CATEGORIES ════════════════════════════════

function Categories() {
  return (
    <section className="py-24 px-4 lg:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> COLLECTIONS <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Explore our curated collections crafted for every style and occasion.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.a key={cat.name} href="#" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative h-64 rounded-2xl overflow-hidden border border-border hover:border-gold-500/30 transition-all duration-500">
              <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl font-bold text-white group-hover:text-gold-400 transition-colors">{cat.name}</h3>
                <p className="text-white/60 text-sm">{cat.subtitle}</p>
                <span className="inline-flex items-center gap-1 text-gold-400 text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ FEATURES ═════════════════════════════════

function Features() {
  return (
    <section className="py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center group-hover:border-gold-500/30 group-hover:bg-gold-500/10 transition-all duration-500">
                <f.icon className="w-7 h-7 text-gold-500 group-hover:text-gold-400 transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ GALLERY ══════════════════════════════════

function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 lg:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> GALLERY <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">A glimpse into the craftsmanship that defines Mufasa Jeweler.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="aspect-square relative rounded-2xl overflow-hidden border border-border hover:border-gold-500/30 transition-all duration-500 group cursor-pointer">
              <Image src={img} alt={`Gallery ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════ ABOUT / STORE ═════════════════════════════

function About() {
  return (
    <section className="py-24 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
              <span className="w-8 h-[1px] bg-gold-500/50" /> ABOUT US <span className="w-8 h-[1px] bg-gold-500/50" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Memphis's Premier <span className="gold-text">Jewelry</span> Destination</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Since 2010, Mufasa Jeweler has been the trusted name in premium jewelry in Memphis. From stunning engagement rings to custom hip-hop pieces, our master jewelers bring decades of expertise to every creation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We specialize in custom designs, professional repair, and an extensive catalogue of gold, diamond, and precious stone jewelry. Every piece tells a story — let us help you tell yours.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold-500" /> 1270 Getwell Rd, Memphis, TN</span>
              <a href="tel:+19015551234" className="flex items-center gap-2 hover:text-gold-400 transition-colors"><Phone className="w-4 h-4 text-gold-500" /> (901) 555-1234</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border gold-glow">
            <Image src="/store-display.png" alt="Mufasa Jeweler Store" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════ CONTACT CTA ═══════════════════════════════

function ContactCTA() {
  return (
    <section className="py-24 px-4 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center p-12 md:p-20 rounded-3xl bg-gradient-to-br from-card via-[#0f0b04] to-card border border-border relative overflow-hidden gold-glow">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-2 border-gold-500/10" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-gold-500/10" />
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to <span className="gold-text">Shine</span>?</h2>
        <p className="text-muted-foreground text-lg mb-10 relative z-10 max-w-md mx-auto">Visit our store or contact us for custom designs, repairs, and more.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Button className="gold-gradient text-black font-semibold px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform">Visit Our Store</Button>
          <Button variant="outline" className="border-gold-500/30 text-gold-400 hover:bg-gold-500/10 rounded-full px-8 py-6 text-lg">Call Now</Button>
        </div>
      </motion.div>
    </section>
  );
}

// ═══════════ MAIN PAGE ════════════════════════════════

export default function Home() {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts />
      <Categories />
      <Features />
      <About />
      <Gallery />
      <ContactCTA />
    </>
  );
}
