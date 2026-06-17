import Breadcrumb from "@/components/Common/Breadcrumb";
import Clients from "@/components/Clients";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners | 1Sapien",
  description: "Meet our trusted partners and the technologies we work with.",
  alternates: {
    canonical: "https://1sapien.com/partners",
  },
};

const PartnersPage = () => {
  return (
    <main>
      <Clients />
      <CallToAction />
    </main>
  );
};

export default PartnersPage;
