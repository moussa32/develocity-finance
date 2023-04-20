import StaticPageHeader from "../../shared/Components/StaticPageHeader";
import Tag from "../../components/Blog/Tag";
import CopyIcon from "@/images/CopyIcon.png";
import TwitterIcon from "@/images/TwitterIcon.svg";
import FacebookIcon from "@/images/FacebookIcon.svg";
import LinkedInIcon from "@/images/LinkedInIcon.svg";
import Image from "next/image";
import { globalInstance } from "../../api/constant";
import parse, { attributesToProps } from "html-react-parser";
import usePostURL from "@/store/dynamicBlogPost";
import { useEffect } from "react";

const stylingBlogDetails = {
  replace: domNode => {
    if (domNode.attribs && domNode.name === "h2") {
      const props = attributesToProps(domNode.attribs);
      return (
        <h2 className="text-[#101828] text-xl md:text-2xl lg:text-3xl font-semibold" {...props}>
          {domNode?.nodeValue}
        </h2>
      );
    }
    if (domNode.attribs && domNode.name === "p") {
      const props = attributesToProps(domNode.attribs);
      return (
        <p className="mt-6 mb-8" {...props}>
          {domNode?.children[0].data}
        </p>
      );
    }
    if (domNode.attribs && domNode.name === "blockquote") {
      return (
        <section className="border-l-2 border-indigo-500 my-8 px-6 font-medium">
          <blockquote className="text-lg md:text-2xl">“{domNode.nodeValue}”</blockquote>
          <span className="block mt-4">— Steve Jobs, Apple CEO</span>
        </section>
      );
    }
  },
};

const BlogDetails = ({ desc, title, image, tags, date, slugs }) => {
  const { setPostSlugs } = usePostURL(state => state);

  useEffect(() => {
    setPostSlugs(slugs);
  }, [setPostSlugs, slugs]);

  return (
    <>
      <div className="relative">
        <StaticPageHeader
          summary={date && `Published on ${date}`}
          titleClassNames="max-w-[728px] mb-8"
          headerClassNames="h-[400px] lg:h-[655px]"
          title={title}
          footer={
            <>
              {tags && (
                <div className="flex gap-2">
                  {tags.map((tag, index) => (
                    <Tag name={tag} key={`${tag}${index}`} />
                  ))}
                </div>
              )}
            </>
          }
        />
        <article className="container px-6 mx-auto relative min-w-full mb-24 pt-16 md:pt-56 lg:px-0 lg:pt-[372px]">
          <Image
            className="hidden w-4/5 inset-x-0 absolute top-[-90px] md:block lg:max-w-[1008px] lg:top-[-160px] mx-auto z-10 max-h-[516px] object-contain rounded-xl"
            src={image}
            width={1008}
            height={516}
            alt={title}
            title={title}
          />
          <div className="md:w-4/5 lg:max-w-[800px] mx-auto mt-8 md:mt-16 text-[#667085] font-medium text-base">
            {desc && parse(desc, stylingBlogDetails)}
            {/* <h2 className="text-[#101828] text-xl md:text-2xl lg:text-3xl font-semibold">First title in blog post</h2>
            <p className="mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis vitae lectus nec ornare.
              Pellentesque nibh eros, accumsan id imperdiet quis, porta eu ante. Curabitur lobortis nisl et neque
              consectetur dictum. Donec vulputate purus ac augue bibendum, vitae dapibus urna ornare. In pharetra id
              orci et viverra. Ut consequat lorem eu turpis feugiat semper. Suspendisse semper lorem eros, ac pharetra
              nunc semper ut. Nulla leo orci, mollis euismod tincidunt in, porttitor in leo.
            </p> */}
            {/* <figure className="relative">
              <Image src="/assets/images/BlogDetailsPlaceholder.png" fill alt={title} />

              <figcaption className="text-sm text[#667085] mt-4 font-normal">
                Image courtesy of Mamuka Kavtelishvili via <span className="underline">Adobe Stock</span>
              </figcaption>
            </figure> */}
            {/* <section className="border-l-2 border-indigo-500 my-8 px-6 font-medium">
              <blockquote className="text-lg md:text-2xl">
                “You can’t connect the dots looking forward; you can only
                connect them looking backwards. So you have to trust that the
                dots will somehow connect in your future.”
              </blockquote>
              <span className="block mt-4">— Steve Jobs, Apple CEO</span>
            </section>
            <p className="my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              venenatis vitae lectus nec ornare. Pellentesque nibh eros,
              accumsan id imperdiet quis, porta eu ante. Curabitur lobortis nisl
              et neque consectetur dictum. Donec vulputate purus ac augue
              bibendum, vitae dapibus urna ornare. In pharetra id orci et
              viverra. Ut consequat lorem eu turpis feugiat semper. Suspendisse
              semper lorem eros, ac pharetra nunc semper ut. Nulla leo orci,
              mollis euismod tincidunt in, porttitor in leo. Nunc urna augue,
              scelerisque quis metus malesuada, suscipit ornare enim. Curabitur
              maximus accumsan neque eget vehicula. Praesent at quam egestas,
              aliquet libero ut, malesuada dolor. Integer a nisl ex. Sed
              ultricies tristique dictum. Sed consequat eleifend augue eget
              venenatis.
            </p>
            <p className="my-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Etiam ut nisl nulla. Phasellus vel
              consectetur velit, id commodo libero. Phasellus nec tortor justo.
              Fusce finibus feugiat lacus quis euismod. Nam augue diam,
              hendrerit at arcu at, tristique ullamcorper est. Proin sagittis,
              justo sed vestibulum porta, tortor nunc sagittis ligula, hendrerit
              semper justo nisi id turpis. Integer elementum, quam non vehicula
              cursus, libero odio viverra nibh, nec tincidunt est metus vel
              urna. Etiam at accumsan massa. Curabitur in tellus et ligula
              varius porta. Etiam pulvinar, ligula non placerat suscipit, urna
              diam consectetur dolor, nec commodo lacus ipsum ac ligula. Aliquam
              varius pulvinar efficitur. Donec dignissim vehicula sagittis.
              Mauris facilisis justo in ex placerat elementum.
            </p>
            <p className="my-6">
              Ut et bibendum justo. Sed efficitur augue non venenatis pretium.
              Suspendisse ac nulla congue, lobortis tellus a, iaculis velit.
              Maecenas auctor, lorem vel sagittis vestibulum, eros est placerat
              libero, dignissim hendrerit nibh sem id nulla. Suspendisse
              hendrerit finibus dolor, sed molestie dui faucibus vel. Ut justo
              ante, euismod quis auctor eu, semper a ipsum. Phasellus et
              eleifend nisi.
            </p>
            <p className="mt-8">
              Nulla sed aliquam massa, ac tempus erat. Donec diam ex, feugiat et
              orci ac, dictum dictum lacus. Fusce rutrum velit sed massa congue,
              nec gravida quam semper. Proin congue ultricies varius. Donec in
              lorem finibus, faucibus purus et, feugiat justo. Suspendisse eget
              tempus nunc. Vivamus egestas nulla nulla, vitae semper dolor
              dapibus eu. Mauris et lobortis velit. Donec in ipsum sit amet
              neque aliquet convallis quis vitae nulla.
            </p> */}
            <hr className="mt-12 bg-[#EAECF0]" />
            <div className="flex flex-wrap flex-col xs:flex-row xs:justify-end gap-3 mt-6">
              <button className="relative flex gap-2 items-center h-[39px] text-sm font-medium rounded-sm border-[#D0D5DD] border-[1px] px-4 py-2.5 text-[#344054]">
                <Image src={CopyIcon.src} width={20} height={20} alt="copy" title="copy" />
                Copy link
              </button>
              <a
                href="https://www.twitter.com"
                className="flex items-center justify-center rounded-sm xs:w-[39px] h-[39px] border-[#D0D5DD] border-[1px]"
              >
                <Image src={TwitterIcon} alt="twitter" title="twitter" />
              </a>
              <a
                href="https://www.twitter.com"
                className="flex items-center justify-center rounded-sm xs:w-[39px] h-[39px] border-[#D0D5DD] border-[1px]"
              >
                <Image src={FacebookIcon} alt="facebook" title="facebook" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="flex items-center justify-center rounded-sm xs:w-[39px] h-[39px] border-[#D0D5DD] border-[1px]"
              >
                <Image src={LinkedInIcon} alt="linkedin" title="linkedin" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const requestArticles = await globalInstance.get("/articles");
  const { articles } = [];

  //Loop through articles slugs which it two dimencation array to return array of article's pathname with locale
  const paths = [];
  // articles
  //   .map(article =>
  //     article.slugs.map(slugObject => ({
  //       params: { slug: slugObject.slug },
  //       locale: slugObject.locale,
  //     }))
  //   )
  //   .flat();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params, locale } = context;
  const { slug } = params;
  const requestArticleDetails = await globalInstance.get(`/articles/${slug}`, {
    headers: {
      lang: locale,
    },
  });
  const { article } = await requestArticleDetails.data.data;

  return {
    props: { ...article },
  };
}

export default BlogDetails;
