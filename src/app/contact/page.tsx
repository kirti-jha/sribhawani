import ContactForm from "@/components/contact/ContactForm";
import React from "react";
import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact Us | Professional Signage Solutions',
  description: 'Get in touch with us for all your signage needs. Call, WhatsApp or visit our workshop.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-dark text-white py-16 md:py-24 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
          Contact Us
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Ready to upgrade your business signage? Get a free quote today.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Side */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold font-heading mb-6 text-dark border-b pb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <a href="tel:+919911092528" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 hover:bg-primary hover:text-white transition" aria-label="Call Us">
                    <Phone size={20} />
                  </a>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <a href="tel:+919911092528" className="text-lg font-bold text-dark hover:text-primary transition">+91 99110 92528</a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Sat, 9am - 8pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <a href="mailto:sribhawanicommunication@gmail.com" className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 hover:bg-primary hover:text-white transition" aria-label="Email Us">
                    <Mail size={20} />
                  </a>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <a href="mailto:sribhawanicommunication@gmail.com" className="text-lg font-bold text-dark hover:text-primary transition break-all">sribhawanicommunication@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Workshop Address</p>
                    <p className="text-dark font-medium leading-relaxed">
                      123, Signage Lane,<br />
                      Near City Market, Sector 4,<br />
                      Your City, State - 123456
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 h-64 overflow-hidden relative">
              {/* Placeholder Map - In real app use Google Maps Embed */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={32} className="mx-auto mb-2 text-gray-400" />
                  <span className="font-medium">Google Map Embed</span>
                </div>
              </div>
              {/* <iframe 
                        src="https://www.google.com/maps/embed?pb=..." 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <React.Suspense fallback={<div className="h-96 bg-white rounded-2xl shadow-lg animate-pulse" />}>
              <ContactForm />
            </React.Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
