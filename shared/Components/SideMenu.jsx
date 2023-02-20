import { memo, useState, useRef, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NextNavLink from "./NextNavLink";
import langIcon from "../../public/assets/images/lang-icon.svg";
import logo from "../../public/assets/images/logo-mobile.svg";
import menuIcon from "../../public/assets/images/menu-icon.svg";
import LangDropdown from "./LangDropdown";
import ProjectsDropdown from "./ProjectsDropdown";
import useNavbarScroll from "../Hooks/useNavbarBackground";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

const SideMenu = () => {
  const { t, errors } = useTranslation("navbar");
  const [isScroll] = useNavbarScroll(50);
  const [isOpen, setIsOpen] = useState(false);
  const DisclosureButton = useRef(null);

  useEffect(() => {
    if (DisclosureButton.current) {
      const isDisclosureOpen = DisclosureButton.current.dataset.headlessuiState;
      if (isDisclosureOpen) {
        setIsOpen(true);
      }
    }
  }, [DisclosureButton]);

  return (
    <Disclosure
      as="nav"
      className={`fixed transition pt-2 ease-in-out duration-700 ${
        isScroll || isOpen ? "bg-indigo-500 pt-0" : ""
      } w-full lg:hidden z-30 text-white`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto pt-2 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  ref={DisclosureButton}
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center rounded-md ltr:mr-4 rtl:ml-4 p-2 text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Image src={menuIcon} alt="open menu" className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Image className="ltr:ml-8 rtl:mr-8" src={logo} alt="logo" />
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden bg-gradient-to-b from-[#0A0C14] to-[#292156]">
            <div className="space-y-1 text-center px-2 pt-2 pb-3">
              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NextNavLink className="mb-3 md:mb-0" href="/">
                  {t?.headSection?.navbar?.home}
                </NextNavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <ProjectsDropdown />
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NextNavLink className="mb-3 md:mb-0" href="/blog">
                  {t?.headSection?.navbar?.blog}
                </NextNavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NextNavLink className="mb-3 md:mb-0" href="/blog">
                  {t?.headSection?.navbar?.documentation}
                </NextNavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <NextNavLink className="mb-3 md:mb-0" href="/contact-us">
                  {t?.headSection?.navbar?.contact}
                </NextNavLink>
              </div>

              <div className="block px-3 py-2 rounded-md text-white text-base font-medium hover:bg-slate-900/75">
                <div className="bg-white mx-auto w-[150px] bg-opacity-20 rounded-[30px]">
                  <Image className="inline-block ltr:ml-4 rtl:mr-4" src={langIcon} alt="language icon" />
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

export default memo(SideMenu);
