"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-signage.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for text readability */}
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/50 text-primary text-sm font-semibold mb-6 tracking-wide uppercase">
            Transform Your brand Visibility
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
            Professional Signage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Solutions for Your Business
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            From 3D letters to glowing neon, we create premium signage that makes your business stand out.
            Trusted by 500+ local businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="tel:+919911092528"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-all hover:scale-105 shadow-lg shadow-primary/30"
            >
              <Phone size={20} />
              Call Now
            </Link>
            <Link
              href="https://wa.me/919911092528"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark text-lg font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105"
            >
              <MessageCircle size={20} className="text-green-600" />
              WhatsApp Us
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowRight className="rotate-90" size={20} />
        </div>
      </motion.div>
    </section>
  );
}
