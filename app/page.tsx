import ContactSection from "./component/contact-us";
import TechnicalStrength from "./component/technical-strength";
import Hero from "./component/hero";
import CompanyOverview from "./component/overview";
import ProductPortfolio from "./component/product-portfolio";
import WhyChooseUs from "./component/why-choose-us";
import ManufacturingAndEngineering from "./component/manufacturing-and-engneering";
import IndustriesWeServe from "./component/industury-we-serve";
import FutureRoadmap from "./component/future-roadmap";
import EngineeringServices from "./component/engneering-services";
import CareersPage from "./component/CareersPage";

export default function Home() {
  return (
    <>
      {/* Home */}
        <Hero />

      {/* Company */}
        <CompanyOverview />

      {/* Why Alega */}
        {/* <WhyChooseUs /> */}


      {/* Roadmap */}
        {/* <FutureRoadmap /> */}

      {/* Products */}
        <ProductPortfolio />

      {/* Manufacturing */}
        <ManufacturingAndEngineering />
        <EngineeringServices/>


      {/* Industries */}
        <IndustriesWeServe />
        <CareersPage/>

      {/* Contact */}
        <ContactSection />
    </>
  );
}
