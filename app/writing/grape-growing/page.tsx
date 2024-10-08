import Link from 'next/link'

export default function GrapeGrowing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">Grape Growing</h1>
          <time className="text-sm text-gray-400 mb-8 block">April 30, 2020</time>

          <article className="space-y-4 text-gray-300">
            <p><em>Originally published on the <a href="https://www.thoughtworks.com/insights/blog/grape-growing-applying-product-thinking-digital-platforms" className="text-turquoise hover:underline">ThoughtWorks Insight Blog</a></em></p>

            <p>Imagine you are an owner of a small batch grape vineyard. You find yourself to be so successful that you are acquired by a large distributor who spans grocery stores, bakery and wine industries. Now being a part of a large organization that has many different types of consumers and ways of distribution, your grape vineyard is expected to meet those demands. Table grapes are considered not only for grocery store distribution, but sent for jam and juice processing. Your two wine varieties need to extend to ten varieties. Likewise, you notice that your grape harvesting process is too specific to the types of grapes. The grape distributor is looking to tap into new markets and scale but you are having a difficult time being flexible to meet their needs.</p>

            <p>When considering how to scale your business one has to consider what core services drive your customers. By applying product-thinking you will; identify the data and assets teams need, define domain boundaries and identify clear ownership, whilst preventing production waste.</p>

            <h2 className="text-xl font-semibold mt-6">Why build a platform?</h2>

            <p>To understand the case for building a digital platform, we need to appreciate the problem it addresses for a growing business with growing complexity. On one hand, start-ups are known for being nimble and fast-moving due to their size. But for the organizations needing to scale, their size hinders their growth and response to market changes.</p>

            <p>As a business grows, it becomes more complex and causes points of friction between it's teams. This begins to significantly slow-down the rate at which teams deliver value to their customers. What we often hear from our clients is that the technology they'd expected to be an accelerator, is often what slows them down. Most new business initiatives never see any customer feedback because their budgets were more than the business could afford to invest.</p>

            <p>Rapid experimentation is the hallmark of the Lean Enterprise, and is how a business finds what products will service their customers needs. However, unless these experiments are cheap to execute, teams will not explore them. This results in less experimentation and means less new ideas going to market and then we hear the stories of businesses like Kodak and Nokia, and a number of others that failed to respond to changing customer needs.</p>

            <blockquote className="italic border-l-4 border-turquoise pl-4 py-2">
              "Unless these experiments are cheap to execute, teams will not explore them."
              <footer className="mt-2">–Ryan Murray, Principal Consultant, Thoughtworks</footer>
            </blockquote>

            <p>A platform enables the flexibility to experiment in response to the everchanging complex world all while maintaining the simplicity of core business functionality.</p>

            <p>The reason for platforms is the promise of accelerated value delivery at scale. Maintaining simplicity within their internal domain model as it is incumbent upon the businesses that will flourish in an ever more complex world.</p>

            <p>How do platforms hide or encapsulate domain complexity?</p>

            <h2 className="text-xl font-semibold mt-6">Capabilities vs Touchpoints</h2>

            <p>Platforms are composed of these smaller units of business context called Capabilities. You are probably familiar with the components of a software product that a customer primarily interacts with, usually presented as a GUI and referred to as the "front-end" or even the "Product". Most organizations have gotten really good at applying iterative design, prioritization, continuous customer feedback to how they build these touchpoints (products). In a well architected platform, capabilities are the distinct engines behind those customer touchpoints.</p>

            <p>A key component of a good platform strategy is identifying, building, evolving and managing your platform capabilities as products. We need to shift those product management skill sets further down into the platform so to speak.</p>

            <p>Capabilities are not just your traditional "back-end" and treating them as mere implementation details will rapidly increase domain complexity for your software delivery teams.</p>

            <p>This model of what we are calling "technical product thinking" isn't new. We find that it exists more clearly (and may be better recognized) in non-software business domains that's literally much older than software.</p>

            <p>Growing grapes, Making wine, Producing jam...</p>

            <p>Referencing back to our analogy of our grape vineyard with platform thinking applied, we see the importance of two types of roles to help ensure we are scaling appropriately. Let's think of product management at the platform level as grape growers and product managers at the customer touchpoints as the merchants of wine, jam or other grape products.</p>

            <p>As we consider different market channels such as: wholesale grape distribution, grape juice and jam production, wine distillation and bottling, we see there is an overlap when it comes to how the grapes are grown and harvested. The grape merchants have an important role in having a full understanding of how to ensure customer and business value is generated for their specific products. But the wine merchants do not need to have a detailed understanding of how pinot noir grapes best thrive in certain temperatures nor do the jam merchants need to know the best soil conditions for grapes to make jam. This type of domain knowledge is important for the grape growers to own and produce a high yield to satisfy all use cases for the merchants. The separation of boundaries allows for both of these roles to have the focus they need for their respective domains.</p>

            <p>When building your platform capabilities, you must have product ownership at your platform level to ensure you are supporting your current customer experiences and creating room to experiment for new ones. The product managers on the platform need to understand the engineers that will consume and leverage these APIs, libraries or tools to provide excellent developer experience. When you think of your core capabilities as a product, you increase the reusability of those capabilities and eliminate the need to reinvent the wheel.</p>

            <p>There's some good news and bad news here. The bad news is that there's a key ingredient missing in your platform strategy. The good news is that the missing ingredient is available in plain site. Your product management organization and objectives need to be applied to shape your platform capabilities. This is similar to how it has shaped your customer touch points.</p>

            <p>This craft of applying product-thinking to digital platforms is still in its infancy within the industry. For this reason, we've seen it go by many names even within Thoughtworks: Technical Product Management, Platform Product Management, Capability Product Management or our current personal favorite; Grape Growing.</p>

            <p><em>Disclaimer: The statements and opinions expressed in this article are those of the author(s) and do not necessarily reflect the positions of Thoughtworks.</em></p>
          </article>
        </main>
      </div>
    </div>
  )
}