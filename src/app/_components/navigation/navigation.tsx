'use client'

import React, { useState } from "react";
import { Container } from "../../ui/container/container";
import LogoComponent from "./LogoComponent";
import NavbarRight from "./NavbarRight";
import SocialNetwork from "./SocialNetwork";
import { Button } from "@/app/ui/design-system/button/button";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="border-b-1 border-neutral-700 bg-neutral-950 w-full z-10 relative">
      <Container className="px-16 py-3 flex items-center justify-between relative xl:px-64">
        <LogoComponent />
          <div className="hidden items-left gap-7 lg:flex">
            <NavbarRight/>
            <SocialNetwork/>
          </div>
        


        <div className="lg:hidden flex gap-7 items-left">
          <Button
            action={toggleNavbar}
            size="medium"
            variant="ico"
          >
            {navbarOpen ? <HiMiniXMark /> : <HiBars3 />}
          </Button>
        </div>
        <div className={`items-left gap-7 ${navbarOpen ? 'block' : 'hidden'} absolute inset-x-0 top-full bg-black bg-opacity-90`}>
          <div className=" bg-primary-800 block flex-col xl:hidden xl:bg-transparent px-16 h-screen align-sub-center">
            <NavbarRight />
            <SocialNetwork />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
