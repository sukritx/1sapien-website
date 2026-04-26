import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
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
      <Team />
    </main>
  );
};

export default AboutPage;
