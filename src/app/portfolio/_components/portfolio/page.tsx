import ContactPage from "@/app/contact/page";
import { HeroTopView } from "../herosection/hero-top-view";
import PortfolioSection from "./PortfolioPage";
import ServicesSection from "./ServiceSection";
import { DailyChallenge } from "@/app/daily/DailyChallenge";


function PortfolioPage() {
  return (
    <div className="px-8 tablet:px-44">
      <HeroTopView/>
      <DailyChallenge />
      <PortfolioSection/>
      <ServicesSection/>
      <ContactPage/>
      </div>
    )
}

export default PortfolioPage;
