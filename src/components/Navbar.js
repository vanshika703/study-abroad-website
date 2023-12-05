"use client";

import { Button, Navbar } from "flowbite-react";
import logo from "../img/graduation-hat.png";

function NavbarComponent() {
  return (
    <Navbar fluid className="bg-[#1e3c5a] text-white">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          EduFord
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className=" bg-[#FDBF00]">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-xs text-[#FDBF00]" >
          HOME
        </Navbar.Link>
        <Navbar.Link href="#" className="text-white text-xs" >ABOUT US</Navbar.Link>
        <Navbar.Link href="#" className="text-white text-xs" >OUR SERVICES</Navbar.Link>
        <Navbar.Link href="#" className="text-white text-xs" >STUDY ABROAD</Navbar.Link>
        <Navbar.Link href="#" className="text-white text-xs" >FIND A COURSE</Navbar.Link>
        <Navbar.Link href="#" className="text-white text-xs" >TEST PREPERATION</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
