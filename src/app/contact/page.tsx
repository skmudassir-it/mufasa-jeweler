"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> GET IN TOUCH <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="gold-text">Contact</span> Us
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">We&apos;d love to hear from you. Visit our store or reach out anytime.</p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 md:p-12 rounded-3xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-6 h-6 text-gold-500" />
                <h2 className="font-heading text-2xl font-bold text-white">Send a Message</h2>
              </div>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Name</label>
                    <input type="text" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Phone</label>
                    <input type="tel" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="(901) 555-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input type="email" className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors" placeholder="you@email.com" />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500/50 transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="inline-flex items-center gold-gradient text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Store Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* Store Image */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-border mb-8 gold-glow">
                <Image src="/store-display.png" alt="Mufasa Jeweler Storefront" fill className="object-cover" />
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Address", value: "1270 Getwell Rd\nMemphis, TN 38111" },
                  { icon: Phone, label: "Phone", value: "(901) 555-1234", href: "tel:+19015551234" },
                  { icon: Mail, label: "Email", value: "info@mufasajeweler.com", href: "mailto:info@mufasajeweler.com" },
                  { icon: Clock, label: "Hours", value: "Mon-Sat: 10AM–7PM\nSunday: Closed" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-2xl bg-card border border-border hover:border-gold-500/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold-500 mb-3" />
                    <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-white font-medium hover:text-gold-400 transition-colors whitespace-pre-line">{item.value}</a>
                    ) : (
                      <p className="text-sm text-white font-medium whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
