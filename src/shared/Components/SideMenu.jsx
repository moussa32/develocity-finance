import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import langIcon from "../../assets/images/lang-icon.svg";
import LangDropdown from "./LangDropdown";
import ProjectsDropdown from "./ProjectsDropdown";

const SideMenu = () => {
  return (
    <Disclosure as="nav" className="relative lg:hidden z-30 text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <h3 className="block lg:hidden mx-auto text-3xl font-semibold">
                Develocity
              </h3>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden  bg-gradient-to-b from-[#0A0C14] to-[#292156]">
            <div className="space-y-1 text-center px-2 pt-2 pb-3">
              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NavLink className="mb-3 md:mb-0" to="/">
                  Home
                </NavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <ProjectsDropdown />
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NavLink className="mb-3 md:mb-0" to="/blog">
                  Blog
                </NavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NavLink className="mb-3 md:mb-0" to="/blog">
                  Documentation
                </NavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NavLink className="mb-3 md:mb-0" to="/contact-us">
                  Contact
                </NavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <div className="bg-white mx-auto w-[150px] bg-opacity-20 rounded-[30px]">
                  <img
                    className="inline-block ml-4"
                    src={langIcon}
                    alt="language icon"
                  />
                  <LangDropdown />
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SideMenu;
