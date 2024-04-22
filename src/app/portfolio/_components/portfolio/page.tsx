import { HeroTopView } from "../herosection/hero-top-view";
import PortfolioSection from "./PortfolioPage";
import ServicesSection from "./ServiceSection";


function PortfolioPage() {
  return (
      <div className="px-12 tablet:px-52">
      <HeroTopView/>
      <PortfolioSection/>
      <ServicesSection/>
      </div>
    )
}

export default PortfolioPage;
