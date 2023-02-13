import navLogo from "../../public/assets/images/nav-logo.svg";
import langIcon from "../../public/assets/images/lang-icon.svg";
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
        className={`${containerClassName} text-white container mx-auto py-6 px-8 rounded-xl
      lg:flex flex-col md:flex-row justify-between hidden`}
      >
        <Image className="my-5 md:my-0" src={navLogo} alt="navbar logo" />
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-3 lg:gap-8 text-base font-medium">
          <NextNavLink className="mb-3 md:mb-0" href="/">
            {t?.headSection?.navbar?.home}
          </NextNavLink>
          <div className="mb-3 md:mb-0" href="/">
            <ProjectsDropdown />
          </div>
          <NextNavLink className="mb-3 md:mb-0" href="/blog">
            {t?.headSection?.navbar?.blog}
          </NextNavLink>
          <NextNavLink className="mb-3 md:mb-0" href="/blog">
            {t?.headSection?.navbar?.documentation}
          </NextNavLink>
          <NextNavLink className="mb-3 md:mb-0" href="/contact-us">
            {t?.headSection?.navbar?.contact}
          </NextNavLink>
          <div className="bg-white bg-opacity-20 rounded-[30px]">
            <Image
              className="inline-block ml-4"
              src={langIcon}
              alt="language icon"
            />
            <LangDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
