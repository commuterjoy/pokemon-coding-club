function forEach(callback, array, ...params) {
    for (var i = 0; i < array.length; i = i + 1) {
		callback(array[i], ...params);
    }
}

clear = () => {	
	const game = document.querySelector('game')
	while (game.firstChild) {
	    game.removeChild(game.firstChild);
	}
}

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

const randomlyFlip = (pokemons) => {
	const r = Math.floor(Math.random() * pokemons.length);
	flip(pokemons[r])
	highlight(pokemons[r])	
}

const seconds = (n) => n * 1000;

const after = (n, callback, ...params) => setTimeout(() => callback(params), n);