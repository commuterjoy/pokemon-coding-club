class Blastoise extends Pokemon {
	
	set sprite(s) {
		this.image = `./pokemon/blastoise/${s}.gif`;
		this.render();
	}

}

const blastoise = () => new Blastoise();