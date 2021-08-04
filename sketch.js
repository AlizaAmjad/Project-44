
function preload(){
  playerimg=loadImage("character.png")
}

function setup() {
  createCanvas(800,400);
  
  player = createSprite(30, 30, 50, 50);
  player.addImage(playerimg)
  player.scale=0.02

  edges=createEdgeSprites()


  wall1 =  createSprite(85, 35, 10, 70);
  wall2 =  createSprite(45, 155, 90, 10);
  wall3 =  createSprite(170, 120, 10, 100);
  wall4 =  createSprite(77, 280, 10, 100);
  wall5 =  createSprite(420, 325, 500, 10);
  wall6 =  createSprite(350, 80, 200, 10);
  wall7 =  createSprite(250, 250, 200, 10);
  wall8 =  createSprite(350, 205, 10, 100);

}

function draw() {
  background("black"); 
  text(mouseX + ","+ mouseY,mouseX,mouseY) 

  player.velocityY=0
  player.velocityX=0

  if(keyDown("up")){
    player.velocityY=-4
  }
  
  if(keyDown("down")){
    player.velocityY=4
  }
  
  if(keyDown("left")){
    player.velocityX=-4
  }
  
  if(keyDown("right")){
    player.velocityX=4
  }

  player.collide(edges)
  player.collide(wall1)
  player.collide(wall2)
  player.collide(wall3)
  player.collide(wall4)
  player.collide(wall5)
  player.collide(wall6)
  player.collide(wall7)
  
  
  drawSprites();
}