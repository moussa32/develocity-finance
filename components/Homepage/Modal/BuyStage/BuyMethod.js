import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import AlchemyPay from "@/images/fiat_money.png";
import BuyWithCrypto from "@/images/BuyWithCrypto.png";

const BuyMethod = ({ handleStep }) => {
  return (
    <>
      <ModalHeaderText header="Payment Method" caption="Choose how you want to buy" />
      <div className="flex flex-col gap-[14px]">
        <ButtonItem
          mainText="Buy with Crypto"
          secondaryText="MATIC Network"
          handleSelect={() => {
            handleStep("buywith");
          }}
          image={BuyWithCrypto}
          disabled={false}
        />
        <ButtonItem
          mainText="Fiat Money"
          secondaryText="Visa, Mastercard, G Pay, Apple Pay"
          image={AlchemyPay}
          handleSelect={() => {
            handleStep("buyWithFiat");
          }}
          disabled={false}
        />
      </div>
    </>
  );
};

export default BuyMethod;
