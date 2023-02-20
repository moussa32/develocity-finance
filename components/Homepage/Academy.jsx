import Image from "next/image";
import AcadmyTitle from "../../public/assets/images/AcadmyTitle.png";
import Phone from "../../public/assets/images/Phone.png";
import useTranslation from "@/shared/Hooks/useTranslation";

const Academy = () => {
  const { t } = useTranslation("common");
  return (
    <section className="container pb-24 lg:pb-48">
      <Image
        src={AcadmyTitle}
        alt="ecosystem"
        className="mx-auto block max-w-[245.86px] mb-8 lg:mx-0 lg:mr-auto md:mb-2 lg:max-w-[765.95px]"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="w-[310px] mx-auto block relative h-full md:w-full md:mx-0">
          <Image
            src={Phone}
            className="rotate-[353deg] mb-14 md:rotate-0 lg:absolute md:mb-0 top-[-75px] left-[48px]"
            alt="Phone"
            title="Phone"
          />
        </div>

        <div className="flex flex-col ml-auto">
          <span className="bg-[#F3F4F8] mx-auto rounded-2xl text-xs font-medium p-1.5 pr-[18px] flex items-center gap-2 w-fit md:text-sm lg:flex-row lg:mx-0">
            <span className="bg-white py-1 px-2.5 rounded-2xl flex items-center">
              {t?.homeSection?.academySection?.lableI}
            </span>
            <span className="text-[#344054]">{t?.homeSection?.academySection?.lableII}</span>
          </span>
          <h3 className="text-[#101828] text-center rtl:text-right font-bold text-[28px] my-4 md:text-2xl ltr:md:text-left rtl:md:text-right md:mt-3 md:mb-6 lg:text-4xl">
            {t?.homeSection?.academySection?.mainText}
          </h3>
          <p className="text-neutral-500 text-base font-medium">{t?.homeSection?.academySection?.subText}</p>
          <p className="text-neutral-500 text-base font-medium mt-4">
            {t?.homeSection?.academySection?.subTextSecondParagraph}
          </p>
          <button className="flex justify-between py-3.5 px-[34px] rounded w-full bg-indigo-500 text-white text-md font-medium mt-8 md:w-48 md:rounded-sm md:px-[45px]">
            {t?.homeSection?.academySection?.visitNowBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academy;
