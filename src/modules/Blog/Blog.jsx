import BlogCard from "./BlogCard";
import ThumbnailPlaceholder from "../../assets/images/thumbnail-placeholder.png";
import StaticPageHeader from "../../Shared/Static/StaticPageHeader";
import Footer from "../../Shared/Components/Footer";

const Blog = () => {
  return (
    <>
      <StaticPageHeader
        summary="Develocity Blog"
        title="Company news and updates"
        description="Our office is located in UAE, Dubai"
      />
      <section className="container mx-auto max-w-[1216px]">
        <div className="grid grid-cols-1 my-24 gap-10 px-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-16 xl:gap-x-8 xl:px-0">
          <BlogCard
            thumbnail={ThumbnailPlaceholder}
            publish_date="24.12.2022"
            title="Develocity Blog"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem eu turpis feugiat semper."
            tags={["Blockchain", "Updates", "Crypto"]}
          />
          <BlogCard
            thumbnail={ThumbnailPlaceholder}
            publish_date="24.12.2022"
            title="Develocity Blog"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem eu turpis feugiat semper."
            tags={["Blockchain", "Updates", "Crypto"]}
          />
          <BlogCard
            thumbnail={ThumbnailPlaceholder}
            publish_date="24.12.2022"
            title="Develocity Blog"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem eu turpis feugiat semper."
            tags={["Blockchain", "Updates", "Crypto"]}
          />
          <BlogCard
            thumbnail={ThumbnailPlaceholder}
            publish_date="24.12.2022"
            title="Develocity Blog"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem eu turpis feugiat semper."
            tags={["Blockchain", "Updates", "Crypto"]}
          />
          <BlogCard
            thumbnail={ThumbnailPlaceholder}
            publish_date="24.12.2022"
            title="Develocity Blog"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem eu turpis feugiat semper."
            tags={["Blockchain", "Updates", "Crypto"]}
          />
          <BlogCard
            thumbnail={ThumbnailPlaceholder}
            publish_date="24.12.2022"
            title="Develocity Blog"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem eu turpis feugiat semper."
            tags={["Blockchain", "Updates", "Crypto"]}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
