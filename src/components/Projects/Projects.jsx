import { NewProject } from './NewProject/NewProject';

export const Projects = () => {
	return (
		<section className='container mt-5' id='projetos'>
			<h1 className='text-center text-light mb-5'>Projetos</h1>
			<div>
				<NewProject
					nome={'Projeto 1'}
					descricao={
						'lorem ldjfa flaj fa fa jflaflajdflajfdlajflajf ajfa asdfasdf asd fas fas asd asd as afsd fasd fas fasf asls flasjflorem ldjfa flaj fa fa jflaflajdflajfdlajflajf ajfa asdfasdf asd fas fas asd asd as afsd fasd fas fasf asls flasjf'
					}
					img={'https://placehold.co/200x150'}
					tecnologias={'html, css, js'}
				/>
				<NewProject
					nome={'Projeto 1'}
					isReverse
					descricao={
						'lorem ldjfa flaj fa fa jflaflajdfla lorem ldjfa flaj fa fa jflaflajdflajfdlajflajf ajfa asdfasdf asd fas fas asd asd as afsd fasd fas fasf asls flasjfasdf as fas fasfas fas fas fasf as as sa fas fasjfdlajflajf ajfals flasjf'
					}
					img={'https://placehold.co/200x150'}
					tecnologias={'html, css, js'}
				/>
			</div>
		</section>
	);
};
