class Blastoise {

	constructor(name) {

		this.card = document.createElement('card');
		document.body.appendChild(this.card);

		this.template = '<cp>CP: {{power}}</cp>' +
						'<name>{{n}}</name>' +
						'<img src="{{{image}}}" data-rotate="{{rotated}}"/>'
		this.cp = 0;
		this.sprite = '';
		this.rotated = 'left';
		this.stand();
	}

	render () {
		Mustache.parse(this.template);
		var rendered = Mustache.render(this.template, this);
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

	set sprite(n) {
		this.image = n;
		this.render();
	}

	rotate() {
		this.rotated = (this.rotated === 'left') ? 'right' : 'left';
		this.render();
	}

	stand() {
		this.sprite = './pokemon/blastoise/stand.gif';
	}

	shoot() {
		this.sprite = './pokemon/blastoise/shoot.gif';
	}

	stamp() {
		this.sprite = './pokemon/blastoise/stamp.gif';
	}

	roar() {
		this.sprite = './pokemon/blastoise/roar.gif';
	}
	
}
