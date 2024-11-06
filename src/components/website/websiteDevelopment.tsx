import Image from "next/image";
import ClientOnlySwiper from "./clinetonly";
import SectionTitle from "../Common/SectionTitle";
import AboutSectionOne from "../About/AboutSectionOne";
import AboutSectionTwo from "../About/AboutSectionTwo";

const WebsiteDevelopment = () => {
  const services = [
    {
      title: "Healthcare",
      description: "Elevate patient care by providing secure medical record management and seamless communication, including features such as health record access, appointment scheduling, and real-time communication with healthcare providers.",
      icon: "💊",
    },
    {
      title: "Finance",
      description: "Get real-time financial updates, personalized budgeting tools, and investment tracking with a secure and engaging app for optimized transactions.",
      icon: "💼",
    },
    {
      title: "Retail",
      description: "Transform retail shopping with features like personalized recommendations, seamless checkout, loyalty programs, and real-time order tracking that cater to businesses' specific needs.",
      icon: "🛍️",
    },
    {
      title: "Education",
      description: "Enhance the educational experience with interactive lessons, quizzes, progress tracking, and seamless communication, revolutionizing student learning.",
      icon: "📚",
    },
    {
      title: "Real Estate",
      description: "Simplify real estate transactions with virtual tours, mortgage calculators, property listings, and secure communication channels, through a tailored application.",
      icon: "🏠",
    },
    {
      title: "Travel",
      description: "Improve your travel experience with an all-in-one app that offers itinerary management, hotel bookings, flight tracking, and location-based suggestions.",
      icon: "✈️",
    },
    {
      title: "Entertainment",
      description: "Enrich engagement with our mobile app design and development services. Enjoy personalized content, interactive games, event calendars, and social sharing features.",
      icon: "🎬",
    },
    {
      title: "Logistics",
      description: "Optimize supply chain operations with functionalities like real-time tracking, shipment management, route optimization, and instant updates.",
      icon: "🚚",
    },
    {
      title: "Agriculture",
      description: "Boost crop management efficiency with features such as crop monitoring, pest control recommendations, and yield prediction, an application designed for the agricultural sector.",
      icon: "🌾",
    },
    {
      title: "Fitness",
      description: "Enjoy customizable workouts, health tracking, nutrition guidance, and community engagement for optimal well-being and experiences with our mobile app development services company.",
      icon: "🏋️",
    },
  ];

  const ServiceCard = ({ title, description, icon }) => (
    <div className="mb-8 flex items-start">
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="mobile-app-development" className="py-16 lg:py-24">
      <AboutSectionTwo />
       <div className="container">
       {/* <ProcessSteps /> */}
       </div>
      <div className="container mt-20 ">
        <div className="flex justify-center mb-5">

        <h2 className="text-center text-3xl max-w-[600px] font-bold">Best <span className="text-[#0b7f9c]">Website Development</span> Services Across Industries</h2>
        </div>
        <div className="mx-auto px-4 flex flex-wrap items-start">

      <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative aspect-[9/16] max-w-[700px] mt-10">
            <Image
              src="/images/mobile/Mockup_s.webp" // Replace with the actual image path you will provide
              alt="Mobile App Development -DesigneoTech"
              // layout="fill"
              objectFit="cover"
              width={300}
              height={100}
              className=""
            />
          </div>
        </div>
        {/* Left Column: Service Descriptions */}
        <div className="w-full lg:w-1/2 max-w-[400px]">
          
          <div className="space-y-6 ">
           <ClientOnlySwiper 
           services={services}
           />
          </div>
        </div>

        {/* Right Column: Image */}
        
      </div>
      </div>

    </section>
  );
};

export default WebsiteDevelopment;
