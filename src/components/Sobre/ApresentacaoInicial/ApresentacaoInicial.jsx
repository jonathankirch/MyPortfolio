import simbolo from './img/simbolo.png';
import img1 from './img/Imagem1.png';
import img2 from './img/Imagem2.png';

export const ApresentacaoInicial = () => {
	return (
		<>
			<div className='pt-5 px-3' id='home'>
				<section className='container-sm border border-dark shadow rounded  mx-auto my-5 bg-dark-secondary'>
					<div className='row row-cols-1 row-cols-md-2'>
						<div className='col'>
							<div className='w-100 mx-auto'>
								<img className='w-100' src={img1} alt='Desenvolvimento Web' />
							</div>
						</div>
						<div className='col position-relative p-4'>
							<h1 className='text-light fw-bold'>Eu</h1>
							<p className='text-gray'>
								Olá! Sou o Jonathan, desenvolvedor com cerca de 4 anos de dedicação à programação. Comecei a codar no primeiro ano do ensino médio e me apaixonei por tecnologia. Tenho construído projetos variados, com destaque para o ecossistema web, mas explorando também outras frentes, e tenho certeza de que esta é a carreira que quero trilhar
							</p>
							<div className='position-absolute bottom-0 end-0 position-relative m-2 p-2'>
								<img style={{ width: 30 }} src={simbolo} alt='</>' />
							</div>
						</div>
					</div>
				</section>
				<section className='container-sm border border-dark shadow rounded mx-auto my-5 bg-dark-secondary'>
					<div className='row row-cols-1 row-cols-md-2'>
						<div className='col position-relative p-4'>
							<h1 className='text-light fw-bold' id='sobre-mim'>
								Sobre mim
							</h1>
							<p className='text-gray'>
								Tenho gosto em aprender coisas novas, especialmente aquelas que aprimoram a qualidade dos meus projetos.
								Estou constantemente em busca de conhecimento para expandir minhas habilidades e enfrentar desafios com
								confiança.
							</p>
							<p className='text-gray'>
								Abaixo, você encontrará uma lista das tecnologias, frameworks e linguagens que estudei e dominei ao
								longo desta jornada.
							</p>
						</div>
						<div className='col position-relative'>
							<div className='w-75 mx-auto'>
								<img className='w-100' src={img2} alt='Desenvolvimento Web' />
							</div>
							<div className='position-absolute bottom-0 end-0 position-relative me-2 p-2'>
								<img style={{ width: 30 }} src={simbolo} alt='</>' />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
