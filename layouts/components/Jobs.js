import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";
import JobPost from "./JobPost";
import { render } from 'storyblok-rich-text-react-renderer';

const Jobs = ({blok}) => {

    const [jobDetails, setJobDetails] = useState(blok?.post[0]);
    const [jobSelected, setJobSelected] = useState(blok?.post[0].title);

    const showDetails = (post) => {
        setJobSelected(post.title);
        setJobDetails(post);
    };

    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto md:flex px-5 py-6 flex-row">
          <div className="w-full md:w-1/3 relative flex flex-col overflow-hidden bg-gray-50 p-6 sm:py-12">
          {blok.post.map((item) => (
            <JobPost key={item.title} post={item} showDetails={showDetails} jobSelected={item.title == jobSelected ? true : false } />
          ))}
          </div>
          <div className="w-full md:w-2/3 relative flex flex-col jus  overflow-hidden bg-gray-50 p-6 sm:py-12">
          { jobDetails && <div id={jobDetails.jobId} className="bg-white p-4">
            <div className="row">
                <div className="col-md-12  ">
                    <h4 className="position-title">{jobDetails.title}</h4>
                </div>
            </div>
            <div className="row   ">
                <div className="col-md-12  ">
                    <p>
                        <span>{jobDetails.location}</span>
                    </p>
                </div>
            </div>
            <hr />
            <div className="row   ">
                <div className="col-md-12  ">
                    <div>
                    <div className="row pt-5">
                        <div className="col-md-12  ">
                            <h5>Job Description</h5>
                        </div>
                    </div>
                    <div className="row text-left pt-2">
                        {render(jobDetails.description)}
                    </div>
                    </div>
                </div>
            </div>
          </div> }
          </div>
        </div>
      </section>
    );
  };

export default Jobs;
