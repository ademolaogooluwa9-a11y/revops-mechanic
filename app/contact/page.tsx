"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          businessType: "",
        });
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white font-sans antialiased">

      {/* ===== NAVBAR ===== */}
      <nav className="py-4 px-4 bg-gray-950/90 border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl md:text-2xl font-extrabold text-orange-500 tracking-tight">RevOps</span>
            <span className="text-xl md:text-2xl font-extrabold text-white tracking-tight">Mechanic</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-300 hover:text-white transition font-medium">Home</Link>
            <Link href="/about" className="text-sm text-gray-300 hover:text-white transition font-medium">About</Link>
            <Link href="/contact" className="text-sm text-orange-400 hover:text-orange-300 transition font-medium">Contact</Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold text-sm transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Free Audit
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== CONTENT ===== */}
      <section className="py-16 px-4 bg-white min-h-[80vh]">
        <div className="max-w-2xl mx-auto">

          <div className="text-center mb-10">
            <div className="text-4xl mb-3">🔧</div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Get Your Free Revenue Audit
            </h1>
            <p className="text-sm md:text-base text-gray-600">
              We'll analyse your website and tell you exactly what's losing you money — no cost, no commitment.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-600">
                We've received your request. We'll analyse your website and get back to you within 48 hours with a detailed report.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-orange-500 hover:text-orange-600 font-medium text-sm"
              >
                Submit another request →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                  placeholder="+44 7700 900000"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                  placeholder="https://www.yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type *
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900"
                >
                  <option value="">Select your business type</option>
                  <option value="ecommerce">E-commerce / Retail</option>
                  <option value="saas">SaaS / Software</option>
                  <option value="agency">Agency / Freelance</option>
                  <option value="professional-services">Professional Services (Legal, Accounting)</option>
                  <option value="healthcare">Healthcare / Wellness</option>
                  <option value="education">Education / Training</option>
                  <option value="real-estate">Real Estate / Property</option>
                  <option value="manufacturing">Manufacturing / Industrial</option>
                  <option value="nonprofit">Non-Profit / Charity</option>
                  <option value="other">Other (please specify)</option>
                </select>
              </div>

              {submitError && (
                <div className="text-red-600 text-sm text-center">{submitError}</div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "📩  Send My Free Audit"}
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          )}

        </div>
      </section>

    </main>
  );
}