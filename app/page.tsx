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
      <section className="pt-8 pb-4 px-4 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center pt-4 md:pt-8">

            <span className="inline-block bg-orange-500/10 text-orange-400 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-4 border border-orange-500/20 animate-fade-in-up">
              🔧 Revenue Recovery Specialists
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.2] tracking-tight mb-3 animate-fade-in-up animate-delay-1">
              Your Website Is Losing You
              <br />
              <span className="text-orange-500">Money Every Day</span>
            </h1>

            <p className="text-base md:text-lg text-gray-300 font-medium leading-relaxed mb-4 animate-fade-in-up animate-delay-2">
              Your website is <span className="text-red-400 font-bold">bleeding revenue</span>. We stop the bleeding.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-gray-300 font-semibold mb-6 animate-fade-in-up animate-delay-3">
              <span className="flex items-center gap-1.5"><span className="text-lg">💰</span> 100+ Leads Recovered</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">🌍</span> 3 Continents Served</span>
              <span className="flex items-center gap-1.5"><span className="text-lg">⏱️</span> 30-Day Results Guarantee</span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animate-delay-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-sm md:text-base transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block relative group"
              >
                Free Audit
                <span className="absolute inset-0 rounded-xl bg-orange-500/20 blur-xl group-hover:blur-2xl transition -z-10"></span>
              </Link>
              <button
                onClick={scrollToWhy}
                className="px-8 py-3.5 border-2 border-white/30 hover:border-white/60 rounded-xl font-bold text-sm md:text-base text-white transition hover:bg-white/10 inline-block"
              >
                Learn More
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-6 animate-fade-in-up animate-delay-5">
              🔒 No credit card required · Results in 48 hours
            </p>

          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY BAR ===== */}
      <section className="py-4 px-4 bg-gray-900/50 border-y border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] text-gray-500 text-center uppercase tracking-wider mb-3">
            Trusted by businesses across 3 continents
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            <span className="text-gray-400 font-bold text-sm md:text-base opacity-70">SaaS</span>
            <span className="text-gray-400 font-bold text-sm md:text-base opacity-70">E‑Commerce</span>
            <span className="text-gray-400 font-bold text-sm md:text-base opacity-70">Agencies</span>
            <span className="text-gray-400 font-bold text-sm md:text-base opacity-70">Healthcare</span>
            <span className="text-gray-400 font-bold text-sm md:text-base opacity-70">Real Estate</span>
            <span className="text-gray-400 font-bold text-sm md:text-base opacity-70">Education</span>
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
//  WHY SECTION (No pause text)
// ============================================================
function WhySection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      title: "Who We Are",
      points: [
        "We're revenue mechanics, not just web developers",
        "We find leaks others miss — slow speed, broken forms, lost leads",
        "We rebuild systems, not just patch problems",
        "Your website becomes a 24/7 lead-generating machine",
      ],
    },
    {
      title: "Why Choose Us",
      points: [
        "You only pay when we recover revenue — performance-based",
        "We've fixed leaks across 3 continents and 10+ industries",
        "We spot problems in minutes that others miss for months",
        "No lock-in contracts — we earn your trust every month",
      ],
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slides.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToSlide = (index: number) => {
    setSlideIndex(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section
      className="py-8 md:py-12 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-950"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
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
                <h3 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-4">
                  {slide.title}
                </h3>
                <ul className="text-sm md:text-base text-gray-300 leading-relaxed space-y-3 max-w-2xl text-left">
                  {slide.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition duration-300 ${
                slideIndex === index ? "bg-orange-500 w-6" : "bg-gray-600 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 rounded-xl font-bold text-sm md:text-base transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block relative group"
          >
            Get Your Free Audit
            <span className="absolute inset-0 rounded-xl bg-orange-500/20 blur-xl group-hover:blur-2xl transition -z-10"></span>
          </Link>
        </div>

      </div>
    </section>
  );
}

// ============================================================
//  UPGRADE GRID
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
              className="bg-gray-800/60 rounded-xl p-4 md:p-6 border border-gray-700/60 hover:border-orange-500/40 transition duration-300 hover:shadow-lg hover:shadow-orange-500/10 text-center group"
            >
              <div className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition">{level.icon}</div>
              <h3 className="text-base md:text-lg font-bold text-white mb-1.5">{level.title}</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{level.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
//  TESTIMONIALS (with avatars)
// ============================================================
function ResultsTestimonials() {
  const items = [
    {
      stat: "£2.4M+",
      label: "Revenue Recovered",
      quote: "They didn't just patch the leak — they gave us a system that actually works.",
      name: "James Hartley",
      role: "CEO",
      company: "SaaS Co. (US)",
      initials: "JH",
      bgColor: "bg-blue-500",
      rating: 5,
    },
    {
      stat: "200+",
      label: "Leads Saved",
      quote: "They literally saved our business from going under.",
      name: "Sarah Bennett",
      role: "Founder",
      company: "UK Store",
      initials: "SB",
      bgColor: "bg-purple-500",
      rating: 5,
    },
    {
      stat: "40%",
      label: "Average Conversion Lift",
      quote: "In less than 30 days, our conversion rate jumped by 40%.",
      name: "Mark Reynolds",
      role: "Head of Growth",
      company: "UK SaaS",
      initials: "MR",
      bgColor: "bg-green-500",
      rating: 5,
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
              <div className={`w-16 h-16 mx-auto ${item.bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl mb-3`}>
                {item.initials}
              </div>
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">⭐</span>
                ))}
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-orange-500 tracking-tight leading-none mb-1">
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
            className="px-8 md:px-10 py-3.5 md:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 inline-block text-sm md:text-base relative group"
          >
            Get Your Free Audit
            <span className="absolute inset-0 rounded-xl bg-orange-500/20 blur-xl group-hover:blur-2xl transition -z-10"></span>
          </Link>
        </div>
      </div>
    </section>
  );
}