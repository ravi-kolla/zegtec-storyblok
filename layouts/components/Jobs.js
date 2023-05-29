import { storyblokEditable } from "@storyblok/react";
import JobPost from "./JobPost";

const Jobs = ({blok}) => {

    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-6 flex-col">
        <div class="w-1/3 relative flex flex-col jus  overflow-hidden bg-gray-50 p-6 sm:py-12">
          {blok.post.map((item) => (
            <JobPost key={item.title} post={item}/>
          ))}
          </div>
        </div>
      </section>
    );
  };

export default Jobs;
