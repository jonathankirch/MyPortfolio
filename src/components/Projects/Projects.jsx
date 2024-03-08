import { NewProject } from './NewProject/NewProject';

// Icones das tecnologias dos projetos
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';


export const Projects = () => {
	const tecnologiasProjeto2 = [<FaHtml5 size={40} color='red'className='rounded shadow-sm bg-dark-transparent mx-2 p-1'/>, <FaCss3Alt size={40} color='blue'className='rounded shadow-sm bg-dark-transparent mx-2 p-1'/>];
	const tecnologiasProjeto1 = [<FaHtml5 size={40} color='red'className='rounded shadow-sm bg-dark-transparent mx-2 p-1'/>, <RiJavascriptFill size={40} color='yellow' className='rounded shadow-sm bg-dark-transparent mx-2 p-1'/>]; 

	return (
		<section className='container mt-5 pb-5 mb-5' id='projetos'>
			<h1 className='text-center text-purple mb-5 fw-bold'>Meus Projetos:</h1>
			<div>
				<NewProject
					nome={'Projeto 1'}
					descricao={
						'lorem ldjfa flaj fa fa jflaflajdflajfdlajflajf ajfa asdfasdf asd fas fas asd asd as afsd fasd fas fasf asls flasjflorem ldjfa flaj fa fa jflaflajdflajfdlajflajf ajfa asdfasdf asd fas fas asd asd as afsd fasd fas fasf asls flasjf'
					}
					img={'https://placehold.co/200x150'}
					tecnologias={tecnologiasProjeto1}
				/>
				<NewProject
					nome={'Projeto 2'}
					isReverse
					descricao={
						'lorem ldjfa flaj fa fa jflaflajdfla lorem ldjfa flaj fa fa jflaflajdflajfdlajflajf ajfa asdfasdf asd fas fas asd asd as afsd fasd fas fasf asls flasjfasdf as fas fasfas fas fas fasf as as sa fas fasjfdlajflajf ajfals flasjf'
					}
					img={'https://placehold.co/200x150'}
					tecnologias={tecnologiasProjeto2} 
				/>
			</div>
		</section>
	);
};
