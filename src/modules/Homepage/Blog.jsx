import phoneImage from "../../../src/assets/images/blog-phone.png";
//import phoneImage2 from "../../../src/assets/images/blogPhone.png";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="text-center mt-28 mb-[59px] md:mt-32 md:mb-32">
      <div className="container mx-auto">
        <h3 className="font-PolySans text-[28px] text-[#171717] md:text-6xl  md:text-[#29233B]">
          Develocity Blog
        </h3>
        <p className="text-base text-[#525252] md:text-lg mt-3 md:mt-4 md:capitalize md:text-[#525C7A]">
          News, updates, and useful content from across the Develocity
          Ecosystem.
        </p>
        <div className="flex justify-center items-center">
          <div className=" mt-8 gap-9 grid grid-cols-1 lg:grid-cols-2">
            <div className="shadow-xl bg-slate-50 flex flex-col justify-center rounded-lg overflow-hidden h-[650px] max-w-[488px]">
              <div className="text-left ml-4 md:ml-8 mt-8 flex flex-col">
                <h3 className="font-sans text-[28px] font-semibold px-2 md:px-0 md:text-3xl md:font-medium capitalize text-[#29233B]">
                  We are launching <span className="hidden md:inline-block">App for</span> Multi-functional Tool
                </h3>
                <p className="text-base mt-3 pl-2 md:pl-0 text-[#525252] md:text-[#525C7A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Link
                  to={"blog"}
                  className="mt-10 md:mt-7 pl-2 md:pl-0 font-medium flex gap-2 text-indigo-500"
                >
                  Learn More &#10140;
                </Link>
              </div>
              <div className="flex justify-center h-[280px] md:h-[700px]">
                <div className="relative w-5/6 md:w-4/6">
                  <div className="absolute top-12 md:top-16 w-full">
                    <img className="w-full" src={phoneImage} />
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-xl bg-slate-50	 flex flex-col pb-6 md:pb-10 rounded-lg h-[600px] md:h-[650px] max-w-[488px]">
              <div className="realtive blog-bg bg-center bg-no-repeat md:bg-cover flex justify-center rounded-t-lg h-[382px]">
              </div>
              <div className="text-left max-w-[424px] ml-4 md:ml-8 mt-3 flex flex-col ">
                <h3 className="font-sans text-[28px] font-semibold md:text-3xl mt-3 pl-2 md:pl-0 md:font-medium capitalize  text-[#29233B]">
                  Discover the Business Solutions we have <span className="hidden md:inline-block">for you</span>
                </h3>
                <p className="text-base mt-3 md:mt-4 pl-2 md:pl-0 text-[#525C7A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the<span className="hidden md:inline-block"> 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.</span>
                </p>
                <Link
                  to={"blog"}
                  className="mt-4 md:mt-7 font-medium pl-2 md:pl-0 flex gap-2 text-indigo-500"
                >
                  Learn More &#10140;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-lg mt-[46px] md:mt-[60px] text-indigo-500 font-semibold">
          <Link to={"terms-and-conditions"}>
            Check more news and updates &#10140;
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Blog;
