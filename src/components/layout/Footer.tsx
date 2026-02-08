import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight font-heading">
                Sri Bhawani <span className="text-primary">Communication</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Serving businesses since 2015 with high-quality signage solutions.
              We blend creativity with durability to make your brand shine.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-dark-lighter rounded-full hover:bg-primary transition text-gray-300 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 bg-dark-lighter rounded-full hover:bg-primary transition text-gray-300 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="p-2 bg-dark-lighter rounded-full hover:bg-primary transition text-gray-300 hover:text-white">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Our Products", href: "/products" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Our Services</h3>
            <ul className="space-y-3">
              {[
                "LED Sign Boards",
                "Acrylic Name Plates",
                "Glow Sign Boards",
                "Neon Signage",
                "Flex Printing",
                "3D Letter Logo",
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-heading">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span className="text-gray-400">
                  123, Signage Lane, Near City Market, Your City, State - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <a href="tel:+919911092528" className="hover:text-white transition" aria-label="Call Us">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                </a>
                <a href="tel:+919911092528" className="text-gray-400 hover:text-white transition">
                  +91 99110 92528
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:sribhawanicommunication@gmail.com" className="hover:text-white transition" aria-label="Email Us">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                </a>
                <a href="mailto:sribhawanicommunication@gmail.com" className="text-gray-400 hover:text-white transition break-all">
                  sribhawanicommunication@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-400">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-lighter pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sri Bhawani Communication. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
