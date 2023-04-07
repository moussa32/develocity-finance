import { deveCost } from "../../../../shared/Constants/deveCost";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import TextItem from "./TextItem";
import useTranslation from "@/shared/Hooks/useTranslation";

const FinalModal = ({ onClose, handleStep, boughtAmount, referral }) => {
  const returnToHome = () => {
    onClose();
    handleStep("starter");
  };

  const { t } = useTranslation("buy-token-modal");

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <svg className="mb-3" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 68 68">
        <g
          id="Ellipse_196"
          data-name="Ellipse 196"
          fill="rgba(159,74,232,0.1)"
          stroke="rgba(156,63,229,0.3)"
          stroke-width="2"
        >
          <circle cx="34" cy="34" r="34" stroke="none" />
          <circle cx="34" cy="34" r="33" fill="none" />
        </g>
        <path
          id="Path_11690"
          data-name="Path 11690"
          d="M190.88,148.769l-1.487-1.487-14.179,14.179-6.847-6.847-1.487,1.452,8.334,8.334Z"
          transform="translate(-144.88 -121.841)"
          fill="#9c3fe5"
        />
      </svg>

      <ModalHeaderText header={t?.finalModal.mainText} caption={t?.finalModal.subText} />
      {boughtAmount >= 50 && (
        <p className="p-final text-center">
          {t?.finalModal.referralText}{" "}
          <span style={{ cursor: "pointer" }} onClick={() => handleStep("referral")}>
            {t?.finalModal.referralBtn}
          </span>
        </p>
      )}
      <div className="mt-5 w-100">
        <TextItem
          title={t?.finalModal.PurchasedTokens}
          value={boughtAmount}
          percentage={(boughtAmount * deveCost).toFixed(4)}
          hr="true"
        />
        <TextItem title={t?.finalModal.fromReferrals} value={referral} percentage={(referral * deveCost).toFixed(4)} />
      </div>
      <button className="back-to-home mt-5" onClick={returnToHome}>
        {t?.finalModal.backToHomepageBtn}
      </button>
    </section>
  );
};

export default FinalModal;
