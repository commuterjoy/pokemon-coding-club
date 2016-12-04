class Pikachu extends Pokemon {
	
	set sprite(s) {
		this.image = `./pokemon/pikachu/${s}.gif`;
		this.render();
	}

}

const pikachu = () => new Pikachu();