"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function ProductCard({ id, title, description, category, image }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
    >
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
          {/* If image exists, we'd use Next.js Image here */}
          <span className="text-sm">Image: {title}</span>
        </div>

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-sm">
          {category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {description}
        </p>

        <Link
          href={`/contact?product=${encodeURIComponent(title)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-dark text-white font-medium rounded-lg group-hover:bg-primary transition-colors"
        >
          Enquire Now <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
