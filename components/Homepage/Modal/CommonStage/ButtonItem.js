import Image from "next/image";

const ButtonItem = ({
  selected,
  handleSelect,
  image,
  mainText,
  secondaryText,
  itemToSelect,
  getAllValues,
  disabled,
}) => {
  const handleClick = () => {
    handleSelect(itemToSelect);
    if (getAllValues) {
      getAllValues(selected, image, mainText, secondaryText, itemToSelect);
    }
  };

  return (
    <button
      className={`flex border-1 gap-3 border-[#D6D6D6] rounded-md bg-white transition-all duration-200 hover:border-[#6466E9] w-full px-5 pt-[17px] pb-[15px] items-center ${
        selected === mainText && "active"
      } ${disabled ? "bg-[#888] text-[#ccc] cursor-not-allowed" : "cursor-pointer"}`}
      onClick={handleClick}
    >
      <Image
        className={`self-center ${disabled ? "opacity-75" : ""}`}
        src={image}
        width={42}
        height={42}
        alt={mainText}
        title={mainText}
      />
      <div className="flex justify-center flex-col">
        <p className="capitalize text-lg text-[#23282C]">{mainText}</p>
        {secondaryText && <p className="text-left uppercase text-[#A5A5A5] text-sm font-medium">{secondaryText}</p>}
      </div>
    </button>
  );
};

export default ButtonItem;
