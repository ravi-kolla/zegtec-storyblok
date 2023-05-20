
 
const BlogPost = ({ blok }) => {
    console.log(blok);
  return (
    <section className="text-gray-600 body-font" {...storyblokEditable(blok)}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="  md:h-96 w-full mb-10 object-cover object-center rounded"
          alt="test from component"
          src={blok.image.filename}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blok.title}
          </h1>
          <div className="mb-8 leading-relaxed text-justify">{blok.content}</div>
        </div>
      </div>
    </section>
  );
};
export default BlogPost;