import StaticPageHeader from "../../shared/Static/StaticPageHeader";
import Footer from "../../shared/Components/Footer";
import Location from "../../assets/images/location.png";
import MapPlaceholder from "../../assets/images/map-placeholder.png";

const Contact = () => {
  return (
    <>
      <StaticPageHeader
        summary="Contact us"
        title="We'd love to hear from you"
        description="Our office is located in UAE, Dubai"
      />
      <section className="container px-10 xl:px-0 mx-auto mb-32 lg:mb-[275px]">
        <img src={Location} className="block mt-[105px] mb-9" title="Our location" alt="Our location" />
        <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2 xl:gap-x-[117px]">
          <img src={MapPlaceholder} alt="Map" title="Map" className="block mx-auto h-full" />
          <div className="mt-6 lg:mt-0 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#29233B]">Contact form</h2>
            <p className="font-medium mt-3 mb-9 text-sm">
              Reach us via{" "}
              <a className="text-indigo-500" href="mailto:info@develocity.finance">
                info@develocity.finance
              </a>{" "}
              or use contact form
            </p>
            <form className="xl:max-w-[512px] mx-auto xl:mx-0">
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-6 lg:gap-x-8">
                <div className="font-medium">
                  <label className="block text-sm mb-1.5 text-[#344054]">First name</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full xl:max-w-[240px]"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="font-medium">
                  <label className="block text-sm mb-1.5 text-[#344054]">Last name</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full xl:max-w-[240px]"
                    type="text"
                    placeholder="Last name"
                  />
                </div>
                <div className="font-medium col-span-2">
                  <label className="block text-sm mb-1.5 text-[#344054]">Email</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="font-medium col-span-2">
                  <label className="block text-sm mb-1.5 text-[#344054]">Phone number</label>
                  <input
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full"
                    type="email"
                    placeholder="email"
                  />
                </div>
                <div className="font-medium col-span-2">
                  <label className="block text-sm mb-1.5 text-[#344054]">Message</label>
                  <textarea
                    className="py-3.5 px-4 rounded text-base outline-none border border-[#D0D5DD] w-full overflow-hidden resize-none"
                    rows={10}
                  />
                </div>
              </div>
              <div className="flex gap-3 items-center mt-4">
                <label className="order-2 text-xs lg:text-base">
                  You agree to Develocity's{" "}
                  <a className="text-indigo-400" href="/">
                    privacy policy.
                  </a>
                </label>
                <input className="order-1 w-5 h-5 border border-[#D0D5DD] rounded" type="checkbox" />
              </div>
              <button className="bg-indigo-500 w-full text-white h-[52px] rounded-sm mt-8" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
