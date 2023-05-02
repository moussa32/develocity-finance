import alchamyPay from "@/images/alchemypay-logo.png";
import bscscanLogo from "@/images/bscscan-logo.png";
import metamaskLogo from "@/images/metamask-logo.png";
import moralisLogo from "@/images/moralis-logo.svg";
import trustWallet from "@/images/trust-wallet.png";
import panckeswap from "@/images/panckeswap-logo.png";
import xtcom from "@/images/xtcom-logo.png";
import bitmart from "@/images/bitmart-logo.png";
import nxgen from "@/images/nxgen-logo.png";
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
    title: "panckeswap-log Logo",
    link: "https://pancakeswap.finance/",
    defaultVersion: panckeswap,
    coloredVersion: panckeswap,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "nxgen Logo",
    link: "https://play.google.com/store/apps/details?id=com.eblock6.nextgen&hl=en&gl=US",
    defaultVersion: nxgen,
    coloredVersion: nxgen,
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
  {
    title: "XT com",
    link: "https://www.xt.com/en",
    defaultVersion: xtcom,
    coloredVersion: xtcom,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "BitMart",
    link: "https://www.bitmart.com/",
    defaultVersion: bitmart,
    coloredVersion: bitmart,
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
