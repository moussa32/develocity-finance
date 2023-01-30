import StaticPageHeader from "../../shared/Static/StaticPageHeader";
import Footer from "../../shared/Components/Footer";

const TermsConditions = () => {
  return (
    <>
      <StaticPageHeader
        summary="Current as of 8th Nov, 2022"
        title="Terms and conditions"
        description="Your privacy is important to us at Develocity. We respect your privacy regarding
        any information we may collect from your experience on our platforms."
      />
      <section className="container mx-auto md:my-24 text-[#475467] font-medium text-base px-10 lg:px-0">
        <div className="max-w-[826px]">
          <section className="my-8">
            <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
              Privacy Policy
            </h2>
            <p>
              At develocity.finance, accessible from
              https://develocity.finance/, one of our main priorities is the
              privacy of our visitors. This Privacy Policy document contains
              types of information that is collected and recorded by
              develocity.finance and how we use it.
            </p>
            <p className="my-8">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in develocity.finance. This policy
              is not applicable to any information collected offline or via
              channels other than this website.
            </p>
          </section>
          <section className="my-8">
            <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
              Information we collect
            </h2>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="my-6">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p>
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </section>
          <section className="my-8">
            <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
              How we use your information
            </h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="mt-6">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to
              </li>
              <li>
                provide you with updates and other information relating to the
                website, and for marketing and promotional
              </li>
              <li>purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>
        </div>
        <section className="my-8 max-w-[1000px]">
          <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
            Log Files
          </h2>
          <p>
            develocity.finance follows a standard procedure of using log files.
            These files log visitors when they visit websites. All hosting
            companies do this and a part of hosting services' analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users' movement on the
            website, and gathering demographic information.
          </p>
        </section>
        <section className="my-8 max-w-[1000px]">
          <h2 className="font-semibold mb-5 text-3xl text-[#29233B]">
            Advertising Partners Privacy Policies
          </h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of develocity.finance.
          </p>
          <p className="py-8">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on
            develocity.finance, which are sent directly to users' browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit.
          </p>
          <p>
            Note that develocity.finance has no access to or control over these
            cookies that are used by third-party advertisers.
          </p>
        </section>
      </section>
    </>
  );
};

export default TermsConditions;
