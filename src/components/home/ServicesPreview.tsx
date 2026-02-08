"use client";

import Link from "next/link";
import { ArrowRight, Zap, Type, Lightbulb, Box } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Zap,
    title: "LED Sign Boards",
    description: "Bright, energy-efficient LED boards that ensure visibility day and night.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: Box,
    title: "3D Acrylic Letters",
    description: "Premium raised lettering for a professional and sophisticated office look.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Lightbulb,
    title: "Glow Sign Boards",
    description: "Classic illuminated signage perfect for retail shops and local businesses.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: Type,
    title: "Flex & Vinyl Printing",
    description: "High-quality hoardings and banners for temporary promotions and events.",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-dark">
            Our Premium Services
          </h2>
          <p className="text-gray-600 text-lg">
            We offer a wide range of signage solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{service.title}</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <Link
                href="/products"
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-red-700 transition"
              >
                Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-3 border border-dark text-dark font-medium rounded-full hover:bg-dark hover:text-white transition-all"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
