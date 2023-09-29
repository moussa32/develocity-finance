import { memo } from "react";
import Image from "next/image";
import Bitmart from "@/images/partners/Bitmart.svg";
import GateIo from "@/images/partners/GateIo.svg";
import Mexc from "@/images/partners/Mexc.svg";
import S from "@/images/partners/S.svg";

import useTranslation from "@/shared/Hooks/useTranslation";
import useCountdown from "@/shared/Hooks/useCountdown";

const NEXT_STATE_TIMESTAMP = 1691269200000;

const BuyToken = ({ handleBuyNowButton }) => {
  const { t } = useTranslation("buynow");
  const { remaining, isFinished } = useCountdown(NEXT_STATE_TIMESTAMP);

  return (
    <>
      <h2 className="uppercase text-center basis-[46px] mx-auto font-PolySans text-3xl mb-5 flex gap-2 md:gap-6 md:text-6.5xl">
        {t?.title?.mainText}
        <span className="block text-indigo-500 tracking-[4px]">{t?.title?.subText}</span>
      </h2>

      <div className="relative rounded-xl bg-secondary/50 backdrop-blur-[25px] backdrop-brightness-90 sm:mx-auto md:mx-12 max-w-[592px] py-4 px-3 md:p-6 pb-4.5 overflow-hidden">
        {!isFinished && (
          <div className="flex justify-center my-4">
            <time className="font-semibold gap-1 md:gap-4 flex rtl:flex-row-reverse	 text-center">
              <span className="flex flex-col">
                <span className="text-[42px] lg:text-[60px]">{remaining.days} </span>
                {t?.counter?.days}
              </span>
              <span className="text-[42px] lg:text-[60px]">:</span>
              <span className="flex flex-col">
                <span className="text-[42px] lg:text-[60px]">{remaining.hours} </span>
                {t?.counter?.hours}
              </span>
              <span className="text-[42px] lg:text-[60px]">:</span>
              <span className="flex flex-col">
                <span className="text-[42px] lg:text-[60px]">{remaining.minutes} </span>
                {t?.counter?.minutes}
              </span>
              <span className="text-[42px] lg:text-[60px]">:</span>
              <span className="flex flex-col">
                <span className="text-[42px] lg:text-[60px]">{remaining.seconds} </span>
                {t?.counter?.seconds}
              </span>
            </time>
          </div>
        )}
        <a className="text-xs text-neutral-300 text-center mx-auto block">{t?.sub?.tokensClaim}</a>
      </div>
      <section className="flex mt-8 mx-auto gap-5">
        <button
          onClick={handleBuyNowButton}
          className="border-2 h-12 border-[#A8B4F7] w-[200px] rounded duration-300 bg-indigo-500 text-white text-md font-medium hover:border-transparent hover:bg-indigo-500"
        >
          {t?.sub?.BuyNow}
        </button>
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/watch?v=y-MEnm_Aa9s"
          className="flex items-center gap-1 md:gap-3"
        >
          <div className="w-[52px] h-12 rounded bg-neutral-50 flex items-center justify-center">
            <Image src={Play} alt="Play how to buy" size={25} className="text-neutral-700" />
          </div>
          <span className="underline underline-offset-4">{t?.sub?.HowtoBuy}</span>
        </a>*/}
      </section>
      <section className="flex flex-wrap items-center justify-center gap-4 mt-16">
        <div className="w-[60.7px] h-[60.7px] bg-white rounded flex items-center justify-center">
          <Image width={40.47} src={Bitmart} alt="Bitmart" />
        </div>
        <div className="w-[60.7px] h-[60.7px] bg-white rounded flex items-center justify-center">
          <Image width={24.4} src={S} alt="S" />
        </div>
        <div className="w-[60.7px] h-[60.7px] bg-white rounded flex items-center justify-center">
          <Image width={49.41} src={Mexc} alt="Mexc" />
        </div>
        <div className="w-[60.7px] h-[60.7px] bg-white rounded flex items-center justify-center">
          <Image width={40.47} src={GateIo} alt="Gate.io" />
        </div>
      </section>
    </>
  );
};

export default memo(BuyToken);
