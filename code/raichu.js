class Raichu extends Pokemon {
	
	set sprite(s) {
		this.image = `./pokemon/raichu/${s}.gif`;
		this.render();
	}

}

const raichu = () => new Raichu();