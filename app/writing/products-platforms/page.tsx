import Link from 'next/link'

export default function ProductsPlatforms() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">What's the Difference Between Digital Products & Platforms?</h1>
          <time className="text-sm text-gray-400 mb-8 block">June 16, 2021</time>

          <article className="space-y-4 text-gray-300">
            <p>Just as we think differently of how we grow grapes and how we make wine, digital products and platforms yield value in different ways.</p>

            <p>The way in which we think about digital products and platforms can impact the way we manage and prioritize them. Referring to products as "front-end" and platforms as "back-end" might be true but it doesn't explain the value each has on its own. Understanding the differences will enable you to leverage each of them appropriately.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Digital products provide experiences, platforms provide capabilities</h2>
            <p>Experiences are composed of capabilities.</p>

            <p>An airline provides its passengers the experience of traveling to and from a destination through different experiences and touch-points. Those experiences are comprised of the capability to search for flights, book, and check-in. Digital products are the touch-points between end-consumers and the business. They provide value by facilitating interaction, engagement, and a combination of our capabilities. Platforms are the underlying set of services & assets that provide one or more capabilities.</p>

            <p>Understanding your opportunities for product experiences can help inform the highest impact platform capabilities you need.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Digital products serve D2C, platforms serve B2B</h2>
            <p>Especially in the digital age, organizations must provide different channels to reach and engage different users.</p>

            <p>The experiences provided by digital products are primarily direct to consumer (D2C). Platforms have the responsibility of being interoperable not only with other internal platforms but also interface with the array of digital products and potentially external partners. The teams surrounding products or platforms have to keep this in mind as they should operate in alignment with those business models.</p>

            <p>Considering which type of market you want to focus on, it helps to know the trade-offs that come with prioritizing products or platforms.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Digital products are streamlined, platforms are extensible</h2>
            <p>You can be generic or specific but it's difficult to both at the same time.</p>

            <p>A company that focuses on fast food delivery will function quite differently than a company that provides delivery & shipping management. A great set of platform capabilities can enable a broad set of experiences but doesn't solve any specific experience deeply. The inverse is true for product experiences that solve a specific problem but will have difficulties abstracting their capabilities for adjacent use cases.</p>

            <p>Balancing both are critical and will depend on the maturity of your portfolio.</p>

            <p>Just as we think differently of how we grow grapes and how we make wine, digital products and platforms yield value in different ways.</p>
          </article>
        </main>
      </div>
    </div>
  )
}