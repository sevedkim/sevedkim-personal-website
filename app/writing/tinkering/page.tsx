import Link from 'next/link'

export default function Tinkering() {
    return (
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">
            <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
                <header className="py-8 flex justify-between items-center">
                    <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
                        ← Writing
                    </Link>
                </header>

                <main className="py-8">
                    <h1 className="text-2xl font-bold mb-4">Tinkering</h1>
                    <time className="text-sm text-gray-400 mb-8 block">November 16, 2023</time>

                    <article className="space-y-4 text-gray-300">
                        <p>We spend a lot of our energy on things outside of our physical control.</p>

                        <p>Trying to influence your manager to increase the headcount of your team. Organizing a ski trip with friends. Even placing an order to Amazon to have a package delivered.</p>

                        <p>Not only are these things outside of our physical control, but they make us dependent on outside factors.</p>

                        <p>I've recently found peace in making tiny, almost insignificant changes to my personal website. Updating the hyperlink text color and sorting my posts by newest first. When you try to compare it to other chores, tasks and projects, it is such a small thing that you might ask yourself why spend time doing this at all?</p>

                        <p>I find satisfaction in the mundane, small, almost insignificant work that must be done.</p>

                        <p>There's such a constant pressure to be doing and working on the highest priority things on your todo list. I want to ensure I'm leveraging my time wisely and having the biggest impact on myself, the company I work for, and those people around me. To spend time tinkering feels like moving grains of sand compared to shaking mountains.</p>

                        <p>We need a moment to pause the optimization of reach and scale.</p>

                        <p>Take the time to paint the lip of your baseboards. Tweak your website to format the way you want it to. Learn how to make your own pasta from scratch. In a world where we're always trying to get things done the fastest and most efficient ways, we miss the opportunity to put ourselves in the middle.</p>

                        <p>To spend time tinkering is to spend time being human.</p>
                    </article>
                </main>
            </div>


        </div>
    )
}
