import phoneImage from "../../public/assets/images/blog-phone.png";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "@/shared/Hooks/useTranslation";

function Blog() {
  const { t } = useTranslation("common");
  return (
    <div className="text-center mt-28 mb-[59px] md:mt-32 md:mb-32">
      <div className="container mx-auto">
        <h3 className="font-PolySans text-[28px] text-[#171717] md:text-6xl  md:text-[#29233B]">
          {t?.homeSection?.blogSection?.mainText}
        </h3>
        <p className="text-base text-[#525252] md:text-lg mt-3 md:mt-4 md:capitalize md:text-[#525C7A]">
          {t?.homeSection?.blogSection?.subText}
        </p>
        <div className="flex justify-center items-center">
          <div className="mt-8 gap-9 grid grid-cols-1 lg:grid-cols-2">
            <div className="shadow-xl bg-slate-50 flex flex-col justify-center rounded-lg overflow-hidden h-[650px] max-w-[488px]">
              <div className="ltr:text-left rtl:text-right rtl:pr-4 ml-4 ltr:md:ml-8 rtl:md:mr-8 mt-8 flex flex-col">
                <h3 className="font-sans text-[28px] font-semibold px-2 md:px-0 md:text-3xl md:font-medium capitalize text-[#29233B]">
                  {t?.homeSection?.blogSection?.cards[0]?.mainText}
                </h3>
                <p className="text-base mt-3 ltr:pl-2 ltr:md:pl-0 rtl:pr-2 rtl:md:pr-0 text-[#525252] md:text-[#525C7A]">
                {t?.homeSection?.blogSection?.cards[0]?.subText}
                </p>
                <Link href={"https://develocity.solutions/"} className="mt-10 md:mt-7 ltr:pl-2 ltr:md:pl-0 rtl:pr-2 rtl:md:pr-0 font-medium flex gap-2 text-indigo-500">
                  {t?.homeSection?.blogSection?.learnMoreBtn}
                </Link>
              </div>
              <div className="flex justify-center h-[285px] md:h-[700px]">
                <div className="relative w-5/6 md:w-4/6">
                  <div className="absolute top-12 md:top-16 w-full">
                    <Image className="w-full" src={phoneImage} alt="phone" />
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-xl bg-slate-50	 flex flex-col pb-6 md:pb-10 rounded-lg h-[600px] md:h-[650px] max-w-[488px]">
              <div className="realtive blog-bg bg-center bg-no-repeat md:bg-cover flex justify-center rounded-t-lg h-[382px]"></div>
              <div className="ltr:text-left rtl:text-right rtl:pr-4 max-w-[424px] ml-4 md:ml-8 mt-3 flex flex-col ">
                <h3 className="font-sans text-[28px] font-semibold md:text-3xl mt-3 ltr:pl-2 ltr:md:pl-0 rtl:pr-2 rtl:md:pr-0 md:font-medium capitalize text-[#29233B]">
                 {t?.homeSection?.blogSection?.cards[1]?.mainText}
                </h3>
                <p className="text-base mt-3 md:mt-4 ltr:pl-2 ltr:md:pl-0 rtl:pr-2 rtl:md:pr-0 text-[#525C7A]">
                 {t?.homeSection?.blogSection?.cards[1]?.subText}
                </p>
                <Link href="https://tool.develocity.finance/" className="mt-4 md:mt-7 font-medium ltr:pl-2 ltr:md:pl-0 rtl:pr-2 rtl:md:pr-0 flex gap-2 text-indigo-500">
                  {t?.homeSection?.blogSection?.learnMoreBtn}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg mt-[46px] md:mt-[60px] text-indigo-500 font-semibold">
          <Link href="/terms-and-conditions"> {t?.homeSection?.blogSection?.checkMoreNewsBtn}</Link>
        </div>
      </div>
    </div>
  );
}
export default Blog;
