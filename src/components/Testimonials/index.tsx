import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Adam",
    designation: "Contractor",
    content:
      "Highly recommended, they are here to help us contractors that don't like to deal with the website stuff. It feels like you have a partner looking out for you that's actually helping you succeed.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Armando",
    designation: "Business Owner",
    content:
      "They are the absolute best at what they do. They built me a new website and within 10 days I got my first unpaid for lead! Best money spent with Phu and 1Sapien.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lopaka",
    designation: "Business Owner",
    content:
      "Before I started working with 1Sapien I was paying $1500/month with another service that just was not working for me. 1Sapien is super affordable and made getting 5 star Google reviews easy with their 5 star Google review funnel!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Testimonials"
          title="The Proof Is in the Pudding..."
          paragraph="Let's see what our clients have to say"
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
