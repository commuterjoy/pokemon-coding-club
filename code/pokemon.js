class Pokemon {

	constructor(name) {

		this.card = document.createElement('card');
		document.querySelector('game').appendChild(this.card);

		this.template = '<cp>CP: {{power}}</cp>' +
						'<name>{{n}}</name>' +
						'<img src="{{{image}}}" data-rotate="{{rotated}}"/>'
		this.cp = 0;
		this.sprite = 'stand';
		this.rotated = 'left';
	}

	render () {
		Mustache.parse(this.template);
		var rendered = Mustache.render(this.template, this);
		// console.log(rendered);
		this.card.innerHTML = rendered;
	}

	set name(n) {
		this.n = n;
		this.render();
	}

	set cp(power) {
		this.power = power;
		this.render();
	}

	get cp() {
		return this.power;
	}
	
	set sprite(s) {
		this.image = `./pokemon/pikachu/${s}.gif`;
		this.render();
	}

	rotate() {
		this.rotated = (this.rotated === 'left') ? 'right' : 'left';
		this.render();
	}

	highlight() {
		this.card.classList.add('highlight')
		this.render();
	}

	unhighlight() {
		this.card.classList.remove('highlight')
		this.render();
	}

}
