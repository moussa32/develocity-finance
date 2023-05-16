import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import englishIcon from "@/images/english-icon.svg";
import arabicIcon from "@/images/arabic-icon.svg";
import turkishIcon from "@/images/turkish-icon.svg";
import russianIcon from "@/images/russian-icon.svg";
import langIcon from "@/images/lang-icon.svg";

// import georgianIcon from "@/images/georgian-icon.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useTranslation from "@/shared/Hooks/useTranslation";
import { getSlugByLanguage } from "../Util/languagesUtils";
import usePostURL from "@/store/dynamicBlogPost";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const LangDropdown = () => {
  const { t, errors } = useTranslation("navbar");
  const { locale, push, replace, pathname, query, asPath } = useRouter();
  const { postSlugs } = usePostURL(state => state);
  const changeLanguage = event => {
    const selectedLocale = event.currentTarget.name;
    const newSlug = getSlugByLanguage(postSlugs, selectedLocale);

    if (pathname.includes("/blog/[slug]")) {
      replace(
        pathname,
        {
          pathname: `/blog/${newSlug}`,
        },
        {
          locale: selectedLocale,
        }
      );
    } else {
      push(
        {
          route: pathname,
          query: query,
        },
        asPath,
        { locale: selectedLocale }
      );
    }
  };

  return (
    <Menu as="div" className="bg-white bg-opacity-20 rounded-[30px] relative inline-block ltr:text-left rtl:text-right">
      <Menu.Button className="inline-flex w-full justify-center p-2 text-sm font-medium shadow-sm">
        <Image className="inline-block" src={langIcon} alt="language icon" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-1/2 transform -translate-x-1/2 z-10 mt-2 md:mt-5 w-44 ltr:origin-top-right rtl:origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 text-center">
            <Menu.Item>
              {({ active }) => (
                <h2
                  className={classNames(
                    active ? "text-gray-700" : "text-indigo-500",
                    "block w-full px-4 py-2 text-sm font-semibold text-indigo-500"
                  )}
                >
                  {t?.headSection?.languages?.title}
                </h2>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  name="en"
                  onClick={changeLanguage}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image className="inline-block ltr:mr-3 rtl:ml-3" src={englishIcon} alt="english icon" />
                    {t?.headSection?.languages?.english}
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  name="ar"
                  onClick={changeLanguage}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image className="inline-block ltr:mr-3 rtl:ml-3" src={arabicIcon} alt="arabic icon" />
                    {t?.headSection?.languages?.arabic}
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  name="tr"
                  onClick={changeLanguage}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image className="inline-block ltr:mr-3 rtl:ml-3" src={turkishIcon} alt="turkish icon" />
                    {t?.headSection?.languages?.turkish}
                  </div>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  name="ru"
                  onClick={changeLanguage}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image className="inline-block ltr:mr-3 rtl:ml-3" src={russianIcon} alt="russian icon" />
                    <span>{t?.headSection?.languages?.russian}</span>
                  </div>
                </button>
              )}
            </Menu.Item>
            {/* <Menu.Item>
              {({ active }) => (
                <button
                  name="ka"
                  onClick={changeLanguage}
                  className={classNames(
                    active ? "bg-gray-100 text-black" : "text-gray-900",
                    "block w-full px-4 py-2 text-base font-semibold text-gray-900"
                  )}
                >
                  <div className="flex pl-3">
                    <Image className="inline-block ltr:mr-3 rtl:ml-3" src={georgianIcon} alt="georgian icon" />
                    <span>{t?.headSection?.languages?.georgian}</span>
                  </div>
                </button>
              )}
            </Menu.Item> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LangDropdown;
