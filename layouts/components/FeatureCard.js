import { storyblokEditable } from "@storyblok/react";

const FeatureCard = ({ blok }) => (
  <div
  className="feature-card rounded-xl bg-white p-5 pb-8 text-center"
  {...storyblokEditable(blok)}>

  {blok.icon && (
    <p>{blok.icon}</p>
  )}
  <div className="mt-4">
    <h3 class="h5">{blok.header}</h3>
    <p className="mt-3">{blok.description}</p>
  </div>
</div>
);

export default FeatureCard;
