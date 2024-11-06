import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | DesigneoTech - Your Partner in Digital Transformation",
  description: "Discover DesigneoTech's mission to empower businesses through digital transformation. From web development to SEO and content, we provide innovative solutions to help you grow.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About US"
        description=" Your Partner in Digital Transformation"
      />
      <div className="container">
        <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark ">At DesigneoTech, we digitalize your business by transforming traditional processes into powerful digital solutions. From custom web applications to strategic SEO and compelling content, our team provides everything you need to boost your online presence, streamline operations, and drive real growth. Trust DesigneoTech to bring your business seamlessly into the digital age.</p>
      </div>
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
