import { HeroTopView } from "../herosection/hero-top-view";
import PortfolioSection from "./PortfolioPage";

function PortfolioPage() {
  return (
      <div className="px-12 tablet:px-56">
      <HeroTopView/>
      <PortfolioSection/>
      </div>
    )
}

export default PortfolioPage;
