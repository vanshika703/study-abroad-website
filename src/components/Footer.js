"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logo from "../img/graduation-hat.png";

function FooterComponentCustom() {
  return (
    <Footer className="w-full bg-[#1e3c5a] text-white rounded-none px-28" container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex">
            <Footer.Brand
              href=""
              src={logo}
              alt="Flowbite Logo"
              name="EduFord"
            />
            <p className="font-semibold">EduFord</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="Quick Links"
                className="text-[#FDBF00] font-normal"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-xs">
                  Home
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  About us
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  Our Services
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  Study Abroad
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  Find a Course
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  Test Preperation
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Follow us"
                className="text-[#FDBF00] font-normal"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-xs">
                  Facebook
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  Instagram
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  LinkedIn
                </Footer.Link>

                <Footer.Link href="#" className="text-xs">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Legal"
                className="text-[#FDBF00] font-normal"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-xs">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="text-xs">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="EduFord" year={2023} className="text-xs"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponentCustom;
