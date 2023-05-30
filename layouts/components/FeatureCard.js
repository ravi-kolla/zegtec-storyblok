import { storyblokEditable } from "@storyblok/react";

const FeatureCard = ({ blok }) => (
  <div
  className="feature-card rounded-xl lilac-bg p-5 pb-8 text-center"
  {...storyblokEditable(blok)}>

  {blok.icon && (
    <p>
      <i className={`fa fa-lg ink ${blok.icon}`}></i>
    </p>
  )}
  <div className="mt-4">
    <h3 class="h5 ink">{blok.header}</h3>
    <p className="mt-3 ink">{blok.description}</p>
  </div>
</div>
);

export default FeatureCard;
