import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import NextButton from "../CommonStage/NextButton";
import TextItem from "../CommonStage/TextItem";
import styles from "../CommonStage/CommonStyle.module.css";
import useTranslation from "@/shared/Hooks/useTranslation";

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

  return (
    <>
      <div>
        <ModalHeaderText header={t?.walletInfoModal.mainText} caption={t?.walletInfoModal.subText} />
        <div>
          <span className="text-sm text-[#a5a5a5]">{t?.walletInfoModal.inputLable}</span>
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
