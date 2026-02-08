import ProductGrid from "@/components/products/ProductGrid";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products | Professional Signage Solutions',
  description: 'Explore our wide range of signage products including LED boards, Glow signs, ACP framing, and more.',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-dark text-white py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Our Products
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Explore our comprehensive range of high-quality signage solutions designed to elevate your brand visibility.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10">
        <ProductGrid />
      </div>
    </div>
  );
}
