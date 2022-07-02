import React from 'react';
import './about.css';
import ME from '../../assets/linux.png';
import { FaAward, FaUniversity } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id='about'>
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='About Image' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experiance</h5>
							<small>1 Years Using Linux</small>
						</article>
						<article className='about__card'>
							<FaUniversity className='about__icon' />
							<h5>University</h5>
							<small>Universitas Sains dan Teknologi Komputer</small>
						</article>
						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Project</h5>
							<small>+5 Completed</small>
						</article>
					</div>

					<p>
						Hello I'm <b>Yusril Arzaqi</b> from University Sains and Technology
						Computer. Im 18 years old, Now i live in Ungaran. Now I'm currently
						learning Web Developer using React Js and Flask Framework
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
