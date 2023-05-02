// import Slider from "./Slider";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "@/shared/Hooks/useTranslation";
import PartnershipsMobileSlider from "./PartnershipsMobileSlider";

import alchamyPay from "@/images/alchamy-pay.png";
import bscscanLogo from "@/images/bscscan-logo.svg";
import metamaskLogo from "@/images/metamask-logo.png";
import moralisLogo from "@/images/moralis-logo.svg";
import trustWallet from "@/images/trust-wallet.png";
import binance from "@/images/binance.svg";
import binanceColored from "@/images/binance-colored.svg";

const partnerships = [
  {
    title: "alchamyPay",
    link: "https://alchemypay.org/",
    defaultVersion: alchamyPay,
    coloredVersion: alchamyPay,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] feature-slider-image-active object-contain",
  },
  {
    title: "bscscan logo",
    link: "https://bscscan.com",
    defaultVersion: bscscanLogo,
    coloredVersion: bscscanLogo,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] feature-slider-image-active object-contain",
  },
  {
    title: "metamask Logo",
    link: "https://metamask.io/",
    imageActiveClassName: "feature-slider-image",
    defaultVersion: metamaskLogo,
    coloredVersion: metamaskLogo,
  },
  {
    title: "binance",
    link: "https://binance.com",
    defaultVersion: binance,
    coloredVersion: binanceColored,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] feature-slider-image-active object-contain",
  },
  {
    title: "moralis Logo",
    link: "https://moralis.io/",
    defaultVersion: moralisLogo,
    coloredVersion: moralisLogo,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] feature-slider-image-active object-contain",
  },
  {
    title: "trust Wallet",
    link: "https://trustwallet.com",
    defaultVersion: trustWallet,
    coloredVersion: trustWallet,
    imageActiveClassName: "h-[80px] object-contain",
    imageClassName: "h-[80px] feature-slider-image-active object-contain",
  },
];

const Partnerships = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container mx-auto text-center lg:px-0 md:my-32">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-neutral-900 font-PolySans text-[28px] font-medium px-4 md:px-8 md:text-[52px] md:font-normal">
          {t?.homeSection?.partnershipSection?.mainText}
        </h2>
        <p className="text-neutral-700 text-[15px] px-4 md:px-8 md:text-lg mt-3">
          {t?.homeSection?.partnershipSection?.subText}
        </p>
      </div>

      <div className="hidden lg:grid grid-cols-6 h-[80px] mt-8 px-4 mx-auto gap-1 lg:px-2 lg:gap-14">
        {partnerships.map(({ title, link, defaultVersion, coloredVersion }) => (
          <Link key={title} className="group relative w-[65px] md:w-[170px] lg:w-[180px]" href={`${link}`}>
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
        ))}
      </div>
      <PartnershipsMobileSlider />
      {/* <Slider /> */}
    </div>
  );
};

export default Partnerships;
