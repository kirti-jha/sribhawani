"use client";

import { useState } from "react";
import GalleryItem from "./GalleryItem";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import clsx from "clsx";

// Dummy Data
const projects = [
  { id: "1", title: "TechHub Office Branding", category: "Office Signage", image: "/portfolio/office1.jpg" },
  { id: "2", title: "Burger Joint Neon", category: "Restaurant Signage", image: "/portfolio/rest1.jpg" },
  { id: "3", title: "City Mall Entrance", category: "Outdoor / Hoardings", image: "/portfolio/outdoor1.jpg" },
  { id: "4", title: "Fashion Boutique Glow", category: "Shop Signage", image: "/portfolio/shop1.jpg" },
  { id: "5", title: "Corporate Reception Logo", category: "Office Signage", image: "/portfolio/office2.jpg" },
  { id: "6", title: "Highway Billboard", category: "Outdoor / Hoardings", image: "/portfolio/outdoor2.jpg" },
  { id: "7", title: "Cafe Interiors", category: "Restaurant Signage", image: "/portfolio/rest2.jpg" },
  { id: "8", title: "Jewelry Store Front", category: "Shop Signage", image: "/portfolio/shop2.jpg" },
];

const categories = [
  "All",
  "Shop Signage",
  "Office Signage",
  "Restaurant Signage",
  "Outdoor / Hoardings",
];

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<(typeof projects)[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              activeCategory === category
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-dark"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <GalleryItem
              key={project.id}
              {...project}
              onClick={() => setSelectedItem(project)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No projects found in this category.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center aspect-video relative">
                {/* Placeholder content for lightbox */}
                <div className="text-gray-400">
                  Top quality image of {selectedItem.title} would appear here.
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-bold text-white">{selectedItem.title}</h3>
                <p className="text-primary">{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
