import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dropdownArrow from "../../assets/images/dropdown-arrow.svg";
import multiFunctional from "../../assets/images/multi-functional.svg";
import swapTool from "../../assets/images/swap-tool.svg";
import wallet from "../../assets/images/wallet.svg";
import cryptoAcademy from "../../assets/images/crypto-academy.svg";
import bridge from "../../assets/images/bridge-icon.svg";
import dexIcon from "../../assets/images/dex-icon.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProjectsDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-base font-medium shadow-sm ">
          Projects
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
        <Menu.Items className="absolute px-2 md:px-9 -right-[120px] md:-right-72 lg:-right-72 z-10 md:pb-8 mt-5 w-[83vw] md:w-[680px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <img
            className="absolute right-40 md:right-[320px] lg:right-80 -top-[7px] origin-top-right"
            src={dropdownArrow}
            alt="dropdown arrow"
          />
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <h2
                  href="#"
                  className={classNames(
                    active ? "text-gray-700" : "text-indigo-500",
                    "block w-full mt-4 md:mt-11 px-4 pb-2 text-sm font-semibold text-indigo-500"
                  )}
                >
                  Projects
                </h2>
              )}
            </Menu.Item>
            <div className="grid text-center  md:pb-0 md:text-left grid-cols-2">
              {/*right menu items */}
              <div>
                <span className="text-[rgb(181,71,8)] bg-[rgb(255,250,235)] px-2 ml-0 text-[10px] font-medium float-right rounded">
                  Beta
                </span>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "md:flex gap-4 px-2 md:px-4 py-2 text-sm clear-both"
                      )}
                    >
                      <img
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={multiFunctional}
                        alt="multi functional icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base font-semibold mb-1">
                          Multi-functional tool
                        </h3>
                        <p className="text-xs md:text-sm font-normal">
                          A new way to discover tokens that are safe and
                          trustworthy.
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "md:flex gap-4 px-2 md:px-4 py-2 text-sm"
                      )}
                    >
                      <img
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={swapTool}
                        alt="swap tool icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base font-semibold mb-1">
                          Swap tool
                        </h3>
                        <p className="text-xs md:text-sm font-normal">
                          A new way to discover tokens that are safe and
                          trustworthy.
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "md:flex gap-4 px-2 md:px-4 py-2 text-sm"
                      )}
                    >
                      <img
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={wallet}
                        alt="wallet icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base font-semibold mb-1">Wallet</h3>
                        <p className="text-xs md:text-sm font-normal">
                          A new way to discover tokens that are safe and
                          trustworthy.
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
              <div>
                {/*left menu items */}
                <span className="text-[rgb(2,122,72)] bg-[rgb(236,253,243)] px-2 ml-0 mr-1 md:mr-0 text-[10px] font-medium float-right rounded">
                  <span className="w-[6px] h-[6px] bg-[rgb(18,183,106)] inline-block rounded-full mr-1"></span>
                  Launched
                </span>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "md:flex gap-4 px-2 md:px-4 py-2 text-sm clear-both"
                      )}
                    >
                      <img
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={cryptoAcademy}
                        alt="crypto academy icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base font-semibold mb-1">
                          Crypto academy
                        </h3>
                        <p className="text-xs md:text-sm font-normal">
                          A new way to discover tokens that are safe and
                          trustworthy.
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "md:flex gap-4 px-2 md:px-4 py-2 text-sm"
                      )}
                    >
                      <img
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={bridge}
                        alt="bridge icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base font-semibold mb-1">Bridge</h3>
                        <p className="text-xs md:text-sm font-normal">
                          A new way to discover tokens that are safe and
                          trustworthy.
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "md:flex gap-4 px-2 md:px-4 py-2 text-sm mb-1"
                      )}
                    >
                      <img
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={dexIcon}
                        alt="dex icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base font-semibold mb-1">Dex</h3>
                        <p className="text-xs md:text-sm font-normal">
                          A new way to discover tokens that are safe and
                          trustworthy.
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </div>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProjectsDropdown;
