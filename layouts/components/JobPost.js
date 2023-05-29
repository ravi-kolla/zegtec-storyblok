import { storyblokEditable } from "@storyblok/react";

const JobPost = ({ post }) => {

    const handleClick = (e) => {
        console.log("job post clicked");
    }

    return (
        <>
            <div class="bg-white  shadow-xl shadow-gray-100 flex flex-col sm:flex-row gap-3 justify-between px-5 py-4 rounded-md mb-2" onClick={() => handleClick()}>
                <div class="text-left">
                    <p class="text-purple-800 text-sm">{post?.category}</p>
                    <h5 class="font-bold mt-px">{post?.title}</h5>
                    <div class="flex items-center gap-3 mt-2">
                        <span class="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">{post?.jobType}</span>
                        <span class="text-slate-600 text-sm flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {post?.location}
                        </span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </>
        );
};

export default JobPost;
