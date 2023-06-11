import { useEffect, useState } from 'react'
import { getBlogPosts } from '../../lib/useStoryblok'
import Base from "@layouts/Baseof";
import config from "@config/config.json";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    async function fetchBlogPosts() {
      const posts = await getBlogPosts()
      setBlogPosts(posts)
    }

    fetchBlogPosts(blogPosts);
    console.log(blogPosts);
  }, [])
  const { title } = config.site;

  return (
    <Base title={title}>
        <section class="section">
            <div class="container">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                {blogPosts.map((post) => (
                    <div key={post.slug}>
                    {/* Render other fields of the blog post */}
                    <article className="max-w-xs">
                        <a href={`blog/${post.slug}`}>
                            <img src={post.content.image.filename} class="mb-5 rounded-lg" alt="Image 1" />
                        </a>
                        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                            <a href={`blog/${post.slug}`}>{post.content.title}</a>
                        </h2>
                        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{post.content.highlights}</p>
                    </article>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </Base>
  )
}