import Link from 'next/link'

export default function WhatIsAPlatform() {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <div className="flex-grow max-w-3xl mx-auto px-8 w-full">
        <header className="py-8 flex justify-between items-center">
          <Link href="/writing" className="text-sm text-gray-400 hover:text-turquoise transition-colors duration-200">
            ← Writing
          </Link>
        </header>

        <main className="py-8">
          <h1 className="text-2xl font-bold mb-4">What is a "Platform"?</h1>
          <time className="text-sm text-gray-400 mb-8 block">June 7, 2023</time>

          <article className="space-y-4 text-gray-300">
            <p>#platform is an overloaded buzzword. To disambiguate this term, I've broken down 3 uses of "Platform" with a quoted definition and examples.</p>

            <h2 className="text-xl font-semibold mt-6">Platform as a Business Model (Marketplace)</h2>
            <blockquote className="italic border-l-4 border-turquoise pl-4 py-2">
              "A platform is a business model that creates value by facilitating exchanges between two or more interdependent groups, usually consumers and producers." -Alex Moazed, Platform Business Model
            </blockquote>

            <p>Typical business models have considered the linear downstream approach of producing goods or services to consumers. The platform business model is where a two-sided market creates an exchange between two or more groups. Airbnb is a platform for hosts and guests. Lyft is a platform for drivers and passengers. Amazon is a platform for buying and selling common goods.</p>

            <h2 className="text-xl font-semibold mt-6">Platform as a Service (PaaS)</h2>
            <blockquote className="italic border-l-4 border-turquoise pl-4 py-2">
              "Platform as a service (PaaS) is a complete development and deployment environment in the cloud, with resources that enable you to deliver everything from simple cloud-based apps to sophisticated, cloud-enabled enterprise applications." -Microsoft Azure, What is PaaS?
            </blockquote>
            <p>Unlike the platform business model companies, PaaS companies have a linear relationship of providing service to users hosting their applications on their platforms. Some examples are Heroku or OpenShift.</p>

            <h2 className="text-xl font-semibold mt-6">Platform as a Product</h2>
            <blockquote className="italic border-l-4 border-turquoise pl-4 py-2">
              "The use of the word "platform" is defined as a set of technologies that enable products to share data and experiences with one another." -Wyatt Jenkins, Making the Shift to Platform Product Management
            </blockquote>
            <p>A Platform as a Product typically starts internal and proprietary to a company that provides a set of capabilities. A platform could provide the capability of managing paid subscriptions, content recommendations, or search. Stripe as a Software as a Service (SaaS) company act as a payment processing platform in offering this capability to its customers.</p>
          </article>
        </main>
      </div>
    </div>
  )
}