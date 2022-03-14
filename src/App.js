import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "@fontsource/inter"
import "@fontsource/archivo"
import './styles/global.css'
import styled from 'styled-components'
import About from './components/About'
import Contact from './components/Contact'
import Explore from './components/Explore'
import Home from './components/Home'
import NavBar from './components/NavBar'
import WaitList from './components/WaitList'

const Wrapper = styled.div``;

export default function App() {
  return (
    <Wrapper className='app'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/contact' exact element={<Contact/>} />
          <Route path='/explore' exact element={<Explore />} />
          <Route path='/waitlist' exact element={<WaitList/>} />
        </Routes>
      </Router>
    </Wrapper>
  )
};