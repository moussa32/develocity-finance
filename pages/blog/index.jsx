import BlogCard from "../../components/Blog/BlogCard";
import ThumbnailPlaceholder from "../../public/assets/images/thumbnail-placeholder.png";
import StaticPageHeader from "../../shared/Components/StaticPageHeader";
import { useState, useEffect, useCallback } from "react";
import { globalInstance } from "../../api/constant";
import { useRouter } from "next/router";
import useTranslation from "@/shared/Hooks/useTranslation";
import { getSlugByLanguage } from "@/shared/Util/languagesUtils";

const Blog = () => {
  const [data, setData] = useState([]);
  const { locale } = useRouter();
  const { t, errors } = useTranslation("blog");

  const getCurrentSlug = useCallback(slugs => getSlugByLanguage(slugs, locale), [locale]);

  useEffect(() => {
    const fetchData = async () => {
      // const requestArticles = await globalInstance.get("/articles", {
      //   headers: {
      //     lang: locale,
      //   },
      // });
      // const { articles } = requestArticles.data.data;
      const articles = [];
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
  }, [locale]);

  return (
    <>
      <StaticPageHeader summary={t?.blogPage.header} title={t?.blogPage.mainText} description={t?.blogPage.subText} />
      <section className="container mx-auto max-w-[1216px]">
        <div className="grid grid-cols-1 my-24 gap-10 px-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-y-16 xl:gap-x-8 xl:px-0">
          {data.length > 0 &&
            data.map(item => {
              console.log(data);
              return (
                <BlogCard
                  key={item.id}
                  slug={getCurrentSlug(item.slugs)}
                  thumbnail={item.image}
                  publish_date={item.date}
                  title={item.title}
                  summary={item.summary}
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
