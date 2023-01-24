const BlogCard = ({ id, thumbnail, publish_date, title, summary, tags }) => {
  return (
    <article className="mx-auto w-full xl:w-[384px]">
      <img src={thumbnail} alt={title} title={title} className="object-cover w-full h-[240px] rounded-lg" />
      <div className="mt-6">
        <time className="text-indigo-500 text-sm font-medium">{publish_date}</time>
        <h2 className="font-semibold text-[#101828] text-2xl mt-2 mb-3">{title}</h2>
        <p className="text-[#667085]">{summary}</p>
        {tags && (
          <footer className="flex items-center flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <span
                key={`${tag}${index}`}
                className="text-sm font-medium bg-[#F8F9FC] text-[#363F72] rounded-lg px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </footer>
        )}
      </div>
    </article>
  );
};

export default BlogCard;
