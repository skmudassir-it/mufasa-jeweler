// ═══════════ SHARED DATA FOR ALL PAGES ═════════════════

export const slides = [
  {
    title: "MUFASA JEWELER",
    subtitle: "Premium Jewelry • Watches • Repair • Custom",
    cta: "View Catalogue",
    href: "/products",
    image: "/hero-bg.png",
  },
  {
    title: "CUSTOM DESIGN",
    subtitle: "Crafted For You, Sparkled With Soul",
    cta: "Contact Us",
    href: "/contact",
    image: "/pendant-custom.png",
  },
  {
    title: "PROFESSIONAL REPAIR",
    subtitle: "Where Broken Pieces Shine Again",
    cta: "Get Quote",
    href: "/repair",
    image: "/repair-workshop.png",
  },
];

export const products = [
  { name: "10KT Women's Ring", price: "$399", category: "Rings", image: "/products/ring-10kt-women.jpg", id: "p1" },
  { name: "10KT Women's Earrings", price: "$565", category: "Earrings", image: "/products/earrings-10kt-women.jpg", id: "p2" },
  { name: "14KT Women's Ring", price: "$899", category: "Rings", image: "/products/ring-14kt-women.jpg", id: "p3" },
  { name: "2.1 CTW Cross Pendant", price: "$1,800", category: "Pendants", image: "/products/pendant-cross-diamond.jpg", id: "p4" },
  { name: "Hip Hop Diamond Pendant", price: "$1,575", category: "Hip Hop", image: "/products/pendant-hiphop-diamond.jpg", id: "p5" },
  { name: "Diamond Ring 14KT", price: "$2,399", category: "Rings", image: "/ring-diamond.png", id: "p6" },
  { name: "Diamond Earrings", price: "$3,200", category: "Earrings", image: "/earrings-diamond.png", id: "p7" },
  { name: "Gold Cuban Chain", price: "$4,999", category: "Hip Hop", image: "/chain-gold.png", id: "p8" },
  { name: "Tennis Bracelet", price: "$2,800", category: "Bracelets", image: "/bracelet-tennis.png", id: "p9" },
  { name: "Gold Grillz Set", price: "$1,200", category: "Grillz", image: "/grillz-gold.png", id: "p10" },
  { name: "Luxury Watch", price: "$6,500", category: "Watches", image: "/watch-luxury.png", id: "p11" },
  { name: "Custom Pendant", price: "$3,400", category: "Pendants", image: "/pendant-custom.png", id: "p12" },
];

export const categories = [
  { name: "Rings", subtitle: "Men & Women's", image: "/ring-diamond.png", href: "/products?cat=Rings" },
  { name: "Earrings", subtitle: "Gold & Diamond", image: "/earrings-diamond.png", href: "/products?cat=Earrings" },
  { name: "Hip Hop", subtitle: "Chains & Grillz", image: "/chain-gold.png", href: "/products?cat=Hip+Hop" },
  { name: "Watches", subtitle: "Luxury Timepieces", image: "/watch-luxury.png", href: "/products?cat=Watches" },
  { name: "Pendants", subtitle: "Bespoke Design", image: "/pendant-custom.png", href: "/products?cat=Pendants" },
  { name: "Grillz", subtitle: "Custom Gold Teeth", image: "/grillz-gold.png", href: "/products?cat=Grillz" },
];

export const galleryImages = [
  "/store-display.png", "/bracelet-tennis.png", "/chain-gold.png",
  "/ring-diamond.png", "/earrings-diamond.png", "/pendant-custom.png",
  "/repair-workshop.png", "/watch-luxury.png",
];

export const features = [
  { icon: "Shield", title: "Certified Authentic", desc: "Every piece comes with a certificate of authenticity and full appraisal." },
  { icon: "Gem", title: "Premium Quality", desc: "Only the finest gold, diamonds, and precious stones make the cut." },
  { icon: "Wrench", title: "Expert Repair", desc: "On-site master jewelers restore your treasured pieces with precision." },
  { icon: "Clock", title: "Same Day Service", desc: "Many services completed same-day including cleaning and sizing." },
];

export const repairServices = [
  { title: "Ring Sizing", desc: "Professional resizing for gold, platinum, and silver rings — up or down.", icon: "Wrench" },
  { title: "Stone Setting", desc: "Secure diamond and gemstone setting by certified master jewelers.", icon: "Gem" },
  { title: "Chain Repair", desc: "Broken chains, clasps, and links repaired with laser precision.", icon: "Wrench" },
  { title: "Cleaning & Polishing", desc: "Ultrasonic cleaning and professional polishing to restore brilliance.", icon: "Sparkles" },
  { title: "Watch Battery", desc: "Quick battery replacement for all major watch brands while you wait.", icon: "Clock" },
  { title: "Custom Design", desc: "Bring your vision to life — from sketch to finished masterpiece.", icon: "Gem" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Catalogue", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Repair", href: "/repair" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
