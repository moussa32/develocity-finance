import alchamyPay from "@/images/alchamy-pay.png";
import bscscanLogo from "@/images/bscscan-logo.svg";
import metamaskLogo from "@/images/metamask-logo.png";
import moralisLogo from "@/images/moralis-logo.svg";
import trustWallet from "@/images/trust-wallet.png";
import binance from "@/images/binance.svg";
import binanceColored from "@/images/binance-colored.svg";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";

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

const PartnershipsMobileSlider = () => {
  return (
    <MobileImageSlider
      images={partnerships}
      slidesPerView={1.6}
      initialSlide={2}
      containerClassNames="mt-8"
      slideImageClassName="h-11 w-[200px]"
    />
  );
};

export default PartnershipsMobileSlider;
