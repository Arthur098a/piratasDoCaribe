var navio;
var navio2;
var oceano;
var oceano2;
function preload(){
navio2 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
oceano2 = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);

  oceano = createSprite(600, 50);
  oceano.addImage(oceano2);
  oceano.velocityX = -1;
  oceano.scale-0.3;

  navio = createSprite(130, 200, 30, 30);
  navio.addAnimation("movingShip",navio2);
  navio.scale = 0.4
}

function draw() {
  background("blue");
    drawSprites();
   text(mouseX+","+mouseY,mouseX,mouseY)
 
}
