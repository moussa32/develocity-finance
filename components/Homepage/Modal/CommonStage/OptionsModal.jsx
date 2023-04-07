import { useState } from "react";
import { ModalHeaderText } from "../ModalHeader/ModalHeaderText";

export default function OptionsModal({ handleStep }) {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <>
      <div>
        <ModalHeaderText header="Select Your Option" caption="What You Wanna Do!" />
        <div>
          {/*test */}
          <button class="d-block m-auto select-btn" onClick={() => setSelectedOption("buyamount")}>
            Buy DEVE
          </button>
          <button onClick={() => setSelectedOption("")} className="d-block m-auto select-btn">
            Claim Your Tokens
          </button>
          <button onClick={() => setSelectedOption("referral")} className="d-block m-auto select-btn">
            Referrals
          </button>
        </div>
        <button onClick={() => handleStep(selectedOption)}>Next</button>
      </div>
    </>
  );
}
