import navLogo from "@/images/nav-logo.svg";
import LangDropdown from "./LangDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import Image from "next/image";
import NextNavLink from "./NextNavLink";
import useTranslation from "@/shared/Hooks/useTranslation";

const Navbar = ({ containerClassName }) => {
  const { t, errors } = useTranslation("navbar");
  return (
    <div>
      <div
        className={`${containerClassName} text-white container mx-auto py-6 px-8 gap-4 rounded-xl
       flex-col flex-wrap md:flex-row justify-center xl:justify-between hidden lg:flex xl:flex-nowrap`}
      >
        <Image className="my-5 md:my-0" src={navLogo} alt="navbar logo" />
        <div className="flex flex-col justify-between items-center text-base font-medium md:flex-row md:gap-3 lg:gap-8">
          <NextNavLink className="mb-3 md:mb-0" href="/">
            {t?.headSection?.navbar?.home}
          </NextNavLink>
          <div className="mb-3 md:mb-0" href="/">
            <ProjectsDropdown />
          </div>
          <NextNavLink className="mb-3 md:mb-0" href="/blog">
            {t?.headSection?.navbar?.blog}
          </NextNavLink>
          {/* <NextNavLink className="mb-3 md:mb-0" href="/blog">
            {t?.headSection?.navbar?.documentation}
          </NextNavLink> */}
          <NextNavLink className="mb-3 md:mb-0" href="/contact-us">
            {t?.headSection?.navbar?.contact}
          </NextNavLink>
          <div className="flex items-center gap-3">
            <LangDropdown />
            {/* <button className="bg-white bg-opacity-20 rounded-[30px] px-4 py-2">Connect Your Wallet</button> */}
            
            <div className="bg-indigo-500 rounded-[30px] text-base font-medium px-4 py-2 hover:bg-slate-900/75" >              
                  <NextNavLink className="mb-3 md:mb-0" href="https://develocity.pro/whitepaper.pdf" >
                      {t?.headSection?.navbar?.whitepaper}
                </NextNavLink>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
