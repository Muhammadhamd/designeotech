import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - DesigneoTech | Digital Agency for Transformation",
  description: "DesigneoTech is a full-service digital agency focused on technology consulting, digital transformation, and marketing strategies that elevate your business. Partner with DesigneoTech to enhance your online presence!",
  keywords:[
    "DesigneoTech",
    "Designeo Tech",
    "Designeotech.com",
    "seo",
    "design graphic designer",
    "design and graphics","designer logo design",
  "designer logo design agency","search engine marketing",
  "seo services",
  "web development",
  "web development near me",
  "web development service",
  "web development service USA",
  "web development service New york",
  "web site development","search engine optimization agencies",
  "search optimisation agency",
  "web design company site",
  "seo company seo",
  "seo marketing",
  "google search engine optimization",
  "automl solution",
  "local seo",
  "mobile application development","it software development","mobile app developers",
  "digital design","seo consultant",
  "search engine optimisation consultants",
  "mobile phone app development",
  "mobile application platform","mobile application and development","seo company near me",
   "search engine optimization companies near me",
   "digital transformation consultation","web programming company","apps to develop","graphic designing near me"
   ,"software development company","seo expert",
   "web design companies near me","software development firms","software development agency",
   "software dev company","it software development company","web designing company near me","best seo companies"
   ,"app making company","best seo agencies","software dev company",
   "mobile development company","mobile application development companies","best seo provider","best search engine optimization company",
   "responsive web development","good seo company","graphic design companies","mobile app programming company","best search engine optimization agency",
   "app programming companies","shopify seo optimization","android app dev","seo consultant near me","mobile app development company",
   "android app development app","local seo company","seo companies for small business",
   "ecommerce seo","seo for small businesses","seo marketing agency","seo marketing for small business",
   "seo services for small business","seo marketing company","build android app","vehicle wrap design",
   "android app development company"
],
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Features />
      <Video />
      {/* <Brands /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      {/* <Contact /> */}
    </>
  );
}
