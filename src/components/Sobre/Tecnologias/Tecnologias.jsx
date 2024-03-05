import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';

export const Tecnologias = () => {
	const tecnologias = [
		{ name: 'HTML5', img: <FaHtml5 size='40' color='red' className='rounded bg-light shadow'/> },
		{ name: 'CSS3', img: <FaCss3Alt size='40' color='blue' className='rounded bg-light shadow'/> },
		{ name: 'JavaScript', img: <RiJavascriptFill size='40' color='yellow'className='rounded bg-light shadow'/> },
		{ name: 'React', img: <FaReact size='40' color='blue'className='rounded bg-light shadow'/> },

	];

	return (
		<section className='container text-center pb-5'>
			<h1 className='text-light mb-4'>Tecnologias</h1>
			<div className='row'>
				<ul className='d-flex justify-content-center list-unstyled'>
					{tecnologias &&
						tecnologias.map((tecnologia, id) => (
							<li key={id} title={tecnologia.name} className='mx-3'>
								<div className='border border-light rounded p-2 bg-dark-gray'>
									{tecnologia.img}
								</div>
							</li>
						))}
				</ul>
			</div>
			<hr className='text-light' />
		</section>
	);
};