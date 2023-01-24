import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/footer-logo.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import telegram from "../../assets/images/telegram.svg";

const Footer = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto pt-24 pb-16 text-center md:text-left text-[#525C7A] text-base font-medium">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <img className="mx-auto md:mx-0" src={logo} alt="footer logo" />
            <div className="mt-6">
              <NavLink className="block md:inline-block md:mr-6 mt-6 md:mt-0 ">
                Returns & FAQ
              </NavLink>
              <NavLink className="block md:inline-block md:mr-6 mt-6 md:mt-0 ">
                Privacy Policy
              </NavLink>
              <NavLink
                to="/contact-us"
                className="block md:inline-block md:mr-6 mt-6 md:mt-0 "
              >
                Contact
              </NavLink>
              <NavLink className="block md:inline-block md:mr-6 my-6 md:my-0 ">
                Back to Develocity
              </NavLink>
            </div>
          </div>
          <div className="ml-auto">
            <p>Get the latest updates about Develocity's new projects,</p>
            <p>roadmap updates and company news.</p>
            <div className="mt-6 md:mt-4">
              <input
                className="placeholder:text-[#667085] placeholder:text-base h-11 w-72 md:w-80 border-1 border py-5 pl-3 border-[#D0D5DD]"
                placeholder="Enter your email..."
              />
              <button className="bg-indigo-500 rounded-sm text-white font-normal py-3 px-6 ml-2 mt-5 md:mt-0 hover:bg-indigo-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-16 text-neutral-200 mb-8"></hr>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <a href="#">
              <img
                className="inline-block ml-4"
                src={facebook}
                alt="facebook icon"
              />
            </a>
            <a href="#">
              <img
                className="inline-block ml-4"
                src={twitter}
                alt="twitter icon"
              />
            </a>
            <a href="#">
              <img
                className="inline-block ml-4"
                src={instagram}
                alt="instagram icon"
              />
            </a>
            <a href="#">
              <img
                className="inline-block ml-4"
                src={telegram}
                alt="telegram icon"
              />
            </a>
          </div>
          <p className="mt-6 md:mt-0 md:text-right">
            © 2022 Develocity, LLC. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
