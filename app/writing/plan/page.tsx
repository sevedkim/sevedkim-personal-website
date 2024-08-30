import Link from 'next/link'

export default function PlanForNoPlans() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">Plan for No Plans</h1>
          <time className="text-sm text-gray-400 mb-8 block">June 5, 2021</time>

          <article className="space-y-4 text-gray-300">
            <p>My entire month of May was jam-packed with housewarmings, picnics, dinner parties, and birthdays.</p>

            <p>Those who've played calendar tetris know the feeling of trying to make plans that work for both parties. We were finally able to have that double date we set a month and a half ago.</p>

            <p>Being overbooked and underbooked present its own consequences.</p>

            <p>A completely open schedule allows you to roam freely and completely flexible. But with the endless flow of events, you're always competing with those committed to hasty RSVPs and the "Sorry, I'm busy today." Also if you're not planning anything at all, your time will not be managed by you but influenced and directed by everyone but you. I've been in the other camp where I've tightly held on to every minute to ensure that an agenda and itinerary have been set. It can certainly feel you're a prisoner of your own schedule and miss on the random but exciting opportunities that pop up.</p>

            <p>Like everything, you need to balance the duality of the two.</p>

            <p>I will still advocate for reserving time for yourself, whether that be for personal growth, physical and mental health, and connecting with others. But we also need to allocate a percentage of our days and weeks for the fortuitous occasion. Waking up and having nowhere to be is invigorating and gives you real-time control of what you want to happen next. My best vacations or most memorable times were unexpected and done out of pure openness.</p>

            <p>By dedicating space for serendipity, you can always expect the unexpected.</p>
          </article>
        </main>
      </div>
    </div>
  )
}