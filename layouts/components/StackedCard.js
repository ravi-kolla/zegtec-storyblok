import { storyblokEditable } from "@storyblok/react";

const StackedCard = ({ blok }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg" {...storyblokEditable(blok)}>
  <img className="w-full" src={blok.image.filename} alt="Sunset in the mountains" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{blok.title}</div>
    <p className="text-gray-700 text-base">
    {blok.description}
    </p>
    </div>
    <div className="px-6 pt-4 pb-2">
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full">
    Button
    </button>
  </div>
</div>
);

export default StackedCard;
