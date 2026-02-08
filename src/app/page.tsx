import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkPreview from "@/components/home/WorkPreview";
import TrustIndicators from "@/components/home/TrustIndicators";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <WorkPreview />
      <TrustIndicators />
    </div>
  );
}
