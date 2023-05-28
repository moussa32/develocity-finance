import SwapToolIcon from "@/images/swap-tool.svg";
import CryptoAcademyIcon from "@/images/crypto-academy.svg";
import BridgeIcon from "@/images/bridge-icon.svg";
import DexIcon from "@/images/dex-icon.svg";
import MultiFunctionalIcon from "@/images/multi-functional.svg";
import WalletIcon from "@/images/wallet.svg";
import EcosystemTitle from "@/images/EcosystemTitle.png";
import EcosystemVideo from "../../public/assets/video/Eco-system.mp4";
import nationalTimes from "../../public/assets/images/national-times.svg";
import blockchianNews from "../../public/assets/images/blockchian_news.svg";
import emiratesFreePress from "../../public/assets/images/emirates-free-press.svg";
import abuDhabiReporter from "../../public/assets/images/abu-dhabi-reporter.svg"
import APNews from "../../public/assets/images/AP_logo.jpg"
import MobileImageSlider from "../../shared/Components/MobileImageSlider";
import { Autoplay } from "swiper";
// import Coins from "@/images/coins.png";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

const Ecosystem = () => {
  const { t } = useTranslation("common");

  const partnerships = [
    {
      title: "US National Times",
      link: "https://www.usnationaltimes.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: nationalTimes,
      coloredVersion: nationalTimes,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-50 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-50 ",
    },
    {
      title: "Blockchian News",
      link: "https://www.blockchainnewsonline.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: blockchianNews,
      coloredVersion: blockchianNews,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-50 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-50 ",
    },
    {
      title: "Emirates Free Press",
      link: "https://www.emiratesfreepress.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: emiratesFreePress,
      coloredVersion: emiratesFreePress,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-50 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-50 ",
    },
    {
      title: "AP News",
      link: "https://apnews.com/press-release/ein-presswire-newsmatics/technology-blockchain-ein-presswire-newsmatics-2ee78691e9e218b951d069b1d5e07ea4",
      defaultVersion: APNews,
      coloredVersion: APNews,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-50 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-50 ",
    }
    ,
    {
      title: "Abu Dhabi Reporter",
      link: "https://www.abudhabireporter.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust",
      defaultVersion: abuDhabiReporter,
      coloredVersion: abuDhabiReporter,
      imageActiveClassName: "max-w-[150px] md:max-w-[100%] opacity-50 opacity-80",
      imageClassName: "max-w-[150px] md:max-w-[100%] opacity-50 ",
    }
  ];
  
  return (
    <section className="container pt-16 pb-24 lg:py-15">
      <div className="max-w-[800px] mx-auto text-center lg:px-0 md:my-32">
        <h2 className="text-neutral-900 font-PolySans text-[28px] font-medium px-4 md:px-8 md:text-[52px] md:font-normal">
        {t?.homeSection?.ecoSystemSection?.blogsMain}
        </h2>
        <p className="text-neutral-700 text-[15px] px-4 md:px-8 md:text-lg mt-3">
        {t?.homeSection?.ecoSystemSection?.blogsSub}     
        </p>
      </div>

        <div className="hidden mt-auto mb-12 justify-center mx-auto px-4 gap-x-11 gap-y-6 md:flex md:gap-10 md:gap-x-10 md:flex-wrap md:justify-evenly lg:gap-x-14 lg:mb-20 lg:gap-y-0 lg:py-15">
          <a href="https://www.emiratesfreepress.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-50 hover:opacity-80"
            src={emiratesFreePress}
            alt="Emirates Free Press"
          />
          </a>
          <a href="https://www.usnationaltimes.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image 
            className="lg:max-w-[100px] md:max-w-[100%] opacity-50 hover:opacity-80" 
            src={nationalTimes} 
            alt="US National Times" 
          />
          </a>
          <a href="https://www.emiratesfreepress.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-50 hover:opacity-80"
            src={blockchianNews}
            alt="Blockchian News"
          />
          </a>
          <a href="https://apnews.com/press-release/ein-presswire-newsmatics/technology-blockchain-ein-presswire-newsmatics-2ee78691e9e218b951d069b1d5e07ea4">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-50 hover:opacity-80"
            src={APNews}
            alt="AP NEWs"
          />
          </a>
          <a href="https://www.abudhabireporter.com/article/634407995-develocity-revolutionizing-decentralized-finance-through-security-and-trust">
          <Image
            className="lg:max-w-[100px] md:max-w-[100%] opacity-50 hover:opacity-80"
            src={abuDhabiReporter}
            alt="Abu Dhabi Reporter"
          />
          </a>
        </div>
          <MobileImageSlider
              images={partnerships}
              slidesPerView={1.8}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              initialSlide={1}
              modules={[Autoplay]}
              containerClassNames="mt-1 max-h-[250px] lg:!hidden"
              slideImageClassName="h-[250px]"
          />


        <Image
          src={EcosystemTitle}
          alt="ecosystem"
          className="block w-[313.15px] max-w-[975.58px] mx-auto md:w-96 lg:w-full lg:mx-0 ltr:lg:ml-auto rtl:lg:mr-auto"
        />

      <div className="flex flex-col md:grid grid-cols-1 md:grid-cols-2 md:gap-8 ">
        <div className="flex flex-col order-2 md:order-1">
          <span className="text-sm w-[206px] py-2 px-4 text-[#101828] font-medium rounded-2xl tags-box-shadow">
            {t?.homeSection?.ecoSystemSection?.lableI}
          </span>
          <h3 className="text-[#101828] text-center font-PolySans text-[28px] font-bold mt-3 mb-4 md:mb-6 ltr:md:text-left rtl:md:text-right md:font-sans md:text-2xl lg:text-4xl">
            {t?.homeSection?.ecoSystemSection?.mainText}
          </h3>
          <p className="text-neutral-600 text-base">{t?.homeSection?.ecoSystemSection?.subText}</p>
          <p className="text-neutral-600 text-base mt-4">{t?.homeSection?.ecoSystemSection?.subTextSecondParagraph}</p>
          <div className="flex flex-wrap lg:grid lg:grid-cols-2 mt-8 gap-y-4">
            <div className="flex items-center w-3/5 ltr:mr-5 rtl:ml-5 ltr:lg:mr-0 rtl:lg:ml-0 lg:w-full">
              <Image src={MultiFunctionalIcon} className="w-8 h-8" alt="MultiFunctional" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.multiFunctionalTool}
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={SwapToolIcon} className="w-8 h-8" alt="SwapTool" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.swapTool}
              </h4>
            </div>
            <div className="flex items-center w-3/5 ltr:mr-5 rtl:ml-5 ltr:lg:mr-0 rtl:lg:ml-0 lg:w-full">
              <Image src={WalletIcon} className="w-8 h-8" alt="Wallet" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.wallet}
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={BridgeIcon} className="w-8 h-8" alt="Bridge" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.bridge}
              </h4>
            </div>
            <div className="flex items-center w-3/5 ltr:mr-5 rtl:ml-5 ltr:lg:mr-0 rtl:lg:ml-0 lg:w-full">
              <Image src={CryptoAcademyIcon} className="w-8 h-8" alt="CryptoAcademy" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.cryptoAcademy}
              </h4>
            </div>
            <div className="flex items-center">
              <Image src={DexIcon} className="w-8 h-8" alt="DEX" />
              <h4 className="ltr:ml-2 rtl:mr-2 text-[#171717] font-medium text-base">
                {t?.homeSection?.ecoSystemSection?.tools?.dex}
              </h4>
            </div>
          </div>
        </div>
        <video
          src={EcosystemVideo}
          className="block order-1 mx-auto mt-14 mb-[66px] w-[361px] lg:w-full lg:max-w-[592px] md:order-2"
          playsInline
          autoPlay
          muted
        ></video>

        {/*   <Image
          src={Coins}
          alt="coins"
          title="coins"
          className="block order-1 mx-auto mt-14 mb-[66px] w-[361px] lg:w-full lg:max-w-[592px] md:order-2"
        />*/}
      </div>
    </section>
  );
};

export default Ecosystem;
