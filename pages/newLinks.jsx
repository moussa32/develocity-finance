import Image from "next/image";
import { RxRocket, RxLink1 } from "react-icons/rx";
import { GrFacebookOption, GrTwitter, GrStatusGood } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoInstagramAlt, BiStore } from "react-icons/bi";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { GiCrownCoin } from "react-icons/gi";
import { useEffect, useState } from "react";
import SideMenu from "@/shared/Components/SideMenu";
import FinanceImage from "@/images/financeImage.avif";
import ScanToolImage from "@/images/scanTool.avif";
import useTranslation from "@/shared/Hooks/useTranslation";

const links = [
  {
    Icon: GiCrownCoin,
    image: FinanceImage,
    url: "https://develocity.finance",
    label: "Develocity PreSale",
    isComing: false,
  },
  {
    Icon: AiOutlineSecurityScan,
    image: ScanToolImage,
    url: "https://tool.develocity.finance",
    label: "Develocity ScanTool",
    isComing: false,
  },
  {
    Icon: BiStore,
    image: FinanceImage,
    url: "https://develocity.finance",
    label: "Develocity Store",
    isComing: true,
  },
];

const LinkComponent = ({ Icon, label, isComing, url, onClick }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation("links");

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-start group gap-4 text-lg lg:text-xl ease-in-out hover:bg-black hover:text-white w-full hover:rounded py-2.5 hover:px-4 ltr:hover:pr-4 rtl:hover:pl-4 transition-all duration-300"
    >
      <Icon size={32} className="rounded-full" /> {label}
      {isComing ? (
        <span className="text-gray-700 text-xs ltr:ml-auto rtl:mr-auto group-hover:text-white">{t?.comingSoon}</span>
      ) : (
        <div className="flex items-center gap-4 ltr:ml-auto rtl:mr-auto">
          <div className="bg-white p-1 rounded-full text-black" onClick={() => setIsCopied(true)}>
            {isCopied ? <GrStatusGood /> : <RxLink1 />}
          </div>
          {!!url && (
            <a href={url} target="_blank" rel="noreferrer" className="bg-white p-1 rounded-full text-black">
              <RxRocket />
            </a>
          )}
        </div>
      )}
    </button>
  );
};

const NewLinks = () => {
  const [selectedLink, setSelectedLink] = useState(links[0]);
  const { t } = useTranslation("links");

  return (
    <>
      <section className="relative bg-indigo-500 pt-24 lg:pt-40">
        <div className="absolute w-full h-full top-0">
          <SideMenu />
        </div>
      </section>
      <section className="container bg-white py-8 lg:py-20 flex flex-col gap-y-8 lg:flex-row items-start justify-center gap-x-12">
        <section className="relative flex-shrink-0 w-full lg:w-[500px] xl:w-[600px] h-full">
          <Image
            src={selectedLink.image}
            width={600}
            height={600}
            className="rounded-xl relative shadow-lg w-full h-[320px] sm:h-[450px] object-cover"
            alt="Logo"
            title="Logo"
          />
          <h1 className="absolute top-8 lg:top-10 text-3xl xl:text-5xl w-full text-center text-white font-bold">
            {selectedLink.label}
          </h1>
          {!selectedLink.isComing && (
            <a
              href={selectedLink.url}
              className="absolute flex items-center gap-2 justify-center bg-indigo-500 bottom-4 lg:bottom-8 transform left-1/2 -translate-x-1/2 text-white rounded py-3 px-7"
            >
              <RxRocket size={20} />
              {t?.letsGo}
            </a>
          )}
        </section>
        <section className="w-full">
          <h2 className="border-b-1 w-full mb-4 text-[#101828] font-PolySans font-bold text-2xl pb-2">
            {t?.checkoutOurLinks}:
          </h2>
          <div className="flex flex-col gap-2 items-start mb-4">
            {links.map((link, index) => (
              <LinkComponent
                onClick={() => setSelectedLink(link)}
                key={`${link.label}${index}`}
                Icon={link.Icon}
                label={link.label}
                url={link.url}
                isComing={link.isComing}
              />
            ))}
          </div>
          <div className="mt-12">
            <h2 className="border-b-1 w-full mb-4 text-[#101828] font-PolySans font-bold text-2xl pb-2">
              {t?.socialMedia}:
            </h2>
            <div className="flex gap-4 flex-wrap items-start mb-4">
              <a
                href="https://facebook.com"
                className="capitalize flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <GrFacebookOption
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                {t?.facebook}
              </a>
              <a
                href="https://facebook.com"
                className="capitalize flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <GrTwitter
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                {t?.x}
              </a>
              <a
                href="https://facebook.com"
                className="capitalize flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <FaTelegramPlane
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                {t?.telegram}
              </a>
              <a
                href="https://facebook.com"
                className="capitalize flex items-center transition-all ease-in-out duration-150 justify-start gap-4 text-sm w-[calc(50%_-_10px)] flex-initial hover:bg-indigo-500 hover:text-white group p-2 rounded"
              >
                <BiLogoInstagramAlt
                  size={18}
                  className="bg-black group-hover:bg-white group-hover:text-indigo-500 rounded-full p-2 box-content text-white"
                />
                {t?.instagram}
              </a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default NewLinks;
