import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me-2.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	return (
		<header>
			<div className='container header__container'>
				<h5>Hello There</h5>
				<h1>I'm Yusril Arzaqi</h1>
				<h5 className='text-light'>Student at Stekom</h5>
				<CTA />
				<HeaderSocials />
				<div className='me'>
					<img src={ME} alt='me' className='img' />
				</div>
				<a href='#contact' className='scroll__down'>
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
