import SideMenu from "../../shared/Components/SideMenu";
import useTranslation from "@/shared/Hooks/useTranslation";
import useCountdown from "@/shared/Hooks/useCountdown";
import { useWeb3Modal } from "@web3modal/react";
import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ModalBuyNow from "./Modal/ModalBuyNow";
import BuyToken from "./BuyToken";
import Stages from "./AllStagesModal/Stages";

const Header = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { t, errors } = useTranslation("common");
  const { remaining, isFinished } = useCountdown(1584119600000);
  const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState(false);
  const [openAfterSuccessConnection, setOpenAfterSuccessConnection] = useState(false);
  const [isAllStagesOpen, setIsAllStagesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = state => {
    setIsBuyNowModalOpen(state);
  };

  useEffect(() => {
    if (openAfterSuccessConnection) {
      setIsBuyNowModalOpen(true);
    }
  }, [openAfterSuccessConnection]);

  useEffect(() => {
    function detectMobile() {
      return window.innerWidth < 520; // 520 is the breakpoint for mobile devices
    }

    setIsMobile(detectMobile());

    function handleResize() {
      setIsMobile(detectMobile());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onOpen = async () => {
    await open({
      route: "SelectNetwork",
    });
    setOpenAfterSuccessConnection(true);
  };

  const closeModal = () => {
    setIsBuyNowModalOpen(false);
  };

  const onClick = useCallback(async () => {
    if (isConnected) {
      setIsBuyNowModalOpen(true);
    } else {
      onOpen();
    }
  }, [isConnected, onOpen]);

  const handleOpenAllStages = useCallback(() => {
    setIsAllStagesOpen(true);
  }, [isAllStagesOpen]);

  const handleCloseAllStages = useCallback(() => {
    setIsAllStagesOpen(false);
  }, [isAllStagesOpen]);

  return (
    <div className="relative min-h-screen bg-lunching bg-cover bg-center bg-no-repeat text-center overflow-hidden w-full md:bg-cover md:bg-right md:text-left ">
      <SideMenu />
      <div className="container h-full text-white pt-32 md:pt-60 md:flex md:flex-col">
        <div className="w-50 relative mx-auto flex flex-col justify-center z-20 lg:px-8 lg:ml-0 xl:w-[700px] xl:px-0">
          <div className="flex flex-col justify-center">
            {isFinished ? (
              <BuyToken handleBuyNowButton={onClick} openAllStagesModal={handleOpenAllStages} />
            ) : (
              <>
                <h2 className="font-PolySans text-[28px] mb-1 md:mb-0 sm:text-5xl rtl:md:text-5xl ltr:md:text-6xl uppercase">
                  {t?.homeSection?.preSaleCountdown}
                </h2>
                <time className="font-semibold text-6xl text-[42px] lg:text-[70px] text-center md:mt-[29px]">
                  {`${remaining.days}:${remaining.hours}:${remaining.minutes}:${remaining.seconds}`}
                </time>
              </>
            )}
            {isConnected && <ModalBuyNow open={isBuyNowModalOpen} onClose={closeModal} handleOpen={handleOpen} />}
            <Stages show={isAllStagesOpen} onClose={handleCloseAllStages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
