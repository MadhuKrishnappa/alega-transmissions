import ContactSection from "./component/contact-us";
import TechnicalStrength from "./component/technical-strength";
import Hero from "./component/hero";
import CompanyOverview from "./component/overview";
import ProductPortfolio from "./component/product-portfolio";
import Vision from "./component/vision";
import WhyChooseUs from "./component/why-choose-us";
import ManufacturingInfrastructure from "./component/manufacturing-infrastructure";
import IndustriesWeServe from "./component/industury-we-serve";
import FutureRoadmap from "./component/future-roadmap";

export default function Home() {
  return (
    <>
      <Hero />
      <GearDivider />

      <CompanyOverview />
      <GearDivider />

      <ProductPortfolio />
      <GearDivider />

      <TechnicalStrength />
      <GearDivider />

      <ManufacturingInfrastructure />
      <GearDivider />

      <IndustriesWeServe />
      <GearDivider />

      <WhyChooseUs />
      <GearDivider />

      <FutureRoadmap />
      <GearDivider />

      <ContactSection />
    </>
  );
}

function Divider() {
  return (
    <div className="relative my-12">
      <div className="h-[2px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer"></div>
      </div>
    </div>
  );
}

function GearDivider() {
  return (
    <div className="relative my-12 flex items-center justify-center">
      <div className="w-full h-2 bg-[#F8A900] bg-[linear-gradient(to_right,_#F8A900_60%,_transparent_60%)] bg-[length:24px_2px]"></div>
    </div>
  );
}




