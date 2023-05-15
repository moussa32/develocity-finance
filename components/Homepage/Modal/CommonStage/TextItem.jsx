import { useRouter } from "next/router";
import ContentLoader from "react-content-loader";

const TextItem = ({ title, secondaryText, value, percentage, hr, symbol, isLoaded = true }) => {
  const { locale } = useRouter();

  const renderValues = () => {
    if (!isLoaded) {
      return (
        <ContentLoader
          viewBox="0 0 400 40"
          backgroundColor="#d9d9d9"
          foregroundColor="#ecebeb"
          style={{ width: "150px" }}
        >
          <rect x="15" y="0" rx="4" ry="4" height="30" style={{ width: "100%" }} />
        </ContentLoader>
      );
    } else {
      return (
        <p className="text-sm flex items-center m-0 text-[#333]">
          {value ? value : null} {secondaryText ? secondaryText : "DEVE"}
          {percentage && (
            <span className={`${locale === "ar" ? "mr-1" : "ml-1"} text-[#8b8b8b]`}>
              ({symbol ? symbol : "~$"} {percentage})
            </span>
          )}
        </p>
      );
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h6 className="text-sm text-[#8b8b8b] m-0">{title}:</h6>
        {renderValues()}
      </div>
      {hr && <hr style={{ border: 0, borderTop: "1px solid", color: "inherit", margin: "1rem 0", opacity: ".25" }} />}
    </>
  );
};

export default TextItem;
