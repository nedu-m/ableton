import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import '../styles/Navbar.css'

const Nav = styled.div``;

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => { 
    setOpen(!open);
  };

  const closeMenu = () => { 
    setOpen(false);
  };

  return (
    <Nav className='navbar'>
      <Link to='/' className='nav-logo' onClick={() => setOpen(false)}>
        Logo
      </Link>
      <ul className={open ? 'nav-link active' : 'nav-links'}>
        <li className='nav-item'>
          <Link to="/" className='nav-link' onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/about" className='nav-link' onClick={() => setOpen(false)}>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/explore" className='nav-link' onClick={() => setOpen(false)}>
            Explore
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/waitlist" className='nav-link' onClick={() => setOpen(false)}>
            WaitList
          </Link>
        </li>
        <li className='nav-item'>
          <Link to="/contact" className='nav-link' onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </Nav>
  )
};