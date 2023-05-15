import StaticPageHeader from "../shared/Components/StaticPageHeader";
import Location from "../public/assets/images/location.png";
// import MapPlaceholder from "../public/assets/images/map-placeholder.png";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "@/shared/Hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation("contact-us");
  return (
    <>
      <StaticPageHeader
        summary={t?.contactUs?.header}
        title={t?.contactUs?.mainText}
        description={t?.contactUs?.subText}
      />
      <section className="container px-10 xl:px-0 mx-auto mb-32 lg:mb-[275px]">
        <Image src={Location} className="block mt-[105px] mb-9" title="Our location" alt="Our location" />
        <div className="flex justify-center">
          {/* <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2 xl:gap-x-[117px]"> */}
          {/* <Image src={MapPlaceholder} alt="Map" title="Map" className="block mx-auto h-full" /> */}
          <div className="mt-6 lg:mt-0 text-center ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#29233B]">{t?.contactUs?.form?.header}</h2>
            <p className="font-medium mt-3 mb-9 text-sm">
              {t?.contactUs?.form?.reachUs[0]}
              <a className="text-indigo-500" href="mailto:info@develocity.finance">
                info@develocity.finance
              </a>
              {t?.contactUs?.form?.reachUs[1]}
            </p>
            <form className="xl:max-w-[512px] mx-auto xl:mx-0">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-6 lg:gap-x-8">
                <div className="font-medium">
                  <label className="block text-sm mb-1.5 text-[#344054]">{t?.contactUs?.form?.firstName}</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full xl:max-w-[240px]"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="font-medium">
                  <label className="block text-sm mb-1.5 text-[#344054]">{t?.contactUs?.form?.lastName}</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full xl:max-w-[240px]"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="font-medium col-span-2">
                  <label className="block text-sm mb-1.5 text-[#344054]">{t?.contactUs?.form?.email}</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                {/* <div className="font-medium col-span-2">
                  <label className="block text-sm mb-1.5 text-[#344054]">{t?.contactUs?.form?.phoneNumber}</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full"
                    type="email"
                    placeholder="email"
                  />
                </div> */}
                <div className="font-medium col-span-2">
                  <label className="block text-sm mb-1.5 text-[#344054]">{t?.contactUs?.form?.message}</label>
                  <textarea
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full overflow-hidden resize-none"
                    rows={10}
                  />
                </div>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <label className="order-2 text-xs lg:text-base">
                  {t?.contactUs?.form?.checkbox[0]}
                  <Link className="text-indigo-400" href="/terms-and-conditions">
                    {t?.contactUs?.form?.checkbox[1]}
                  </Link>
                </label>
                <input className="order-1 w-5 h-5 border border-[#D0D5DD] rounded" type="checkbox" />
              </div>
              <button className="bg-indigo-500 w-full text-white h-[52px] rounded-sm mt-8" type="submit">
                {t?.contactUs?.form?.sendBtn}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
