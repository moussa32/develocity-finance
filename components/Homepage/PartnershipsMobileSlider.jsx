import alchamyPay from "@/images/alchemypay-logo.png";
import bscscanLogo from "@/images/bscscan-logo.png";
import metamaskLogo from "@/images/metamask-logo.png";
import moralisLogo from "@/images/moralis-logo.svg";
import trustWallet from "@/images/trust-wallet.png";
import binance from "@/images/binance-logo.png";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";

const partnerships = [
  {
    title: "alchamyPay",
    link: "https://alchemypay.org/",
    defaultVersion: alchamyPay,
    coloredVersion: alchamyPay,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "bscscan logo",
    link: "https://bscscan.com",
    defaultVersion: bscscanLogo,
    coloredVersion: bscscanLogo,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "metamask Logo",
    link: "https://metamask.io/",
    defaultVersion: metamaskLogo,
    coloredVersion: metamaskLogo,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "binance",
    link: "https://binance.com",
    defaultVersion: binance,
    coloredVersion: binance,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "moralis Logo",
    link: "https://moralis.io/",
    defaultVersion: moralisLogo,
    coloredVersion: moralisLogo,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "trust Wallet",
    link: "https://trustwallet.com",
    defaultVersion: trustWallet,
    coloredVersion: trustWallet,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
];

const PartnershipsMobileSlider = () => {
  return (
    <MobileImageSlider
      images={partnerships}
      slidesPerView={3}
      initialSlide={2}
      containerClassNames="mt-8 lg:!hidden"
      slideImageClassName="h-[100px]"
    />
  );
};

export default PartnershipsMobileSlider;
