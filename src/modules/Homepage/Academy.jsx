import AcadmyTitle from "../../assets/images/AcadmyTitle.png";
import Phone from "../../assets/images/Phone.png";

const Academy = () => {
  return (
    <section className="container px-10 pb-32 lg:pb-48 lg:px-0 mx-auto">
      <img src={AcadmyTitle} alt="ecosystem" className="block mr-auto mb-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="hidden md:block relative w-full h-full">
          <img src={Phone} className="lg:absolute top-[-75px] left-[48px]" alt="Phone" title="Phone" />
        </div>

        <div className="flex flex-col ml-auto">
          <span className="bg-[#F3F4F8] rounded-2xl text-xs md:text-sm font-medium p-1.5 pr-[18px] flex items-center lg:flex-row gap-2 max-w-[307px]">
            <span className="bg-white py-1 px-2.5 rounded-2xl flex items-center">
              <span className="block mr-1.5 bg-indigo-500 w-2 h-2 rounded-full"></span>Launched
            </span>
            <span className="text-[#344054]">Crypto Academy - Phase I</span>
          </span>
          <h3 className="text-[#101828] font-bold text-xl md:text-2xl lg:text-4xl mt-3 mb-6">
            Crypto, Camera, Action!
          </h3>
          <p className="text-neutral-500 text-base font-medium">
            We just launched the first vision of crypto academy, which is focused on rising awareness about the
            cryptocurrency, blockchain technology and it's benefits in general.
          </p>
          <p className="text-neutral-500 text-base font-medium mt-4">
            On the second phase crypto academy will focus on bringing well known people from different kinds of
            companies based on blockchain industry and you'll beable to learn directly from them.
          </p>
          <p className="text-neutral-500 text-base font-medium mt-4">
            watch Academy Shorts on the link -{" "}
            <a className="text-indigo-500 underline underline-offset-2" href="academy.develocity.finance.">
              academy.develocity.finance.
            </a>
          </p>
          <button className="py-[15px] px-[45px] bg-indigo-500 text-white text-md font-medium mt-8 w-48">
            Visit now &#10140;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academy;
