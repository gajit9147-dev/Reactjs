import React from 'react'

const About = () => {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="mt-2 text-slate-600">Learn the basics of routing and navigation in React.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold">What this app is</h2>
            <p className="mt-2 text-sm text-slate-600">A simple practice project to understand routes, links, and layouts.</p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <h2 className="text-lg font-semibold">What you will learn</h2>
            <p className="mt-2 text-sm text-slate-600">Nested routes, nav links, and basic page structure using Tailwind.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About