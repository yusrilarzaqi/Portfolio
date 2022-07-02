import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { IoMdBook } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { BiMessageSquareDots } from 'react-icons/bi';

const Nav = () => {
	const [activeNav, setActiveNav] = useState('#');

	return (
		<nav>
			<a
				href='#'
				onClick={() => setActiveNav('#')}
				className={activeNav === '#' ? 'active home' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activeNav === '#about' ? 'active about' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#portfolio'
				onClick={() => setActiveNav('#portfolio')}
				className={activeNav === '#portfolio' ? 'active portfolio' : ''}
			>
				<IoMdBook />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activeNav === '#contact' ? 'active contact' : ''}
			>
				<BiMessageSquareDots />
			</a>
		</nav>
	);
};

export default Nav;
