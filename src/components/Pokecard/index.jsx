import React from 'react';

const Pokecard = ({ pokemon }) => {
	return (
		<>
			<div className="card">
				<h2>{pokemon.name}</h2>
				<img src={pokemon.image} alt="Pokemon image" />
				<p>Type: {pokemon.type}</p>
			</div>
		</>
	);
};

export default Pokecard;
