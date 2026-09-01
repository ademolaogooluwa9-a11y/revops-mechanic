"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  const problems = [
    {
      icon: "📊",
      title: "Traffic But No Leads",
      description:
        "Visitors leave without buying. We track drop-offs and fix leaks so your ad spend converts into real leads.",
    },
    {
      icon: "⏱️",
      title: "Slow Load Times",
      description:
        "40% of visitors leave if your site takes more than 3 seconds. We optimise speed so visitors stay and engage.",
    },
    {
      icon: "📱",
      title: "Broken Mobile Experience",
      description:
        "Over 60% of your traffic is mobile. We make your site flawless on every screen so you never lose a customer.",
    },
    {
      icon: "📋",
      title: "Too Many Form Fields",
      description:
        "Every extra field drops conversion by 10%. We shorten forms to the essentials so people actually fill them out.",
    },
    {
      icon: "💬",
      title: "No Follow‑Up System",
      description:
        "Leads go cold because you forget to follow up. We automate sequences so you never miss a sale again.",
    },
    {
      icon: "🤖",
      title: "No Chatbot or AI",
      description:
        "You lose leads after hours. We deploy AI chatbots that capture leads 24/7 while you sleep.",
    },
  ];

  const faqs = [
    {
      question: "Why should I trust you with my revenue?",
      answer:
        "We don't get paid unless we recover revenue. We work on a performance-based model – if we don't find leaks and fix them, you don't pay. That's how confident we are.",
    },
    {
      question: "How much revenue am I actually losing?",
      answer:
        "Most businesses lose 20-40% of potential revenue due to website friction. A £10,000/month business could be losing £2,000-£4,000 every single month. Our free audit shows you exactly how much.",
    },
    {
      question: "Why can't my current developer fix this?",
      answer:
        "Most developers build websites that look good – but they don't understand revenue operations. We're mechanics – we understand the entire revenue engine, not just the visual layer.",
    },
    {
      question: "What makes you different from other agencies?",
      answer:
        "Agencies charge by the hour. We charge by results. We don't build pretty websites – we build revenue machines that pay for themselves.",
    },
    {
      question: "How do I know you're not just guessing?",
      answer:
        "We don't guess. Every fix is based on data – analytics, heatmaps, user recordings, and conversion funnels. We find the leaks first, then we fix them systematically.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "We guarantee measurable improvements in conversion rates, lead capture, and load times within 30 days. If we don't deliver, you don't pay. Simple as that.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Clients typically see the first revenue recovery within 4-6 weeks – faster load times, more leads, and more sales. Some recover their investment within the first month.",
    },
    {
      question: "What if you break something?",
      answer:
        "We test everything on a staging environment first. Your live site is never touched until we're 100% certain the fix works. We have rollback procedures if anything goes wrong.",
    },
    {
      question: "Do you fix one problem or the whole system?",
      answer:
        "We fix the entire ecosystem – because revenue leaks are rarely isolated. We rebuild your revenue engine from the ground up so everything works together.",
    },
    {
      question: "What if my competitors are already ahead?",
      answer:
        "That's exactly why you need to act now. Every day you wait, they're capturing leads that should be yours. We can fast-track your recovery within 60 days.",
    },
    {
      question: "Do you understand my industry?",
      answer:
        "We've worked across 3 continents and multiple industries – SaaS, e-commerce, professional services, agencies, and more. The fundamentals are universal: speed, clarity, trust, and follow-through.",
    },
    {
      question: "How do you measure success?",
      answer:
        "We measure by recovered revenue – not likes or followers. We track conversion rates, lead quality, customer acquisition cost, and lifetime value.",
    },
    {
      question: "Why should I do a free audit first?",
      answer:
        "Because it gives you clarity. You'll see exactly what's broken, how much it's costing you, and what needs to be fixed – with no obligation.",
    },
    {
      question: "What happens after you fix the leaks?",
      answer:
        "We offer ongoing monitoring and support – because websites change and new leaks can appear. We also help you build new revenue streams with AI and analytics.",
    },
    {
      question: "How do I start?",
      answer:
        "Start with a free audit – we'll analyse your site, identify your leaks, and give you a clear action plan. No cost. No commitment. Just pure insight.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen">

      {/* ===== HERO ===== */}
      <section className="py-12 px-4 text-center bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white mb-2">
            About <span className="text-orange-500">RevOps Mechanic</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto">
            We fix the 6 revenue leaks that are silently draining your profits — one by one.
          </p>
        </div>
      </section>

      {/* ===== 6 REVENUE LEAKS (Clean Card Grid) ===== */}
      <section className="py-10 px-4 md:px-8 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
            The 6 Revenue Leaks We Fix
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/60 hover:border-orange-500/30 transition duration-300 flex items-start gap-3"
              >
                <div className="text-2xl md:text-3xl flex-shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 text-sm mb-8">
            Everything you need to know before you start.
          </p>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg border border-gray-200 shadow-sm overflow-hidden transition hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition duration-200"
                >
                  <span className="text-sm md:text-base font-medium text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gray-400 text-lg flex-shrink-0">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-4 pb-3 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-3">
              Still have questions? Let's talk.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] duration-200 text-sm md:text-base"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}