export const Contato = () => {
	return (
		<footer className='container-fluid rounded border p-3 py-5' id="contato">
			<h1 className='text-light text-center'>Contato</h1>
			<div className='container w-75'>
				<div className='row'>
					<div className='col'>
						<div className='d-flex justify-content-center mt-4'>
							<ul className='list-unstyled text-gray'>
								<li>9 9999-999</li>
								<li>jonathankirch101@gmail.com</li>
								<li>github.com/jonathankirch</li>
							</ul>
						</div>
					</div>
					<div className='col'>
						<div className='text-center'>
							<img
								className='rounded-circle'
								src='https://placehold.co/150'
								alt='Minha Imagem'
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
