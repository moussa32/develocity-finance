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
  const handleClick = event => {
    handleSelect(itemToSelect);
    if (getAllValues) {
      getAllValues(selected, image, mainText, secondaryText, itemToSelect);
    }
  };

  return (
    <div
      className={`flex border-1 border-[#ddd] py-[15px] px-[23px] rounded-md cursor-pointer shadow-[0px_0px_14px_3px_#ddd] ${
        selected === mainText && "active"
      } ${disabled ? "disabledbtn" : ""}`}
      onClick={handleClick}
    >
      <Image
        className={`mr-2.5 self-center ${disabled ? "opacity-75" : ""}`}
        src={image}
        width={42}
        height={42}
        alt={mainText}
        title={mainText}
      />
      <div className="flex justify-center flex-col">
        <p className="capitalize mb-0 text-lg">{mainText}</p>
        {secondaryText && <p className="uppercase mb-0 text-body-text text-opacity-75">{secondaryText}</p>}
      </div>
    </div>
  );
};

export default ButtonItem;
