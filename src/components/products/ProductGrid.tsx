"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Dummy Data
const products = [
  {
    id: "1",
    title: "Acrylic LED Letter Board",
    category: "LED Sign Boards",
    description: "Premium 3D acrylic letters with bright LED illumination for outdoor branding.",
    image: "/products/led-acrylic.jpg",
  },
  {
    id: "2",
    title: "Neon Cafe Sign",
    category: "Neon Signage",
    description: "Trendy flexible neon signs perfect for cafes, restaurants, and interiors.",
    image: "/products/neon-cafe.jpg",
  },
  {
    id: "3",
    title: "ACP Front Elevation",
    category: "ACP Boards",
    description: "Durable ACP cladding and signage for complete shop front makeovers.",
    image: "/products/acp-front.jpg",
  },
  {
    id: "4",
    title: "Glow Sign Box",
    category: "Glow Sign Boards",
    description: "Cost-effective illuminated box signage with vinyl printing.",
    image: "/products/glow-sign.jpg",
  },
  {
    id: "5",
    title: "Steel Etched Name Plate",
    category: "Acrylic Name Plates",
    description: "Professional stainless steel or acrylic name plates for offices and homes.",
    image: "/products/name-plate.jpg",
  },
  {
    id: "6",
    title: "Vinyl Flex Hoarding",
    category: "Flex & Vinyl Printing",
    description: "Large format flex printing for outdoor advertising and hoardings.",
    image: "/products/flex-banner.jpg",
  },
  {
    id: "7",
    title: "Pixel LED Board",
    category: "LED Sign Boards",
    description: "Dynamic pixel LED boards with programmable patterns and animations.",
    image: "/products/pixel-led.jpg",
  },
  {
    id: "8",
    title: "Directional Signage",
    category: "Acrylic Name Plates",
    description: "Wayfinding and directional signage for hospitals, malls, and offices.",
    image: "/products/wayfinding.jpg",
  },
];

const categories = [
  "All",
  "LED Sign Boards",
  "Glow Sign Boards",
  "Before & After", // Removed as per requested structure, keeping categories consistent
  "ACP Boards",
  "Acrylic Name Plates",
  "Flex & Vinyl Printing",
  "Neon Signage",
  "3D Letter Boards"
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="py-12">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-white/60 backdrop-blur-sm text-gray-600 border border-white/40 hover:bg-white/80 hover:border-primary/30 hover:shadow-sm"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
