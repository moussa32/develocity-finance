import ButtonItem from "../CommonStage/ButtonItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import BuyIcon from "../../../../public/assets/images/BuyDEVE.svg";
import ClaimTokenIcon from "../../../../public/assets/images/ClaimTokenIcon.svg";
import ReferralsIcon from "../../../../public/assets/images/ReferralsIcon.svg";
import { useState } from "react";
import useTranslation from "@/shared/Hooks/useTranslation";
import { Tooltip } from "antd";

const SelectOption = ({ handleStep, deveBalance, handleCurrent }) => {
  const { t } = useTranslation("buy-token-modal");

  const [selectedStep, setSelectedStep] = useState("");

  const updateStep = nextStep => {
    handleStep(nextStep);
    handleCurrent();
  };

  return (
    <div>
      <ModalHeaderText header={t?.optionsModal.mainText} caption={t?.optionsModal.subText} />
      <div className="flex flex-col gap-4 w-full">
        <div onClick={() => updateStep("paymentMethod")}>
          <ButtonItem
            mainText={t?.optionsModal.btns.buyDEVE}
            image={BuyIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={false}
          />
        </div>
        <Tooltip title="Claim your tokens after Pre-Sale">
          <div className="relative" onClick={() => deveBalance.amount >= 500000 && updateStep("claim")}>
            <ButtonItem
              mainText={t?.optionsModal.btns.claimYourTokens}
              image={ClaimTokenIcon}
              selected={selectedStep}
              handleSelect={setSelectedStep}
              disabled={deveBalance.amount <= 50000 ? true : false}
            />
          </div>
        </Tooltip>
        <div onClick={() => deveBalance.amount >= 0 && updateStep("referral")}>
          <ButtonItem
            mainText={t?.optionsModal.btns.referrals}
            image={ReferralsIcon}
            selected={selectedStep}
            handleSelect={setSelectedStep}
            disabled={deveBalance.amount < 0 ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
