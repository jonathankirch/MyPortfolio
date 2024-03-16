import PropTypes from 'prop-types';

export const NewProject = ({
	nome,
	descricao,
	img,
	tecnologias,
	linkPreview,
	linkRepo,
	isReverse,
}) => {
	return (
		<div className='container-fluid border border-gray rounded p-4 text-gray mb-5 bg-dark-full2 shadow'>
			<div
				className={`row ${
					isReverse ?? 'flex-row-reverse'
				} row-cols-1 row-cols-md-2`}>
				<div className='col'>
					<div className='rounded w-75 mx-auto'>
						<img
							className='w-100 rounded border border-4 border-purple mb-3 shadow'
							src={img}
							alt={`Imagem do site ${nome}`}
						/>
						<div className='w-100 mx-auto'>
						<ul className='d-flex d-flex justify-content-center flex-wrap list-unstyled'>
							{tecnologias ?? tecnologias.map((tecnologia) => (
								<li key={tecnologia}>{tecnologia}</li>
							))}
						</ul>
						</div>
					</div>
				</div>
				<div className='col position-relative'>
					<div className='pb-5'>
						<h1 className='text-light fw-bold'>{nome}</h1>
						<p className='fs-5'>{descricao}</p>
					</div>
					<div
						className={`d-flex position-absolute bottom-0 flex-row-reverse end-0`}>
						<a href={linkPreview} target='_blank' className='btn btn-light mx-3 bg-success text-light border border-success shadow-sm fw-bold'>
							Abrir
						</a>
						<a href={linkRepo} target='_blank' className='btn btn-light bg-dark text-light shadow-sm fw-bold'>
						&lt; Repositório /&gt;
						</a>
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
	linkPreview: PropTypes.string,
  linkRepo: PropTypes.string,
	isReverse: PropTypes.bool,
};
