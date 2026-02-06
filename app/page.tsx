import ContactSection from "./component/contact-us";
import TechnicalStrength from "./component/technical-strength";
import Hero from "./component/hero";
import CompanyOverview from "./component/overview";
import ProductPortfolio from "./component/product-portfolio";
import WhyChooseUs from "./component/why-choose-us";
import ManufacturingInfrastructure from "./component/manufacturing-infrastructure";
import IndustriesWeServe from "./component/industury-we-serve";
import FutureRoadmap from "./component/future-roadmap";

export default function Home() {
  return (
    <>
      {/* Home */}
        <Hero />

      {/* Company */}
        <CompanyOverview />

      {/* Why Alega */}
        <WhyChooseUs />


      {/* Roadmap */}
        <FutureRoadmap />

      {/* Products */}
        <ProductPortfolio />

      {/* Engineering Strength */}
        <TechnicalStrength />

      {/* Manufacturing */}
        <ManufacturingInfrastructure />

      {/* Industries */}
        <IndustriesWeServe />

      {/* Contact */}
        <ContactSection />
    </>
  );
}
