function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mesh = function Mesh(container, canvas, uniforms, vertexShader, fragmentShader) {
	_classCallCheck(this, Mesh);

	this.container = container;
	this.w = container.offsetWidth;
	this.h = container.offsetHeight;
	this.app = new PIXI.Application({ width: this.w, height: 400, view: canvas, transparent: true });
	this.app.renderer.plugins.interaction.autoPreventDefault = false;
	// console.log(this.app.renderer.plugins.interaction);
	this.app.renderer.view.style.touchAction = 'auto';
	PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;
	// this.container.appendChild(this.app.view);
	this.geometry = new PIXI.Geometry().addAttribute('positions', [0, 0, this.w, 0, this.w, 400, 0, 400], 2).addAttribute('uvs', [0, 0, 1, 0, 1, 1, 0, 1], 2).addIndex([0, 1, 2, 0, 2, 3]);
	this.uniforms = uniforms;
	this.uniforms.resolution = { x: this.w, y: 400 };
	this.shader = PIXI.Shader.from(vertexShader, fragmentShader, uniforms);
	this.obj = new PIXI.Mesh(this.geometry, this.shader);
	this.obj.position.set(0, 0);
	this.app.stage.addChild(this.obj);
	// console.log(this.uniforms);
};

export default Mesh;