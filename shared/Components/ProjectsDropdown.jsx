import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dropdownArrow from "../../public/assets/images/dropdown-arrow.svg";
import multiFunctional from "../../public/assets/images/multi-functional.svg";
import swapTool from "../../public/assets/images/swap-tool.svg";
import wallet from "../../public/assets/images/wallet.svg";
import cryptoAcademy from "../../public/assets/images/crypto-academy.svg";
import bridge from "../../public/assets/images/bridge-icon.svg";
import dexIcon from "../../public/assets/images/dex-icon.svg";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

const ProjectsDropdown = () => {
  const { t, errors } = useTranslation("navbar");
  return (
    <Menu as="div" className="relative inline-block ltr:text-left rtl:text-right w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md text-base font-medium shadow-sm ">
          {t?.headSection?.navbar?.projects}
          <ChevronDownIcon className="ltr:-mr-1 rtl:-ml-1 ltr:ml-2 rtl:mr-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute mx-auto h-[auto] w-[90vw] p-2 md:p-4 inset-x-0 mt-5 ltr:origin-top-right rtl:origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 md:pb-8 md:px-9 ltr:lg:left-[-300px] rtl:lg:right-[-300px] lg:top-[25px] md:w-[680px] md:h-[365px]">
          <Image
            className="absolute inset-x-0 mx-auto -top-[7px] ltr:origin-top-right rtl:origin-top-left"
            src={dropdownArrow}
            alt="dropdown arrow"
          />
          <div className="py-1">
            <Menu.Item>
              <h2 className="block w-full mt-0.5 md:mt-5 px-4 text-sm font-semibold text-indigo-500">
                {t?.headSection?.navbar?.projects}
              </h2>
            </Menu.Item>
            <div className="grid text-center md:pb-0 ltr:md:text-left rtl:text-right grid-cols-2">
              {/*right menu items */}
              <div>
                <Menu.Item>
                  <div className="relative">
                    <span className="absolute ltr:right-0 rtl:left-0 -top-2 md:top-0 text-[rgb(181,71,8)] bg-[rgb(255,250,235)] px-2 ltr:ml-0 rtl:mr-0 text-[10px] font-medium rounded">
                      {t?.headSection?.projects?.beta}
                    </span>
                    <div className="md:flex gap-4 px-2 md:px-4 py-2 text-sm">
                      <Image
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={multiFunctional}
                        alt="multi functional icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base text-[#101828] font-semibold mb-1">
                          {t?.headSection?.projects?.multiFunctionalTool?.mainText}
                        </h3>
                        <p className="text-xs text-[#475467] md:text-sm font-normal">
                          {t?.headSection?.projects?.multiFunctionalTool?.subText}
                        </p>
                      </div>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="md:flex text-gray-700 gap-4 px-2 md:px-4 py-2 text-sm clear-both">
                    <Image className="inline-block w-12 mx-auto md:mx-0" src={swapTool} alt="swap tool icon" />
                    <div className="md:mt-3">
                      <h3 className="md:text-base text-[#101828] font-semibold mb-1">
                        {t?.headSection?.projects?.swapTool?.mainText}
                      </h3>
                      <p className="text-xs text-[#475467] md:text-sm font-normal">
                        {t?.headSection?.projects?.swapTool?.subText}
                      </p>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="md:flex text-gray-700 gap-4 px-2 md:px-4 py-2 text-sm clear-both">
                    <Image className="inline-block w-12 mx-auto md:mx-0" src={wallet} alt="wallet icon" />
                    <div className="md:mt-3">
                      <h3 className="md:text-base text-[#101828] font-semibold mb-1">
                        {t?.headSection?.projects?.wallet?.mainText}
                      </h3>
                      <p className="text-xs text-[#475467] md:text-sm font-normal">
                        {t?.headSection?.projects?.wallet?.subText}
                      </p>
                    </div>
                  </div>
                </Menu.Item>
              </div>
              <div>
                {/*left menu items */}
                <Menu.Item>
                  <div className="relative">
                    {/* <span className="absolute ltr:right-0 rtl:left-0 -top-2 md:top-0 text-[rgb(2,122,72)] bg-[rgb(236,253,243)] px-2 ltr:ml-0 rtl:mr-0 ltr:mr-1 rtl:ml-1 ltr:md:mr-0 rtl:md:ml-0 text-[10px] font-medium rounded">
                      <span className="w-[6px] h-[6px] bg-[rgb(18,183,106)] inline-block rounded-full ltr:mr-1 rtl:ml-1"></span>
                      {t?.headSection?.projects?.launched}
                    </span> */}
                    <div className="md:flex text-gray-700 gap-4 px-2 md:px-4 py-2 text-sm">
                      <Image
                        className="inline-block w-12 mx-auto md:mx-0"
                        src={cryptoAcademy}
                        alt="crypto academy icon"
                      />
                      <div className="md:mt-3">
                        <h3 className="md:text-base text-[#101828] font-semibold mb-1">
                          {t?.headSection?.projects?.cryptoAcademy?.mainText}
                        </h3>
                        <p className="text-xs text-[#475467] md:text-sm font-normal">
                          {t?.headSection?.projects?.cryptoAcademy?.subText}
                        </p>
                      </div>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="md:flex text-gray-700 gap-4 px-2 md:px-4 py-2 text-sm clear-both">
                    <Image className="inline-block w-12 mx-auto md:mx-0" src={bridge} alt="bridge icon" />
                    <div className="md:mt-3">
                      <h3 className="md:text-base text-[#101828] font-semibold mb-1">
                        {t?.headSection?.projects?.bridge?.mainText}
                      </h3>
                      <p className="text-xs text-[#475467] md:text-sm font-normal">
                        {t?.headSection?.projects?.bridge?.subText}
                      </p>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="md:flex text-gray-700 gap-4 px-2 md:px-4 py-2 text-sm clear-both">
                    <Image className="inline-block w-12 mx-auto md:mx-0" src={dexIcon} alt="dex icon" />
                    <div className="md:mt-3">
                      <h3 className="md:text-base text-[#101828] font-semibold mb-1">
                        {t?.headSection?.projects?.dex?.mainText}
                      </h3>
                      <p className="text-xs text-[#475467] md:text-sm font-normal">
                        {t?.headSection?.projects?.dex?.subText}
                      </p>
                    </div>
                  </div>
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
