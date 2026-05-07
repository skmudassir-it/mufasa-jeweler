import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Mufasa Jeweler — Premium Gold & Diamond Jewelry",
  description: "Discover exquisite gold, diamond, and custom jewelry. Watches, repair, and bespoke designs crafted with soul.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
