var backgroundImage  

var snowMan 
    
function preload() {
backgroundImage = loadImage ("snow1.jpg")
snowManImage = loadImage("snowman.png")
}

function setup() {
  createCanvas(800,400);
  snowMan = createSprite(400, 200, 50, 50);
  snowMan.addImage(snowManImage)
  
}

function draw() {
  background(backgroundImage);  
  drawSprites();
} 