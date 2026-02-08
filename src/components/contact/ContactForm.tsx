"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const searchParams = useSearchParams();
  const productInterest = searchParams.get("product");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (productInterest) {
      setMessage(`Hi, I'm interested in the ${productInterest}. Please send me a quote.`);
    }
  }, [productInterest]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("success");

    // Reset after success
    // setTimeout(() => setFormState("idle"), 3000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold font-heading mb-6 text-dark">Send us a Message</h3>

      {formState === "success" ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} />
          </div>
          <h4 className="text-xl font-bold text-dark mb-2">Message Sent!</h4>
          <p className="text-gray-500">Thank you for contacting us. We will get back to you shortly.</p>
          <button
            onClick={() => setFormState("idle")}
            className="mt-6 text-primary font-medium hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
              placeholder="I'm interested in..."
            />
          </div>

          <button
            type="submit"
            disabled={formState === "submitting"}
            className={clsx(
              "w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all",
              formState === "submitting"
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {formState === "submitting" ? (
              <>Processing...</>
            ) : (
              <>Send Message <Send size={18} /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
