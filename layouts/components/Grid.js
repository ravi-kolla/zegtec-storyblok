import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <div className={`mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-${blok.columnsSmall} md:grid-cols-${blok.columnsMedium} lg:grid-cols-${blok.columnsLarge}`} {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
