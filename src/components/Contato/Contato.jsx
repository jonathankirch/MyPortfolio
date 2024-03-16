import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import './style.css';

import { FaArrowUp } from "react-icons/fa";

export const Contato = () => {
	return (
		<footer
			className='container-fluid border-top border-purple2 py-5 shadow bg-dark-full position-relative'
			id='contato'>
				<div className="position-absolute top-0 start-50 translate-middle">
					<a href="#home" className="p-2 bg-dark-full border border rounded-circle border-dark shadow-sm"><FaArrowUp size={30} color="rgb(138, 118, 243)"/></a>
				</div>
			<h1 className='text-center text-purple fw-bold'>Contato</h1>
			<div className='container w-100'>
				<div className='row'>
					<div className='col'>
						<div className='d-flex justify-content-center mt-4'>
							<ul className='list-unstyled text-light'>
								<li className="mb-3 lista"><FaPhoneAlt className="me-3" size={25} color="rgb(138, 118, 243)" />9 9999-999</li>
								<li className="mb-3 lista"><MdEmail className="me-3" size={25} color="rgb(138, 118, 243)" />jonathankirch101@gmail.com</li>
								<li className="mb-3 lista"><FaGithub className="me-3" size={25} color="rgb(138, 118, 243)" />github.com/jonathankirch</li>
							</ul>
						</div>
					</div>
					<div className='col'>
						<div className='text-center'>
							<img
								className='rounded-circle'
								src='https://placehold.co/150'
								alt='Minha Imagem'
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
