import Image from "next/image";
import AcadmyTitle from "@/images/AcadmyTitle.png";
import Phone from "@/images/Phone.png";
import useTranslation from "@/shared/Hooks/useTranslation";

const isReady = false;

const Academy = () => {
  const { t } = useTranslation("common");

  return (
    <section className="container pb-24 lg:pb-48">
      <Image
        src={AcadmyTitle}
        alt="ecosystem"
        className="mx-auto block max-w-[245.86px] mb-8 md:mb-2 lg:max-w-[765.95px]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="w-[310px] mx-auto block relative h-full md:w-full md:mx-0">
          <Image
            src={Phone}
            className="rotate-[353deg] mb-14 md:rotate-0 lg:absolute md:mb-0 top-[20px] ltr:left-[32px] rtl:right-[32px]"
            alt="Phone"
            title="Phone"
          />
        </div>

        <div className="flex flex-col mt-24 ml-auto">
          <span className="text-sm w-[180px] py-2 px-4 text-[#101828] font-medium rounded-2xl tags-box-shadow">
            {t?.homeSection?.academySection?.lableI}
          </span>
          <h3 className="text-[#101828] text-center rtl:text-right font-bold text-[28px] my-4 md:text-2xl ltr:md:text-left rtl:md:text-right md:mt-3 md:mb-6 lg:text-4xl">
            {t?.homeSection?.academySection?.mainText}
          </h3>
          <p className="text-neutral-700 text-base font-medium">{t?.homeSection?.academySection?.subText}</p>
          <p className="text-neutral-700 text-base font-medium mt-4">
            {t?.homeSection?.academySection?.subTextSecondParagraph}
          </p>
          {isReady ? (
            <button className="flex justify-between py-3.5 px-[34px] rounded w-full bg-indigo-500 text-white text-md font-medium mt-8 md:w-48 md:rounded-sm md:px-[45px]">
              {t?.homeSection?.academySection?.visitNowBtn}
            </button>
          ) : (
            <button className="flex justify-center py-3.5 cursor-not-allowed rounded w-full bg-neutral-300 text-neutral-500 text-md font-medium mt-8 max-w-[170px] md:rounded-sm">
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Academy;
