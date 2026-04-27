import Image from "next/image";

const About = () => {
  return (
    <section className="pb-20 pt-28 lg:pb-[120px] lg:pt-[150px]">
      <div className="container">
        {/* Hero Mission Section */}
        <div className="mb-20">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-dark dark:text-white sm:text-5xl md:text-6xl">
                  Less Talk, More Results
                </h1>
                <p className="mb-4 text-lg leading-relaxed text-body-color dark:text-dark-6">
                  At 1Sapien, our mission is straightforward: eliminate the complexity and fluff from marketing. Too often, agencies overwhelm contractors with buzzwords and technical jargon that make simple concepts seem overly complicated. Marketing shouldn't be confusing or come with a premium price just because it's dressed up in fancy language.
                </p>
                <p className="text-lg leading-relaxed text-body-color dark:text-dark-6">
                  1Sapien was created to provide affordable, straightforward marketing systems for contractors who want to grow their business and online presence the right way—not the overpriced, overcomplicated way. Every successful building needs a solid foundation, and so does your business. Without it, even the best ideas won't stand strong. You need a reliable base to build on. That's where 1Sapien comes in. We provide the foundation so you can focus on what you do best: building your business.
                </p>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="/images/about/about-image-01.jpg"
                  alt="1Sapien team working together"
                  fill
                  className="h-full w-full object-cover object-center rounded-lg shadow-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Culture Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-center text-3xl font-bold text-dark dark:text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-body-color dark:text-dark-6">
            Our culture? It's intentional and crafted with the same care as a compelling profile that actually delivers results.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* We Care */}
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                We Care
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                We genuinely care about your success—and business is thriving.
              </p>
            </div>

            {/* Humor */}
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <circle cx="9" cy="10" r="1.25" fill="currentColor" />
                  <circle cx="15" cy="10" r="1.25" fill="currentColor" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Humor
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                We're serious about results, but our team meetings are anything but dull.
              </p>
            </div>

            {/* Authenticity */}
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Authenticity
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                We keep it real with honest conversations and real action.
              </p>
            </div>

            {/* Humility */}
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Humility
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                We're not perfect; when mistakes happen, we fix them fast.
              </p>
            </div>

            {/* Integrity */}
            <div className="rounded-lg border border-stroke bg-white p-8 shadow-1 dark:border-dark-3 dark:bg-dark-2">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                Integrity
              </h3>
              <p className="text-base text-body-color dark:text-dark-6">
                We do what we say. It's that simple.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
