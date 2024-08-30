import Link from 'next/link'

export default function APicturesWorth1000Docs() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">A Picture's Worth a 1,000 Docs</h1>
          <time className="text-sm text-gray-400 mb-8 block">May 31, 2021</time>

          <article className="space-y-4 text-gray-300">
            <p>Documentation will be the death of me.</p>

            <p>I've found that working in software, I have to take a systems-thinking approach to a lot of my design and planning work. There are so many different components, systems, and teams that need to be considered. As I meet with different people discussing different perspectives, my Google Drive proliferates with the one-off documents that probably never get touched again.</p>

            <p>The pandemic has forced us to lose access to a very important communication device, the whiteboard.</p>

            <p>Although we're seeing more virtual whiteboarding tools come out, teams have taken to opening notes in google docs, emails, and other written language in order to retain the 15-minutes-over conversation that just got good the last 15 minutes of the meeting. The whiteboard allowed us to quickly draw out our conceptual understanding of a timeline, application layers, data flows, and user journeys.</p>

            <p>Why type out a paragraph when you could draw two boxes and an arrow?</p>

            <p>It is much easier to get on the same page as someone if you are both looking at the same object. Inferring what someone means from the written text is not as easy as interpreting a simple diagram. Creating visual diagrams obviously requires labels and words to help describe it, but it takes far fewer keystrokes.</p>

            <p>In short, creating scrappy visuals allows for quicker alignment, a sharable artifact and in my opinion, makes meetings much more fun and collaborative experience.</p>
          </article>
        </main>
      </div>
    </div>
  )
}