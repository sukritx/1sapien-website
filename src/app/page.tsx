import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1Sapien - We Build Websites That Drive Results",
  description: "1Sapien is a web design and development company that builds beautiful, high-performing websites to help businesses grow and succeed online.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Clients />
      <Features />
      <Testimonials />
      <Faq />
      <Team />
      <HomeBlogSection posts={posts} />
      <Contact />
    </main>
  );
}
