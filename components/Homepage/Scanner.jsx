import ScannerWallet from "@/images/scannerWallet.svg";
import AppleStoreIcon from "@/images/AppleStoreIcon.svg";
import GooglePlayIcon from "@/images/GooglePlayIcon.svg";
// import ScanTitle from "@/images/ScanTitle.png";
// import ScannerMobileCoins from "@/images/ScannerMobileCoins.png";
import scannerTitle from "@/images/ScannerTitle.png";
import scannerVideo from "../../public/assets/video/Scanner.mp4";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

const Scanner = () => {
  const { t } = useTranslation("common");
  return (
    <section className="container lg:py-48 lg:px-0 mx-auto">
      <picture>
        <source media="(max-width:768px)" srcSet="/assets/images/ScannerMobileTitle.png" />
        <Image src={scannerTitle} alt="scanner" className="block mx-auto mb-2 w-3/5" />
        <video
          src={scannerVideo}
          className="block mx-auto mb-2 w-[315px] lg:w-full lg:max-w-[592px]"
          autoPlay
          playsInline
          muted
        ></video>
      </picture>
      {/*  <Image src={ScannerMobileCoins} alt="scanner" className="block max-w-[308px] mx-auto mt-12 md:hidden" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:mt-24">
        <div className="flex flex-col ml-auto">
          <span className="text-sm max-w-fit py-2 px-4 text-[#101828] font-medium rounded-2xl tags-box-shadow">
            {t?.homeSection?.scannerSection?.lableI}
          </span>
          <h3 className="text-[#101828] rtl:text-right text-[28px] text-center leading-9 font-PolySans font-bold text-xl md:mt-3 mb-4 md:text-2xl md:mb-6 lg:text-4xl md:font-sans ltr:md:text-left rtl:md:text-right">
            {t?.homeSection?.scannerSection?.mainText[0]}
            <span className="block md:inline">{t?.homeSection?.scannerSection?.mainText[1]}</span>
          </h3>
          <p className="text-neutral-500 text-base font-normal md:font-medium">
            {t?.homeSection?.scannerSection?.subText}
          </p>
          <p className="text-neutral-500 text-base font-normal md:font-medium mt-4">
            {t?.homeSection?.scannerSection?.subTextSecondParagraph}
          </p>
          <div className="flex gap-y-4 gap-x-6 sm:flex-row mt-8">
            <button onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://tool.develocity.finance';
                    }}
            className="py-[15px] px-[45px] bg-indigo-500 text-white text-[18px] md:text-md font-medium w-full rounded-sm sm:w-48">
              {t?.homeSection?.scannerSection?.getStartedBtn}
            </button>
            <div className="flex justify-center sm:justify-start">
              <button className="py-3.5 px-4 border-[##D0D5DD] border-[1px] rounded">
                <Image src={AppleStoreIcon} className="min-w-[21px] min-h-[24px]" alt="Apple Store" />
              </button>
              <button className="py-3.5 px-4 border-[##D0D5DD] border-[1px] rounded ltr:ml-3 rtl:mr-3">
                <Image src={GooglePlayIcon} alt="Google Play" className="min-w-[21px] min-h-[24px]" />
              </button>
            </div>
          </div>
        </div>
        <Image src={ScannerWallet} className="hidden lg:block" alt="Scanner wallet" />
      </div>
    </section>
  );
};

export default Scanner;
