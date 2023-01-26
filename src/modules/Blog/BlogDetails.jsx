import StaticPageHeader from "../../shared/Static/StaticPageHeader";
import Tag from "./Tag";
import BlogDetailsPlaceholder from "../../assets/images/BlogDetailsPlaceholder.png";
import Footer from "../../shared/Components/Footer";

const BlogDetails = ({
  published_at = "Published on 24.12.2022",
  title = "Biggest news from Develocity's Crypto Conference 2022 Dubai",
  tags = ["Blockchain", "Updates", "Crypto"],
}) => {
  return (
    <>
      <div className="relative">
        <StaticPageHeader
          summary={published_at}
          titleClassNames="max-w-[728px]"
          headerClassNames="h-[400px] lg:h-[655px]"
          title={title}
          description={
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <Tag name={tag} key={`${tag}${index}`} />
              ))}
            </div>
          }
        />
        <article className="container px-10 lg:px-0 mx-auto relative min-w-full mb-24 pt-16 md:pt-56 lg:pt-[372px]">
          <img
            className="w-4/5 lg:max-w-[1008px] inset-x-0 absolute top-[-90px] lg:top-[-160px] mx-auto z-10 max-h-[516px] object-contain rounded-xl"
            src={BlogDetailsPlaceholder}
            alt={title}
            title={title}
          />
          <div className="md:w-4/5 lg:max-w-[800px] mx-auto mt-8 md:mt-16 text-[#667085] font-medium text-base">
            <h2 className="text-[#101828] text-xl md:text-2xl lg:text-3xl font-semibold">First title in blog post</h2>
            <p className="mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis vitae lectus nec ornare.
              Pellentesque nibh eros, accumsan id imperdiet quis, porta eu ante. Curabitur lobortis nisl et neque
              consectetur dictum. Donec vulputate purus ac augue bibendum, vitae dapibus urna ornare. In pharetra id
              orci et viverra. Ut consequat lorem eu turpis feugiat semper. Suspendisse semper lorem eros, ac pharetra
              nunc semper ut. Nulla leo orci, mollis euismod tincidunt in, porttitor in leo.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
