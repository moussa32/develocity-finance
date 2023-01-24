import blogBackGround from "../../../../src/assets/images/blogBG.svg";
import phoneImage from "../../../../src/assets/images/blogPhone.png";
import rightBG from "../../../../src/assets/images/plogBG.png";
import manImage from "../../../../src/assets/images/loogoso.svg";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div className="text-center my-32">
      <div className="container mx-auto">
        <h3 className="text-6xl  text-[#29233B]">Develocity Blog</h3>
        <p className="text-sm mt-4 capitalize text-[#525C7A]">
          News, updates, and useful content from across the Develocity
          Ecosystem.
        </p>
        <div className=" mt-10 container mx-auto">
          <div className=" gap-44 lg:gap-9 grid grid-cols-1 lg:grid-cols-2">
            <div className="shadow-xl flex flex-col rounded-lg z-10">
              <div className="text-left w-5/6 container mx-auto mt-10 flex flex-col">
                <p className="text-3xl capitalize text-[#29233B]">
                  We are launching App for Multi-functional Tool
                </p>
                <p className="text-base mt-2 text-[#525C7A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Link to={"blog"} className="mt-5 flex gap-2 text-[#6366F1]">
                  Learn More →
                </Link>
              </div>
              <div className="relative flex justify-center h-72">
                <div className="absolute top-16 z-0">
                <img className="w-[500px] lg:w-full" src={phoneImage} />
                </div>
              </div>
            </div>

            <div className="shadow-xl shadow-gray-300 flex flex-col pb-10 rounded-lg">
              <div className="realtive flex justify-center bg-gradient-to-r from-[#120734] to-[#000000] h-64">
                <div className="absolute self-center">
                  <img className="w-10/12" src={manImage} />
                </div>
              </div>
              <div className="text-left w-5/6 container mx-auto mt-20 flex flex-col ">
                <p className="text-3xl capitalize  text-[#29233B]">
                  Discover the Business Solutions we have for you
                </p>
                <p className="text-base mt-2  text-[#525C7A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <Link to={"blog"} className="mt-5 flex gap-2 text-[#6366F1]">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-16 relative z-10 text-[#6366F1] font-semibold">
          <Link to={"terms-and-conditions"}>
            Check more news and updates →
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Blog;
