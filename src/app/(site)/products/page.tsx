import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - 1Sapien",
  description: "Explore our range of web design and development products and services.",
  alternates: {
    canonical: "https://1sapien.com/products",
  },
};

const products = [
  {
    title: "Custom Website Design",
    description: "Beautiful, bespoke website designs tailored to your brand identity and business goals. We create pixel-perfect designs that captivate your audience.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 22L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 22V44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 22L42 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Web Development",
    description: "Robust, scalable web applications built with modern technologies. From simple sites to complex platforms, we deliver clean, maintainable code.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L8 24L16 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 18L40 24L32 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 12L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment processing, inventory management, and optimized checkout flows that maximize conversions.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10H12L16 36H36L40 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="42" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="34" cy="42" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "SEO & Performance",
    description: "Search engine optimization and performance tuning to ensure your website ranks high and loads fast. We follow best practices for Core Web Vitals.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C33.941 6 42 14.059 42 24C42 33.941 33.941 42 24 42C14.059 42 6 33.941 6 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 14V24L30 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website secure, up-to-date, and running smoothly. We handle updates, backups, and monitoring.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 36V42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M38.485 9.515L34.243 13.757" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13.757 34.243L9.515 38.485" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M42 24H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 24H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: "Digital Strategy",
    description: "Strategic consulting to align your web presence with business objectives. We help you plan, execute, and measure your digital initiatives.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="28" y="6" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="6" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="28" y="28" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

const Products = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Products & Services
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Everything you need to establish a powerful online presence.
                  From design to deployment, we&apos;ve got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {products.map((product, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mb-10 rounded-lg border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-card dark:border-dark-3 dark:bg-dark-2" data-wow-delay=".15s">
                  <div className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-lg bg-primary/5 text-primary">
                    {product.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                    {product.title}
                  </h3>
                  <p className="text-base font-medium text-body-color dark:text-dark-6">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-primary py-20 lg:py-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mx-auto max-w-[500px] text-center lg:text-left">
                <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                  Need a Custom Solution?
                </h2>
                <p className="mb-9 text-base font-medium text-white/80">
                  Every business is unique. Let&apos;s discuss your specific
                  needs and create a tailored solution that fits perfectly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                >
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
