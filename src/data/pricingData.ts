import { Price } from "@/types/price";

const pricingData: Price[] = [
  {
    id: "starter",
    unit_amount: 99900,
    nickname: "Starter",
    offers: [
      "5-page custom website",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "Mobile-friendly",
    ],
  },
  {
    id: "premium",
    unit_amount: 249900,
    nickname: "Premium",
    offers: [
      "10-page custom website",
      "Responsive design",
      "Advanced SEO optimization",
      "CMS integration",
      "E-commerce ready (up to 50 products)",
      "3 rounds of revisions",
      "Analytics dashboard",
      "30 days post-launch support",
    ],
  },
  {
    id: "enterprise",
    unit_amount: 499900,
    nickname: "Enterprise",
    offers: [
      "Unlimited custom pages",
      "Responsive design",
      "Full SEO & performance optimization",
      "Custom web application features",
      "E-commerce with unlimited products",
      "Unlimited revisions",
      "Priority support",
      "90 days post-launch support",
      "Dedicated project manager",
    ],
  },
];
export default pricingData;
