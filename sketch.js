var monkeyImage, monkey_running, ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;

function preload() {
monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
obstacleGroup= new Group();
FoodGroup= new Group();

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(450, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;


}






function draw() {


  if (keyDown("space")) {
    monkey.velocityY =  -9;
  }

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.velocityY = monkey.velocityY +0.5

  monkey.collide(ground);
 /*if(monkey.isTouching(obstacleGroup)) {
    obstacleGroup.destroyEach();
    FoodGroup.destroyEach();
    obstacleGroup.setVelocityEach(0);
   monkey.velocityX=0;
   FoodGroup.setVelocityEach(0);
   
    }*/
  
  
  food();
  Obstacle();
  createCanvas(400, 400);
  drawSprites();
  
stroke("black");
  textSize(20);
  fill("black");
  text("score:"+score,200,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());        
  text("survivalTime:"+survivalTime,100,70);
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(200, 50, 20, 10)
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4
    banana.y=Math.round(random(120,200));
    FoodGroup.add(banana);
    FoodGroup.lifetime=200;
  }
}

function Obstacle() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(300, 325, 20, 10)
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -4 
    obstacleGroup.add(obstacle);
    obstacleGroup.lifetime=200;
  }
}