"use client";

import { useState } from "react";

const faqData = [
  {
    question: "How quickly can I get a functional website?",
    answer:
      "We can get your functional website up and running within 1-2 weeks. It comes pre-loaded with lead capture, text-to-phone integration, and everything you need to start turning visitors into conversations.",
  },
  {
    question: "What is a 5-Star Review Funnel?",
    answer:
      "It's an automated system that follows up with your customers and gently nudges them to leave a review. People forget — we make sure they remember. After a few friendly reminders, those 5-star reviews start rolling in.",
  },
  {
    question: "How does Missed Call Text Back work?",
    answer:
      "When you miss a call, our system automatically sends a text message to the caller within seconds. Something like: 'Hey, sorry we missed your call! How can we help?' It's simple, and it means you never lose a lead to a missed call again.",
  },
  {
    question: "What are One-Click Marketing Campaigns?",
    answer:
      "We set up pre-built marketing campaigns (referrals, repeat customers, promotions) that you can launch with a single click. No marketing degree required — just click and go.",
  },
  {
    question: "How long does SEO actually take?",
    answer:
      "Honestly? It takes time. Anyone who tells you they can rank you #1 in a week is lying. Real local SEO typically takes 3-6 months to show meaningful results, but the long-term payoff is worth it. We focus on sustainable growth, not shortcuts.",
  },
  {
    question: "Do I need to be tech-savvy to use this?",
    answer:
      "Not at all. That's the whole point. We build simple systems that actually work. If you can send a text message, you can use our platform. No degrees required, just a hard hat.",
  },
];

const SingleFaq = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-dark-3">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left sm:py-6"
      >
        <span className="pr-4 text-lg font-semibold text-dark dark:text-white sm:text-xl">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6L8 10L12 6" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-12 max-w-[640px] text-center lg:mb-20" data-wow-delay=".1s">
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Any Questions? Answered
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
            Got questions? We&apos;ve got answers. If you don&apos;t see yours here, just reach out.
          </p>
        </div>

        <div className="wow fadeInUp mx-auto max-w-[780px]" data-wow-delay=".2s">
          {faqData.map((faq, i) => (
            <SingleFaq
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
