import Link from 'next/link'

export default function LessConsumption() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">Less Consumption, More Creation</h1>
          <time className="text-sm text-gray-400 mb-8 block">April 21, 2021</time>

          <article className="space-y-4 text-gray-300">
            <blockquote className="italic border-l-4 border-turquoise pl-4 py-2">
              "Reader! — You have been bred in a land abounding with men, able in arts, learning, and knowledges manifold, this man in one, this in another, few in many, none in all. But there is one art, of which every man should be'master, the art of reflection. If you are not a thinking man, to what purpose are you a man at all?"
              <footer className="mt-2">–Samuel Taylor Coleridge</footer>
            </blockquote>

            <p>My mornings start off showering to NPR morning briefs. I'll read the latest tweets or queue some podcasts up. I just got a puppy, so I'm learning some training tips on YouTube. I form my workout routines based on advice from Reddit. I play post-hardcore or deep house music during workouts or runs. In the evenings I'll watch some reality TV with my girlfriend, Steph. My entire life is being shaped by content made by someone else.</p>

            <p>Don't get me wrong, this environment of consumption has helped shape who I am today. But the flow of information has been unidirectional. Subscriptions and following accounts have this compounding effect of habitually looking outward for answers. I am so busy seeking out and regurgitating other peoples ideas that I hardly have space to reflect on my own. It's daunting not being able to differentiate original thought and the external forces that influence me.</p>

            <p>Today I start to draw that line. I've started the journey to exercise my free will to think for myself and the right to share it publicly. Up until now, a lot of emotions, opinions and questions have swirled in my mind. Instead writing my thoughts down in a journal that I might only see, my thoughts are going to be made public and open sourced for the world to access. I want the accountability that comes with publicly displaying my writings so that I am intentional in forming my own reflections.</p>

            <p>It has taken almost 30 years to get to this turning point from strictly consuming to creating content. The main point of friction that has prevented me from getting here was the question "Does the world need yet another blog?" Probably not. Do there need to be several fashion designers? Do we absolutely need new music to be created? Is there a need for another podcast or twitch channel? The other side of this is that maybe I feel like I have to compete with what already exists in the world. If there is already 10,000 blogs, why should I try to continue to be number 10,001? The space for content can feel oversaturated but maybe a small differentiator you bring will strike a chord with someone.</p>

            <p>I have arrived to the conclusion that it is not my responsibility to ensure the music, fashion, information or art in the world resonates with every human being.</p>

            <blockquote className="italic border-l-4 border-turquoise pl-4 py-2">
              "I can only control the waves that I create. It is up to others to find my signal in the sea of noise."
            </blockquote>

            <p>I know for a fact that there is at least one signal that this resonates with and that's me. Ultimately, this is a self-serving channel for my own internal dialogue. I am giving myself permission to speak freely and have the this blog streamline my emotions, opinions and insights into an open public space. If the collection of my prose resonates with others, that would simply be a consequence.</p>
          </article>
        </main>
      </div>
    </div>
  )
}