// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better 
// to create separate JavaScript files as needed.
//
//= require jquery
//= require_tree .
//= require_self
//

// create an new instance of a pixi stage
var interactive = true;
var stage = new PIXI.Stage(0x66FF99, interactive);

// create a renderer instance
var renderer = PIXI.autoDetectRenderer(400, 300);

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

requestAnimFrame(animate);

// create a texture from an image path
var texture = PIXI.Texture.fromImage("assets/bunny.png");
// create a new Sprite using the texture
var bunny = new PIXI.Sprite(texture);

bunny.buttonMode = true;
bunny.interactive = true;
bunny.mousedown = function(data){
	console.log("mousedown");
//	bunny.position.x = 350;
//	bunny.position.y = 200;
}

// center the sprites anchor point
bunny.anchor.x = 0.5;
bunny.anchor.y = 1.5;

// move the sprite t the center of the screen
bunny.position.x = 200;
bunny.position.y = 150;

stage.addChild(bunny);

function animate() {
	requestAnimFrame(animate);
	
	// just for fun, lets rotate mr rabbit a little
	bunny.rotation += 0.01;
	
	// render the stage
	renderer.render(stage);
}