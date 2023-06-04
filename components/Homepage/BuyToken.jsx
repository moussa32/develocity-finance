import useProgress from "@/shared/Hooks/useProgress";
import { memo } from "react";
import ProgressBar from "./ProgressBar";
import Play from "@/images/play-icon.svg";
import Image from "next/image";
import ApplePay from "@/images/apay-logo.png";
import GooglePay from "@/images/gpay-logo.png";
import Mastercard from "@/images/mc-logo.png";
import Visa from "@/images/visa-logo.png";
import Binance from "@/images/bpay-logo.png";
// import Binance from "@/images/binance-pay.png";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useQuery } from "@tanstack/react-query";
import { fetchPreSaleStatus } from "@/api/fetchPreSaleStatus";

const SOLD_PERCENTAGE = 0;

const BuyToken = ({ handleBuyNowButton, openAllStagesModal }) => {
  const { t } = useTranslation("buynow");
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["preSaleStatus"],
    queryFn: fetchPreSaleStatus,
  });
  const { progress } = useProgress({
    max: data ? Number(Number(data.soldPercentage) + 1.96 ).toFixed(2) : SOLD_PERCENTAGE,
  });
  return (
    <>
      <h2 className="uppercase text-center basis-[46px] mx-auto font-PolySans text-3xl mb-5 flex gap-2 md:gap-6 md:text-6.5xl">
        {t?.title?.mainText}
        <span className="block text-indigo-500 tracking-[4px]">{t?.title?.subText}</span>
      </h2>
      
      <div className="relative rounded-xl bg-secondary/50 backdrop-blur-[25px] backdrop-brightness-90 sm:mx-auto md:mx-12 max-w-[592px] py-4 px-3 md:p-6 pb-4.5 overflow-hidden">
        <div className="flex justify-between mb-3">
          <h3 className="font-medium text-sm md:text-lg">
            {progress}% <span className="text-indigo-500">{t?.title?.SOLD}</span>
          </h3>
          <h3 className="font-medium text-sm md:text-lg">
            ${new Intl.NumberFormat().format(data ?  Number(Number(data.totalSOLDOnUSD).toFixed(0)) + 19575 : 0)}{" "} / $1,000,000
          </h3>
        </div>
        <ProgressBar value={data ? Number(Number(data.soldPercentage) + 1.96 ).toFixed(2) : SOLD_PERCENTAGE} />
        
        <div className="flex items-center flex-col gap-2 bg-indigo-500/10 border-indigo-500/30 border-1 rounded-xl px-4 py-[15px] sm:gap-0 sm:flex-row justify-center md:justify-between md:px-6">
          <div className="ltr:sm:border-r-[#3F3C7F] rtl:sm:border-l-[#3F3C7F] ltr:sm:border-r-1 rtl:sm:border-l-1 ltr:sm:pr-10 rtl:sm:pl-10">
            <h3 className="text-sm font-medium opacity-30 text-neutral-50 uppercase md:mb-1">{t?.sub?.stage}</h3>
            <span className="text-sm md:text-lg font-medium capitalize ">1</span>
          </div>
          <div className="ltr:sm:border-r-[#3F3C7F] rtl:sm:border-l-[#3F3C7F] ltr:sm:border-r-1 rtl:sm:border-l-1 sm:px-10">
            <h3 className="text-sm font-medium opacity-30 text-neutral-50 uppercase md:mb-1">{t?.sub?.price}</h3>
            <span className="text-sm md:text-lg font-medium capitalize">$0.2 = 1 $DEVE</span>
          </div>
          <div className="ltr:sm:pl-10 rtl:sm:pr-10">
            <h3 className="text-sm font-medium opacity-30 text-neutral-50 uppercase md:mb-1">{t?.sub?.tokens}</h3>
            <span className="text-sm md:text-lg font-medium capitalize">5,000,000</span>
          </div>
        </div>
        {/* <button
          onClick={openAllStagesModal}
          className="uppercase text-xs text-neutral-400 underline text-center mx-auto block mt-4.5"
        >
          {t?.sub?.AllStages}
        </button> */}
        <a 
          className="text-s text-neutral-300 text-center mx-auto block mt-4.5"
        >
          {t?.sub?.tokensClaim}
        </a>
      </div>
      <section className="flex mt-8 mx-auto gap-5">
        <button
          onClick={handleBuyNowButton}
          className="border-2 h-12 border-[#A8B4F7] w-[200px] rounded duration-300 bg-indigo-500 text-white text-md font-medium hover:border-transparent hover:bg-indigo-500"
        >
          {t?.sub?.BuyNow}
        </button>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=y-MEnm_Aa9s" className="flex items-center gap-1 md:gap-3">
          <div className="w-[52px] h-12 rounded bg-neutral-50 flex items-center justify-center">
            <Image src={Play} alt="Play how to buy" size={25} className="text-neutral-700" />
          </div>
          <span className="underline underline-offset-4">{t?.sub?.HowtoBuy}</span>
        </a>
      </section>
      <section className="flex flex-wrap items-center justify-center gap-2 mt-4.5">
        
        <Image width={55} src={Visa} className="Pay with Visa" />
        <Image width={55} src={Mastercard} className="Pay with Mastercard" />
        {/* <Image width={55} src={ApplePay} className="Pay with ApplePay" />
        <Image width={55} src={GooglePay} className="Pay with GooglePay" />
        <Image width={55} src={Binance} className="Pay with BinancePay" /> */}
        
        <div className="underline text-sm text-neutral-400 flex-initial">{t?.sub?.PaymentSupported}</div>
      </section>
    </>
  );
};

export default memo(BuyToken);
