import PropTypes from 'prop-types';

export const NewProject = ({
	nome,
	descricao,
	img,
	tecnologias,
	isReverse,
}) => {
	return (
		<div className='container-fluid border border-gray rounded p-4 text-gray mb-5 bg-dark-full2 shadow'>
			<div
				className={`row ${
					isReverse ?? 'flex-row-reverse'
				} row-cols-1 row-cols-md-2`}>
				<div className='col my-3'>
					<div className=' border border-purple rounded w-75 mx-auto shadow'>
						<img
							className='w-100 rounded'
							src={img}
							alt={`Imagem do site ${nome}`}
						/>
					</div>
				</div>
				<div className='col position-relative'>
					<div className='pb-5'>
						<h1 className='text-light fw-bold'>{nome}</h1>
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
						<button type='button' className='btn btn-light mx-3 bg-success text-light border border-success shadow'>
							Abrir
						</button>
						<button type='button' className='btn btn-light bg-dark text-light shadow'>
						&lt; Repositório /&gt;
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
