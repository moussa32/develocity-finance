import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import dropdownArrow from "../../public/assets/images/dropdown-arrow.svg";
import englishIcon from "../../public/assets/images/english-icon.svg";
import arabicIcon from "../../public/assets/images/arabic-icon.svg";
import turkishIcon from "../../public/assets/images/turkish-icon.svg";
import russianIcon from "../../public/assets/images/russian-icon.svg";
import georgianIcon from "../../public/assets/images/georgian-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LangDropdown = () => {
  const { locale, locales, push } = useRouter();
  const router = useRouter();
  //const changeTo = router.locale === 'en' ? 'ar' : 'en'
  const { t } = useTranslation("navbar");
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium shadow-sm ">
          {t("headSection.languages.english")}
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
          <Image
            className="absolute right-20 -top-[7px] origin-top-right"
            src={dropdownArrow}
            alt="dropdown arrow"
          />
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
                  {t("headSection.languages.title")}
                </h2>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  locale={"en"}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image
                      className="inline-block mr-3"
                      src={englishIcon}
                      alt="english icon"
                    />
                    {t("headSection.languages.english")}
                  </div>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/ar"
                  locale={"ar"}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image
                      className="inline-block mr-3"
                      src={arabicIcon}
                      alt="arabic icon"
                    />
                    {t("headSection.languages.arabic")}
                  </div>
                </Link>
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
                    <Image
                      className="inline-block mr-3"
                      src={turkishIcon}
                      alt="turkish icon"
                    />
                    {t("headSection.languages.turkish")}
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
                    <Image
                      className="inline-block  mr-3"
                      src={russianIcon}
                      alt="russian icon"
                    />
                    {t("headSection.languages.russian")}
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
                    <Image
                      className="inline-block mr-3"
                      src={georgianIcon}
                      alt="georgian icon"
                    />
                    {t("headSection.languages.georgian")}
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
