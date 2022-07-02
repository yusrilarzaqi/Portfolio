import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_bcb1y1k',
				'template_683hf67',
				form.current,
				'VeALm-RQ71orbayNc'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineMailOutline className='contact__option-icon' />
						<h4>Email</h4>
						<h5>arzaqi.yusril12@gmail.com</h5>
						<a href='mailto:arzaqi.yusril12@gmail.com'>Send a message</a>
					</article>
					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Yusril Arzaqi</h5>
						<a href='https://m.me/afifah.cicit' target='_blank'>
							Send a message
						</a>
					</article>
					<article className='contact__option'>
						<MdOutlineMailOutline className='contact__option-icon' />
						<h4>Whatsapp</h4>
						<h5>+62 899-4499-929</h5>
						<a
							href='https://api.whatsapp.com/send?phone=08994499929'
							target='_blank'
						>
							Send a message
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input type='text' name='email' placeholder='Your Email' required />
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button type='submit' className='btn btn-success block'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
