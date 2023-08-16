import Image from "next/image";
import ShareIcon from "../../public/assets/images/shareIcon.svg";
import { Open_Sans } from "@next/font/google";
import useTranslation from "@/shared/Hooks/useTranslation";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["600", "700"] });

const TabHeader = () => {
  const { t } = useTranslation("links");

  return (
    <div className="flex items-center">
      <h1 className={`text-2xl lg:text-4xl ${openSans.className}`}>{t?.title}</h1>
      {navigator.canShare(window.pathname) && <Image src={ShareIcon} className="ltr:ml-auto rtl:mr-auto" />}
    </div>
  );
};

export default TabHeader;
