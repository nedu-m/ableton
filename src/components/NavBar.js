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
				Logo
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