import ButtonItem from "../CommonStage/ButtonItem";
import EtherumIcon from "../../../../public/assets/images/Ethereum-icon.png";
import PolygonIcon from "../../../../public/assets/images/polygon-icon.png";
import BinanceIcon from "../../../../public/assets/images/binanceCoin.png";
import { useCallback } from "react";
import toast from "react-hot-toast";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useAccount, useNetwork } from "wagmi";

const SelectNetwork = ({ handleStep, handleOpen, selectedNetwork, handleUserNetwork, handleSelectedNetwork }) => {
  const handleSelectNetworkName = useCallback(async name => {
    handleSelectedNetwork(name);
    sessionStorage.setItem("network", name);
    connectWeb3Wallet(name);
  }, []);

  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { t } = useTranslation("buy-token-modal");

  const connectWeb3Wallet = async () => {
    if (isConnected) {
      handleUserNetwork(chain.name);

      if (chain.network) {
        handleStep("walletInfo");
      } else {
        toast("Please change your wallet network", {
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
        handleStep("starter");
      }
    } else {
      // handleStep("starter");
      console.log("error");
    }

    handleOpen(true);
  };

  return (
    <div>
      <h2 className="text-center">{t?.starterModal.mainText}</h2>
      <p className="text-center">{t?.starterModal.subText}</p>
      <div className="flex flex-col gap-4 w-100">
        <ButtonItem
          mainText="Etherum"
          secondaryText="ETH"
          itemToSelect="homestead"
          image={EtherumIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Binance Smart Chain"
          secondaryText="BNB"
          itemToSelect="bsc"
          image={BinanceIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Polygon"
          itemToSelect="matic"
          secondaryText="MATIC"
          image={PolygonIcon}
          selected={selectedNetwork}
          handleSelect={handleSelectNetworkName}
        />
      </div>
    </div>
  );
};

export default SelectNetwork;
