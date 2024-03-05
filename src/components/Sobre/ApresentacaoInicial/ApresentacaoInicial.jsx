export const ApresentacaoInicial = () => {
	return (
		<>
			<section className='container border border-light rounded mx-auto w-75 my-5 p-4'>
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
							nemo quos. Ipsum dignissimos obcaecati minima beatae commodi sint
							labore, porro alias error perspiciatis sapiente voluptatem
							accusantium consectetur sit neque voluptas.
						</p>
						<div className='fs-3 fw-bold text-gray position-absolute bottom-0 end-0'>
							&#8249;&#8260;&#8250;
						</div>
					</div>
				</div>
			</section>
			<section className='border border-light rounded w-75 mx-auto my-5 p-4'>
				<div className='row row-cols-1 row-cols-md-2'>
					<div className='col position-relative'>
						<h1 className='text-light fw-bold' id='sobre-mim'>
							Sobre mim
						</h1>
						<p className='text-gray'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
							nemo quos. Ipsum dignissimos obcaecati minima beatae commodi sint
							labore, porro alias error perspiciatis sapiente voluptatem
							accusantium consectetur sit neque voluptas.
						</p>
					</div>
					<div className='col'>
						<div className='border w-75 mx-auto'>
							<img className='w-100' src='https://placehold.co/300' alt='' />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};