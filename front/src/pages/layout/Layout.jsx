import React from 'react'
import Navbar from '../../sections/navbar/Navbar'

import {Outlet} from "react-router-dom"
import Footer from '../../sections/footer/Footer'
function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout