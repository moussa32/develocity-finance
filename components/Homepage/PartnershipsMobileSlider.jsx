import alchamyPay from "@/images/alchemypay-logo.png";
import bscscanLogo from "@/images/bscscan-logo.png";
import metamaskLogo from "@/images/metamask-logo.png";
import moralisLogo from "@/images/moralis-logo.svg";
import trustWallet from "@/images/trust-wallet.png";
import panckeswap from "@/images/panckeswap-logo.png";
import xtcom from "@/images/xtcom-logo.png";
import bitmart from "@/images/bitmart-logo.png";
import cmc from "@/images/CMC-logo.png";
import coingecko from "@/images/coingecko-logo.png";
import nxgen from "@/images/nxgen-logo.png";
import binance from "@/images/binance-logo.png";
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
import { Autoplay } from "swiper";

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
    title: "nxgen Logo",
    link: "https://crypto.eblock6.com/nxgen-app",
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
    title: "BitMart",
    link: "https://www.bitmart.com/",
    defaultVersion: bitmart,
    coloredVersion: bitmart,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "Coin Market Cap",
    link: "https://coinmarketcap.com/",
    defaultVersion: cmc,
    coloredVersion: cmc,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
  {
    title: "CoinGecko",
    link: "https://www.coingecko.com/",
    defaultVersion: coingecko,
    coloredVersion: coingecko,
    imageActiveClassName: "h-[100px] w-[100px] object-cover",
    imageClassName: "h-[100px] w-[100px] feature-slider-image-active object-cover",
  },
];

const PartnershipsMobileSlider = () => {
  return (
    <MobileImageSlider
      images={partnerships}
      slidesPerView={1.8}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      initialSlide={1}
      modules={[Autoplay]}
      containerClassNames="mt-8 lg:!hidden"
      slideImageClassName="h-[100px]"
    />
  );
};

export default PartnershipsMobileSlider;
