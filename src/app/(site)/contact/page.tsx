import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 1Sapien",
  description:
    "Get in touch with 1Sapien. We'd love to hear about your project and discuss how we can help your business grow online.",
  alternates: {
    canonical: "https://1sapien.com/contact",
  },
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
