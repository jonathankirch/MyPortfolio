import { NewProject } from './NewProject/NewProject';

// Icones das tecnologias dos projetos
import { FaHtml5 } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

// Imagens
import BookPassIMG from './ProjectImages/BookPassIMG.png';

export const Projects = () => {
	const tecnologiasProjeto1 = [
		<FaHtml5 key={'html5'} size={40} color='red' className='rounded shadow-sm bg-dark-transparent mx-2 p-1' />,
		<RiJavascriptFill
			key={'javascript'}
			size={40}
			color='yellow'
			className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
		/>,
	];
	const tecnologiasBookPass = [
		<FaReact
			title='React'
			key={'html5'}
			size={40}
			color='rgb(94, 211, 244)'
			className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
		/>,
		<FaBootstrap
			title='Bootstrap'
			key={'css3'}
			size={40}
			color='rgb(135, 18, 247)'
			className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
		/>,
	];

	return (
		<section className='container mt-5 pb-5 mb-5' id='projetos'>
			<div className='pb-5'>
				<h1 className='text-center text-purple fw-bold mb-4'>Meus Projetos:</h1>
			</div>
			<div>
				<NewProject
					nome={'Portifólio'}
					descricao={
						'Meu portfólio foi elaborado com o intuito de demonstrar, aos interessados, o meu trabalho. Por meio dele, podem ver tanto o meu histórico de criações quanto o meu conhecimento já adiquirido. Também disponibilizo formas de entrar em contato para facilitar a interação com os clientes.'
					}
					img={'https://placehold.co/400'}
					tecnologias={tecnologiasProjeto1}
					linkPreview={'https://github.com/jonathankirch'}
					linkRepo={'https://github.com/jonathankirch'}
				/>
				<NewProject
					nome={'BookPass'}
					isReverse
					descricao={
						'O site utiliza a API do Google Books em sua versão gratuita. Nele, você pode receber recomendações de acordo com suas preferências, explorar os mais populares e pesquisar por títulos, além de adicionar os livros de sua escolha à sua lista de favoritos. Também é possível obter informações detalhadas sobre eles, incluindo seus valores, e até mesmo comprá-los.'
					}
					img={BookPassIMG}
					tecnologias={tecnologiasBookPass}
					linkPreview={'https://bookpass.vercel.app'}
					linkRepo={'https://github.com/jonathankirch/BookPass'}
				/>
			</div>
		</section>
	);
};
