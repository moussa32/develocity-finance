import { useEffect, useMemo, useState } from "react";
import TextItem from "../CommonStage/TextItem";
import toast from "react-hot-toast";
import contractAbi from "../../../../public/assets/contractApi.json";
import { ethers } from "ethers";
import { mainNetContract, testNetContract } from "../../../../shared/Constants/contractAddress";
import { getSecondCoinContract } from "../../../../shared/Util/handleContracts";
import SuccessIcon from "@/images/SuccessIcon.svg";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useSigner } from "wagmi";
import Image from "next/image";
import { useRouter } from "next/router";

const BuyAmountModal = ({
  handleStep,
  walletAddress,
  disconnect,
  currentCurrency,
  provider,
  handleCurrent,
  handleFinalAmount,
  selectedNetwork,
}) => {
  const { t } = useTranslation("buy-token-modal");
  const { data: signer, isError, isLoading } = useSigner();
  const { query } = useRouter();

  const [coinBalance, setCoinBalance] = useState(0);
  const [convertedDeve, setConvertedDeve] = useState(0);
  const [isBuyButtonLoading, setIsBuyButtonLoading] = useState(true);
  const [buyButtonText, setBuyButtonText] = useState("Buy now");
  const [isApprovedButtonLoading, setIsApprovedButtonDisabled] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const memoizedCoinBalanceConverted = useMemo(() => ethers.utils.parseEther(coinBalance.toString()), [coinBalance]);

  const walletContract = new ethers.Contract(mainNetContract, contractAbi, provider);
  const signerContract = new ethers.Contract(mainNetContract, contractAbi, signer);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (currentCurrency.ticker === "BUSD") {
        const calculateDeveCoins = await walletContract.getbusdPrice(memoizedCoinBalanceConverted);
        const returnedCalculateDeveCoins = Number(ethers.utils.formatEther(calculateDeveCoins.toString())).toFixed(2);

        if (!isApproved) {
          await walletContract
            .getBusdAll(calculateDeveCoins, walletAddress)
            .then(res => {
              setIsApproved(res);
              if (res) {
                toast(
                  <div>
                    <span className="text-success" style={{ color: "#00ac5d", marginRight: "0.5rem" }}>
                      Approved!
                    </span>
                    You can swap your coins.
                  </div>,
                  {
                    duration: 4000,
                    position: "top-center",
                    // Styling
                    style: {
                      fontSize: "16px",
                      background: "#DCFFEF",
                    },
                    // Custom Icon
                    icon: <SuccessIcon />,

                    // Aria
                    ariaProps: {
                      role: "status",
                      "aria-live": "polite",
                    },
                  }
                );
                setIsBuyButtonLoading(false);
                setIsApprovedButtonDisabled(true);
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
        setConvertedDeve(returnedCalculateDeveCoins.toLocaleString("en-US"));
      } else {
        if (coinBalance > 0) {
          setIsBuyButtonLoading(false);
          const calculateDeveCoins = await walletContract.getwethPrice(memoizedCoinBalanceConverted);
          setConvertedDeve(
            Number(ethers.utils.formatEther(calculateDeveCoins.toString())).toFixed(2).toLocaleString("en-US")
          );
        } else {
          setIsBuyButtonLoading(true);
          setConvertedDeve(0);
        }
      }
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [coinBalance, walletAddress]);

  const handleBuy = async () => {
    setIsBuyButtonLoading(true);
    setBuyButtonText(t?.buyAmountModal.btns.Loading);
    let ref;
    if (query.ref) {
      ref = query.ref;
    } else {
      ref = "0x0000000000000000000000000000000000000000";
    }

    const gasPrice = await signerContract.estimateGas
      .buyTokens(ref, { value: memoizedCoinBalanceConverted })
      .catch(error => {
        console.log(JSON.stringify(error, 0, 2));
      });

    signerContract
      .buyTokens(ref, { value: memoizedCoinBalanceConverted, gasLimit: gasPrice })
      .then(res => {
        res.wait().then(receipt => {
          setIsBuyButtonLoading(false);
          setBuyButtonText(t?.buyAmountModal.btns.buy);
          handleFinalAmount(convertedDeve);
          handleStep("final");
          handleCurrent();
        });
      })
      .catch(error => {
        const { code: errorCode } = error;
        if (errorCode === -32000) {
          toast("You don't have enough native tokens or ensure the network has been added correctly", {
            duration: 6000,
            position: "top-center",
            // Styling
            style: {
              color: "#fff",
              fontSize: "16px",
              background: "#F03D3D",
            },

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        }
        setIsBuyButtonLoading(false);
      });
  };

  const handleApprove = async () => {
    setIsApprovedButtonDisabled(true);
    const BUSDContract = getSecondCoinContract(signer, selectedNetwork);
    await BUSDContract.approve(testNetContract, ethers.utils.parseEther("1000000"))
      .then(res => {
        setIsApprovedButtonDisabled(false);
        setIsBuyButtonLoading(false);
        toast(
          <div>
            <span className="text-success" style={{ color: "#00ac5d", marginRight: "0.5rem" }}>
              Approved!
            </span>
            You can swap your coins.
          </div>,
          {
            duration: 4000,
            position: "top-center",
            // Styling
            style: {
              fontSize: "16px",
              background: "#DCFFEF",
            },
            // Custom Icon
            icon: <SuccessIcon />,

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          }
        );
      })
      .catch(error => console.log(error));
  };

  const handleBuyBUSD = async () => {
    let ref;
    if (query.ref) {
      ref = query.ref;
    } else {
      ref = "0x0000000000000000000000000000000000000000";
    }

    const gasPrice = await signerContract.estimateGas
      .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref)
      .catch(error => {
        const { code: errorCode } = error.data;
        if (errorCode === -32603) {
          toast(`You don't have enough balance to buy ${convertedDeve}`, {
            duration: 6000,
            position: "top-center",
            // Styling
            style: {
              color: "#fff",
              fontSize: "16px",
              background: "#F03D3D",
            },

            // Aria
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        }
      });
    setIsBuyButtonLoading(true);
    setBuyButtonText(t?.buyAmountModal.btns.Loading);

    await signerContract
      .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref, { gasLimit: gasPrice })
      .then(res => {
        res.wait().then(receipt => {
          setIsBuyButtonLoading(false);
          setBuyButtonText(t?.buyAmountModal.btns.buy);
          handleFinalAmount(convertedDeve);
          handleStep("final");
          handleCurrent();
        });
      })
      .catch(error => {
        console.log(error);
        setBuyButtonText(t?.buyAmountModal.btns.buy);
        setIsBuyButtonLoading(false);
      });
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
          {walletAddress && walletAddress.slice(0, 10) + "..." + walletAddress.slice(31, 41)}
        </h5>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm font-medium mb-2">
          <label className="text-[#a5a5a5]">{t?.buyAmountModal.lables.from}</label>
          <h5 className="text-[#23282C]">
            {t?.buyAmountModal.balance} {currentCurrency.balance}
          </h5>
        </div>
        <div className="flex group bg-white h-[72px] w-[80vw] border-[#D6D6D6] border-1 transition-all focus-within:border-2 focus-within:border-[#6466E9] rounded-md overflow-hidden duration-300 sm:w-[360px]">
          <input
            className="w-3/4 px-5 text-2xl text-[#23282C] border-r-1 border-r-[#D6D6D6] focus:border-r-2 focus:border-r-[#6466E9] outline-none"
            value={coinBalance}
            pattern="[0-9]+([\.,][0-9]+)?"
            step="0.01"
            onChange={e => {
              if (currentCurrency.ticker === "BUSD") {
                if (e.target.value <= 100000) {
                  setCoinBalance(Number(e.target.value));
                }
              } else {
                if (e.target.value < 1000) {
                  setCoinBalance(Number(e.target.value));
                }
              }
            }}
            placeholder="0"
            inputMode="decimal"
            maxLength={3}
          />
          <div className="w-1/4 flex justify-center items-center">
            <Image src={currentCurrency.image} width={23} />
            <span className="text-base ml-1">{currentCurrency.ticker}</span>
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
        <div className="flex justify-between text-sm">
          <label className="text-[#a5a5a5]">{t?.buyAmountModal.lables.to}</label>
        </div>
        <div className="flex h-12 w-[80vw] sm:w-[360px] sm:h-[58px]">
          <input
            className="w-3/4 border-1 rounded-sm border-[#d6d6d6] p-[10px] text-2xl text-[#23282c]"
            value={convertedDeve}
            placeholder="0"
            disabled
          />
          <div className="flex bg-white justify-center items-center w-1/4 border-1 rounded-sm border-[#d6d6d6]">
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

            <span className="text-base ml-1">DEVE</span>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <TextItem title={t?.buyAmountModal.price} value="1" secondaryText="DEVE = $0.20" hr="true" />
        <TextItem
          title={t?.buyAmountModal.estimatedBalance}
          value={convertedDeve}
          symbol="&plusmn;"
          percentage="0.25%"
          hr="true"
        />
      </div>

      <div className="flex justify-between w-full">
        {currentCurrency.ticker === "BUSD" && (
          <button
            className="w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] text-[#23282c] bg-transparent"
            disabled={isApprovedButtonLoading}
            onClick={handleApprove}
          >
            {t?.buyAmountModal.btns.approve}
          </button>
        )}
        <button
          className={`w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] bg-[#23282c] text-white ${
            currentCurrency.ticker === "BUSD" ? "ml-2" : "mx-auto"
          }`}
          disabled={isBuyButtonLoading}
          onClick={() => {
            currentCurrency.ticker === "BUSD" ? handleBuyBUSD() : handleBuy();
          }}
        >
          {buyButtonText}
        </button>
      </div>
    </section>
  );
};
export default BuyAmountModal;
