import { Header } from './components/Header/Header';
import { Sobre } from './components/Sobre/Sobre';
import { Projects } from './components/Projects/Projects';
import { Contato } from './components/Contato/Contato';

export const HomePage = () => {
	return (
		<div className='bg-dark'>
			<div className='pb-5'>
					<Header />
			</div>
			<Sobre />
			<Projects />
			<Contato />
		</div>
	);
};
