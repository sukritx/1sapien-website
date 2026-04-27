import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import CallToAction from "@/components/CallToAction";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 1Sapien",
  description: "Learn about 1Sapien and our mission to build beautiful, high-performing websites.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us Page" />
      <About />
      <CallToAction />
    </main>
  );
};

export default AboutPage;