import image from "@/images/develocityicon.png";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";
import TextItem from "../CommonStage/TextItem";
import NextButton from "../CommonStage/NextButton";
import styles from "../CommonStage/CommonStyle.module.css";
import useTranslation from "@/shared/Hooks/useTranslation";
import Image from "next/image";

export default function ClaimModal({ handleStep, handleCurrent }) {
  const { t } = useTranslation("buy-token-modal");

  return (
    <>
      <div>
        <div className={styles.claimImgwrapper}>
          <Image src={image} alt={t?.claimModal.mainText} />
        </div>
        <div>
          <ModalHeaderText header={t?.claimModal.mainText} caption={t?.claimModal.subText} />
        </div>
        <TextItem title={t?.claimModal.DEVEBalance} value="500" percentage="500" hr="true" />
        <TextItem title={t?.claimModal.tokensToClaim} value="500" percentage="500" hr="" />
        <div className={styles.nextButtonContainer}>
          <NextButton
            text={t?.claimModal.claimBtn}
            stylesButton={{ bg: "#9C3FE5", marginTop: "170px" }}
            disabled={true}
            handleStep={() => {
              handleStep("final");
              handleCurrent();
            }}
          />
        </div>
      </div>
    </>
  );
}
