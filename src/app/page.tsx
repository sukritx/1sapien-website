import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Clients from "@/components/Clients";
import CallToAction from "@/components/CallToAction";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "1Sapien - We Build Websites That Drive Results",
  description: "1Sapien is a web design and development company that builds beautiful, high-performing websites to help businesses grow and succeed online.",
  alternates: {
    canonical: "https://1sapien.com",
  },
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "1Sapien",
        url: "https://1sapien.com",
        logo: "https://1sapien.com/images/logo.png",
        description:
          "Web design and development company that builds beautiful, high-performing websites to help businesses grow and succeed online.",
        contactPoint: {
          "@type": "ContactPoint",
          email: "1sapiencompany@gmail.com",
          contactType: "sales",
        },
      },
      {
        "@type": "WebSite",
        name: "1Sapien",
        url: "https://1sapien.com",
        description:
          "1Sapien is a web design and development company that builds beautiful, high-performing websites to help businesses grow and succeed online.",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Clients />
      <Features />
      <Process />
      <Faq />
      <CallToAction />
    </main>
  );
}
