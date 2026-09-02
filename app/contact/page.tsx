"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    businessType: "",
    questions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setShowSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
          businessType: "",
          questions: "",
        });
        setTimeout(() => setShowSuccess(false), 6000);
      } else {
        const errorData = await response.json();
        setSubmitError(errorData.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* ===== FORM SECTION (NO NAVBAR — ALREADY IN LAYOUT) ===== */}
      <section className="py-12 px-4 md:px-8 bg-white max-w-full">
        <div className="max-w-2xl mx-auto w-full">

          <div className="text-center mb-10">
            <div className="text-4xl mb-3">🔧</div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Get Your Free Revenue Audit
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
              We'll analyse your website and tell you exactly what's losing you money — no cost, no commitment.
            </p>
          </div>

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 text-base"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 text-base"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 text-base"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 text-base"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 text-base"
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

            <div>
              <label htmlFor="questions" className="block text-sm font-medium text-gray-700 mb-1">
                Your Questions (optional)
              </label>
              <textarea
                id="questions"
                name="questions"
                value={formData.questions}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-gray-900 text-base resize-y"
                placeholder="E.g., Do you work with e-commerce stores? How long does the audit take?"
              />
              <p className="text-xs text-gray-400 mt-1">
                Tell us anything specific you'd like us to know about your website or business.
              </p>
            </div>

            {submitError && (
              <div className="text-red-600 text-sm text-center">{submitError}</div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-base"
            >
              {isSubmitting ? "Sending..." : "📩  Send My Free Audit"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>

        </div>
      </section>

      {/* ===== SUCCESS TOAST ===== */}
      {showSuccess && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 shadow-lg z-50 max-w-md w-full mx-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="text-2xl">✅</div>
            <div className="flex-1">
              <h3 className="font-bold text-green-800 text-sm">Thank You!</h3>
              <p className="text-green-600 text-xs md:text-sm">
                We'll analyse your website and get back to you within 48 hours.
              </p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-gray-400 hover:text-gray-600 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}

    </main>
  );
}