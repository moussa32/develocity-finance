import { useEffect, useCallback } from "react";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import TextFloatRight from "../CommonStage/TextFloatRight";
import ButtonItem from "..//CommonStage/ButtonItem";
import { ethers } from "ethers";
import { getSecondCoinContract } from "../../../../shared/Util/handleContracts";
import { networkSupportedCoins } from "../../../../shared/Util/handleNetworkProvider";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useBalance, useNetwork } from "wagmi";

const BuywithModal = ({
  handleStep,
  walletAddress,
  handleFirstCoin,
  firstCoin,
  secondCoin,
  handleSecondCoin,
  handleSelectCurrency,
  provider,
  handleCurrent,
  selectedNetwork,
}) => {
  const { t } = useTranslation("buy-token-modal");
  const {
    data,
    isError: balanceError,
    isLoading,
  } = useBalance({
    address: walletAddress,
    formatUnits: "wei",
  });
  const { chain } = useNetwork();

  useEffect(() => {
    const getBalance = async () => {
      if (balanceError) {
        console.log(balanceError);
        return;
      }
      const convertedBalance = Number(ethers.utils.formatEther(data.value)).toFixed(3);
      handleFirstCoin(convertedBalance);

      let busdAbiContract, contractBalance;

      try {
        busdAbiContract = getSecondCoinContract(provider, selectedNetwork);
      } catch (error) {
        console.error("Couldn't get busdAbiContract");
      }

      try {
        contractBalance = await busdAbiContract.balanceOf(walletAddress);
      } catch (error) {
        console.error("Couldn't get balance of the wallet");
      }

      try {
        const convertedContractBalance = parseFloat(ethers.utils.formatUnits(contractBalance, 18)).toLocaleString(
          "en-US"
        );
        handleSecondCoin(convertedContractBalance);
      } catch (error) {
        console.error("Couldn't parse the balance of the wallet");
      }
    };

    getBalance();
  }, [walletAddress, isLoading, chain]);

  const handleSelectNetworkName = useCallback(() => {
    handleStep("buyamount");
    handleCurrent(4);
  }, [handleStep]);
  return (
    <>
      <div>
        <ModalHeaderText header={t?.buyWithModal.mainText} caption={t?.buyWithModal.subText} />
        {networkSupportedCoins(chain.network).map(({ id, name, image, ticker , decimals}) => (
          <div key={id}>
            <TextFloatRight balanceValue={id === 1 ? firstCoin : secondCoin} />
            
            <ButtonItem
              mainText={name}
              secondaryText={ticker}
              image={image}
              decimals={decimals}
              handleSelect={handleSelectNetworkName}
              getAllValues={(...elements) =>
                handleSelectCurrency({
                  id: elements[0],
                  name: elements[2],
                  ticker: elements[3],
                  image: elements[1],
                  decimals : elements[4],
                  balance: id === 1 ? firstCoin : secondCoin,
                })
              }
            />
          </div>
          
        ))}
        <div className="flex items-center justify-center mt-7">
          <button
            className={`w-[40%] h-[54px] rounded-md text-base border-1 border-[#23282c] disabled:opacity-50 disabled:border-[#a5a5a5] bg-[#23282c] text-white mx-auto`}
            onClick={() => {
              handleStep("paymentMethod");
              handleCurrent("");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default BuywithModal;
