import React from "react";
import { Container } from "./ui/container/container";
import { Button } from "./ui/design-system/button/button";
import { Logo } from "./ui/design-system/logo/logo";
import  Navigation  from "./_components/navigation/navigation";
import PortfolioPage from "./portfolio/page";

const Home = () => {
  return (<>    
      <PortfolioPage/>
       <Container className="px-64 py-3">

        </Container>
      
          </>
    
    
  )
}

export default Home;