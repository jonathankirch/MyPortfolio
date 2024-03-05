import { Header } from '../Header/Header';
import { Sobre } from '../Sobre/Sobre';
import { Projects } from '../Projects/Projects';
import { Contato } from '../Contato/Contato';

export const HomePage = () => {
	return (
		<div className='bg-dark p-2'>
			<Header />
			<Sobre />
			<Projects />
			<Contato />
		</div>
	);
};
