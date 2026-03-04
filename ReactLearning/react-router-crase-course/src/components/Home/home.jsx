import React from 'react'

const Home = () => {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="mt-2 text-slate-600">Welcome to the home page.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a className="block overflow-hidden rounded-lg border bg-white shadow-sm" href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              className="h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
              alt="Laptop with code"
            />
          </a>
          <a className="block overflow-hidden rounded-lg border bg-white shadow-sm" href="https://reactrouter.com" target="_blank" rel="noreferrer">
            <img
              className="h-56 w-full object-cover"
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
              alt="Circuit board"
            />
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home