"use client";

import { ShieldCheck, Clock, Award, PenTool } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We use only the best materials (ACP, Acrylic, LEDs) that last for years without fading.",
  },
  {
    icon: PenTool,
    title: "Custom Designs",
    description: "Our team creates unique designs tailored to your brand identity and vision.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Pricing",
    description: "Get factory-direct rates with no hidden costs. Best value for your investment.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines. Expect your signage installed and ready exactly when promised.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wide uppercase mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              We Don't Just Make Signs, We Build Brands.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              With over a decade of experience, we understand that your signage is the first impression your customers get.
              We ensure it's a lasting one.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-dark-lighter rounded-lg flex items-center justify-center text-primary mb-2 border border-white/10">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-dark-lighter border border-white/10 flex items-center justify-center">
            {/* Abstract visual or image placeholder */}
            <div className="absolute inset-0 pattern-grid-lg opacity-10"></div>
            <div className="text-center p-8 z-10">
              <div className="text-6xl font-bold text-white mb-2">10+</div>
              <div className="text-xl text-gray-400">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
