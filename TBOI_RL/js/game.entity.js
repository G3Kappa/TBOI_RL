	function Entity() {
		this.name = 'Unnamed Entity';
		this.sprite = resources['ent_sprite_default'];
		this.info = {
			health: 4,
			maxhealth: 8,
			soulhearts: 2.5,
			eternalhearts: 0.5,
			coins: '00',
			keys: '00',
			bombs: '00'
		};
		Entity.MAX_HEALTH = 20;

		this.update = function(delta) {

		};

		this.draw = function(canvas) {

		};
	};

	function ent_Isaac() {
		Entity.call(this);
		this.name = 'Isaac';
		this.sprite = resources['ent_sprite_isaac'];
	};
	ent_Isaac.prototype = new Entity;