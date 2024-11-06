// components/ProcessSteps.tsx

const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "Our team creates initial design concepts, features, and user interfaces for visual appeal.",
  },
  {
    number: "02",
    title: "Development",
    description:
      "Skilled developers at our mobile app services company create robust, scalable solutions.",
  },
  {
    number: "03",
    title: "Testing",
    description:
      "Conduct rigorous testing to identify and fix bugs, ensuring reliability.",
  },
  {
    number: "04",
    title: "Deployment",
    description:
      "Release the app to the market, promoting and monitoring user engagement.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">How We Do It?</h2>
        <p className="text-sm text-gray-600 mb-12">
          <span className="text-[#0b7f9c]">DesigneoTech&apos;s</span> Efficient Mobile App Development Services Process
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Number Circle */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-medium font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-xs">{step.description}</p>

              {/* Horizontal Line - Only show on larger screens and not after the last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-full w-16 h-[2px] bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
