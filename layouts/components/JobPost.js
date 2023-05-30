import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";

const JobPost = ({ post, jobSelected, showDetails }) => {

    const handleClick = () => {
        showDetails(post);
    };

    return (
        <>  
            <div className={`job-post bg-white shadow-xl shadow-gray-100 flex flex-col sm:flex-row gap-3 justify-between px-5 py-4 rounded-md mb-2 ${jobSelected? "job-selected" : ""}`} role="button" onClick={() => handleClick()}>
                <div className="text-left">
                    <p className="ink text-sm">{post?.category}</p>
                    <h5 className="font-bold mt-px">{post?.title}</h5>
                    <div className="flex items-center gap-3 mt-2">
                        <span className="lemon-bg ink rounded-full px-3 py-1 text-sm">{post?.jobType}</span>
                        <span className="text-slate-600 text-sm flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
