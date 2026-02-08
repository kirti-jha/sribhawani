import type { Metadata } from 'next'
import { CheckCircle2, Users, Target, History } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Professional Signage Solutions',
  description: 'Learn about our journey, mission, and the team behind the best signage solutions in the city.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Hero Section */}
      <div className="bg-dark text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          About Sri Bhawani Communication
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Building brands with precision, creativity, and quality since 2015.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
            {/* Placeholder for workshop or team photo */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-200">
              <span className="text-lg font-medium">Workshop / Team Photo</span>
            </div>
          </div>

          <div>
            <span className="text-primary font-semibold tracking-wide uppercase mb-2 block">Our Story</span>
            <h2 className="text-3xl font-bold font-heading mb-6 text-dark max-w-lg">
              A Legacy of Quality Craftsmanship
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Started in 2015 by Mr. Sharma, Sri Bhawani Communication began as a small workshop with a passion for helping local businesses stand out. Over the years, we have grown into a full-scale signage manufacturing unit equipped with modern CNC, Laser, and Printing machines.
              </p>
              <p>
                Our journey has been defined by one core principle: <strong>Quality First.</strong> We believe that a sign board is not just an expense, but an investment that works for your brand 24/7.
              </p>
              <p>
                Today, we are proud to have completed over 500+ projects for offices, retail chains, builders, and hospitals across the region.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative, durable, and affordable signage solutions that help businesses create a powerful visual identity and attract more customers.
            </p>
          </div>

          <div className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center text-orange-600 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-dark mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted signage partner in the region, known for our craftsmanship, technology adoption, and customer-centric approach.
            </p>
          </div>
        </div>

        {/* Why Trust Us (Expanded) */}
        <div>
          <h2 className="text-3xl font-bold font-heading mb-10 text-center text-dark">Why We Are Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Premium Materials", text: "We use only A-grade ACP, branded Acrylics, and waterproof LEDs." },
              { title: "In-House Production", text: "From welding to laser cutting, everything happens in our workshop." },
              { title: "Design Support", text: "Our graphic designers help you visualize the sign before production." },
              { title: "After-Sales Service", text: "We offer 1-year warranty on LEDs and drivers for peace of mind." },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-dark mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
