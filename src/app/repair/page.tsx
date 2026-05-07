"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Gem, Clock, Wrench, Sparkles, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { repairServices } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { Shield, Gem, Wrench, Clock, Sparkles };

export default function RepairPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> SERVICES <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Jewelry <span className="gold-text">Repair</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Expert repair and restoration by master jewelers — same-day service available.</p>
        </motion.div>
      </section>

      {/* Hero image */}
      <section className="py-8 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-border gold-glow">
            <Image src="/repair-workshop.png" alt="Jewelry Repair Workshop" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Where Broken Pieces <span className="gold-text">Shine Again</span></h2>
              <p className="text-white/60 max-w-lg">On-site master jewelers with decades of experience. Walk-ins welcome.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="gold-text">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairServices.map((s, i) => {
              const Icon = iconMap[s.icon] || Wrench;
              return (
                <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border border-border hover:border-gold-500/20 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-all">
                    <Icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 lg:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Why Trust <span className="gold-text">Us?</span></h2>
              <div className="space-y-4">
                {[
                  "Over 15 years of jewelry repair experience",
                  "Certified master jewelers on-site",
                  "Same-day service on most repairs",
                  "Laser welding for precision chain repair",
                  "Free cleaning with every repair",
                  "90-day warranty on all work",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square rounded-3xl overflow-hidden border border-border gold-glow">
              <Image src="/repair-workshop.png" alt="Expert Jewelry Repair" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto p-12 md:p-20 rounded-3xl bg-gradient-to-br from-card via-[#0f0b04] to-card border border-border gold-glow">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Need a Repair?</h2>
          <p className="text-muted-foreground mb-8">Bring your piece in or contact us for a free estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center gold-gradient text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform">Get a Quote</Link>
            <a href="tel:+19015551234" className="inline-flex items-center rounded-full border border-gold-500/30 text-gold-400 hover:bg-gold-500/10 px-8 py-3 font-medium transition-colors">Call Now</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
