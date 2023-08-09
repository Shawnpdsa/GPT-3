import React from 'react'
import {Blog, Header, Footer, Features, WhatGPT3, Possibility } from './container'
import { Navbar, Cta, Brand} from './components'
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Possibility/>
          <Cta/>
          <Blog/>
          <Footer/>
    </div>
  )
}

export default App
