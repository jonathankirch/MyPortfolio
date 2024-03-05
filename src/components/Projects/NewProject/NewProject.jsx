import PropTypes from 'prop-types';

export const NewProject = ({
	nome,
	descricao,
	img,
	tecnologias,
	isReverse,
}) => {
	return (
		<div className='container-fluid border rounded p-4 text-gray mb-5'>
			<div
				className={`row ${
					isReverse ?? 'flex-row-reverse'
				} row-cols-1 row-cols-md-2`}>
				<div className='col my-3'>
					<div className='border w-75 mx-auto'>
						<img className='w-100' src={img} alt={`Imagem do site ${nome}`} />
					</div>
				</div>
				<div className='col position-relative'>
					<div className='pb-5'>
						<h1 className='text-light'>{nome}</h1>
						<p>{descricao}</p>
					</div>
					<div
						className={`d-flex ${
							isReverse ? 'flex-row-reverse start-0' : 'flex-row end-0'
						} position-absolute bottom-0 p-3`}>
						{tecnologias}
					</div>
					<div
						className={`d-flex mt-5${
							isReverse ? 'flex-row-reverse end-0' : 'flex-row start-0'
						} position-absolute bottom-0 p-3`}>
						<button type='button' className='btn btn-light mx-3'>
							Abrir
						</button>
						<button type='button' className='btn btn-light'>
							Repositório
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

NewProject.propTypes = {
	nome: PropTypes.string,
	descricao: PropTypes.string,
	img: PropTypes.string,
	tecnologias: PropTypes.array,
	isReverse: PropTypes.bool,
};
