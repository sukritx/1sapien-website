import React from "react";
import OfferList from "./OfferList";
import { Price } from "@/types/price";
import Link from "next/link";

const PricingBox = ({
  product,
  billingPeriod,
}: {
  product: Price;
  billingPeriod: "monthly" | "annual";
}) => {
  const isAnnual = billingPeriod === "annual";
  const displayPrice = isAnnual
    ? product.unit_amount_annual / 12 / 100
    : product.unit_amount / 100;
  const annualTotal = product.unit_amount_annual / 100;

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14"
        data-wow-delay=".1s"
      >
        {isAnnual && (
          <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-green-600 px-5 py-2 text-base font-medium text-white">
            {product.badge}
          </p>
        )}
        <span className="mb-1 block text-2xl font-semibold text-dark dark:text-white">
          {product.nickname}
        </span>
        <span className="mb-5 block text-base text-body-color dark:text-dark-6">
          {product.description}
        </span>
        <h2 className="mb-2 text-5xl font-bold text-dark dark:text-white xl:text-[56px] xl:leading-[1.21]">
          <span className="text-2xl font-semibold">$</span>
          <span className="-ml-1 -tracking-[2px]">
            {displayPrice.toLocaleString("en-US", {
              currency: "USD",
            })}
          </span>
          <span className="text-lg font-medium text-body-color dark:text-dark-6">
            {" "}
            /mo
          </span>
        </h2>
        {isAnnual && (
          <p className="mb-11 text-sm text-body-color dark:text-dark-6">
            ${annualTotal.toLocaleString("en-US")} billed annually
          </p>
        )}

        <div className="mb-[50px]">
          <h3 className="mb-5 text-xl font-semibold text-dark dark:text-white">
            Features
          </h3>
          <div className="mb-10">
            {product?.offers.map((offer, i) => (
              <OfferList key={i} text={offer} />
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <Link
            href="/contact"
            className="block w-full rounded-md bg-primary py-4 text-center text-xl font-semibold text-white transition duration-300 hover:bg-primary/90"
          >
            {product.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
