"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Search, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

const allCategories = [...new Set(products.map((p) => p.category))];

export default function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = selectedCat === "All" || p.category === selectedCat;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [selectedCat, search]);

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-12 px-4 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-medium tracking-wider mb-4">
            <span className="w-8 h-[1px] bg-gold-500/50" /> CATALOGUE <span className="w-8 h-[1px] bg-gold-500/50" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gold-text">Collection</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">Browse our complete catalogue of premium gold, diamond, and custom jewelry.</p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="pb-8 px-4 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jewelry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-secondary border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-muted-foreground focus:outline-none focus:border-gold-500/50 transition-colors"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {["All", ...allCategories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                    selectedCat === cat
                      ? "gold-gradient text-black"
                      : "bg-secondary text-muted-foreground hover:text-gold-400 border border-border hover:border-gold-500/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-muted-foreground mb-6">{filtered.length} item{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500 gold-glow-hover"
                >
                  <div className="aspect-square relative overflow-hidden bg-secondary">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-medium bg-gold-500/10 text-gold-400 border border-gold-500/20 backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Link href="/contact" className="inline-flex items-center justify-center w-full gold-gradient text-black font-semibold rounded-full py-2 text-xs hover:scale-105 transition-transform">
                        Inquire Now
                      </Link>
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
          ) : (
            <div className="text-center py-20">
              <SlidersHorizontal className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              <button onClick={() => { setSelectedCat("All"); setSearch(""); }} className="text-gold-400 hover:text-gold-300 text-sm mt-2 transition-colors">
                Clear filters
              </button>
            </div>
          )}

          {/* CTA Banner */}
          <div className="mt-20 p-10 md:p-16 rounded-3xl bg-gradient-to-r from-card via-[#0f0b04] to-card border border-gold-500/10 text-center gold-glow">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">Don&apos;t See What You Want?</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">We specialize in custom designs. Tell us your vision and we&apos;ll craft it.</p>
            <Link href="/contact" className="inline-flex items-center gold-gradient text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform">
              Request Custom Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
