import './Header.module.css';

export const Header = () => {
	return (
		<div className='bg-dark-full shadow fixed-top' id='home'>
			<div className='border-bottom border-purple2'>
				<nav
					className='navbar navbar-expand-xxl py-3 container'
					data-bs-theme='dark'>
					<div className='container-fluid'>
						<div className='text-start text-center'>
							<a href='/' className='text-light text-decoration-none'>
								<h1 className='text-purple'>&lt; Hello World /&gt;</h1>
							</a>
						</div>
						<div>
							<button
								className='navbar-toggler bg-verde border-0'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#navMenu'
								aria-controls='menu'
								aria-expanded='false'
								style={{ position: 'relative', zIndex: 1 }}>
								<span className='navbar-toggler-icon'></span>
							</button>
						</div>
					</div>
					<div
						id='navMenu'
						className='collapse navbar-collapse w-50 text-end px-4'>
						<ul className='navbar-nav fs-5'>
							<li className='nav-item'>
								<a href='#home' className='nav-link'>
									<div
										className='d-flex align-items-center justify-content-end pe-2 text-purple'
										title='Livros favoritos'>
										Home
									</div>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#sobre-mim' className='nav-link'>
									<div
										className='d-flex align-items-center justify-content-end pe-2 text-purple'
										title='Editar preferências'>
										Sobre Mim
									</div>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#projetos' className='nav-link'>
									<div
										className='d-flex align-items-center justify-content-end pe-2 text-purple'
										title='Voltar a tela inicial'>
										Projetos
									</div>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#contato' className='nav-link'>
									<div
										className='d-flex align-items-center justify-content-end pe-2 text-purple'
										title='Voltar a tela inicial'>
										Contato
									</div>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};
