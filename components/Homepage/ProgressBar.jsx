import { memo } from "react";

const ProgressBar = ({ value }) => {
  const progress = (value / 100) * 100;

  return (
    <div className="relative mb-[18px] bg-secondary w-full h-3 overflow-hidden rounded-[20px]">
      <div className="relative h-3" style={{ width: `${progress}%` }}>
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-[#0BF0ED] animate-progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default memo(ProgressBar);