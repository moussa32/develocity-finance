import twitter from "../../public/assets/images/LD_twitter.svg";
import facebook from "../../public/assets/images/LD_facebook.svg";
import instagram from "../../public/assets/images/LD_instagram.svg";
import LeadershipSlider from "./LeadershipSlider";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

function Leadership() {
  const { t } = useTranslation("common");
  return (
    <div className="text-center my-24">
      <div className="font-PolySans container lg:px-0 mx-auto">
        <p className="text-[28px] md:text-5xl text-[#171717]">
         {t?.homeSection?.leadershipSection?.mainText}
        </p>
        <p className="text-base md:text-lg mt-3 md:mt-2 text-[#525252] md:text-[#404040]">
         {t?.homeSection?.leadershipSection?.subText}
        </p>
        <div className="hidden gap-x-8 md:grid mt-12 md:mt-14 gap-7 grid-cols-1 lg:grid-cols-3">
          <div className="relative pt-[27px] pb-[27px] rounded-xl LD-ceo bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] h-[484px]">
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 ltr:text-left rtl:text-right text-white z-50">
                <p className="text-2xl font-medium">{t?.homeSection?.leadershipSection?.members[0].name}</p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">{t?.homeSection?.leadershipSection?.members[0].role}</label>
                  <div className="flex gap-2">
                    <Image className="w-5" src={facebook} />
                    <Image className="w-5" src={twitter} />
                    <Image className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-[27px] pb-[27px] rounded-xl bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] h-[484px]">
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 ltr:text-left rtl:text-right text-white z-50">
                <p className="text-2xl font-medium mb-1">{t?.homeSection?.leadershipSection?.members[1].name}</p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">{t?.homeSection?.leadershipSection?.members[1].role}</label>
                  <div className="flex gap-2">
                    <Image className="w-5" src={facebook} />
                    <Image className="w-5" src={twitter} />
                    <Image className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pt-[27px] pb-[27px] rounded-xl LD-cmo bg-cover bg-center bg-no-repeat bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] h-[484px]">
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 ltr:text-left rtl:text-right text-white z-50">
                <p className="mb-2 text-2xl font-medium">
                {t?.homeSection?.leadershipSection?.members[2].name}
                </p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">{t?.homeSection?.leadershipSection?.members[2].role}</label>
                  <div className="flex gap-2">
                    <Image className="w-5" src={facebook} />
                    <Image className="w-5" src={twitter} />
                    <Image className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LeadershipSlider />
      </div>
    </div>
  );
}
export default Leadership;
