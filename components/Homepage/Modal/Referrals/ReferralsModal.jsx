import TextItem from "../CommonStage/TextItem";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import toast, { Toaster } from "react-hot-toast";
import useTranslation from "@/shared/Hooks/useTranslation";

const ReferralsModal = ({ handleStep, walletAddress, tokensToClaim, referralsToClaim }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}?ref=${walletAddress}`);
    //alert('Text copied');
    toast.success("Copied To Clipboard", {
      style: {
        border: "1px solid #35C486",
        padding: "16px",
        backgroundColor: "white",
        width: "300px",
        borderRadius: "8px",
      },
      iconTheme: {
        primary: "#35C486",
      },
    });
  };

  const { t } = useTranslation("buy-token-modal");

  return (
    <section className="d-flex flex-column justify-content-center align-items-center">
      <svg
        className="mb-3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="70"
        height="70"
        viewBox="0 0 70 70"
      >
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#8247e5" />
            <stop offset="1" stop-color="#53269f" />
          </linearGradient>
        </defs>
        <circle id="Polygon_MATIC_" data-name="Polygon (MATIC)" cx="35" cy="35" r="35" fill="#8247E5" />
        <path
          id="logo_Converted_"
          data-name="logo [Converted]"
          d="M133.325,35.306,117.471,20.449,117.2.294h17.645c.977,0,8.253-.382,12.7,4.479a14.494,14.494,0,0,1,4.289,9.941L145.6,17.937c0-2.84-.271-5.681-2.66-8.193-2.823-2.895-7.818-2.567-7.872-2.567H124.1l.109,10.269,9.5,8.9,18.514-9.832Z"
          transform="translate(-98.064 18.848)"
          fill="#fff"
        />
      </svg>

      <ModalHeaderText
        header={t?.homeSection.modal.referralModal.mainText}
        caption={t?.homeSection.modal.referralModal.subText}
      />
      <div className="ref-container">
        <label className="referral-lable">{t?.homeSection.modal.referralModal.referralLinkLabel}</label>
        <div className="copy-link d-flex ">
          <p className="m-3">{`${window.location.origin}?ref=${walletAddress.slice(0, 5)}...`}</p>
          <svg
            className="m-3 copy-svg"
            onClick={() => copyToClipboard()}
            xmlns="http://www.w3.org/2000/svg"
            width="21.5"
            height="21.5"
            viewBox="0 0 21.5 21.5"
          >
            <path
              id="Vector"
              d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H4.9C1.4,14,0,12.6,0,9.1V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z"
              transform="translate(0.75 6.75)"
              fill="none"
              stroke="#292d32"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M14,4.9V9.1c0,3.5-1.4,4.9-4.9,4.9H8V10.9C8,7.4,6.6,6,3.1,6H0V4.9C0,1.4,1.4,0,4.9,0H9.1C12.6,0,14,1.4,14,4.9Z"
              transform="translate(6.75 0.75)"
              fill="none"
              stroke="#292d32"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
      <div className="mt-4 w-100">
        <TextItem
          title={t?.homeSection.modal.referralModal.referralPercentage}
          value={tokensToClaim}
          secondaryText="%"
          hr="true"
        />
        <TextItem title={t?.homeSection.modal.referralModal.referralsToClaim} value={referralsToClaim} />
      </div>
      <button className="referrals-btn mt-5" onClick={() => handleStep("final")}>
        {t?.homeSection.modal.referralModal.claimBtn}
      </button>
    </section>
  );
};

export default ReferralsModal;
