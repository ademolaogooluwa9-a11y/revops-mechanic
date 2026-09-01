"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const problems = [
    {
      icon: "📊",
      title: "Traffic But No Leads",
      description:
        "You're spending money on ads, but visitors leave without buying. We track exactly where they drop off and fix the leaks so your ad spend actually converts into real leads.",
    },
    {
      icon: "⏱️",
      title: "Slow Load Times",
      description:
        "40% of visitors leave if your site takes more than 3 seconds to load. We optimise images, code, and hosting so your site loads fast – keeping visitors engaged and ready to buy.",
    },
    {
      icon: "📱",
      title: "Broken Mobile Experience",
      description:
        "Over 60% of your traffic comes from phones. If your site breaks or looks bad on mobile, you're losing customers every single day. We make your site flawless on every screen.",
    },
    {
      icon: "📋",
      title: "Too Many Form Fields",
      description:
        "Each extra field on your contact form drops conversion by 10%. We shorten your forms to the absolute essentials – so people actually fill them out and become leads.",
    },
    {
      icon: "💬",
      title: "No Follow‑Up System",
      description:
        "Leads go cold because you forget to call back or follow up. We set up automated email/SMS sequences so you never miss a sale again – even while you sleep.",
    },
    {
      icon: "🤖",
      title: "No Chatbot or AI",
      description:
        "After hours, you lose leads because nobody answers. We deploy AI chatbots that qualify and capture leads 24/7, turning your website into a round‑the‑clock sales machine.",
    },
  ];

  const faqs = [
    {
      question: "Why should I trust you with my revenue?",
      answer:
        "Because we don't get paid unless we recover revenue. We work on a performance-based model – if we don't find leaks and fix them, you don't pay. That's how confident we are in our process. We're not selling you a 'nice website' – we're selling you money back in your pocket.",
    },
    {
      question: "How much revenue am I actually losing right now?",
      answer:
        "Most businesses lose between 20-40% of potential revenue due to website friction – slow load times, broken forms, confusing navigation, and missed follow-ups. A £10,000/month business could be losing £2,000-£4,000 every single month. Our free audit will show you exactly how much you're leaving on the table.",
    },
    {
      question: "Why can't my current developer fix these issues?",
      answer:
        "Most developers build websites that look good – but they don't understand revenue operations. They don't know where to look for leaks, what metrics matter, or how to connect your website to your sales process. We're mechanics – we understand the entire revenue engine, not just the visual layer.",
    },
    {
      question: "What makes your approach different from a traditional agency?",
      answer:
        "Traditional agencies charge by the hour and sell you more hours. We charge by results. We don't build you a 'pretty website' – we build you a revenue machine. Our focus is on making your website pay for itself by capturing more leads, converting more visitors, and recovering lost revenue.",
    },
    {
      question: "How do I know you're not just guessing?",
      answer:
        "We don't guess. Every fix is based on data – we analyse your analytics, heatmaps, user recordings, and conversion funnels before touching a single line of code. We find the leaks first, then we fix them systematically. You get a detailed report showing exactly what we found and what we recommend.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "We guarantee actionable results – you'll see measurable improvements in your conversion rates, lead capture, and load times within 30 days. If we don't deliver, you don't pay. Simple as that.",
    },
    {
      question: "How long does it take to recover lost revenue?",
      answer:
        "Clients typically see the first revenue recovery within 4-6 weeks – faster load times mean more visitors stay, fixed forms mean more leads captured, and automated follow-ups mean more sales closed. Some clients recover their investment within the first month.",
    },
    {
      question: "What happens if you break something?",
      answer:
        "We work with backup systems and test everything on a staging environment first. Your live site is never touched until we're 100% certain the fix works. And if something does go wrong (rare), we have rollback procedures in place – your business stays online.",
    },
    {
      question: "Do you just fix one problem or the whole system?",
      answer:
        "We fix the entire ecosystem – because revenue leaks are rarely isolated. A slow site affects mobile users, which affects conversion, which affects lead quality, which affects sales. We rebuild your revenue engine from the ground up so everything works together seamlessly.",
    },
    {
      question: "What if my competitors are already ahead?",
      answer:
        "That's exactly why you need to act now. Every day you wait, your competitors are capturing leads that should be yours. We can fast-track your recovery and get you ahead of the curve within 60 days – while others are still trying to figure out what's wrong.",
    },
    {
      question: "Do you understand my industry specifically?",
      answer:
        "We've worked across 3 continents and multiple industries – SaaS, e-commerce, professional services, agencies, and more. While every industry has its quirks, the fundamentals of revenue recovery are universal: speed, clarity, trust, and follow-through. We apply these principles to every client we work with.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure success by recovered revenue – not likes, followers, or vanity metrics. We track conversion rates, lead quality, customer acquisition cost, and lifetime value. If these numbers don't improve, we haven't done our job.",
    },
    {
      question: "Why should I do a free audit first?",
      answer:
        "Because a free audit gives you clarity. You'll see exactly what's broken, how much it's costing you, and what needs to be fixed. There's no obligation – just data. And if you decide to work with us, you'll know exactly what you're paying for and why.",
    },
    {
      question: "What happens after you fix the leaks?",
      answer:
        "We don't just disappear. We offer ongoing monitoring and support – because websites change, plugins update, and new leaks can appear. We can also help you build new revenue streams with AI chatbots, advanced analytics, and conversion optimisation as your business grows.",
    },
    {
      question: "How do I start protecting my revenue?",
      answer:
        "Start with a free audit – we'll analyse your site, identify your leaks, and give you a clear action plan. No cost. No commitment. Just pure, data-driven insight into what's losing you money and how to fix it.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="py-16 px-4 text-center bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            About <span className="text-orange-500">RevOps Mechanic</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            We fix the 6 revenue leaks that are silently draining your profits — one by one.
          </p>
        </div>
      </section>

      {/* ===== 6 REVENUE LEAKS ===== */}
      <section className="py-12 px-4 md:px-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            The 6 Revenue Leaks We Fix
          </h2>
          <div className="space-y-6">
            {problems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/60 hover:border-orange-500/30 transition duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Everything you need to know before you start.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden transition hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-4 md:px-6 py-4 text-left hover:bg-gray-100 transition duration-200"
                >
                  <span className="text-sm md:text-base font-medium text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 text-xl flex-shrink-0">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-4 md:px-6 pb-4 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Still have questions? Let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}