"use client";

import { useState } from "react";

const faqData = [
  {
    question: "When am I going to start seeing results?",
    answer:
      "This will completely depend on what else you're doing for advertising, how long you've been in business, the quality of your work, and of course that you commit to using our system. If you think you're going to close your eyes and pay us to solve all your problems, we're probably not the right fit for you. We cannot stress this enough... you have to be doing multiple forms of advertising. 1Sapien is meant to provide you a simple, yet extremely effective foundational marketing system to help grow and expand your business. We're here to build your online business foundation, not perform miracles.",
  },
  {
    question: "Explain how you help me grow my business",
    answer:
      "Sure...\n\n1. Do you believe having more 5 star reviews will attract more customers?\n\n2. Do you believe that being able to be found online and having a professional website that actually works will help you convert more leads into paying customers?\n\n3. Do you believe that instantly following up with incoming leads will make you look more professional, therefore leading to more business?\n\n4. Do you believe making sure you're making the most of every customer you work with by putting them into automated re-marketing campaigns will make them more likely to work with you again?\n\n5. Do you believe offering discounts for friends of your past customers will increase the number of referrals you get?\n\n6. Do you believe using automation and AI could free you from repeating the same basic tasks in your business, therefore giving you more time for other things?\n\n7. Do you believe having these systems in place is important to grow your business?\n\nIf you believe any of those things can grow your business, that's exactly what we can help you with.",
  },
  {
    question: "Why is your pricing so cheap?",
    answer:
      "Our only interest is keeping you for 10+ years. We believe the best way to do that is to be priced affordably. We believe if we don't overcharge and provide you with excellent service, you'll never have a reason to leave.",
  },
  {
    question: "What happens if I decide to cancel my membership?",
    answer:
      "We'll be extremely sad to see you go, but after a good cry we'll bounce back. However, you will lose access to all the features we set up for you.",
  },
  {
    question: "Can people find my website on Google?",
    answer:
      "We make sure every 1Sapien website is set up for Google with the best SEO practices. This includes keyword research, adding alt tags, meta tags, and header titles, securing an SSL certificate, optimizing for a high Google Speed test score, and providing regular updates. Your Google ranking will depend on how long your site's been live, local competition, and factors like your Google My Business reviews. We also offer blogging to boost your content. While we don't handle off-page backlinks beyond your social media, our ongoing updates keep your site in great shape — unlike some developers who set up your site and then forget about it.",
  },
  {
    question: "Why should I spend on a website when word of mouth is already pulling in business?",
    answer:
      "We might be a bit biased, but here's the deal: if each of your customers brings in about $500 a year, getting just 2-4 new customers from your website will pay off. We know you'll see great value from your site. It will help you attract new customers, make it easier for existing customers to refer you, allow you to run ads if you want, and attract bigger clients who value professionalism.",
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
          isOpen ? "max-h-[800px] pb-6" : "max-h-0"
        }`}
      >
        <p className="whitespace-pre-line text-base leading-relaxed text-body-color dark:text-dark-6">
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
