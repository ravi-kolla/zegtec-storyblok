import { storyblokEditable } from "@storyblok/react";

const Video = ({ blok }) => (
    <div aria-label="Background Image" className="relative mb-2 video-container-height" id="image-video" role="img" {...storyblokEditable(blok)}>
    <div className="video-docker bottom-0 left-0 w-full h-full overflow-hidden">
    <video autoPlay="autoPlay" id="bgvid" loop="loop" muted={true} playsInline="inline">
        <source data-src={blok.video.filename} type="video/mp4" src={blok.video.filename} />
    </video>
    </div>
    <div className="overlayText">
        <h1>{blok.title}</h1>
        <div className="scroll-left">
            <p>{blok.description}</p>
        </div>
    </div>
    </div>
)

export default Video;
