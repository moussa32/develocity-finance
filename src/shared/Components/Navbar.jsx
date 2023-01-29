import { NavLink } from "react-router-dom";
import navLogo from "../../assets/images/nav-logo.svg";
import langIcon from "../../assets/images/lang-icon.svg";
import LangDropdown from "./LangDropdown";
import ProjectsDropdown from "./ProjectsDropdown";

const Navbar = ({ containerClassName }) => {
  return (
    <div>
      
      <div
        className={`${containerClassName} text-white container mx-auto py-6 px-8 rounded-xl
      lg:flex flex-col md:flex-row justify-between hidden`}
      >
        <img className="my-5 md:my-0" src={navLogo} alt="navbar logo" />
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-3 lg:gap-8 text-base font-medium">
          <NavLink className="mb-3 md:mb-0" to="/">
            Home
          </NavLink>
          <div className="mb-3 md:mb-0" to="/">
            <ProjectsDropdown />
          </div>
          <NavLink className="mb-3 md:mb-0" to="/blog">
            Blog
          </NavLink>
          <NavLink className="mb-3 md:mb-0" to="/blog">
            Documentation
          </NavLink>
          <NavLink className="mb-3 md:mb-0" to="/contact-us">
            Contact
          </NavLink>
          <div className="bg-white bg-opacity-20 rounded-[30px]">
            <img
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
