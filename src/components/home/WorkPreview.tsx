"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Placeholder images - in a real scenario, these would be actual project images
const works = [
  { id: 1, title: "Modern Cafe Sign", category: "LED Board", image: "/work1.jpg" },
  { id: 2, title: "Corporate Office Branding", category: "3D Letters", image: "/work2.jpg" },
  { id: 3, title: "Retail Shop Front", category: "Glow Sign", image: "/work3.jpg" },
  { id: 4, title: "Outdoor Hoarding", category: "Flex Printing", image: "/work4.jpg" },
];

export default function WorkPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-primary font-semibold tracking-wide uppercase mb-2 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-dark">
              See Our Recent Works
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center text-primary font-semibold hover:text-red-700 transition"
          >
            View All Projects <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((work) => (
            <div key={work.id} className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-100">
              {/* Image Placeholder if no real image */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-sm">Image: {work.title}</span>
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {work.category}
                </span>
                <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center px-6 py-3 border border-dark text-dark font-medium rounded-full hover:bg-dark hover:text-white transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
