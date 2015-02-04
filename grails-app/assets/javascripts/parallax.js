var stage = new PIXI.Stage(0x66FF99);
renderer = new PIXI.autoDetectRenderer(
        512,
        384//,
        //document.getElementById("game-canvas")
     );

// add the renderer view element to the DOM
document.body.appendChild(renderer.view);

var farTexture = PIXI.Texture.fromImage("assets/bg-far.png");
var far = new PIXI.TilingSprite(farTexture, 512, 256);
far.position.x = 0;
far.position.y = 0;
far.tilePosition.x = 0;
far.tilePosition.y = 0;
stage.addChild(far);

var midTexture = PIXI.Texture.fromImage("assets/bg-mid.png");
var mid = new PIXI.TilingSprite(midTexture, 512, 256);
mid.position.x = 0;
mid.position.y = 128;
mid.tilePosition.x = 0;
mid.tilePosition.y = 0;
stage.addChild(mid);

requestAnimFrame(update);

function update() {
	far.tilePosition.x -= 0.128;
	mid.tilePosition.x -= 0.64;

	renderer.render(stage);

	requestAnimFrame(update);
}