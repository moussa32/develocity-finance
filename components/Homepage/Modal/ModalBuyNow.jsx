import { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import FinalModal from "./CommonStage/FinalModal";
import WalletInfoModal from "./GlobalStage/WalletInfoModal";
import BuywithModal from "./BuyStage/BuywithModal";
import ClaimModal from "./ClaimStage/ClaimModal";
import styles from "./Modal.module.css";
import SelectNetwork from "./GlobalStage/SelectNetwork";
import SelectOption from "./GlobalStage/SelectOption";
import BuyAmountModal from "./BuyStage/BuyAmountModal";
import ReferralsModal from "./Referrals/ReferralsModal";
import toast from "react-hot-toast";
import { getWalletBalance } from "./../../../shared/Util/handleContracts";
import { AnimatePresence, motion } from "framer-motion";
import { useAccount, useConnect, useDisconnect, useSigner } from "wagmi";

// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose, handleOpen }) => {
  const [currentStep, setCurrentStep] = useState("starter");
  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [userNetwork, setUserNetwork] = useState(null);
  const [firstCoin, setFirstCoin] = useState(0);
  const [secondCoin, setSecondCoin] = useState(0);
  const [selectedCurrency, setSelectedCurreny] = useState({ name: "", image: "", ticker: "", balance: "" });
  const [deveBalance, setDeveBalance] = useState({ amount: 0, value: 0 });
  const [tokensToClaim, setTokensToClaim] = useState({ amount: 0, value: 0 });
  const [referralsToClaim, setReferralsToClaim] = useState(0);
  const [provider, setProvider] = useState(null);
  const [connection, setConnection] = useState(null);
  const [transAmount, setTransAmount] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentAnimationStep, setCurrentAnimationStep] = useState(1);

  const { data: signer, isError, isLoading } = useSigner();
  const { disconnect } = useDisconnect();
  const { address, isConnecting, isDisconnected } = useAccount();

  const handleStep = useCallback(step => {
    setCurrentStep(step);
  }, []);

  const handleDisconnectWeb3Modal = async () => {
    disconnect();
    handleOpen(false);
    handleStep("starter");
    /*Toast notification*/
    toast.success("Disconnected!", {
      style: {
        border: "1px solid #e30e27",
        padding: "16px",
        backgroundColor: "#ffcdd2",
        color: "white",
        width: "300px",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "#e30e27",
      },
    });
  };

  useEffect(() => {
    const resetBalance = async () => {
      try {
        const {
          deveBalance: newDeveBalance,
          referralsToClaim: newReferralsToClaim,
          tokensToClaim: newTokensToClaim,
        } = await getWalletBalance(signer, address);
        console.log(newDeveBalance, newReferralsToClaim, newTokensToClaim);
        setIsLoaded(true);
        setDeveBalance(newDeveBalance);
        setTokensToClaim(newTokensToClaim);
        setReferralsToClaim(newReferralsToClaim);
      } catch (error) {
        setDeveBalance({ amount: 0, value: 0 });
        setTokensToClaim(0);
        setReferralsToClaim(0);
      }
    };

    //When wallet address is chanched, it will fetch the new address's balance
    if (address && open) {
      resetBalance();
    }
  }, [address, open]);

  useEffect(() => {
    //When User is changed his wallet address it will get the new wallet address and refresh component
    if (connection) {
      const listenToAccountChanges = async () => {
        connection.on("chainChanged", async () => {
          setIsLoaded(false);
          setCurrentStep("starter");
        });
      };
      listenToAccountChanges();
    }
  }, [connection]);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return (
          <SelectNetwork
            handleStep={handleStep}
            handleOpen={handleOpen}
            selectedNetwork={selectedNetwork}
            userNetwork={userNetwork}
            handleSelectedNetwork={setSelectedNetwork}
            handleUserNetwork={setUserNetwork}
          />
        );
      case "walletInfo":
        return (
          <WalletInfoModal
            deveBalance={deveBalance}
            tokensToClaim={tokensToClaim}
            referralsToClaim={referralsToClaim}
            handleStep={handleStep}
            walletAddress={address}
            disconnect={handleDisconnectWeb3Modal}
            handleCurrent={setCurrentAnimationStep}
            isDataLoaded={isLoaded}
          />
        );
      case "options":
        return (
          <SelectOption deveBalance={deveBalance} handleStep={handleStep} handleCurrent={setCurrentAnimationStep} />
        );
      case "buywith":
        return (
          <BuywithModal
            handleStep={handleStep}
            walletAddress={address}
            handleFirstCoin={setFirstCoin}
            firstCoin={firstCoin}
            handleSecondCoin={setSecondCoin}
            secondCoin={secondCoin}
            handleSelectCurrency={setSelectedCurreny}
            provider={provider}
            handleCurrent={setCurrentAnimationStep}
            selectedNetwork={selectedNetwork}
          />
        );
      case "buyamount":
        return (
          <BuyAmountModal
            handleStep={handleStep}
            walletAddress={address}
            disconnect={handleDisconnectWeb3Modal}
            currentCurrency={selectedCurrency}
            provider={provider}
            handleFinalAmount={setTransAmount}
            handleCurrent={setCurrentAnimationStep}
            selectedNetwork={selectedNetwork}
          />
        );
      case "claim":
        return <ClaimModal handleStep={handleStep} handleCurrent={setCurrentAnimationStep} />;
      case "referral":
        return (
          <ReferralsModal
            handleStep={handleStep}
            walletAddress={address}
            tokensToClaim={tokensToClaim.amount}
            referralsToClaim={referralsToClaim}
            handleCurrent={setCurrentAnimationStep}
          />
        );
      case "final":
        return (
          <FinalModal
            onClose={onClose}
            handleStep={handleStep}
            boughtAmount={transAmount}
            referral={referralsToClaim}
            handleCurrent={setCurrentAnimationStep}
          />
        );
      default:
        return <SelectNetwork handleStep={handleStep} handleCurrent={setCurrentAnimationStep} />;
    }
  };

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className={styles.backDrop}
        onClick={() => {
          handleStep("starter");
          onClose();
        }}
      />
      <div className={`${styles.overlay}`}>
        {/* <button className={styles.closeBtn_ltr} onClick={onClose}>
          close
        </button> */}
        <AnimatePresence mode="wait">
          <motion.div
            className="item"
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring" }}
            key={currentAnimationStep}
          >
            <div>{handleRenderComponentStep()}</div>
          </motion.div>
        </AnimatePresence>
        {/* <div>{handleRenderComponentStep()}</div> */}
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
