import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Clients from "@/components/Clients";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { homePartnersData } from "@/components/Clients/homePartnersData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1Sapien - We Build Websites That Drive Results",
  description: "1Sapien is a web design and development company that builds beautiful, high-performing websites to help businesses grow and succeed online.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <Hero />
      <Clients partnersData={homePartnersData} />
      <Features />
      <Process />
      <Faq />
      <HomeBlogSection posts={posts} />
      <CallToAction />
    </main>
  );
}
