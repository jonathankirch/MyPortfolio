import { FaReact, FaBootstrap, FaCss3Alt, FaHtml5, FaJava } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript, BiLogoPostgresql, BiLogoMongodb } from 'react-icons/bi'
import { TbBrandNextjs } from "react-icons/tb";

export const Tecnologias = () => {
	const tecnologias = [
		{ name: 'HTML5', img: <FaHtml5 class='icon-custom' color='red'/> },
		{ name: 'CSS3', img: <FaCss3Alt color='blue' class='icon-custom'/> },
		{ name: 'JavaScript', img: <RiJavascriptFill color='yellow' class='icon-custom'/> },
		{ name: 'TypeScript', img: <BiLogoTypescript  color='#2f74c0' class='icon-custom'/> },
		{ name: 'React', img: <FaReact color='rgb(94, 211, 244)'class='icon-custom'/> },
		{ name: 'Next Js', img: <TbBrandNextjs  color='white' class='icon-custom'/> },
		{ name: 'Bootstrap', img: <FaBootstrap color='rgb(135, 18, 247)' class='icon-custom'/> },
		{ name: 'Tailwind', img: <SiTailwindcss  color='rgb(54, 183, 240)' class='icon-custom'/> },
		{ name: 'Java', img: <FaJava class='icon-custom' color='white'/> },
		{ name: 'Postgre SQL', img: <BiLogoPostgresql  color='#31648C' class='icon-custom'/> },
		{ name: 'MongoDB', img: <BiLogoMongodb class='icon-custom' color='#01E661'/> },
	];
	return (
		<section className='container text-center pb-5'>
			<h1 className='container bg-dark-transparent w-50 rounded text-light mb-4 text-purple shadow p-2 fw-bold'>Tecnologias e Frameworks</h1>
			<div className='row'>
				<ul className='d-flex d-flex justify-content-center flex-wrap list-unstyled'>
					{tecnologias&&
						tecnologias.map((tecnologia, id) => (
							<li key={id} title={tecnologia.name} className='mx-4'>
									{tecnologia.img}
									<p className='text-light'>{tecnologia.name}</p>
							</li>
						))}
				</ul>
			</div>
			<hr className='text-light border border-purple shadow'/>
		</section>
	);
};
