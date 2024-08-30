import Link from 'next/link'

export default function FavoriteBooks() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">Favorite Books</h1>
          <time className="text-sm text-gray-400 mb-8 block">October 18, 2023</time>

          <article className="space-y-4 text-gray-300">
            <p>A list of my favorite books that have inspired me and shape the way I think</p>

            <ul className="list-disc pl-5 space-y-2">
              <li><a href="https://www.amazon.com/Fight-Club-Chuck-Palahniuk/dp/0393039765?qid=&sr=" className="text-turquoise hover:underline">"Fight Club"</a> by Chuck Palahniuk</li>
              <li><a href="https://www.amazon.com/Alchemist-25th-Anniversary-Paulo-Coelho/dp/0062390627/ref=pd_lpo_sccl_2/130-0117433-7804830?content-id=amzn1.sym.116f529c-aa4d-4763-b2b6-4d614ec7dc00" className="text-turquoise hover:underline">"The Alchemist"</a> by Paulo Coelho</li>
              <li><a href="https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299" className="text-turquoise hover:underline">"Atomic Habits"</a> by James Clear</li>
              <li><a href="https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/1942788290" className="text-turquoise hover:underline">"The Phoenix Project"</a> by Gene Kim, Kevin Behr, George Spafford</li>
              <li><a href="https://www.amazon.com/Design-Everyday-Things-Donald-Norman/dp/0465067107?crid=26VYBD0KHMP9M&keywords=the+design+of+everyday+things&qid=1697677581&s=books&sprefix=the+design+of,stripbooks,90&sr=1-4" className="text-turquoise hover:underline">"The Design of Everyday Things"</a> by Donald A. Norman</li>
              <li><a href="https://www.amazon.com/Why-We-Sleep-Unlocking-Dreams/dp/1501144316" className="text-turquoise hover:underline">"Why We Sleep"</a> by Matthew Walker</li>
              <li><a href="https://www.amazon.com/Good-Services-Decoding-Mystery-Service/dp/9063695438" className="text-turquoise hover:underline">"Service Design"</a> by Lou Downe</li>
              <li><a href="https://www.amazon.com/gp/product/B012271ONK?caller=Goodreads" className="text-turquoise hover:underline">"Ametora"</a> by W. David Marx</li>
              <li><a href="https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness-ebook/dp/B08FF8MTM6" className="text-turquoise hover:underline">"The Almanack of Naval Ravikant"</a> by Eric Jorgenson</li>
            </ul>

            <p>Last updated: 2023.11.16</p>
          </article>
        </main>
      </div>
    </div>
  )
}