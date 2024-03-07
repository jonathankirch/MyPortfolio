import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';

export const Tecnologias = () => {
	const tecnologias = [
		{ name: 'HTML5', img: <FaHtml5 size='50' color='red' className='rounded shadow bg-dark-transparent'/> },
		{ name: 'CSS3', img: <FaCss3Alt size='50' color='blue' className='rounded shadow bg-dark-transparent'/> },
		{ name: 'JavaScript', img: <RiJavascriptFill size='50' color='yellow'className='rounded shadow bg-dark-transparent'/> },
		{ name: 'React', img: <FaReact size='50' color='blue'className='rounded shadow bg-dark-transparent'/> },

	];

	return (
		<section className='container text-center pb-5'>
			<h1 className='container bg-dark-transparent w-50 rounded text-light mb-4 text-purple shadow p-2'>Tecnologias</h1>
			<div className='row'>
				<ul className='d-flex justify-content-center list-unstyled'>
					{tecnologias &&
						tecnologias.map((tecnologia, id) => (
							<li key={id} title={tecnologia.name} className='mx-4'>
									{tecnologia.img}
									<p className='text-purple'>{tecnologia.name}</p>
							</li>
						))}
				</ul>
			</div>
			<hr className='text-light border border-purple' />
		</section>
	);
};
