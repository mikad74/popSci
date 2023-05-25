import './App.css'
import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [page, setpage] = useState(0)
  return (
    <>
      <Header setPage={setpage}/>
      <div className="main">
      {page === 0 && <Content/>}
      {page === 1&& <About/> }
      {page === 2&& <Contact/> }
      <Footer setPage={setpage}/>
      </div>
    </>
  )
}

export default App
