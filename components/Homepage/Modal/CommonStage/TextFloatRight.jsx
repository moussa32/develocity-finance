import React from "react";
import styles from "./CommonStyle.module.css";
import useTranslation from "@/shared/Hooks/useTranslation";

export default function TextFloatRight({ balanceValue }) {
  const { t } = useTranslation("buy-token-modal");

  return (
    <div className={styles.balanceText}>
      {t?.buyWithModal.btns.binanceCoin.balance} {balanceValue}
    </div>
  );
}
