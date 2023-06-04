import { memo } from "react";

const ProgressBar = ({ value, text }) => {
  const progress = (value / 100) * 100;

  return (
    <div className="relative mb-[18px] bg-secondary w-full h-6 overflow-hidden rounded-[20px]">
      {text && (
        <div className="absolute text-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-50 flex justify-center">
          {text}
        </div>
      )}
      <div className="relative h-6" style={{ width: `${progress}%` }}>
        <div
          className="absolute top-0 ltr:left-0 rtl:right-0 h-full ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-indigo-500 to-[#0BF0ED] animate-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default memo(ProgressBar);
