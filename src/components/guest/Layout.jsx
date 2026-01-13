import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


function Layout() {
  return (
    <div>
      <NavBar />

      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
