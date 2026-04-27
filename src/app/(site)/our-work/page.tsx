import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - 1Sapien",
  description: "Explore our portfolio of websites and digital experiences we've built for our clients.",
};

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform with seamless checkout experience and responsive design.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "An intuitive analytics dashboard with real-time data visualization and reporting tools.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Corporate Website",
    category: "Web Design",
    description: "A professional corporate website showcasing brand identity and business services.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Portfolio Platform",
    category: "Web Development",
    description: "A creative portfolio platform enabling artists to showcase their work beautifully.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Restaurant Booking App",
    category: "Web Application",
    description: "A reservation system with real-time availability and integrated payment processing.",
    image: "/images/hero/hero-image.jpg",
  },
  {
    title: "Marketing Landing Page",
    category: "Web Design",
    description: "A high-converting landing page designed for maximum engagement and lead generation.",
    image: "/images/hero/hero-image.jpg",
  },
];

const OurWork = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Work
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Explore our portfolio of projects that showcase our expertise
                  in web design, development, and digital strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {projects.map((project, index) => (
              <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="wow fadeInUp group mb-10" data-wow-delay=".15s">
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={370}
                      height={240}
                      className="w-full transition duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <span className="mb-2 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-base font-medium text-body-color dark:text-dark-6">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default OurWork;
