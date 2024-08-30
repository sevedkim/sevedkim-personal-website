import Link from 'next/link'

export default function Writing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Home
          </Link>
          <h1 className="text-xl font-semibold">Writing</h1>
        </header>

        <main className="space-y-12 py-8">
          <section>
            <h2 className="text-gray-500 mb-4">2023</h2>
            <ul className="space-y-4">
              {[
                { date: '12.10', title: 'Execution is cheap, ideas are everything', href: '/writing/execution' },
                { date: '11.16', title: 'Tinkering', href: '/writing/tinkering' },
                { date: '10.18', title: 'Favorite Books', href: '/writing/favorite-books' },
                { date: '09.18', title: 'Joy Log', href: '/writing/joy' },
                { date: '07.29', title: 'My Personal Manifesto', href: '/writing/manifesto' },
                { date: '06.07', title: 'What is a "Platform"?', href: '/writing/platform' },
              ].map((post, index) => (
                <li key={index} className="flex">
                  <span className="text-gray-500 mr-4">{post.date}</span>
                  <Link href={post.href} className="text-gray-400 hover:text-turquoise">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-gray-500 mb-4">2021</h2>
            <ul className="space-y-4">
              {[
                { date: '06.05', title: 'Plan for No Plans', href: '/writing/plan' },
                { date: '06.16', title: 'Products & Platforms', href: '/writing/products-platforms' },
                { date: '05.31', title: 'A Picture\'s Worth a 1,000 Docs', href: '/writing/1000-words' },
                { date: '04.21', title: 'Less Consumption, More Creation', href: '/writing/less-consumption' },
              ].map((post, index) => (
                <li key={index} className="flex">
                  <span className="text-gray-500 mr-4">{post.date}</span>
                  <Link href={post.href} className="text-gray-400 hover:text-turquoise">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-gray-500 mb-4">2020</h2>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-gray-500 mr-4">04.30</span>
                <Link href="/writing/grape-growing" className="text-gray-400 hover:text-turquoise">
                  Grape Growing
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}