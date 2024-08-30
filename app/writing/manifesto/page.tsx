import Link from 'next/link'

export default function MyPersonalManifesto() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">My Personal Manifesto</h1>
          <time className="text-sm text-gray-400 mb-8 block">July 29, 2023</time>

          <article className="space-y-4 text-gray-300">
            <h2 className="text-xl font-semibold">Kindness over nice</h2>
            <p>Being nice doesn't mean being kind. Being nice makes people feel good today, but being kind makes people be better tomorrow.</p>

            <h2 className="text-xl font-semibold mt-6">Be crystal clear with your needs & boundaries</h2>
            <p>No one can read your mind. Don't leave anything up for assumptions. If you don't state your needs clearly, your needs will not be met. If you don't set clear boundaries, someone else will set them for you.</p>

            <h2 className="text-xl font-semibold mt-6">No one's coming to save you. Save yourself</h2>
            <p>Your success and failure, joy and pain, are no one's responsibility but your own. Take ownership over your life, otherwise you'll wait a lifetime for someone else to.</p>

            <h2 className="text-xl font-semibold mt-6">Start with the end and work backwards</h2>
            <p>A goal is an end state. Work backwards from the end and it will be easier to make progress.</p>

            <h2 className="text-xl font-semibold mt-6">Be present</h2>
            <p>Ground your mind and body into this very moment. Time and energy are wasted unless it's fully focused on what's happening right now.</p>

            <h2 className="text-xl font-semibold mt-6">Take the path of most curiosity</h2>
            <p>The best paths I've taken have been the ones that are driven by my intrinsic motivation.</p>

            <h2 className="text-xl font-semibold mt-6">Teach others how to fish by fishing with them</h2>
            <p>Empowerment of others comes not only from describing how, but showing up and being there with them.</p>

            <h2 className="text-xl font-semibold mt-6">Here for a good, long time</h2>
            <p>You can have both a good time and a long time. Make sure your decisions today consider both.</p>

            <h2 className="text-xl font-semibold mt-6">Make space for feelings</h2>
            <p>There's always a place for reason and logic, but that does not negate how we're feeling.</p>

            <h2 className="text-xl font-semibold mt-6">Success favors consistency</h2>
            <p>Small behaviors invested thousands of times results in unimaginable return.</p>

            <h2 className="text-xl font-semibold mt-6">Fly your own flag</h2>
            <p>Thinking critically for yourself will sometimes yield a contrarian, non-conforming perspective. It is better to be free and against the current than be a blind sheep following the crowd.</p>
          </article>
        </main>
      </div>
    </div>
  )
}