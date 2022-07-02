import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/project-1.png';
import IMG2 from '../../assets/project-2.png';
import IMG3 from '../../assets/project-3.png';
import IMG4 from '../../assets/project-4.png';
import IMG5 from '../../assets/project-5.png';
import IMG6 from '../../assets/project-6.png';

const datas = [
	{
		id: 1,
		image: IMG1,
		Title: 'Simple CRUD Daftar Mahasiswa Menggunakan Library Reactjs',
		github:
			'https://github.com/yusrilarzaqi/my-project/tree/main/CRUD_MAHASISWA',
	},
	{
		id: 2,
		image: IMG2,
		Title: 'Simple Todo List Menggunakan Library Reactjs',
		github: 'https://github.com/yusrilarzaqi/my-project/tree/main/TODO_LIST',
	},
	{
		id: 3,
		image: IMG3,
		Title: 'Project Market Menggunakan Framework Flask Python',
		github: 'https://github.com/yusrilarzaqi/my-project/tree/main/MARKET',
	},
	{
		id: 4,
		image: IMG4,
		Title: 'Text Editor Neovim Using Lua Programming Language',
		github: 'https://github.com/yusrilarzaqi/nvim',
	},
	{
		id: 5,
		image: IMG5,
		Title: 'Customize Linux dotfiles',
		github: 'https://github.com/yusrilarzaqi/dotfiles',
	},
	{
		id: 6,
		image: IMG6,
		Title: 'Tutorial Python (Kelas Terbuka)',
		github: 'https://github.com/yusrilarzaqi/Python-Materi',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				{datas.map((data) => (
					<article className='portfolio__item' key={data.id}>
						<div className='portfolio__item-image'>
							<img src={data.image} alt={data.Title} />
						</div>
						<h3>{data.Title}</h3>

						{data.github && (
							<div className='portfolio__item-cta'>
								<a
									href={data.github}
									className='btn btn-success'
									target='_blank'
								>
									Github
								</a>
							</div>
						)}
					</article>
				))}
			</div>
		</section>
	);
};

export default Portfolio;
