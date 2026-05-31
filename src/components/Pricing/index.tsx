"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";
import pricingData from "@/data/pricingData";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-28 dark:bg-dark lg:pb-[90px] lg:pt-[150px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle=""
            title="Our Pricing"
            paragraph=""
            center
          />
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-gray-100 p-1 dark:bg-dark-3">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "monthly"
                  ? "bg-primary text-white shadow-md"
                  : "text-body-color dark:text-dark-6"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ${
                billingPeriod === "annual"
                  ? "bg-primary text-white shadow-md"
                  : "text-body-color dark:text-dark-6"
              }`}
            >
              Annual{" "}
              <span className="text-green-600 dark:text-green-400">
                (2 months free)
              </span>
            </button>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {pricingData.map((product, i) => (
            <PricingBox key={i} product={product} billingPeriod={billingPeriod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
