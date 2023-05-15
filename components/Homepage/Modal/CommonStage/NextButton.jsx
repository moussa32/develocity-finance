import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useRouter } from "next/router";

const NextButton = ({ handleStep, text, stylesButton, disabled }) => {
  const { locale } = useRouter();

  return (
    <div className="w-full">
      <button
        type="button"
        className={`w-56 h-14 flex gap-1 justify-center items-center border-0 bg-[#0d162a] text-white rounded-md text-base mx-auto mt-5 mb-0${
          disabled ? " bg-[#888] color-[#ccc] cursor-not-allowed" : ""
        }`}
        onClick={handleStep}
        style={{ backgroundColor: stylesButton?.bg, marginTop: stylesButton?.marginTop }}
        disabled={disabled}
      >
        {text}
        {locale === "ar" ? <BsArrowLeftShort size={28} /> : <BsArrowRightShort size={28} />}
      </button>
    </div>
  );
};

export default NextButton;
