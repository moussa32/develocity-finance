import { useCallback, useEffect, useState } from "react";
import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import AlchemyPay from "@/images/Alchemy-Pay.png";
import BuyWithCrypto from "@/images/BuyWithCrypto.png";
import { useAccount, useNetwork } from "wagmi";
import axios from "axios";

const BuyMethod = ({ handleStep }) => {
  const [signature, setSignature] = useState(null);
  const { chain } = useNetwork();
  const { address } = useAccount();
  console.log(chain);

  useEffect(() => {
    const fetchSign = async () => {
      const generateSign = await axios
        .post("/api/signature", {
          address,
        })
        .catch(error => console.log(error));
      const { data } = generateSign;
      setSignature(data.sign);
    };
    fetchSign();
  }, [address]);

  const openAlchemyPay = useCallback(() => {
    window.open(
      `https://ramptest.alchemypay.org/?crypto=BTC&appId=${process.env.NEXT_PUBLIC_ALCHEMYPAY_APP_ID}&sign=${signature}&address=${address}&redirectUrl=http://localhost:3000/?payment_proccess="test"`
    );
  }, [chain, signature, address]);

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
          mainText="Alchemy Pay"
          secondaryText="Visa, Mastercard, G Pay, Apple Pay"
          image={AlchemyPay}
          handleSelect={openAlchemyPay}
          disabled={false}
        />
      </div>
    </>
  );
};

export default BuyMethod;
