import React from 'react';
import { BsInstagram, BsGithub, BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='https://github.com/yusrilarzaqi' target='_blank' rel='noopener'>
				<BsGithub />
			</a>
			<a
				href='https://www.facebook.com/afifah.cicit/'
				target='_blank'
				rel='noopener'
			>
				<BsFacebook />
			</a>
			<a
				href='https://www.instagram/yusril_arzaqi86'
				target='_blank'
				rel='noopener'
			>
				<BsInstagram />
			</a>
		</div>
	);
};

export default HeaderSocials;
