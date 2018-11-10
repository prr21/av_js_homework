function options(){
	
	class Options {

	constructor(height = 'auto', width = 'auto', bg = 'white', fontSize = 'inherit', textAlign = 'left'){
		this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign;
	};

	makeDiv(text,block){
		this.block = $(block) || document.body;
		this.div = document.createElement('div');

		this.block.appendChild(this.div);
		this.div.textContent = text;

		this.changeStyle();
	};

	changeStyle(){
		this.div.style.cssText = `height: ${this.height};
		width: ${this.width};
		background-color: ${this.bg};
		font-size: ${this.fontSize}; 	
		text-align: ${this.textAlign};`
	}
}

let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod';

let prr = new Options('200px', '400px', '#e8e8e8', '26px', 'right');
// prr.makeDiv(text);
}

module.exports = options;