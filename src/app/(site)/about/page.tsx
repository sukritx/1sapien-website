import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 1Sapien",
  description: "Learn about 1Sapien and our mission to build websites and systems for clients.",
};

const AboutPage = () => {
  return (
    <main>
      <About />
      <Team />
      <CallToAction />
    </main>
  );
};

export default AboutPage;