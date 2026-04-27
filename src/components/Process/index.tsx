const steps = [
  {
    number: "01",
    title: "Demo Call",
    subtitle: "20 mins",
    description:
      "It's actually a sales call, we just didn't want to scare you. But seriously... we'll answer all your questions, show you any features you have questions about, and show you live client accounts & results.",
  },
  {
    number: "02",
    title: "We Build Your System",
    subtitle: "7-10 days",
    description:
      "Fill out a basic onboarding form with your business details. After we have the correct information, we'll get to work on building your new website & marketing system.",
  },
  {
    number: "03",
    title: "Launch Call",
    subtitle: "25 mins",
    description:
      "We'll walk you through your new website & marketing system, answer any questions you have, and show you how \"everything\" works... And by everything, we're really just talking about pressing two buttons.",
  },
];

const Process = () => {
  return (
    <section className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-16 max-w-[700px] text-center" data-wow-delay=".1s">
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            What working with us looks like...
          </h2>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {steps.map((step, i) => (
            <div key={i} className="w-full px-4 md:w-1/3">
              <div className="wow fadeInUp relative mb-12" data-wow-delay=".15s">
                <div className="mb-6 text-6xl font-black text-primary/10">
                  {step.number}
                </div>
                <h3 className="mb-1 text-xl font-bold text-dark dark:text-white sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mb-4 text-sm font-semibold text-primary">
                  {step.subtitle}
                </p>
                <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-[2px] w-8 bg-primary/20 md:block lg:w-12" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
