import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getBlogPostBySlug } from '../../lib/useStoryblok'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { renderRichText, getStoryblokApi } from "@storyblok/react";
import Base from "@layouts/Baseof";
import config from "@config/config.json";


export default function BlogPost() {
  const [blogPost, setBlogPost] = useState(null)
  const router = useRouter()
  const { slug } = router.query
  const storyblokApi = getStoryblokApi();

  useEffect(() => {
    async function fetchBlogPost() {
        const { data } = await storyblokApi.get(`cdn/stories/blog-posts/${slug}`, {
            version: 'draft',
          })
          const post = data.story
          setBlogPost(post)
    }

    if (slug) {
      fetchBlogPost()
      console.log(blogPost);
    }
  }, [slug])

  if (!blogPost) {
    return (
        <Base>
            <section className="section blog-post">
                <div className="text-center">Loading...</div>
            </section>
        </Base>
    )
  }
  const { title } = config.site;
  return (
    <Base title={title}>
    <section class="section blog-post">
        <div class="container">
        <h1>{blogPost.content.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {blogPost.content.content}
        </ReactMarkdown>
    </div>
    </section>
    </Base>

  )
}
