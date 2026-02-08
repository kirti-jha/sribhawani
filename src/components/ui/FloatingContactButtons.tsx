import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919911092528" // Replace with actual number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </Link>

      {/* Phone Call Button */}
      <Link
        href="tel:+919911092528" // Replace with actual number
        className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-red-700 transition-all hover:scale-110 active:scale-95"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </Link>
    </div>
  );
}
