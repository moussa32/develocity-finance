import { Link } from "react-router-dom";
import Tag from "./Tag";

const BlogCard = ({ id = 1, thumbnail, publish_date, title, summary, tags }) => {
  return (
    <Link
      to={`/blog/${id}`}
      className="mx-auto w-full xl:w-[384px] transition-all ease-in-out duration-300 hover:shadow-md p-4"
    >
      <img src={thumbnail} alt={title} title={title} className="object-cover w-full h-[240px] rounded-lg" />
      <div className="mt-6">
        <time className="text-indigo-500 text-sm font-medium">{publish_date}</time>
        <h2 className="font-semibold text-[#101828] text-2xl mt-2 mb-3">{title}</h2>
        <p className="text-[#667085]">{summary}</p>
        {tags && (
          <footer className="flex items-center flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Tag name={tag} key={`${tag}${index}`} />
            ))}
          </footer>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
