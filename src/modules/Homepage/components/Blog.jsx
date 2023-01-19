import blogBackGround from "../../../../src/assets/images/blogBG.png";
import phoneImage from "../../../../src/assets/images/blogPhone.png";
import rightBG from "../../../../src/assets/images/plogBG.png";
import manImage from "../../../../src/assets/images/loogoso.svg";
function Blog() {
  return (
    <div className="text-center my-16">
      <div className="container mx-auto">
        <p className="text-6xl text-indigo-900" style={{ color: "#29233B" }}>
          Develocity Blog
        </p>
        <p className="text-sm mt-2" style={{ color: "#525C7A" }}>
          News, updates, and useful content from across the Develocity
          Ecosystem.
        </p>
        <div className="relative mt-12 flex justify-end">
          <img
            className="z-0 justify-self-end  absolute"
            src={blogBackGround}
          />

          <div className="gap-6 grid grid-cols-1 lg:grid-cols-2">
            <div className="shadow-xl relative flex flex-col ">
              <div className="text-left h-48 w-5/6 container mx-auto mt-10 flex flex-col">
                <p className="text-3xl" style={{ color: "#29233B" }}>
                  We are launching App for Multi-functional Tool
                </p>
                <p className="text-base mt-2" style={{ color: "#525C7A" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#" className="mt-5" style={{ color: "#6366F1" }}>
                  Learn More →
                </a>
              </div>
              <img src={phoneImage} />
            </div>

            <div className="shadow-xl flex flex-col">
              <div className="realtive flex flex-col items-center">
                <img
                  className="absolute"
                  style={{ height: "270px" }}
                  src={manImage}
                />
                <img className="h-64 w-full" src={rightBG} />
              </div>
              <div className="text-left w-5/6 container mx-auto mt-20 flex flex-col ">
                <p className="text-3xl" style={{ color: "#29233B" }}>
                  Discover the Business Solutions we have for you
                </p>
                <p className="text-sm mt-2" style={{ color: "#525C7A" }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <a href="#" className="mt-5" style={{ color: "#6366F1" }}>
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
