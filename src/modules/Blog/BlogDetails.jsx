import StaticPageHeader from "../../shared/Static/StaticPageHeader";
import Tag from "./Tag";
import BlogDetailsPlaceholder from "../../assets/images/BlogDetailsPlaceholder.png";
import CopyIcon from "../../assets/images/CopyIcon.png";
import { ReactComponent as TwitterIcon } from "../../assets/images/TwitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/images/FacebookIcon.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/images/LinkedInIcon.svg";

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
        <article className="container px-6 mx-auto relative min-w-full mb-24 pt-16 md:pt-56 lg:px-0 lg:pt-[372px]">
          <img
            className="hidden w-4/5 inset-x-0 absolute top-[-90px] md:block lg:max-w-[1008px] lg:top-[-160px] mx-auto z-10 max-h-[516px] object-contain rounded-xl"
            src={BlogDetailsPlaceholder}
            alt={title}
            title={title}
          />
          <div className="md:w-4/5 lg:max-w-[800px] mx-auto mt-8 md:mt-16 text-[#667085] font-medium text-base">
            <h2 className="text-[#101828] text-xl md:text-2xl lg:text-3xl font-semibold">
              First title in blog post
            </h2>
            <p className="mt-6 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              venenatis vitae lectus nec ornare. Pellentesque nibh eros,
              accumsan id imperdiet quis, porta eu ante. Curabitur lobortis nisl
              et neque consectetur dictum. Donec vulputate purus ac augue
              bibendum, vitae dapibus urna ornare. In pharetra id orci et
              viverra. Ut consequat lorem eu turpis feugiat semper. Suspendisse
              semper lorem eros, ac pharetra nunc semper ut. Nulla leo orci,
              mollis euismod tincidunt in, porttitor in leo.
            </p>
            <figure>
              <img src={BlogDetailsPlaceholder} alt={title} />

              <figcaption className="text-sm text[#667085] mt-4 font-normal">
                Image courtesy of Mamuka Kavtelishvili via{" "}
                <span className="underline">Adobe Stock</span>
              </figcaption>
            </figure>
            <section className="border-l-2 border-indigo-500 my-8 px-6 font-medium">
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
            </p>
            <hr className="mt-12 bg-[#EAECF0]" />
            <div className="flex flex-wrap flex-col xs:flex-row xs:justify-end gap-3 mt-6">
              <button className="flex gap-2 items-center h-[39px] text-sm font-medium rounded-sm border-[#D0D5DD] border-[1px] px-4 py-2.5 text-[#344054]">
                <img src={CopyIcon} alt="copy" title="copy" />
                Copy link
              </button>
              <a
                href="https://www.twitter.com"
                className="flex items-center justify-center rounded-sm xs:w-[39px] h-[39px] border-[#D0D5DD] border-[1px]"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.twitter.com"
                className="flex items-center justify-center rounded-sm xs:w-[39px] h-[39px] border-[#D0D5DD] border-[1px]"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com"
                className="flex items-center justify-center rounded-sm xs:w-[39px] h-[39px] border-[#D0D5DD] border-[1px]"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default BlogDetails;
