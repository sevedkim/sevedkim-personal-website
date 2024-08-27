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
                { date: '12.10', title: 'Execution is cheap, ideas are everything' },
                { date: '11.16', title: 'Tinkering' },
                { date: '10.18', title: 'Favorite Books' },
                { date: '09.18', title: 'Joy Log' },
                { date: '07.29', title: 'My Personal Manifesto' },
                { date: '06.07', title: 'What is a "Platform"?' },
              ].map((post, index) => (
                <li key={index} className="flex">
                  <span className="text-gray-500 mr-4">{post.date}</span>
                  <Link href="/writing/execution" className="text-gray-400 hover:text-turquoise">
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
                { date: '06.05', title: 'Plan for No Plans' },
                { date: '06.16', title: 'Products & Platforms' },
                { date: '05.31', title: 'A Picture\'s Worth a 1,000 Docs' },
                { date: '04.21', title: 'Less Consumption, More Creation' },
              ].map((post, index) => (
                <li key={index} className="flex">
                  <span className="text-gray-500 mr-4">{post.date}</span>
                  <span className="text-gray-400">{post.title}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-gray-500 mb-4">2020</h2>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-gray-500 mr-4">04.30</span>
                <span className="text-gray-400">Grape Growing</span>
              </li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}