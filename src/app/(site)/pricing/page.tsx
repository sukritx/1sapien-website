import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | 1Sapien",
  description: "Explore our pricing plans for web design and development services.",
};

const PricingPage = () => {
  return (
    <>
      <Pricing />
      <Process />
      <Faq />
      <CallToAction />
    </>
  );
};

export default PricingPage;
