import { Button } from "./ui/design-system/button/button";
import { Typography } from "./ui/design-system/typography/_typography"
import { HiFire } from "react-icons/hi2";

const Home = () => {
  return (
    <>
    <Button variant="accent" size="small"> Test </Button>
    <Button variant="outline" size="medium"> Test </Button>
    <Button variant="label"> Test </Button>
    <Button variant="action"> Test </Button>
    <Button variant="disabled"> Test </Button>
    <Button variant="ico" iconTheme="neutral" icon={{ icon: HiFire
}}/>




    
    </>
    
    
  )
}

export default Home;