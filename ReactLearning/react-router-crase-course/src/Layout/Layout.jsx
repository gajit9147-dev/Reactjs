import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components/Home'

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
