"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface GalleryItemProps {
  id: string;
  title: string;
  category: string;
  image: string;
  onClick: () => void;
}

export default function GalleryItem({ title, category, image, onClick }: GalleryItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group relative cursor-pointer break-inside-avoid mb-6 rounded-2xl overflow-hidden"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] bg-gray-200">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <span className="text-sm">Project: {title}</span>
        </div>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
            <Plus size={24} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 text-white">
        <p className="text-primary font-medium text-sm mb-1">{category}</p>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </motion.div>
  );
}
