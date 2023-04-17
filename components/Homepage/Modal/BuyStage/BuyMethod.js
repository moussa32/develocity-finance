import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import AlchemyPay from "@/images/Alchemy-Pay.png";

const BuyMethod = () => {
  return (
    <>
      <ModalHeaderText header="Payment Method" caption="Choose how you want to buy" />
      <ButtonItem mainText="Buy with Crypto" secondaryText="MATIC Network" image={AlchemyPay} disabled={false} />
    </>
  );
};

export default BuyMethod;
