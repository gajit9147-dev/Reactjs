import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-full bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-slate-600">Have a question? Send a quick message.</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
            <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="name" type="text" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
            <input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="email" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700" htmlFor="message">Message</label>
            <textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="message" rows="4" placeholder="Write your message"></textarea>
          </div>
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" type="button">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact