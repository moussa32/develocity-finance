import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import AlchemyPay from "@/images/fiat_money.png";
import BuyWithCrypto from "@/images/2272825.png";
import useTranslation from "@/shared/Hooks/useTranslation";

const BuyMethod = ({ handleStep, handleCurrent }) => {
  const { t } = useTranslation("buy-token-modal");
  return (
    <>
      <ModalHeaderText header={t?.PaymentMethod.title} caption={t?.PaymentMethod.subtitle} />
      <div className="flex flex-col gap-[14px]">
        <ButtonItem
          mainText={t?.PaymentMethod.first}
          secondaryText="BSC, ETH, POLYGON"
          handleSelect={() => {
            handleStep("buywith");
            handleCurrent();
          }}
          image={BuyWithCrypto}
          disabled={false}
        />
        <ButtonItem
          mainText={t?.PaymentMethod.second}
          secondaryText="Visa, Mastercard"
          image={AlchemyPay}
          handleSelect={() => {
            handleStep("buyWithFiat");
            handleCurrent();
          }}
          disabled={false}
        />
      </div>
      <div className="flex items-center justify-center mt-7">
        <button
          className={`w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] bg-[#23282c] text-white mx-auto`}
          onClick={() => {
            handleStep("options");
            handleCurrent("");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default BuyMethod;
