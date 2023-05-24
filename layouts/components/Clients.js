import { storyblokEditable } from "@storyblok/react";

const Clients = ({ blok }) => (
    <div className="clients mx-auto max-w-7xl px-8" {...storyblokEditable(blok)}>
        <h2 className="leading-8 font-semibold text-lg text-center">{blok.title}</h2>
        <div className="clients-img-container">
        {blok.logoList.map((item) => (
            <img className="clients-img" src={item.img.filename} alt="client" width="158" height="48" />
        ))}
        </div>
    </div>
);

export default Clients;
