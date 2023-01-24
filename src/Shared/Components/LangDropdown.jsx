import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dropdownArrow from "../../assets/images/dropdown-arrow.svg";
import englishIcon from "../../assets/images/english-icon.svg";
import arabicIcon from "../../assets/images/arabic-icon.svg";
import turkishIcon from "../../assets/images/turkish-icon.svg";
import russianIcon from "../../assets/images/russian-icon.svg";
import georgianIcon from "../../assets/images/georgian-icon.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LangDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium shadow-sm ">
          English
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -right-5 z-10 mt-5 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <img className="absolute right-20 -top-[7px] origin-top-right" src={dropdownArrow} alt="dropdown arrow" />
          <div className="py-1 text-center">
            <Menu.Item>
              {({ active }) => (
                <h2
                  type="submit"
                  className={classNames(
                    active ? "text-gray-700" : "text-indigo-500",
                    "block w-full px-4 py-2 text-sm font-semibold text-indigo-500"
                  )}
                >
                  Change Language
                </h2>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <img className="inline-block mr-3" src={englishIcon} alt="english icon" />
                    English
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <img className="inline-block mr-3" src={arabicIcon} alt="arabic icon" />
                    Arabic
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <img className="inline-block mr-3" src={turkishIcon} alt="turkish icon" />
                    Turkish
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <img className="inline-block  mr-3" src={russianIcon} alt="russian icon" />
                    <span>Russian</span>
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <img className="inline-block mr-3" src={georgianIcon} alt="georgian icon" />
                    <span>Georgian</span>
                  </div>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangDropdown;
