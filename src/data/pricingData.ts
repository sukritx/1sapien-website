import { Price } from "@/types/price";

const pricingData: Price[] = [
  {
    id: "starter",
    unit_amount: 9900,
    unit_amount_annual: 100800,
    nickname: "Starter",
    description: "Less than 50 New Customers Per Month",
    badge: "2 Months Free",
    offers: [
      "Get 4x More Reviews & Referrals",
      "Automated Text & Email Requests",
      "Personalized Image Requests",
      "Automated Social Review Sharing",
      "Automated AI Review Responses",
      "Done For You Custom Integration",
    ],
    cta: "Start Free",
  },
  {
    id: "standard",
    unit_amount: 17900,
    unit_amount_annual: 180000,
    nickname: "Standard",
    description: "50-100 New Customers Per Month",
    badge: "2 Months Free",
    offers: [
      "Get 4x More Reviews & Referrals",
      "Automated Text & Email Requests",
      "Personalized Image Requests",
      "Automated Social Review Sharing",
      "Automated AI Review Responses",
      "Done For You Custom Integration",
    ],
    cta: "Start Free",
  },
  {
    id: "scale",
    unit_amount: 27900,
    unit_amount_annual: 279600,
    nickname: "Scale",
    description: "100-300 New Customers Per Month",
    badge: "2 Months Free",
    offers: [
      "Get 4x More Reviews & Referrals",
      "Automated Text & Email Requests",
      "Personalized Image Requests",
      "Automated Social Review Sharing",
      "Automated AI Review Responses",
      "Done For You Custom Integration",
    ],
    cta: "Start Free",
  },
];
export default pricingData;
