import logo from "../../public/assets/images/footer-logo.svg";
import facebook from "../../public/assets/images/facebook.svg";
import twitter from "../../public/assets/images/twitter.svg";
import instagram from "../../public/assets/images/instagram.svg";
import telegram from "../../public/assets/images/telegram.svg";
import Image from "next/image";
import NextNavLink from "./NextNavLink";
import useTranslation from "@/shared/Hooks/useTranslation";

const Footer = () => {
  const { t, errors } = useTranslation("footer");
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto md:px-10 lg:px-0 pt-16 md:pt-24 pb-16 ltr:text-left rtl:text-right text-[#525C7A] text-base font-medium">
        <div className="grid grid-cols-1 ltr:ml-4 rtl:mr-4 md:0 md:grid-cols-2">
          <div>
            <Image className="" src={logo} alt="footer logo" />
            <div className="mt-6">
              <NextNavLink
                href="/"
                className="md:block lg:inline-block ltr:mr-6 rtl:ml-6 ltr:md:mr-0 rtl:md:ml-0 ltr:lg:mr-6 rtl:lg:ml-6 mt-6 lg:mt-0"
              >
                {t?.links?.returnsFAQ}
              </NextNavLink>
              <NextNavLink
                href="/terms-and-conditions"
                className="md:block lg:inline-block ltr:mr-6 rtl:ml-6 ltr:md:mr-0 ltr:md:ml-0 ltr:lg:mr-6 rtl:lg:ml-6 mt-6 lg:mt-0"
              >
                {t?.links?.privacyPolicy}
              </NextNavLink>
              <NextNavLink
                href="/contact-us"
                className="md:block lg:inline-block ltr:mr-6 rtl:ml-6 ltr:md:mr-0 rtl:md:ml-0 ltr:lg:mr-6 rtl:lg:ml-6 mt-6 lg:mt-0"
              >
                {t?.links?.contact}
              </NextNavLink>
              <NextNavLink href="/" className="hidden md:block lg:inline-block ltr:lg:mr-6 rtl:lg:ml-6 my-6 lg:my-0">
                {t?.links?.backToDevelocity}
              </NextNavLink>
            </div>
          </div>
          <div className="hidden md:block ltr:ml-auto rtl:mr-auto">
            <p className="px-5 md:px-0">{t?.input?.mainText1}</p>
            <p className="px-5 md:px-0">{t?.input?.mainText2}</p>
            <div className="mt-6 flex flex-col md:flex-row items-center flex-wrap md:mt-4">
              <input
                className="placeholder:text-[#667085] font-normal placeholder:text-base h-11 w-72 md:w-80 border-1 border py-5 ltr:md:mr-2 rtl:md:ml-2 ltr:pl-3 rtl:pr-3 border-[#D0D5DD]"
                placeholder={t?.input?.placeholder}
              />
              <button className="flex items-center justify-center bg-indigo-500 h-[44px] rounded-sm text-white font-normal py-3 px-6 ltr:ml-2 rtl:mr-2 mt-5 md:mx-auto lg:mt-0 hover:bg-indigo-600">
                {t?.input?.subscribeBtn}
              </button>
            </div>
          </div>
        </div>
        <hr className="mt-8 md:mt-16 w-[92vw] md:w-auto mx-auto text-neutral-200 mb-8"></hr>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <a href="#">
              <Image className="inline-block ltr:ml-4 rtl:mr-4" src={facebook} alt="facebook icon" />
            </a>
            <a href="#">
              <Image className="inline-block ltr:ml-4 rtl:mr-4" src={twitter} alt="twitter icon" />
            </a>
            <a href="#">
              <Image className="inline-block ltr:ml-4 rtl:mr-4" src={instagram} alt="instagram icon" />
            </a>
            <a href="#">
              <Image className="inline-block ltr:ml-4 rtl:mr-4" src={telegram} alt="telegram icon" />
            </a>
          </div>
          <p className="mt-6 md:mt-0 ltr:ml-4 rtl:mr-4 ltr:md:ml-0 rtl:md:mr-0 ltr:md:text-right rtl:md:text-left">
            {t?.copyright}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
