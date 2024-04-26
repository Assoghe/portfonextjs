import { portfolioData } from "@/app/constants/constants";
import { PortfolioType } from "@/app/types/portfo";

export function getPortfolio(pathname: string): PortfolioType {

    const normalizedPathname = pathname.substring(1);

    const portfolioFound = portfolioData.find(portfolio =>
        portfolio.name === normalizedPathname
    );

    return portfolioFound;
}