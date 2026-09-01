"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const whySectionRef = useRef<HTMLElement>(null);

  const scrollToWhy = () => {
    whySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="pt-8 pb-4 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center pt-4 md:pt-8">

            <span className="inline-block bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-4 border border-orange-500/20">
              🔧 Revenue Recovery Specialists
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight mb-3">
              Your Website Is Losing You
              <br />
              <span className="text-orange-500">Money Every Day</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-4">
              Your website is <span className="text-red-400 font-bold">bleeding revenue</span>. We stop the bleeding.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-300 font-semibold mb-6">
              <span className="flex items-center gap-1.5"><span className="text-lg">💰</span> 100+ Leads Recovered</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">🌍</span> 3 Continents Served</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">⏱️</span> 30-Day Results Guarantee</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-sm md:text-base transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block"
              >
                Free Audit
              </Link>
              <button
                onClick={scrollToWhy}
                className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 rounded-xl font-bold text-sm md:text-base text-white transition hover:bg-white/10 inline-block"
              >
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHY REVOPS MECHANIC ===== */}
      <section ref={whySectionRef} id="why-section">
        <WhySection />
      </section>

      {/* ===== UPGRADE GRID ===== */}
      <UpgradeSection />

      {/* ===== RESULTS & TESTIMONIALS ===== */}
      <ResultsTestimonials />

    </main>
  );
}

// ============================================================
//  WHY SECTION (Tighter Spacing)
// ============================================================
function WhySection() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: "Who We Are",
      text: "We are not a typical agency. We are mechanics — we dig deep into the engine of your revenue operations, find every crack, every leak, every broken part, and fix what's broken. We don't just look at the surface. We go underneath, into the systems that drive your business, and we rebuild them from the ground up. Every website has leaks. Some are obvious — slow load times, broken forms, clunky mobile experiences. Others are hidden — missed follow-ups, abandoned carts, leads that fall through the cracks. Most agencies just apply band-aids. They give you a quick fix, collect their fee, and move on. But band-aids don't last. The leak comes back. The revenue stops flowing again. We do things differently. We rebuild the entire system so revenue flows — consistently, predictably, and at scale. We don't stop until your website performs like a well-oiled machine. Every part works together. Every visitor has a clear path. Every lead gets captured. Every customer feels valued.",
    },
    {
      title: "Why Choose Us",
      text: "We don't charge by the hour. We charge by the result. You pay us when we recover revenue — not before. That's how confident we are in our work. If we don't find leaks and fix them, you don't pay. It's that simple. With clients across 3 continents, we've seen every leak, every bug, every broken funnel. We've worked with e-commerce stores, service businesses, SaaS platforms, and agencies. We've seen it all — and we know exactly where to look. We can spot a leak in minutes that others miss for months. Our name isn't just clever branding. It's our promise. We are mechanics. We fix what's broken. We don't just talk about results — we deliver them. We're not here to sell you a subscription. We're not here to lock you into a monthly retainer that bleeds your budget dry. We're here to fix your website, hand you the keys, and say — \"You're good. Go grow.\" That's who we are. That's what we do. That's why clients trust us.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Why <span className="text-orange-500">RevOps Mechanic</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium">
            Your revenue deserves more than a patch.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col justify-center items-center text-center px-2"
              >
                <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3">
                  {slide.title}
                </h3>
                <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-3 max-w-2xl">
                  {slide.text.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition duration-300 ${
                slideIndex === index ? "bg-orange-500 w-6" : "bg-gray-600"
              }`}
              onClick={() => setSlideIndex(index)}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-sm md:text-base transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block"
          >
            Get Your Free Audit
          </Link>
        </div>

      </div>
    </section>
  );
}

// ============================================================
//  UPGRADE GRID (Smaller Boxes on Mobile)
// ============================================================
function UpgradeSection() {
  const levels = [
    {
      icon: "🔧",
      title: "Diagnose & Patch",
      description:
        "Quick wins — fix the obvious leaks that are losing you money right now. We optimize speed, fix broken forms, and ensure your site works on every device.",
    },
    {
      icon: "⚙️",
      title: "Rebuild & Optimize",
      description:
        "Full system overhaul. We rebuild your funnel, automate follow‑ups, optimize every touchpoint, and turn your website into a lead‑generating machine.",
    },
    {
      icon: "🚀",
      title: "Revenue Engine",
      description:
        "Complete transformation. AI chatbots, advanced analytics, and a self‑sustaining revenue system that captures leads 24/7 and grows with your business.",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Your Path to <span className="text-orange-500">Revenue Recovery</span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 font-medium">
            Three levels of service — from quick fixes to a complete revenue engine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className="bg-gray-800/60 rounded-xl p-4 md:p-6 border border-gray-700/60 hover:border-orange-500/40 transition duration-300 hover:shadow-lg hover:shadow-orange-500/10 text-center"
            >
              <div className="text-3xl md:text-4xl mb-2">{level.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{level.title}</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
//  RESULTS & TESTIMONIALS (Tighter Spacing)
// ============================================================
function ResultsTestimonials() {
  const items = [
    {
      icon: "💰",
      stat: "£2.4M+",
      label: "Revenue Recovered",
      quote: "They didn't just patch the leak — they gave us a system that actually works.",
      name: "James Hartley",
      role: "CEO",
      company: "SaaS Co. (US)",
    },
    {
      icon: "📈",
      stat: "200+",
      label: "Leads Saved",
      quote: "They literally saved our business from going under.",
      name: "Sarah Bennett",
      role: "Founder",
      company: "UK Store",
    },
    {
      icon: "⚡",
      stat: "40%",
      label: "Average Conversion Lift",
      quote: "In less than 30 days, our conversion rate jumped by 40%.",
      name: "Mark Reynolds",
      role: "Head of Growth",
      company: "UK SaaS",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
            Real Results, Real Voices
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            Hard numbers. Real stories. No fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-5 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-3xl md:text-4xl mb-2">{item.icon}</div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-black text-orange-500 tracking-tight leading-none mb-1">
                {item.stat}
              </div>
              <div className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                {item.label}
              </div>
              <blockquote className="text-sm md:text-base text-gray-700 leading-relaxed mb-3 font-medium">
                “{item.quote}”
              </blockquote>
              <div className="text-xs md:text-sm text-gray-500">
                <span className="font-bold text-gray-800">{item.name}</span>
                <span className="mx-1">—</span>
                <span>{item.role}</span>
                <span className="mx-1">·</span>
                <span>{item.company}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link
            href="/contact"
            className="px-8 md:px-10 py-3.5 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block text-sm md:text-base"
          >
            Get Your Free Audit
          </Link>
        </div>

      </div>
    </section>
  );
}