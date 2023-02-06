import { memo } from "react";

const Tag = ({ name }) => {
  return <span className="text-sm font-medium bg-[#F8F9FC] text-[#363F72] rounded-[20px] px-2.5 py-1">{name}</span>;
};

export default memo(Tag);
