import twitter from "../../assets/images/LD_twitter.svg";
import facebook from "../../assets/images/LD_facebook.svg";
import instagram from "../../assets/images/LD_instagram.svg";

function Leadership() {
  return (
    <div className="text-center my-24">
      <div className="font-PolySans container mx-auto">
        <p className="text-[28px] md:text-5xl text-[#171717]">
          Develocity Leadership
        </p>
        <p className="text-base md:text-lg mt-2 text-[#525252] md:text-[#404040]">
          With the mindset to create secure future in the digital money.
        </p>
        <div className="grid mt-14 gap-7 grid-cols-1 lg:grid-cols-3">
          <div className="relative mx-8 px-6 pt-[27px] pb-[27px] rounded-xl bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] lg:w-[26.6vw] h-[484px]">
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 text-left text-white z-50">
                <p className="text-2xl font-medium">Mahdi Ajaj</p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">CEO</label>
                  <div className="flex gap-2">
                    <img className="w-5" src={facebook} />
                    <img className="w-5" src={twitter} />
                    <img className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-8 px-6 pt-[27px] pb-[27px] rounded-xl bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] lg:w-[26.6vw] h-[484px]">
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 text-left text-white z-50">
                <p className="text-2xl font-medium mb-1">Abdulaziz Bin Fahad</p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">CTO</label>
                  <div className="flex gap-2">
                    <img className="w-5" src={facebook} />
                    <img className="w-5" src={twitter} />
                    <img className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-8 px-6 pt-[27px] pb-[27px] rounded-xl bg-gradient-to-br from-[#1D2B64] to-[#F8CDDA] lg:w-[26.6vw] h-[484px]">
            <div className="absolute bottom-0 right-0 left-0 bg-white opacity-10 z-0 h-28"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-6 pt-6 pb-6 text-left text-white z-50">
                <p className="mb-2 text-2xl font-medium">
                  Mamuka Kavtelishvili
                </p>
                <div className="flex justify-between mt-1">
                  <label className="text-[22px]">CMO</label>
                  <div className="flex gap-2">
                    <img className="w-5" src={facebook} />
                    <img className="w-5" src={twitter} />
                    <img className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leadership;
