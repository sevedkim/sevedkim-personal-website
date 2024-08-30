import Link from 'next/link'

interface BlogPost {
  title: string;
  date: string;
  content: string;
}

// This function would be replaced with actual data fetching logic
async function getBlogPost(slug: string): Promise<BlogPost> {
  // Placeholder implementation
  return {
    title: "Blog Post Title",
    date: "YYYY.MM.DD",
    content: "Blog post content goes here..."
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <time className="text-sm text-gray-400 mb-8 block">{post.date}</time>

          <article className="space-y-4 text-gray-300">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>
        </main>
      </div>
    </div>
  )
}