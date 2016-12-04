const addHealth = (pokemon, points) => {
	pokemon.cp = pokemon.cp + points
}

const stand = (pokemon) => {
	pokemon.sprite = 'stand'
}

const jump = (pokemon) => {
	pokemon.sprite = 'jump'
}

const flip = (pokemon) => {
	pokemon.sprite = 'flip'
}

const crouch = (pokemon) => {
	pokemon.sprite = 'crouch'
}

const pounce = (pokemon) => {
	pokemon.sprite = 'pounce'
}

const rotate = (pokemon, direction) => {
	pokemon.rotate(direction);
}

const highlight = (pokemon) => {
	pokemon.highlight();
}

const shoot = (pokemon) => {
	pokemon.sprite = 'shoot';
}

const roar = (pokemon) => {
	pokemon.sprite = 'roar';
}

const stamp = (pokemon) => {
	pokemon.sprite = 'stamp';
}

const tailwhip = (pokemon) => {
	pokemon.sprite = 'tailwhip';
}

const thundershot = (pokemon) => {
	pokemon.sprite = 'thundershot';
}

const randomlyFlip = (pokemons, after = 3000) => {
	const r = Math.floor(Math.random() * pokemons.length);
	setTimeout(() => {
		flip(pokemons[r])
		highlight(pokemons[r])	
	}, after)
}

