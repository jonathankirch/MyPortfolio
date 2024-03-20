import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import './style.css';

import { FaArrowUp } from 'react-icons/fa';

export const Contato = () => {
	return (
		<footer
			className='container-fluid border-top border-purple2 py-5 shadow bg-dark-full position-relative'
			id='contato'>
			<div className='position-absolute top-0 start-50 translate-middle'>
				<a href='#home' className='p-2 bg-dark-full border border rounded-circle border-dark shadow-sm'>
					<FaArrowUp size={30} color='rgb(138, 118, 243)' />
				</a>
			</div>
			{/* <h1 className='text-center text-purple fw-bold'>Contato</h1> */}
			<div className='container w-100'>
				<div className='row d-flex flex-row-reverse'>
					<div className='col pt-4 h-100 my-auto'>
						<div>
							<h1 className='fraseContato'>
								Interessado?
								<br /> Contate-me agora mesmo!
							</h1>
						</div>
					</div>
					<div className='col my-auto pt-4'>
						<div className='d-flex justify-content-center mt-4'>
							<ul className='list-unstyled text-light'>
								<li className='mb-3 lista'>
									<a
										href='https://wa.me/5551996449577/?text=Entrando%20em%20contato%20pelo%20portif%C3%B3lio%3A%20%0A%0A'
										target='_blank'
										className='link-underline link-underline-opacity-0 link-light'>
										<FaWhatsapp className='me-3' size={25} color='rgb(138, 118, 243)' />
										+55 51 996449577
									</a>
								</li>
								<li className='mb-3 lista'>
									<a
										href='mailto:jonathankirch101@gmail.com?subject=Entrando em contato pelo portifólio'
										target='_blank'
										className='link-underline link-underline-opacity-0 link-light'>
										<MdEmail className='me-3' size={25} color='rgb(138, 118, 243)' />
										jonathankirch101@gmail.com
									</a>
								</li>
								<li className='mb-3 lista'>
									<a
										href='https://github.com/jonathankirch'
										target='_blank'
										className='link-underline link-underline-opacity-0 link-light'>
										<FaGithub className='me-3' size={25} color='rgb(138, 118, 243)' />
										github.com/jonathankirch
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
