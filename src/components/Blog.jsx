import React from 'react'

const posts = [
  {
    title: 'Humans are much more smarter than AI',
    excerpt: 'Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.',
  },
  {
    title: 'Humans are much more smarter than AI',
    excerpt: 'Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.',
  },
  {
    title: 'Humans are much more smarter than AI',
    excerpt: 'Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.',
  },
]

const Placeholder = () => (
  <div className="relative bg-[#c9c9c9] aspect-[16/10] w-full">
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <line x1="0" y1="0" x2="100" y2="100" stroke="#999999" strokeWidth="0.3" />
      <line x1="100" y1="0" x2="0" y2="100" stroke="#999999" strokeWidth="0.3" />
    </svg>
  </div>
)

const Blog = () => {
  return (
    <div className="w-full bg-[#f7f7f6] py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Latest blog</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {posts.map((post, i) => (
            <div key={i} className="bg-[#fbfaf8] flex flex-col">
              <Placeholder />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="font-semibold text-gray-900 leading-snug">{post.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                <a href="#" className="text-sm text-gray-900 hover:underline mt-1">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-black text-white text-sm font-medium px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
          Button
        </button>
      </div>
    </div>
  )
}

export default Blog