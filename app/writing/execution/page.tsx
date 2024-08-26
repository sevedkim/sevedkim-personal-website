import Link from 'next/link'

export default function ExecutionIsCheap() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">Execution is cheap, ideas are everything</h1>
          <time className="text-sm text-gray-400 mb-8 block">December 10, 2023</time>

          <article className="space-y-4 text-gray-300">
            <p>There's a popular saying that "ideas are cheap, execution is everything."</p>

            <p>It's a common belief today that in order to make change in the world, dreams are not enough. For businesses, one must write the code, create the content, and market the product. In order for an idea to manifest, one must either acquire the skills and execute or pay the expensive labor to get the job done. However, execution is becoming more accessible and cheaper.</p>

            <p>As Marc Andreesen put it, software is eating the world. SaaS is enabling more ways to sell, reach, and create on the internet. Platforms like YouTube and TikTok allow anyone with a phone to create content and start a following. Shopify and Stripe bootstrap anyone to build an e-commerce store. Now with the emergence of generative AI, GitHub Copilot helps create code and Midjourney with the creation of visuals.</p>

            <p>We are moving closer to evening out the playing field.</p>

            <p>With a snap of the fingers, any idea can be brought into existence. Tools and infrastructure are making it so that anyone with an idea can create change with little to no cost. The barriers to entry are lowering. The next wave of innovators will be ones that leverage their ideas through creativity and taste.</p>

            <p>A common misconception is that creativity is the same as creation. While AI tools contribute to the ongoing process of idea generation, it is the individual who must initiate a prompt. Because AI tools cannot inherently seed an idea, creativity remains a critical factor in execution of creating.</p>

            <p>While taking some form of action will always be the linchpin to success, it will be the big dreamers that make the biggest dent in the universe.</p>
          </article>
        </main>
      </div>

      
    </div>
  )
}
