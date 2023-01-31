import phoneImage from "../../../src/assets/images/blogPhone.png";
import manImage from "../../../src/assets/images/loogoso.svg";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div className="text-center my-32">
      <div className=" container mx-auto">
        <h3 className="font-PolySans text-6xl  text-[#29233B]">
          Develocity Blog
        </h3>
        <p className="text-lg mt-4 capitalize text-[#525C7A]">
          News, updates, and useful content from across the Develocity
          Ecosystem.
        </p>
        <div className="mt-10 container mx-auto">
          <div className=" gap-44 lg:gap-9 grid grid-cols-1 lg:grid-cols-2">
            <div className="shadow-xl bg-slate-50	 flex flex-col justify-between rounded-lg overflow-hidden h-[650px] max-w-[488px]">
              <div className="text-left w-5/6 container mx-auto mt-10 flex flex-col">
                <h3 className="font-sans text-3xl font-medium capitalize text-[#29233B]">
                  We are launching App for Multi-functional Tool
                </h3>
                <p className="text-base mt-4 text-[#525C7A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Link
                  to={"blog"}
                  className="mt-8 font-medium flex gap-2 text-indigo-500"
                >
                  Learn More &#10140;
                </Link>
              </div>

              <div className="relative container mx-auto w-5/6 h-[500px] ">
                <div className="absolute top-20 md:top-5">
                  <img className="w-full" src={phoneImage} />
                </div>
              </div>
            </div>

            <div className="shadow-xl bg-slate-50	 flex flex-col pb-10 rounded-lg max-w-[488px]">
              <div className="realtive flex justify-center bg-gradient-to-r from-[#120734] to-[#000000] h-64 rounded-t-lg">
                <div className="absolute self-end ">
                  <img className="w-10/12" src={manImage} />
                </div>
              </div>
              <div className="text-left w-5/6 container mx-auto mt-20 flex flex-col ">
                <h3 className="font-sans text-3xl font-medium capitalize  text-[#29233B]">
                  Discover the Business Solutions we have for you
                </h3>
                <p className="text-base mt-4  text-[#525C7A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Link
                  to={"blog"}
                  className="mt-8 font-medium flex gap-2 text-indigo-500"
                >
                  Learn More &#10140;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-indigo-500 font-semibold">
          <Link to={"terms-and-conditions"}>
            Check more news and updates &#10140;
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Blog;
