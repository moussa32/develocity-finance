import twitter from "../../../assets/images/LD_twitter.svg";
import facebook from "../../../assets/images/LD_facebook.svg";
import instagram from "../../../assets/images/LD_instagram.svg";

function Leadership() {
  return (
    <div className="text-center my-24">
      <div className="container mx-auto">
        <p className="PolySans text-6xl text-indigo-900" style={{ color: "#29233B" }}>
          Develocity Leadership
        </p>
        <p className="text-lg mt-2" style={{ color: "#525C7A" }}>
          With the mindset to create secure future in the digital money.
        </p>
        <div className="grid mt-6 gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="relative mx-5 rounded-lg bg-gradient-to-t from-[#280D46] to-[#DC88F9] h-96">
            <div className="absolute bottom-0 right-0 left-0 bg-slate-400 opacity-25 z-0  h-24"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-3 pt-4 pb-2 text-left text-white z-50">
                <p className="text-2xl font-medium">Mahdi Ajaj</p>
                <div className="flex justify-between">
                  <label className="text-xl	">CEO</label>
                  <div className="flex gap-2">
                    <img className="w-5" src={facebook} />
                    <img className="w-5" src={twitter} />
                    <img className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-5 rounded-lg bg-gradient-to-t from-[#101828] to-[#8DA4C9] h-96">
            <div className="absolute bottom-0 right-0 left-0 bg-slate-400 opacity-25 z-0  h-24"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-3 pt-4 pb-2 text-left text-white z-50">
                <p className="text-2xl font-medium mb-1">Abdulaziz Bin Fahad</p>
                <div className="flex justify-between">
                  <label className="text-xl	">CTO</label>
                  <div className="flex gap-2">
                    <img className="w-5" src={facebook} />
                    <img className="w-5" src={twitter} />
                    <img className="w-5" src={instagram} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-5 rounded-lg bg-gradient-to-t from-[#030A13] to-[#859AFF] h-96">
            <div className="absolute bottom-0 right-0 left-0 bg-slate-400 opacity-25 z-0  h-24"></div>
            <div className="absolute bottom-0 right-0 left-0 z-20">
              <div className="px-3 pt-4 pb-2 text-left text-white z-50">
                <p className="text-2xl font-medium">Mamuka Kavtelishvili</p>
                <div className="flex justify-between">
                  <label className="text-xl">CMO</label>
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
