import { useEffect, useState } from "react";
import TextItem from "../CommonStage/TextItem";
import toast from "react-hot-toast";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useAccount } from "wagmi";
import Image from "next/image";
import { useRouter } from "next/router";
import WertWidget from "@wert-io/widget-initializer";
import { signSmartContractData } from "@wert-io/widget-sc-signer";
import { v4 as uuidv4 } from "uuid";
import USDCIcon from "@/images/usdc-icon.png";
import { Buffer } from "buffer/";
import PreSaleABI from "../../../../public/presaleabi.json";

import Web3 from "web3";
window.Buffer = Buffer;

const isTestMode = true;
const DEVE_PRICE = 0.25;

const BuyAmountWithFiat = ({ handleStep, disconnect, handleCurrent, handleFinalAmount }) => {
  const { t } = useTranslation("buy-token-modal");
  const { address } = useAccount();
  const router = useRouter();
  const { ref } = router.query;
  const refAddress = ref ? ref : "0x0000000000000000000000000000000000000000";

  const [coinBalance, setCoinBalance] = useState("");
  const [convertedDeve, setConvertedDeve] = useState(0);
  const [isBuyDisabled, setIsBuyDisabled] = useState(true);
  const [buyButtonText, setBuyButtonText] = useState("Buy now");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isWertModalOpened, setIsWertModalOpened] = useState(false);
  const [isWertModalClosed, setIsWertModalClosed] = useState(false);

  const { locale } = useRouter();

  useEffect(() => {
    if (isWertModalClosed && isWertModalOpened && paymentStatus?.status === "pending") {
      toast.error("Your order has been placed but it is in pending status please check your balance", {
        duration: 5000,
      });
      setIsWertModalOpened(false);
      setIsWertModalClosed(false);
    }
  }, [isWertModalClosed, isWertModalOpened, paymentStatus]);

  useEffect(() => {
    if (paymentStatus?.status === "success") {
      handleFinalAmount(convertedDeve);
      handleStep("final");
      handleCurrent();
    }
  }, [paymentStatus]);

  const handleBuy = async () => {
    setBuyButtonText("Loading...");
    setIsBuyDisabled(true);

    const web3 = new Web3("https://polygon-rpc.com");

    const contract = new web3.eth.Contract(PreSaleABI, "0x2F7f89d52131c3cd24eD1bb59042A16BCf123d5C");
    const balance = (Number(coinBalance) * 10**6).toString();
    const data = await contract.methods.buyTokensBusdWert(address, balance, refAddress).encodeABI();
    console.log(data);
    const privateKey = "0x88e3d5f1e62631e7f44d6d58fbb5f45cdd5f13253906da770cc96c5a8e5e4966";
    console.log(coinBalance)
    const signedData = signSmartContractData(
      {
        address: address, // user address
        commodity: "USDC", // coin
        network: "polygon", // network
        commodity_amount: Number(coinBalance), // user USDC amount
        sc_address: "0x2F7f89d52131c3cd24eD1bb59042A16BCf123d5C", // smartcontract address
        sc_input_data: data,
      },
      privateKey
    );
    const otherWidgetOptions = {
      partner_id: "01H1KEM2JR3QTT81EQWANE9X7K",
      click_id: uuidv4(), // unique id of purhase in your system
      origin: "https://widget.wert.io", // this option needed only for this example to work
      listeners: {
        close: () => {
          setBuyButtonText("Buy now");
          setIsWertModalClosed(true);
        },
        error: (name, message) => {
          toast.error(message);
        },
        loaded: () => setIsWertModalOpened(true),
        "payment-status": data => {
          setPaymentStatus(data);

          if (data.status === "pending") {
            setIsBuyDisabled(true);
          }
        },
      },
    };

    const wertWidget = new WertWidget({
      ...signedData,
      ...otherWidgetOptions,
    });
    wertWidget.mount();
  };

  const handleUserInput = e => {
    const { value } = e.target;
    const numberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
    const isNumber = numberRegex.test(value);

    if (value.length <= 0) {
      setConvertedDeve(0);
      setIsBuyDisabled(true);
    }

    setCoinBalance(value);
    setConvertedDeve(Number(value / DEVE_PRICE).toFixed(2));
    setIsBuyDisabled(false);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex gap-1 flex-row-reverse w-full">
        <svg
          className="cursor-pointer"
          onClick={() => disconnect()}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            id="Vector"
            d="M0,5.66,5.66,0"
            transform="translate(9.17 9.17)"
            fill="none"
            stroke="#23282c"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            id="Vector-2"
            dataName="Vector"
            d="M5.66,5.66,0,0"
            transform="translate(9.17 9.17)"
            fill="none"
            stroke="#23282c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M7,20h6c5,0,7-2,7-7V7c0-5-2-7-7-7H7C2,0,0,2,0,7v6C0,18,2,20,7,20Z"
            transform="translate(2 2)"
            fill="none"
            stroke="#8b8b8b"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path id="Vector-4" data-name="Vector" d="M0,0H24V24H0Z" fill="none" opacity="0" />
        </svg>
        <h5 className="text-sm mt-[3px] ltr:mr-[5px] rtl:ml-[5px] text-[#2a2929]">
          {address.slice(0, 10) + "..." + address.slice(31, 41)}
        </h5>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium mb-2">
          <label className="text-[#a5a5a5]">{t?.buyAmountModal.lables.from}</label>
        </div>
        <div className="flex group bg-white h-[72px] w-[80vw] border-[#D6D6D6] border-1 transition-all focus-within:border-2 focus-within:border-[#6466E9] rounded-md overflow-hidden duration-300 sm:w-[360px]">
          <input
            className="w-3/4 px-5 text-2xl text-[#23282C] border-r-1 border-r-[#D6D6D6] focus:border-r-2 focus:border-r-[#6466E9] outline-none"
            value={coinBalance}
            type="text"
            onChange={handleUserInput}
            placeholder="0"
          />
          <div className="w-1/4 flex justify-center items-center">
            <Image src={USDCIcon} width={23} />
          </div>
        </div>
      </div>

      <svg
        className="mt-3"
        xmlns="http://www.w3.org/2000/svg"
        width="16.284"
        height="21.333"
        viewBox="0 0 16.284 21.333"
      >
        <path
          id="Vector"
          d="M14.163,0,7.082,7.082,0,0"
          transform="translate(1.061 13.502)"
          fill="none"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0V19.635"
          transform="translate(8.143 0.75)"
          fill="none"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          opacity="0.4"
        />
      </svg>

      <div className="mt-1">
        <div className="flex justify-between text-sm font-medium mb-2">
          <label className="text-[#a5a5a5]">{t?.buyAmountModal.lables.to}</label>
        </div>
        <div className="flex group bg-white h-[72px] w-[80vw] border-[#D6D6D6] border-1 transition-all focus-within:border-2 focus-within:border-[#6466E9] rounded-md overflow-hidden duration-300 sm:w-[360px]">
          <input
            className="w-3/4 px-5 text-2xl text-[#23282C] border-r-1 border-r-[#D6D6D6] focus:border-r-2 outline-none"
            value={convertedDeve}
            placeholder="0"
            disabled
          />
          <div className="w-1/4 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="23.998"
              height="24"
              viewBox="0 0 23.998 24"
            >
              <defs>
                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#9c3fe5" />
                  <stop offset="1" stop-color="#53269f" />
                </linearGradient>
              </defs>
              <path
                id="Binance_Coin_BNB_"
                data-name="Binance Coin (BNB)"
                d="M23.638,14.9A12,12,0,1,1,14.9.359,12,12,0,0,1,23.638,14.9h0Z"
                fill="#9C3FE5"
              />
              <path
                id="logo_Converted_"
                data-name="logo [Converted]"
                d="M122.726,12.287,117.293,7.2,117.2.289h6.047A5.85,5.85,0,0,1,127.6,1.824a4.967,4.967,0,0,1,1.47,3.406l-2.14,1.1a3.719,3.719,0,0,0-.912-2.808,3.861,3.861,0,0,0-2.7-.88h-3.758l.037,3.519,3.256,3.051L129.2,5.848Z"
                transform="translate(-111.155 6.416)"
                fill="#ecedf2"
              />
            </svg>
            <span className={`${locale === "ar" ? "mr-1" : "ml-1"} text-base`}>DEVE</span>
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <TextItem title={t?.buyAmountModal.price} value="1" secondaryText="DEVE = $0.25" hr="true" />
        <TextItem
          title={t?.buyAmountModal.estimatedBalance}
          value={convertedDeve}
          symbol="&plusmn;"
          percentage="0.25%"
          hr="true"
        />
      </div>

      <div className="flex justify-between w-full">
        <button
          className={`w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] bg-[#23282c] text-white mx-auto`}
          onClick={() => {
            handleStep("paymentMethod");
            handleCurrent("");
          }}
        >
          Back
        </button>
        <button
          className={`w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] bg-[#23282c] text-white mx-auto`}
          disabled={isBuyDisabled}
          onClick={handleBuy}
        >
          {buyButtonText}
        </button>
      </div>
    </section>
  );
};
export default BuyAmountWithFiat;
