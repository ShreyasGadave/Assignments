import React from 'react'
import Navbar from './components/Navbar'
import Tittle from './components/Tittle'
import Trust from './components/Trust'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Tittle/>
      <Trust/>
      <Stats/>
      <Partners/>
      <Blog/>
      <Testimonials/>
    </div>
  )
}

export default App