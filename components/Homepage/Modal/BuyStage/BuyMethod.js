import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import AlchemyPay from "@/images/fiat_money.png";
import BuyWithCrypto from "@/images/2272825.png";
import useTranslation from "@/shared/Hooks/useTranslation";

const BuyMethod = ({ handleStep }) => {
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
          }}
          disabled={false}
        />
      </div>
    </>
  );
};

export default BuyMethod;
