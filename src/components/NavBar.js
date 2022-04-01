import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import '../styles/Navbar.css'

const Navbar = () => {
  const Nav = styled.div``;
  const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<Nav className="navbar">
			<Link to="/" className="nav-logo">
				<a class="nav__logo" href="/en/">
					<svg role="img" aria-labelledby="logo" class="nav__logo__image" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
						<title id="logo">Ableton Homepage</title>
						<path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
					</svg>
				</a>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<li className="nav-item">
					<Link to="/" className="nav-link" onClick={closeMenu}>
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about" className="nav-link" onClick={closeMenu}>
						About
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/explore" className="nav-link" onClick={closeMenu}>
						Explore
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/waitlist" className="nav-link" onClick={closeMenu}>
						WaitList
					</Link>
        </li>
        <li className="nav-item">
					<Link to="/contact" className="nav-link" onClick={closeMenu}>
						Contact
					</Link>
        </li>
      </ul>
		</Nav>
	);
};

export default Navbar;