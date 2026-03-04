import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-white shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <div>
          <Link className="text-lg font-semibold text-gray-900" to="/">React Router</Link>
        </div>
        <nav className="flex items-center gap-4 text-sm text-gray-700">
          <NavLink 
            className={({isActive}) => isActive ? "font-semibold text-orange-600" : "hover:text-gray-900"} 
            to="/"
          >
            Home
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "font-semibold text-orange-600" : "hover:text-gray-900"} 
            to="/about"
          >
            About
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "font-semibold text-orange-600" : "hover:text-gray-900"} 
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink 
            className={({isActive}) => isActive ? "font-semibold text-orange-600" : "hover:text-gray-900"} 
            to="/github"
          >
            Github
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header