export function ModalHeaderText({ header, caption }) {
  return (
    <>
      <div className="text-center mb-8">
        <h2 className="font-PolySans text-[28px] text-[#23282C]">{header}</h2>
        <span className="mt-[6px] text-neutral-600 text-sm">{caption}</span>
      </div>
    </>
  );
}
