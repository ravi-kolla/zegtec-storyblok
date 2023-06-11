import { getStoryblokApi } from "@storyblok/react";

const storyblokApi = getStoryblokApi();

export async function getBlogPosts() {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'blog-posts/',
  })

  return data.stories
}

export async function getBlogPostBySlug(slug) {
    const { data } = await storyblokApi.get(`cdn/stories/blog-posts/${slug}`, {
      version: 'draft',
    })
  
    return data.story
  }