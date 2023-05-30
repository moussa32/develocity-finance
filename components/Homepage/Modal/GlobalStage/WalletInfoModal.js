import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import { Menu, Transition } from "@headlessui/react";
import useTranslation from "@/shared/Hooks/useTranslation";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNetwork, useSwitchNetwork } from "wagmi";
import CloseBuyModalButton from "@/images/closeBuyModalButton.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

const WalletInfoModal = ({
  handleStep,
  walletAddress,
  disconnect,
  deveBalance,
  referralsToClaim,
  handleCurrent,
  isDataLoaded,
}) => {
  const { t } = useTranslation("buy-token-modal");
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork();
  const { locale, query } = useRouter();
  const { ref: refAddress } = query;

  const handleOnCopy = text => {
    toast.success(`Your ref address ${text} has been copied`, {
      duration: 5000,
      className: "flex flex-col items-center text-center",
    });
  };

  return (
    <>
      <div>
        <ModalHeaderText header={t?.walletInfoModal.mainText} caption={t?.walletInfoModal.subText} />

        <div>
          <div className="flex justify-between">
            <span className="text-sm text-[#a5a5a5]">{t?.walletInfoModal.inputLable}</span>
            <Menu as="div" className="relative z-50 inline-block text-left">
              <div>
                <Menu.Button className="flex items-center w-full justify-center rounded-md px-4 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  {chain.name}
                  <IoIosArrowDown
                    className={`${locale === "ar" ? "mr-2" : "ml-2"} -mr-1 h-3 w-3 text-black`}
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    {chains.map(details => (
                      <Menu.Item key={details.id}>
                        {({ active }) => (
                          <button
                            className={`${
                              active ? "bg-violet-500 text-white" : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            onClick={() => switchNetwork?.(details.id)}
                          >
                            {details.name}
                            {isLoading && pendingChainId === details.id && " (switching)"}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="border-[1px] h-14 px-5 gap-5 border-[#4CA154] flex items-center justify-between rounded relative mt-2 mb-8 bg-[#35C486] bg-opacity-[15%]">
            <p className="truncate text-sm">{walletAddress && walletAddress}</p>
            <button className="w-6 h-6 basis-6 flex-shrink-0 flex-grow" onClick={() => disconnect()}>
              <Image src={CloseBuyModalButton} alt="Close" />
            </button>
          </div>
        </div>
        <TextItem
          title={t?.walletInfoModal.deveBalance}
          value={deveBalance.amount}
          percentage={deveBalance.value}
          isLoaded={isDataLoaded}
          hr="true"
        />
        <TextItem
          title={t?.walletInfoModal.tokensToClaim}
          value="1 DEVE"
          showSymbol={false}
          isLoaded={isDataLoaded}
          secondaryText="= $0.20"
          hr="true"
        />
        <TextItem
          title={
            <>
              {t?.walletInfoModal.referralsToClaim}
              {refAddress && (
                <CopyToClipboard text={refAddress} onCopy={handleOnCopy}>
                  <button className="text-[10px] flex items-center gap-1 ml-2 capitalize bg-primary/10 hover:bg-primary/90 hover:text-white transition-all duration-300 hover:border-primary/60 border-1 border-primary/80 text-neutral-800 font-medium py-0.5 px-2 rounded-xl">
                    <FiCopy size={12} /> copy referral
                  </button>
                </CopyToClipboard>
              )}
            </>
          }
          value={referralsToClaim.amount}
          secondaryText={"USDT"}
          hr=""
          isLoaded={isDataLoaded}
        />
        <div>
          <NextButton
            handleStep={() => {
              handleStep("options");
              handleCurrent();
            }}
            text={t?.walletInfoModal.nextBtn}
            stylesButton={{ bg: "#0D162A" }}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default WalletInfoModal;
