import React from 'react';
import './footer.css';
import { BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>
				YUSRIL ARZAQI
			</a>

			{/* <ul className='permalinks'> */}
			{/* 	<li> */}
			{/* 		<a href='#'>Home</a> */}
			{/* 	</li> */}
			{/* 	<li> */}
			{/* 		<a href='#about'>About</a> */}
			{/* 	</li> */}
			{/* 	<li> */}
			{/* 		<a href='#portfolio'>Portfolio</a> */}
			{/* 	</li> */}
			{/* 	<li> */}
			{/* 		<a href='#contact'>Contact</a> */}
			{/* 	</li> */}
			{/* </ul> */}

			<div className='footer__socials'>
				<a href='https://github.com/yusrilarzaqi' target='_blank'>
					<BsGithub />
				</a>
				<a href='https://facebook.com/afifah.cicit' target='_blank'>
					<BsFacebook />
				</a>
				<a href='https://www.instagram/yusril_arzaqi86' target='_blank'>
					<BsInstagram />
				</a>
			</div>

			<div className='footer__copyright'>
				<small>&copy; YUSRIL ARZAQI. All rights reserved</small>
			</div>
		</footer>
	);
};

export default Footer;
