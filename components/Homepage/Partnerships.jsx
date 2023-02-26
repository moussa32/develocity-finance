//import coinbase from "../../public/assets/images/coinbase.svg";
//import bitmex from "../../public/assets/images/bitmex.svg";
//import xtCom from "../../public/assets/images/xt.svg";
import binance from "../../public/assets/images/binance.svg";
//import coinbaseColored from "../../public/assets/images/coinbase-colored.svg";
//import bitmexColored from "../../public/assets/images/bitmex-colored.svg";
//import xtComColored from "../../public/assets/images/xt-colored.svg";
import binanceColored from "../../public/assets/images/binance-colored.svg";
import Slider from "./Slider";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "@/shared/Hooks/useTranslation";
import alchamyPay from "../../public/assets/images/alchamy-pay.png";
import bscscanLogo from "../../public/assets/images/bscscan-logo.svg";
import metamaskLogo from "../../public/assets/images/metamask-logo.png";
import moralisLogo from "../../public/assets/images/moralis-logo.svg";
import trustWallet from "../../public/assets/images/trust-wallet.png";

const partnerships = [
  {
    title: "alchamyPay",
    link: "https://alchemypay.org/",
    defaultVersion: alchamyPay,
    coloredVersion: alchamyPay,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] object-contain"
  },
  {
    title: "bscscan logo",
    link: "https://bscscan.com",
    defaultVersion: bscscanLogo,
    coloredVersion: bscscanLogo,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] object-contain"
  },
  {
    title: "metamask Logo",
    link: "https://metamask.io/",
    defaultVersion: metamaskLogo,
    coloredVersion: metamaskLogo,
  },
  {
    title: "binance",
    link: "https://binance.com",
    defaultVersion: binance,
    coloredVersion: binanceColored,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] object-contain"
  },
  {
    title: "moralis Logo",
    link: "https://moralis.io/",
    defaultVersion: moralisLogo,
    coloredVersion: moralisLogo,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] object-contain"
  },
  {
    title: "trust Wallet",
    link: "https://trustwallet.com",
    defaultVersion: trustWallet,
    coloredVersion: trustWallet,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] object-contain"
  },
];

/*const partnerships = [
  {
    title: "coinbase",
    defaultVersion: coinbase,
    coloredVersion: coinbaseColored,
  },
  {
    title: "bitmex",
    defaultVersion: bitmex,
    coloredVersion: bitmexColored,
  },
  {
    title: "xtCom",
    defaultVersion: xtCom,
    coloredVersion: xtComColored,
  },
  {
    title: "binance",
    defaultVersion: binance,
    coloredVersion: binanceColored,
  },
];*/

const Partnerships = () => {
  const { t } = useTranslation("common");
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto text-center md:py-24 lg:px-0">
        <h2 className="text-[#29233B] font-PolySans text-[28px] px-4 md:px-8 md:text-6xl font-medium md:font-normal">
          {t?.homeSection?.partnershipSection?.mainText}
        </h2>
        <h6 className="text-[#525C7A] text-[15px] px-4 md:px-8 md:text-lg mt-4">
          {t?.homeSection?.partnershipSection?.subText}
        </h6>
        <div className="hidden md:grid grid-cols-6 h-[80px] mt-8 px-4 md:px-2 mx-auto gap-1 lg:gap-14">
          {partnerships.map(
            ({ title, link, defaultVersion, coloredVersion }) => (
              <Link
                key={title}
                className="group relative w-[65px] md:w-[170px] lg:w-[180px]"
                href={`${link}`}
              >
                <Image
                  className="absolute group-hover:opacity-0 h-[80px] object-contain hover:cursor-pointer"
                  src={defaultVersion}
                  alt={title}
                />
                <Image
                  className="absolute opacity-0 group-hover:opacity-100 h-[80px] object-contain hover:cursor-pointer"
                  src={coloredVersion}
                  alt={title}
                />
              </Link>
            )
          )}
        </div>
        <MobileImageSlider
          images={partnerships}
          slidesPerView={1.6}
          initialSlide={2}
          slideImageClassName="h-11 w-[200px]"
        />
        <Slider />
      </div>
    </div>
  );
};

export default Partnerships;
