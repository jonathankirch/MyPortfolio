import simbolo from './img/simbolo.png';

export const ApresentacaoInicial = () => {
	return (
		<>
			<div className='pt-5' id='home'>
				<section className='container border border-dark shadow rounded w-75 mx-auto my-5 p-4 bg-dark-secondary'>
					<div className='row row-cols-1 row-cols-md-2'>
						<div className='col'>
							<div className='w-50 mx-auto'>
								<img
									className='w-100 rounded-circle'
									src='https://placehold.co/400'
									alt=''
								/>
								<h3 className='text-center text-gray'>Jonathan Kirch</h3>
							</div>
						</div>
						<div className='col position-relative'>
							<h1 className='text-light fw-bold'>Eu</h1>
							<p className='text-gray'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
								nemo quos. Ipsum dignissimos obcaecati minima beatae commodi
								sint labore, porro alias error perspiciatis sapiente voluptatem
								accusantium consectetur sit neque voluptas.
							</p>
							<div className='position-absolute bottom-0 end-0 position-relative me-2 p-2 shadow-sm rounded'>
								<img style={{ width: 30 }} src={simbolo} alt='</>' />
							</div>
						</div>
					</div>
				</section>
				<section className='container border border-dark shadow rounded w-75 mx-auto my-5 p-4 bg-dark-secondary'>
					<div className='row row-cols-1 row-cols-md-2'>
						<div className='col position-relative'>
							<h1 className='text-light fw-bold' id='sobre-mim'>
								Sobre mim
							</h1>
							<p className='text-gray'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
								nemo quos. Ipsum dignissimos obcaecati minima beatae commodi
								sint labore, porro alias error perspiciatis sapiente voluptatem
								accusantium consectetur sit neque voluptas.
							</p>
						</div>
						<div className='col position-relative'>
							<div className='border w-50 mx-auto'>
								<img className='w-100' src='https://placehold.co/300' alt='' />
							</div>
							<div className='position-absolute bottom-0 end-0 position-relative me-2 p-2 shadow-sm rounded'>
								<img style={{ width: 30 }} src={simbolo} alt='</>' />
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
