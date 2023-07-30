import ButtonItem from "../CommonStage/ButtonItem";
import EtherumIcon from "@/images/Ethereum-icon.png";
import PolygonIcon from "@/images/polygon-icon.png";
import BinanceIcon from "@/images/binanceCoin.png";
import { useCallback } from "react";
import toast from "react-hot-toast";
import useTranslation from "@/shared/Hooks/useTranslation";
import { useAccount, useNetwork } from "wagmi";

const SelectNetwork = ({ handleStep, handleOpen }) => {
  const { isConnected } = useAccount();
  const { chain } = useNetwork();
  const { t } = useTranslation("buy-token-modal");

  const handleSelectNetworkName = useCallback(async name => {
    sessionStorage.setItem("network", name);
    connectWeb3Wallet(name);
  }, []);

  const connectWeb3Wallet = async () => {
    if (isConnected) {
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
          selected={chain.name}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Binance Smart Chain"
          secondaryText="BNB"
          itemToSelect="bsc"
          image={BinanceIcon}
          selected={chain.name}
          handleSelect={handleSelectNetworkName}
        />
        <ButtonItem
          mainText="Polygon"
          itemToSelect="matic"
          secondaryText="MATIC"
          image={PolygonIcon}
          selected={chain.name}
          handleSelect={handleSelectNetworkName}
        />
      </div>
    </div>
  );
};

export default SelectNetwork;
