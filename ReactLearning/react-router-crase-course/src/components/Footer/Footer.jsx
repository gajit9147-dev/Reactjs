import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-2">
        <div>
          <Link className="text-lg font-semibold text-gray-900" to="/">React Router</Link>
          <p className="mt-2 text-sm text-gray-600">Practice project for routing basics.</p>
        </div>
        <div>
          <nav className="flex flex-wrap gap-3 text-sm text-gray-700">
            <NavLink className="hover:text-gray-900" to="/">Home</NavLink>
            <NavLink className="hover:text-gray-900" to="/about">About</NavLink>
            <NavLink className="hover:text-gray-900" to="/contact">Contact</NavLink>
            <NavLink className="hover:text-gray-900" to="/github">Github</NavLink>
          </nav>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-700">
            <a className="hover:text-gray-900" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-gray-900" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a className="hover:text-gray-900" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-gray-500">© 2026 React Router Practice</div>
      </div>
    </footer>
  )
}

export default Footer