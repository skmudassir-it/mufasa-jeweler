"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Gem, Shield, Award, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> OUR STORY <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="gold-text">Mufasa Jeweler</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Crafting timeless elegance since 2010.</p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Memphis&apos;s Premier <span className="gold-text">Jewelry</span> Destination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Since 2010, Mufasa Jeweler has been the trusted name in premium jewelry in Memphis. From stunning engagement rings to custom hip-hop pieces, our master jewelers bring decades of expertise to every creation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We specialize in custom designs, professional repair, and an extensive catalogue of gold, diamond, and precious stone jewelry. Every piece tells a story — let us help you tell yours.
              </p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold-500" /> 1270 Getwell Rd, Memphis, TN 38111</span>
                <a href="tel:+19015551234" className="flex items-center gap-2 hover:text-gold-400 transition-colors"><Phone className="w-4 h-4 text-gold-500" /> (901) 555-1234</a>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold-500" /> Mon-Sat: 10AM — 7PM</span>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border gold-glow">
              <Image src="/store-display.png" alt="Mufasa Jeweler Store" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 lg:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="gold-text">Values</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Gem, title: "Quality", desc: "Only the finest materials and craftsmanship make the cut. Every piece inspected by experts." },
              { icon: Shield, title: "Trust", desc: "Full transparency on pricing, sourcing, and authenticity. Certified appraisals with every purchase." },
              { icon: Heart, title: "Passion", desc: "Jewelry isn't just our business — it's our art. We pour soul into every creation." },
              { icon: Award, title: "Excellence", desc: "Award-winning designs and repair services recognized throughout the Mid-South." },
            ].map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl bg-card border border-border hover:border-gold-500/20 transition-all duration-500">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gold-500/10 border border-gold-500/10 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Come Visit <span className="gold-text">Us</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Stop by our Memphis showroom or reach out for custom designs.</p>
          <Link href="/contact" className="inline-flex items-center gold-gradient text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform">
            Get Directions
          </Link>
        </motion.div>
      </section>
    </>
  );
}
