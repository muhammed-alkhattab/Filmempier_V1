import React from 'react'
import Header from './component/Header'
import Footer from './component/Fotter/Fotter'
import { Outlet } from 'react-router-dom'






function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
     
      <Footer/>
      
    </>
  )
}

export default Layout



