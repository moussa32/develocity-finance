import { useCallback, useEffect, useMemo, useState } from "react";
import TextItem from "../CommonStage/TextItem";
import toast from "react-hot-toast";
import contractAbi from "../../../../public/assets/contractApi.json";
import { ethers } from "ethers";
// import { mainNetContract, testNetContract } from "../../../../shared/Constants/contractAddress";
import { getSecondCoinContract } from "../../../../shared/Util/handleContracts";
import { getMainCoinContractAddress } from "../../../../shared/Util/handleNetworkProvider";
// import SuccessIcon from "@/images/SuccessIcon.svg";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useBalance, useSigner } from "wagmi";
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
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: walletAddress,
  });
  const { query } = useRouter();
  const ref = query.ref && query.ref.length === 42 ? query.ref : "0x0000000000000000000000000000000000000000";

  const [coinBalance, setCoinBalance] = useState(0);
  const [convertedDeve, setConvertedDeve] = useState(0);
  const [isBuyButtonLoading, setIsBuyButtonLoading] = useState(true);
  const [buyButtonText, setBuyButtonText] = useState("Buy now");
  const [isApprovedButtonLoading, setIsApprovedButtonDisabled] = useState(false);
  const [isApproved, setIsApproved] = useState(false);

  const coinBalanceConverted = () => (coinBalance ? ethers.utils.parseEther(coinBalance?.toString()) : 0);
  const memoizedCoinBalanceConverted = useMemo(() => coinBalanceConverted(), [coinBalance]);
  const mainContract = getMainCoinContractAddress(selectedNetwork);
  const walletContract = new ethers.Contract(mainContract, contractAbi, provider);
  const signerContract = new ethers.Contract(mainContract, contractAbi, signer);
  const { locale } = useRouter();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (currentCurrency.ticker === "BUSD") {
        const gasPrice = await signerContract.estimateGas
          .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref)
          .catch(error => {
            const { code: errorCode } = error.data;
            if (errorCode === -32603) {
              toast(`You don't have enough balance to buy ${convertedDeve}`, {
                id: "gasPriceErrorFromGlobalState",
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
        const convertedGasPrice = gasPrice ? Number(ethers.utils.formatUnits(gasPrice, 18)) : 0;
        const calculateDeveCoins = await walletContract.getbusdPrice(memoizedCoinBalanceConverted);
        const returnedCalculateDeveCoins = Number(ethers.utils.formatEther(calculateDeveCoins.toString())).toFixed(2);
        if (!isApproved) {
          await walletContract
            .getBusdAll(calculateDeveCoins, walletAddress)
            .then(res => {
              setIsApproved(res);
              if (res) {
                console.log(res);

                toast("Approved!", {
                  duration: 4000,
                  position: "top-center",
                  // Styling
                  style: {
                    fontSize: "16px",
                    background: "#DCFFEF",
                  },

                  // Aria
                  ariaProps: {
                    role: "status",
                    "aria-live": "polite",
                  },
                });

                setIsBuyButtonLoading(false);
                setIsApprovedButtonDisabled(true);
              }
            })
            .catch(error => {
              toast("Error that happened please type the right amount", {
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
            });
        }
        setConvertedDeve(
          Number(returnedCalculateDeveCoins.toLocaleString("en-US")) - (convertedGasPrice * 1.5).toFixed()
        );
      } else {
        if (Number(coinBalance) > 0) {
          const gasPrice = await signerContract.estimateGas
            .buyTokens(ref, { value: memoizedCoinBalanceConverted })
            .catch(error => {
              console.log("gasPrice", error);
              toast("Error happened while getting gas price", {
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
            });
          const convertedGasPrice = gasPrice ? Number(ethers.utils.formatUnits(gasPrice, 18)) : 0;

          setIsBuyButtonLoading(false);
          const calculateDeveCoins = await walletContract.getwethPrice(memoizedCoinBalanceConverted);
          const formattedDeveCoins = Number(ethers.utils.formatEther(calculateDeveCoins.toString()))
            .toFixed(2)
            .toLocaleString("en-US");

          setConvertedDeve(formattedDeveCoins - (convertedGasPrice * 1.5).toFixed());
        } else {
          setIsBuyButtonLoading(true);
          setConvertedDeve(0);
        }
      }
      //  toast(`Your wallet balance isn't enough to buy Deve`, {
      //     id: "balance-error",
      //     duration: 150000,
      //     position: "top-center",
      //     // Styling
      //     style: {
      //       color: "#fff",
      //       fontSize: "16px",
      //       background: "#F03D3D",
      //     },

      //     // Aria
      //     ariaProps: {
      //       role: "status",
      //       "aria-live": "polite",
      //     },
      //   });
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [coinBalance, walletAddress]);

  const handleBuy = async () => {
    setIsBuyButtonLoading(true);
    setBuyButtonText(t?.buyAmountModal.btns.Loading);

    const gasPrice = await signerContract.estimateGas
      .buyTokens(ref, { value: memoizedCoinBalanceConverted })
      .catch(error => {
        console.log("gasPrice", error);
        toast("Error that happened please type the right amount", {
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

        setBuyButtonText(t?.buyAmountModal.btns.buy);
      });

    signerContract
      .buyTokens(ref, { value: memoizedCoinBalanceConverted })
      .then(res => {
        res.wait().then(receipt => {
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
      })
      .finally(() => {
        setBuyButtonText(t?.buyAmountModal.btns.buy);
        setIsBuyButtonLoading(false);
      });
  };

  const handleApprove = async () => {
    setIsApprovedButtonDisabled(true);
    const BUSDContract = getSecondCoinContract(signer, selectedNetwork);
    await BUSDContract.approve(mainContract, ethers.utils.parseEther("100000"))
      .then(res => {
        setIsApprovedButtonDisabled(false);
        setIsBuyButtonLoading(false);
        toast("Approved!", {
          duration: 4000,
          position: "top-center",
          // Styling
          style: {
            fontSize: "16px",
            background: "#DCFFEF",
          },

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      })
      .catch(error => console.log(error));
  };

  const handleBuyBUSD = async () => {
    setIsBuyButtonLoading(true);
    setBuyButtonText(t?.buyAmountModal.btns.Loading);

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

    await signerContract
      .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref, { gasLimit: gasPrice })
      .then(res => {
        res.wait().then(receipt => {
          handleFinalAmount(convertedDeve);
          handleStep("final");
          handleCurrent();
        });
      })
      .catch(error => {
        toast("Error that happened please type the right amount", {
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
        console.log(error);
      })
      .finally(() => {
        setBuyButtonText(t?.buyAmountModal.btns.buy);
        setIsBuyButtonLoading(false);
      });
  };

  const handleUserInput = e => {
    const { value } = e.target;
    const numberRegex = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
    const isNumber = numberRegex.test(value);

    if (value.length <= 0) return setCoinBalance(null);

    if (isNumber) {
      if (currentCurrency.ticker === "BUSD") {
        if (Number(value) <= 100000) {
          setCoinBalance(value);
        }
      } else {
        if (Number(value) < 1000) {
          setCoinBalance(value);
        }
      }
    }
  };

  const handleMaxUserAmount = async () => {
    setCoinBalance(Number(balance.formatted).toFixed(3));

    if (currentCurrency.ticker === "BUSD") {
      const gasPrice = await signerContract.estimateGas
        .buyTokensBusd(memoizedCoinBalanceConverted.toString(), ref)
        .catch(error => {
          const { code: errorCode } = error.data;
          if (errorCode === -32603) {
            toast(`You don't have enough balance to buy ${convertedDeve}`, {
              id: "gasPriceErrorFromMaxUserAmount",
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
      const convertedGasPrice = gasPrice ? Number(ethers.utils.formatUnits(gasPrice, 18)) : 0;
      const calculateDeveCoins = await walletContract.getbusdPrice(memoizedCoinBalanceConverted);
      const returnedCalculateDeveCoins = Number(ethers.utils.formatEther(calculateDeveCoins.toString())).toFixed(2);

      setConvertedDeve(
        Number(returnedCalculateDeveCoins.toLocaleString("en-US")) - (convertedGasPrice * 1.5).toFixed()
      );
    } else {
      const gasPrice = await signerContract.estimateGas
        .buyTokens(ref, { value: memoizedCoinBalanceConverted })
        .catch(error => {
          toast("Error happened while getting gas price", {
            id: "gasPriceErrorFromMaxUserAmount",
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
        });
      const convertedGasPrice = gasPrice ? Number(ethers.utils.formatUnits(gasPrice, 18)) : 0;

      setIsBuyButtonLoading(false);
      const calculateDeveCoins = await walletContract.getwethPrice(memoizedCoinBalanceConverted);
      const formattedDeveCoins = Number(ethers.utils.formatEther(calculateDeveCoins.toString()))
        .toFixed(2)
        .toLocaleString("en-US");

      setConvertedDeve(formattedDeveCoins - (convertedGasPrice * 1.5).toFixed());
    }
  };

  const handleDisableMaxButton = useCallback(() => {
    const currentCoin = currentCurrency.ticker.toLowerCase();
    const coinsDic = {
      bnb: {
        min: 0.01,
      },
      eth: {
        min: 0.01,
      },
      busd: {
        min: 5,
      },
    };

    if (!coinsDic[currentCoin]) return false;

    if (!isBalanceLoading) {
      const userBalance = Number(balance.formatted);
      return userBalance <= coinsDic[currentCoin].min ? true : false;
    }
  }, [balance]);

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
          <div className="flex items-center gap-1">
            <label className="text-[#a5a5a5]">{t?.buyAmountModal.lables.from}</label>
            <button
              onClick={handleMaxUserAmount}
              disabled={handleDisableMaxButton()}
              className="text-xs disabled:bg-gray-500/10 disabled:border-gray-600/40 disabled:text-gray-600 disabled:cursor-no-drop flex items-center gap-1 ml-2 capitalize bg-primary/10 hover:bg-primary/90 hover:text-white transition-all duration-300 hover:border-primary/60 border-1 border-primary/80 text-neutral-800 font-medium py-0.5 px-2 rounded"
            >
              Max
            </button>
          </div>
          <h5 className="text-[#23282C]">
            {t?.buyAmountModal.balance} {currentCurrency.balance}
          </h5>
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
            <Image src={currentCurrency.image} width={23} />
            <span className={`${locale === "ar" ? "mr-1" : "ml-1"} text-base`}>{currentCurrency.ticker}</span>
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
            className="w-3/4 px-5 text-2xl text-[#23282C] border-r-1 bg-white border-r-[#D6D6D6] focus:border-r-2 outline-none"
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
        <button
          className={`w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] bg-[#23282c] text-white mx-auto`}
          onClick={() => {
            handleStep("buywith");
            handleCurrent("");
          }}
        >
          Back
        </button>
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
