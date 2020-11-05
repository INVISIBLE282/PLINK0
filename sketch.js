function setup() {
  createCanvas(800,800);
  var particle = createSprite(400, 200, 50, 50);
  var ground = createSprite(200,400,100,200);
function draw() {
  background(0);  
  drawSprites();
  ground.drawSprites();
  particle.drawSprites();
  }
}