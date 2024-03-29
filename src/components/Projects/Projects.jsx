import { NewProject } from './NewProject/NewProject';

// Icones das tecnologias dos projetos
import { FaCss3, FaHtml5, FaReact, FaBootstrap } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';

// Imagens
import PortfolioIMG from './ProjectImages/PortfolioIMG.png';
import BookPassIMG from './ProjectImages/BookPassIMG.png';
import CloneNetflixIMG from './ProjectImages/CloneNetflixIMG.png';
import ListaDeTarefasIMG from './ProjectImages/ListaDeTarefasIMG.png';
import NaturScentIMG from './ProjectImages/NaturScentIMG.png';

export const Projects = () => {
	const tecnologias = {
		Portfolio: [
			<FaReact
				title='React'
				key={'react'}
				size={40}
				color='rgb(94, 211, 244)'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
			<FaBootstrap
				title='Bootstrap'
				key={'bootstrap'}
				size={40}
				color='rgb(135, 18, 247)'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
		],
		BookPass: [
			<FaReact
				title='React'
				key={'react'}
				size={40}
				color='rgb(94, 211, 244)'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
			<FaBootstrap
				title='Bootstrap'
				key={'bootstrap'}
				size={40}
				color='rgb(135, 18, 247)'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
		],
		CloneNetflix: [
			<FaReact
				title='React'
				key={'react'}
				size={40}
				color='rgb(94, 211, 244)'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
			<FaCss3
				title='CSS3'
				key={'css3'}
				size={40}
				color='blue'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
		],
		NaturScent: [
			<FaHtml5
				title='HTML5'
				key={'html5'}
				size={40}
				color='red'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
			<SiTailwindcss
				title='Tailwind'
				key={'tailwind'}
				size={40}
				color='rgb(54, 183, 240)'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
		],
		ToDoList: [
			<FaHtml5
				title='HTML5'
				key={'html5'}
				size={40}
				color='red'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
			<FaCss3
				title='CSS3'
				key={'css3'}
				size={40}
				color='blue'
				className='rounded shadow-sm bg-dark-transparent mx-2 p-1'
			/>,
			<RiJavascriptFill title='JavaScript' key={'javascript'} size={40} color='yellow' />,
		],
	};

	return (
		<section className='container mt-5 pb-5 mb-5' id='projetos'>
			<div className='pb-5'>
				<h1 className='text-center text-purple fw-bold mb-4'>Meus Projetos:</h1>
			</div>
			<div>
				<NewProject
					nome={'Portfólio'}
					descricaoP1={
						'Meu portfólio foi elaborado com o intuito de demonstrar, aos interessados, o meu trabalho. Por meio dele, podem ver tanto o meu histórico de criações quanto o meu conhecimento já adiquirido.'
					}
					descricaoP2={'Também disponibilizo formas de entrar em contato para facilitar a interação com os clientes.'}
					img={PortfolioIMG}
					tecnologias={tecnologias.Portfolio}
					linkPreview={'https://jonathankirch.vercel.app'}
					linkRepo={'https://github.com/jonathankirch/MyPortfolio'}
				/>
				<NewProject
					nome={'BookPass'}
					isReverse
					descricaoP1={
						'O site utiliza a API do Google Books em sua versão gratuita. Nele, você pode receber recomendações de acordo com suas preferências, explorar os mais populares e pesquisar por títulos, além de adicionar os livros de sua escolha à sua lista de favoritos.'
					}
					descricaoP2={
						'Também é possível obter informações detalhadas sobre eles, incluindo seus valores, e até mesmo comprá-los.'
					}
					img={BookPassIMG}
					tecnologias={tecnologias.BookPass}
					linkPreview={'https://bookpass.vercel.app'}
					linkRepo={'https://github.com/jonathankirch/BookPass'}
				/>
				<NewProject
					nome={'Netflix-Clone'}
					descricaoP1={
						'O clone da Netflix foi o meu primeiro projeto utilizando React. Nele, pude colocar em prática e testar os meus conhecimentos com esta biblioteca ( É reproduzido apenas a parte visual e inicial do original ).'
					}
					descricaoP2={'O site é totalmente responsivo, e para estilizar o projeto, utilizei CSS3.'}
					img={CloneNetflixIMG}
					tecnologias={tecnologias.CloneNetflix}
					linkPreview={'https://meu-clone-netflix.vercel.app'}
					linkRepo={'https://github.com/jonathankirch/NetflixClone'}
				/>

				<NewProject
					nome={'NaturScent'}
					descricaoP1={
						'A criação desta landing page teve como objetivo conhecer e praticar o tailwind, utilizando apenas ele e o html foi criado o projeto, o que permite um desempenho mais rápido e efetido para o site.'
					}
					isReverse
					descricaoP2={
						'O site é totalmente responsivo, com design simples e minimalista, seu objetivo é informar e atrair novos crientes para consumir os produtos ( Marca Fictícia ).'
					}
					img={NaturScentIMG}
					tecnologias={tecnologias.NaturScent}
					linkPreview={'https://naturscent.vercel.app/'}
					linkRepo={'https://github.com/jonathankirch/NaturScent/'}
				/>
				<NewProject
					nome={'To-Do List'}
					descricaoP1={
						'Este projeto foi desenvolvido para permitir a adição de notas ou tarefas a serem realizadas. Utilizei HTML5, CSS3 e JavaScript, para fazer todo sistema funcionar.'
					}
					descricaoP2={'O site é responsivo e as tarefas permanecem salvas mesmo após a atualização da página.'}
					img={ListaDeTarefasIMG}
					tecnologias={tecnologias.ToDoList}
					linkPreview={'https://jonathankirch.github.io/ListaDeTarefas-JS/'}
					linkRepo={'https://github.com/jonathankirch/ListaDeTarefas-JS'}
				/>
			</div>
		</section>
	);
};
