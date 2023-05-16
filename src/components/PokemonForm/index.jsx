import React, { useState, useEffect } from 'react';

const PokemonForm = () => {
	const [inputText, setInputText] = useState('');
	const [pokemons, setPokemons] = useState(null);

	const updateInput = (e) => {
		setInputText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getPokemon();
		setInputText('');
	};

	useEffect(() => {
		getPokemon();
	}, []);

	async function getPokemon() {
		try {
			setPokemons(null);
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputText}`);
			const data = await res.json();
			console.log(data.types[0].type.name);
			if (res.ok) {
				setPokemons([data]);
			} else {
				setPokemons([]);
			}
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="form__pokemon">
				<label htmlFor="searchPokemon">Search Pokemon</label>
				<input id="searchPokemon" type="text" value={inputText} onChange={updateInput} />
				<input type="submit" value="Search" />
			</form>
			<div>
				{pokemons ? (
					<div>
						{pokemons.map((pokemon, index) => (
							<>
								<h3 key={index}>{pokemon.name}</h3>
								<p>Type: {pokemon.types[0].type.name}</p>
							</>
						))}
					</div>
				) : (
					'No pokemons'
				)}
			</div>
		</>
	);
};

export default PokemonForm;
