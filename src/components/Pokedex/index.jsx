import React from 'react';
import Pokecard from '../Pokecard';

const Pokedex = (props) => {
	return (
		<>
			<div className="cards">
				{props.pokemons.map((pokemon, index) => {
					return <Pokecard key={index} pokemon={pokemon} />;
				})}
			</div>
		</>
	);
};

export default Pokedex;
