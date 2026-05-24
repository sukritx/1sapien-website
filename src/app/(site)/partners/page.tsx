import Breadcrumb from "@/components/Common/Breadcrumb";
import Clients from "@/components/Clients";
import CallToAction from "@/components/CallToAction";
import { clientsData } from "@/components/Clients/clientsData";
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
      <Clients partnersData={clientsData} />
      <CallToAction />
    </main>
  );
};

export default PartnersPage;
