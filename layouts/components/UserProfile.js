import { storyblokEditable } from "@storyblok/react";

const UserProfile = ({ blok }) => (
    <div class="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5" {...storyblokEditable(blok)}>
        <img class="w-32 h-32 rounded-full mx-auto" src={blok.profileImage.filename} alt="Profile picture" />
        <h2 class="text-center text-2xl font-semibold mt-3">{blok.name}</h2>
        <p class="text-center text-gray-600 mt-1">{blok.title}</p>
        {blok.socialLinks && <div class="flex justify-center mt-5">
        {blok.socialLinks.map((item)  => (
        <a href={item.link.url} class="text-blue-500 hover:text-blue-700 mx-3">{item.link.title}</a>
        ))}
        </div>}
        <div class="mt-5">
        <p class="text-gray-600 mt-2">{blok.description}</p>
        </div>
    </div>
);

export default UserProfile;
