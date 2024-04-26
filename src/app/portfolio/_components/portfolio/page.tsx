import ContactPage from "@/app/contact/page";
import { HeroTopView } from "../herosection/hero-top-view";
import PortfolioSection from "./PortfolioPage";
import ServicesSection from "./ServiceSection";


function PortfolioPage() {
  return (
      <div className="px-8 tablet:px-52">
      <HeroTopView/>
      <PortfolioSection/>
      <ServicesSection/>
      <ContactPage/>
      </div>
    )
}

export default PortfolioPage;
