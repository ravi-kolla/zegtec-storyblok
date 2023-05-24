import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Section = ({ blok }) => {
  return (
    <section class="section" style={{backgroundColor: blok.backgroundColor}}  {...storyblokEditable(blok)}>
        <div class="container">
        {blok.elements.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        </div>
    </section>
  );
};

export default Section;
