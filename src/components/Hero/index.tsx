"use client";

import { useState, FormEvent } from "react";

const Hero = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await fetch(
        "https://1sapien.com/webhooks/workflows/381ad96a-f4d2-4a61-a41a-e53fe07d4bdd/d86ff8c8-dbec-4ed3-b6de-13d5907c660f",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setSubmitted(true);
    } catch {
      // silently fail
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
        style={{
          backgroundImage: "url(/images/hero/hero-image-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="hero-content wow fadeInUp max-w-[600px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  We Build Websites & Marketing Systems That Drive Results
                </h1>
                <p className="mb-9 text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Marketing isn&apos;t a mystery. No agency... (including ours) has the magic solution to all your problems. We turn complexity into checklists. Work just got lighter.
                </p>

              </div>
            </div>

            <div className="w-full px-4 pb-12 lg:w-1/2 lg:pb-20">
              {submitted ? (
                <div className="rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
                  <h2 className="mb-6 text-center text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                    Thank You!
                  </h2>
                  <p className="text-center text-base text-body-color dark:text-dark-6">
                    Your message has been received. We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <div
                  className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
                  data-wow-delay=".2s"
                >
                  <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-[22px]">
                      <label
                        htmlFor="firstName"
                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                      >
                        First Name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Adam"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      />
                    </div>
                    <div className="mb-[22px]">
                      <label
                        htmlFor="lastName"
                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                      >
                        Last Name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Gelius"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      />
                    </div>
                    <div className="mb-[22px]">
                      <label
                        htmlFor="email"
                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@yourmail.com"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      />
                    </div>
                    <div className="mb-[22px]">
                      <label
                        htmlFor="company"
                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                      >
                        Company Name*
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      />
                    </div>
                    <div className="mb-[30px]">
                      <label
                        htmlFor="message"
                        className="mb-4 block text-sm text-body-color dark:text-dark-6"
                      >
                        Message / Need / Project Details*
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={1}
                        placeholder="Tell us about your project..."
                        className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                      ></textarea>
                    </div>
                    <div className="mb-0">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
              width="485"
              height="470"
              viewBox="0 0 485 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 0 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 70 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 20 350)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 430 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 360 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 410 350)"
                fill="white"
                fillOpacity="0.06"
              />
            </svg>
          </span>
          <span className="absolute right-0 bottom-0 z-[-1]">
            <svg
              width="485"
              height="470"
              viewBox="0 0 485 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 0 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 70 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 20 350)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 430 466)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 360 410)"
                fill="white"
                fillOpacity="0.06"
              />
              <circle
                cx="10"
                cy="10"
                r="10"
                transform="matrix(1 0 0 -1 410 350)"
                fill="white"
                fillOpacity="0.06"
              />
            </svg>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
