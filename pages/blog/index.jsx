import BlogCard from "../../components/Blog/BlogCard";
import ThumbnailPlaceholder from "../../public/assets/images/thumbnail-placeholder.png";
import StaticPageHeader from "../../shared/Components/StaticPageHeader";
import { useState, useEffect } from "react";
import { globalInstance } from "../../api/constant";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestArticles = await globalInstance.get("/articles");
      const { articles } = requestArticles.data.data;
      console.log(articles);
      setData(articles);
      /*  try {
        const response = await fetch(url, {
          headers: {
            app_api_key:
              "CwIX5kPsfTrlDHQZxK3yW6SlNPqjA8StUhZ0xeEV6dDw0kgOmwxS2pnxLN1FBPZL",
            lang: language,
          },
        });
        const json = await response.json();
        console.log(json);
        setData(json.data.articles);
      } catch (error) {
        console.log("error", error);
      }*/
    };

    fetchData();
  }, []);
  return (
    <>
      <StaticPageHeader
        summary="Develocity Blog"
        title="Company news and updates"
        description="Our office is located in UAE, Dubai"
      />
      <section className="container mx-auto max-w-[1216px]">
        <div className="grid grid-cols-1 my-24 gap-10 px-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-16 xl:gap-x-8 xl:px-0">
          {data.length > 0 &&
            data.map(item => {
              return (
                <BlogCard
                  key={item.id}
                  slug={item.slug}
                  thumbnail={item.image}
                  publish_date={item.date}
                  title={item.title}
                  summary={item.desc}
                  tags={item.tags}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Blog;
