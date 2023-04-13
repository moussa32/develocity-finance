import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import { Menu, Transition } from "@headlessui/react";
import useTranslation from "@/shared/Hooks/useTranslation";
import { Fragment } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useNetwork, useSwitchNetwork } from "wagmi";

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

  console.log(chains);
  console.log(error ?? JSON.stringify(error, 2, 0));

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
                  <IoIosArrowDown className="ml-2 -mr-1 h-5 w-5 text-black" aria-hidden="true" />
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
          <div className="h-14 border-[1px] border-[#35c486] flex items-center justify-between rounded relative mt-2 mb-5 bg-[#35c48626]">
            <p className="h-14 leading-[58px] absolute left-5 text-sm">
              {walletAddress && walletAddress.slice(0, 10) + "..." + walletAddress.slice(32, 42)}
            </p>
            <button
              className="w-6 h-6 leading-5 right-5 p-0 border-[1.5px] border-[#8b8b8b] absolute"
              onClick={() => disconnect()}
            >
              &#9747;
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
          secondaryText="= $0.22"
          hr="true"
        />
        <TextItem title={t?.walletInfoModal.referralsToClaim} value={referralsToClaim} hr="" isLoaded={isDataLoaded} />
        <div>
          <NextButton
            handleStep={() => {
              handleStep("options");
              handleCurrent();
            }}
            text={t?.walletInfoModal.nextBtn}
            stylesButton={{ bg: "#0D162A", marginTop: "70px" }}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default WalletInfoModal;
