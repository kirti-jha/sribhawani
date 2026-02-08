import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio | Professional Signage Solutions',
  description: 'View our gallery of completed projects including office branding, shop fronts, restaurants, and outdoor hoardings.',
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Page Header */}
      <div className="bg-dark text-white py-16 md:py-24 text-center px-4">
        <span className="text-primary font-semibold tracking-wide uppercase mb-2 block">Our Work</span>
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Project Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Take a look at some of our recent projects. We take pride in delivering high-quality signage that stands the test of time.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10 mb-10">
        <PortfolioGrid />
      </div>
    </div>
  );
}
