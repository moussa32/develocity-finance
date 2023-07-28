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
import { useAccount, useDisconnect, useNetwork, usePublicClient, useWalletClient } from "wagmi";
import BuyMethod from "./BuyStage/BuyMethod";
import { useRouter } from "next/router";
import BuyAmountWithFiat from "./BuyStage/BuyAmountWithFiat";

// const steps = {
//   global: ["starter", "selectWallet", "walletInfo", "options"],
//   buy: ["buyMethod","buywith", "buyamount", "final"],
//   claim: ["claim", "final"],
//   referral: ["referral", "final"],
// };

const ModalBuyNow = ({ open, onClose, handleOpen }) => {
  const [currentStep, setCurrentStep] = useState("walletInfo");
  const [firstCoin, setFirstCoin] = useState(0);
  const [secondCoin, setSecondCoin] = useState(0);
  const [selectedCurrency, setSelectedCurreny] = useState({
    id: "",
    name: "",
    image: "",
    ticker: "",
    decimals: "",
    balance: "",
  });
  const [deveBalance, setDeveBalance] = useState({ amount: 0, value: 0 });
  const [tokensToClaim, setTokensToClaim] = useState({ amount: 0, value: 0 });
  const [referralsToClaim, setReferralsToClaim] = useState(0);
  const [transAmount, setTransAmount] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentAnimationStep, setCurrentAnimationStep] = useState(1);
  const { locale } = useRouter();

  const { data: signer } = useWalletClient();
  const { disconnect } = useDisconnect();
  const { address, status } = useAccount();
  const { chain } = useNetwork();
  const provider = usePublicClient();

  const handleStep = useCallback(step => {
    setCurrentStep(step);
  }, []);

  const handleCurrentAnimationStep = useCallback(() => {
    setCurrentAnimationStep(prev => prev + 1);
  }, [currentAnimationStep]);

  const handleDisconnectWeb3Modal = async () => {
    disconnect();
    handleOpen(false);
    handleStep("walletInfo");
    /*Toast notification*/
    toast.success("Disconnected!", {
      style: {
        border: "1px solid #e30e27",
        padding: "16px",
        backgroundColor: "#ffcdd2",
        color: "white",
        width: "300px",
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
        } = await getWalletBalance(chain.network, signer, address);
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

    //When wallet address is changed, it will fetch the new address's balance
    if (address && open && signer) {
      resetBalance();
    }
  }, [address, open, signer]);

  const handleRenderComponentStep = () => {
    switch (currentStep) {
      case "starter":
        return <SelectNetwork handleStep={handleStep} handleOpen={handleOpen} />;
      case "walletInfo":
        return (
          <WalletInfoModal
            deveBalance={deveBalance}
            tokensToClaim={tokensToClaim.amount}
            referralsToClaim={referralsToClaim}
            handleStep={handleStep}
            walletAddress={address}
            disconnect={handleDisconnectWeb3Modal}
            handleCurrent={handleCurrentAnimationStep}
            isDataLoaded={isLoaded}
          />
        );
      case "options":
        return (
          <SelectOption deveBalance={deveBalance} handleStep={handleStep} handleCurrent={handleCurrentAnimationStep} />
        );
      case "paymentMethod":
        return <BuyMethod handleStep={setCurrentStep} handleCurrent={handleCurrentAnimationStep} />;
      case "buyWithFiat":
        return (
          <BuyAmountWithFiat
            disconnect={handleDisconnectWeb3Modal}
            handleCurrent={handleCurrentAnimationStep}
            handleFinalAmount={setTransAmount}
            handleStep={setCurrentStep}
          />
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
            handleCurrent={handleCurrentAnimationStep}
            selectedNetwork={chain.network}
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
            handleCurrent={handleCurrentAnimationStep}
            selectedNetwork={chain.network}
          />
        );
      case "claim":
        return <ClaimModal handleStep={handleStep} handleCurrent={handleCurrentAnimationStep} />;
      case "referral":
        return (
          <ReferralsModal
            handleStep={handleStep}
            walletAddress={address}
            tokensToClaim={tokensToClaim.amount}
            referralsToClaim={referralsToClaim}
            handleCurrent={handleCurrentAnimationStep}
            selectedNetwork={chain.network}
          />
        );
      case "final":
        return (
          <FinalModal
            onClose={onClose}
            handleStep={handleStep}
            boughtAmount={transAmount}
            referral={referralsToClaim.amount}
            handleCurrent={handleCurrentAnimationStep}
          />
        );
      default:
        return (
          <WalletInfoModal
            deveBalance={deveBalance}
            tokensToClaim={tokensToClaim}
            referralsToClaim={referralsToClaim}
            handleStep={handleStep}
            walletAddress={address}
            disconnect={handleDisconnectWeb3Modal}
            handleCurrent={handleCurrentAnimationStep}
            isDataLoaded={isLoaded}
          />
        );
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className={styles.backDrop}
        onClick={() => {
          handleStep("walletInfo");
          onClose();
        }}
      />
      <div className={`${styles.overlay}`} style={{ direction: locale === "ar" ? "rtl" : "ltr" }}>
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
            <div>{open && handleRenderComponentStep()}</div>
          </motion.div>
        </AnimatePresence>
        {/* <div>{handleRenderComponentStep()}</div> */}
      </div>
    </>,
    document.getElementById("modal-buyNow-btn")
  );
};

export default ModalBuyNow;
