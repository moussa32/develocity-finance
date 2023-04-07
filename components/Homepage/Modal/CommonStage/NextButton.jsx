const NextButton = ({ handleStep, text, stylesButton, disabled }) => {
  return (
    <div className="w-full">
      <button
        type="button"
        className={`w-56 h-14 flex justify-center items-center border-0 bg-[#0d162a] text-white rounded-md text-base mx-auto mt-5 mb-0 ${
          disabled ? "bg-[#888] color-[#ccc] cursor-not-allowed" : null
        }`}
        onClick={handleStep}
        style={{ backgroundColor: stylesButton?.bg, marginTop: stylesButton?.marginTop }}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default NextButton;
