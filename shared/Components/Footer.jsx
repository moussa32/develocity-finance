import logo from "../../public/assets/images/footer-logo.svg";
import facebook from "../../public/assets/images/facebook.svg";
import twitter from "../../public/assets/images/twitter.svg";
import instagram from "../../public/assets/images/instagram.svg";
import telegram from "../../public/assets/images/telegram.svg";
import Image from "next/image";
import NextNavLink from "./NextNavLink";

const Footer = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto md:px-10 lg:px-0 pt-16 md:pt-24 pb-16 text-left text-[#525C7A] text-base font-medium">
        <div className="grid grid-cols-1 ml-4 md:0 md:grid-cols-2">
          <div>
            <Image className="" src={logo} alt="footer logo" />
            <div className="mt-6">
              <NextNavLink href="/" className="md:block lg:inline-block mr-6 md:mr-0 lg:mr-6 mt-6 lg:mt-0">
                Returns & FAQ
              </NextNavLink>
              <NextNavLink href="/" className="md:block lg:inline-block mr-6 md:mr-0 lg:mr-6 mt-6 lg:mt-0">
                Privacy Policy
              </NextNavLink>
              <NextNavLink href="/contact-us" className="md:block lg:inline-block mr-6 md:mr-0 lg:mr-6 mt-6 lg:mt-0">
                Contact
              </NextNavLink>
              <NextNavLink href="/" className="hidden md:block lg:inline-block lg:mr-6 my-6 lg:my-0">
                Back to Develocity
              </NextNavLink>
            </div>
          </div>
          <div className="hidden md:block ml-auto">
            <p className="px-5 md:px-0">Get the latest updates about Develocity's new projects,</p>
            <p className="px-5 md:px-0">roadmap updates and company news.</p>
            <div className="mt-6 flex flex-col md:flex-row items-center flex-wrap md:mt-4">
              <input
                className="placeholder:text-[#667085] font-normal placeholder:text-base h-11 w-72 md:w-80 border-1 border py-5 md:mr-2 pl-3 border-[#D0D5DD]"
                placeholder="Enter your email..."
              />
              <button className="flex items-center justify-center bg-indigo-500 h-[44px] rounded-sm text-white font-normal py-3 px-6 ml-2 mt-5 md:mx-auto lg:mt-0 hover:bg-indigo-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-8 md:mt-16 w-[92vw] md:w-auto mx-auto text-neutral-200 mb-8"></hr>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <a href="#">
              <Image className="inline-block ml-4" src={facebook} alt="facebook icon" />
            </a>
            <a href="#">
              <Image className="inline-block ml-4" src={twitter} alt="twitter icon" />
            </a>
            <a href="#">
              <Image className="inline-block ml-4" src={instagram} alt="instagram icon" />
            </a>
            <a href="#">
              <Image className="inline-block ml-4" src={telegram} alt="telegram icon" />
            </a>
          </div>
          <p className="mt-6 md:mt-0 ml-4 md:ml-0 md:text-right">© 2022 Develocity, LLC. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
