import Link from 'next/link'

export default function Footer() {
  return (
      <footer className="py-8 mt-0 text-xs text-gray-400 font-sans">
          <div className="max-w-3xl mx-auto px-8">
              <div className="flex space-x-16">
                  <div>
                      <h3 className="mb-2">Follow</h3>
                      <ul className="space-y-0">
                          <li><a href="https://twitter.com/sevedkim" className="hover:text-turquoise transition-colors  external-link">Twitter</a></li>
                          <li><a href="https://bsky.app/profile/sevedkim.com" className="hover:text-turquoise transition-colors  external-link">Bluesky</a></li>
                      </ul>
                  </div>
                  <div>
                      <h3 className="mb-2">Connect</h3>
                      <ul className="space-y-0">
                        <li><a href="mailto:sevedkim@gmail.com" className="hover:text-turquoise transition-colors external-link">Email</a></li>
                        <li><a href="https://linkedin.com/in/sevedkim" className="hover:text-turquoise transition-colors external-link">LinkedIn</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  )
}