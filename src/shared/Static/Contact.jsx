<<<<<<< HEAD
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
      <section className="container mx-auto">
        <img src={Location} className="block mt-[105px] mb-9" title="Our location" alt="Our location" />
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-x-[117px]">
          <img src={MapPlaceholder} alt="Map" title="Map" className="block mx-auto" />
          <div className="text-center lg:text-left">
            <h2 className="text-5xl font-semibold text-[#29233B]">Contact form</h2>
            <p className="font-medium mt-3 mb-9 text-sm">
              Reach us via{" "}
              <a className="text-indigo-500" href="mailto:info@develocity.finance">
                info@develocity.finance
              </a>{" "}
              or use contact form
            </p>
            <form>
              <div className="grid grid-cols-2">
                <div className="">
                  <label>First name</label>
                  <input type="text" placeholder="First name" />
                </div>
                <div className="">
                  <label>First name</label>
                  <input type="text" placeholder="First name" />
                </div>
              </div>
              <div className="">
                <label>Email</label>
                <input type="email" placeholder="you@company.com" />
              </div>
              <div className="">
                <label>Phone number</label>
                <input type="phone" placeholder="+965131658" />
              </div>
              <div className="">
                <label>Message</label>
                <textarea rows={10} />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
=======
const Contact = () => {
  return <div>Contact</div>;
>>>>>>> momen
};

export default Contact;
