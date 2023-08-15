import { Tab } from "@headlessui/react";
import { Fragment, useMemo, useState } from "react";
import { Open_Sans } from "@next/font/google";
import { BiLogoFacebook, BiLogoTelegram } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
import DeveLogo from "../public/assets/images/links-page-logo.svg";
import useTranslation from "@/shared/Hooks/useTranslation";
import copyArrowIcon from "../public/assets/images/copy-arrows.svg";
import successCopyIcon from "../public/assets/images/success-copy.svg";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SideMenu from "@/shared/Components/SideMenu";
import LinksSlider from "@/components/Links/LinksSlider";
import PreSaleLogo from "./../public/logo.png";

const TabHeader = dynamic(() => import("@/components/Links/TabHeader"), {
  ssr: false,
});

const openSans = Open_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const URLS = [
  { icon: PreSaleLogo, url: "https://develocity.finance", text: "Presale Develocity" },
  { url: "https://develocity.solutions", text: "develocity.solutions" },
  { url: "https://develocity.finance", text: "develocity.finance" },
  { url: "https://develocity.solutions", text: "develocity.solutions" },
  { url: "https://develocity.finance", text: "develocity.finance" },
  { url: "https://develocity.solutions", text: "develocity.solutions" },
];

const LinksPage = () => {
  const [activeLink, setActiveLink] = useState({ linkCopiedIndex: null, copied: false });
  const { t } = useTranslation("links");
  const tabsHeader = useMemo(() => [{ title: t?.Develocitys }, { title: t?.socialMedia }], [t]);
  const SOCIAL_MEDIA = useMemo(
    () => [
      { name: t?.facebook, icon: BiLogoFacebook, url: "https://facebook.com" },
      { name: t?.instagram, icon: AiOutlineInstagram, url: "https://instagram.com" },
      { name: t?.twitter, icon: AiOutlineTwitter, url: "https://x.com" },
      { name: t?.telegram, icon: BiLogoTelegram, url: "https://telegram.com" },
    ],
    [t]
  );

  return (
    <section className="min-h-screen links-page-bg bg-cover">
      <SideMenu />
      <section className="container">
        <Image src={DeveLogo} alt="deve" className="mx-auto block pt-32 xl:pt-60" />
        <section className={`mx-auto pb-[115px] w-full ${openSans.className}`}>
          <Tab.Group>
            <Tab.List className="flex flex-col w-full items-start md:flex-row flex-nowrap space-y-6 md:space-y-0 md:space-x-[108px] xl:w-[968.85px] mx-auto rtl:space-x-reverse mt-24 xl:mt-[134.8px]">
              {tabsHeader.map((header, index) => (
                <Tab key={`${header.title}${index}`} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected ? "bg-indigo-500/50 border-opacity-70" : ""
                      } outline-none flex items-center border-4 border-[#6A65E7] lg:border-x-0 lg:border-t-0 transition-all duration-150 justify-center text-2xl w-full md:text-3xl py-4 rounded text-white`}
                    >
                      {header.title}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-20 xl:mt-[142.2px] border-1 w-full xl:w-[968.85px] mx-auto border-[#6A65E7] rounded-3xl pt-10 xl:pt-[54px] px-7 xl:px-[46px] pb-[22px] text-white">
              <TabHeader />
              <Tab.Panel>
                <LinksSlider activeLink={activeLink} changeActiveLink={setActiveLink} urls={URLS} />

                <div
                  className={`flex justify-between items-center h-[44.41px] text-[29.58px] w-full xl:w-[386.54px] ${
                    activeLink.copied ? `border-y-[1.41px] border-[#6A65E7] ltr:mr-auto rtl:ml-auto` : null
                  } px-6`}
                >
                  {activeLink.copied && (
                    <>
                      <Image src={copyArrowIcon} alt="copy" />
                      {t?.copied}
                      <Image src={successCopyIcon} alt="success copy" />
                    </>
                  )}
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <div className="flex flex-wrap items-center gap-y-10 gap-x-5 lg:gap-[75px] mt-[120.9px] mb-[84px] justify-center">
                  {SOCIAL_MEDIA.map((item, index) => (
                    <a
                      key={`${item.name}${index}`}
                      href={item.url}
                      rel="noreferrer"
                      target="_blank"
                      className="grid grid-cols-1 place-content-center group"
                    >
                      <item.icon className="bg-[#6A65E7] text-6xl lg:text-8xl rounded-full mx-auto p-3 group-hover:bg-white group-hover:text-indigo-500" />
                      <span
                        className={`uppercase mt-6 lg:mt-[51.6px] ${openSans.className} text-base lg:text-[25.91px] font-semibold`}
                      >
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </section>
      </section>
    </section>
  );
};

export default LinksPage;
