
var monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;
var ground;
var invisibleGround;
var bananaGroup;
 
function preload(){
  
  
  monkey_running =  loadAnimation
 ("sprite_0.png","sprite_1.png","sprite_2.png",
  "sprite_3.png","sprite_4.png","sprite_5.png",
  "sprite_6.png","sprite_7.png","sprite_8.png")
   
   
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  ground=loadImage("jungle2.jpg");
 
}


function setup() {
  createCanvas(600,400);
  
  jungle=createSprite(300,175,20,20);
 jungle.addImage(ground);
  jungle.scale=0.9;
  
   monkey =createSprite(60,250,20,20);
  monkey.addAnimation(" monkey_running",monkey_running);
  monkey.scale=0.13;
  monkey.debug=true;
 
  stone=createSprite(170,280,20,20)
  stone.addImage(obstaceImage);
  stone.scale=0.2; 
  stone.visible=false;  
  
  //  banana=createSprite(170,200,20,20);
  // banana.addImage(bananaImage);
  // banana.scale=0.15;
  
 invisibleGround=createSprite(300,310,1500,10)
 invisibleGround.visible=false
  survivalTime=0;
  bananaGroup= new Group();
  obstacleGroup=new Group()
}


 
function draw() {
  background("white");
   if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/3;
    }

  invisibleGround.velocityX=-5;
  //making the monkey jump
  if (keyDown("space")){
    monkey.velocityY=-14;
  }
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
 monkey.collide(invisibleGround);
  
  food();
  obstacle();
  
  if (monkey.isTouching (bananaGroup)){
    bananaGroup.destroyEach();
    survivalTime=survivalTime+2;
    
  }
  
  if (monkey.isTouching (obstacleGroup)){
    obstacleGroup.destroyEach();
    survivalTime=survivalTime-1;
     switch(survivalTime){
      case 1:monkey.scale=0.28;
              break;
      case 2:monkey.scale=0.26;
              break;
      case 3:monkey.scale=0.24;
              break;
      case 4:monkey.scale=0.22;
             break;
      case 5:monkey.scale=0.20;
             break;
      case 6:monkey.scale=0.18;
             break;
      case 7:monkey.scale=0.16;
             break;
      case 8:monkey.scale=0.14;
             break;
             
      default:break;
    }
  }
   if(obstacleGroup.isTouching(monkey)){ 
        monkey.scale=0.18;
    }
   if (monkey.isTouching (bananaGroup)){
     bananaGroup.destroyEach();
    survivalTime = survivalTime + 2;
    }
     switch(survivalTime){
      case 1:monkey.scale=0.14;
              break;
      case 2:monkey.scale=0.16;
              break;
      case 3:monkey.scale=0.18;
              break;
      case 4:monkey.scale=0.20;
             break;
      case 5:monkey.scale=0.22;
             break;
      case 6:monkey.scale=0.24;
             break;
      case 7:monkey.scale=0.26;
             break;
      case 8:monkey.scale=0.28;
             break;
             
      default:break;
    }
  if ((touches.length>0 || keyDown ("space"))&& monkey.y>=height-120){
    trex.velocityY=-14;
    touches=[];
  }
   
  
  drawSprites();
  fill("black");
  textSize(19)
  text("survivalTime: "+ survivalTime, 420,50);
}
function food(){
if(frameCount % 120 === 0){
  var bananas=createSprite(500,160,20,20)
  bananas.addImage(bananaImage);
  
  //changed this y value
  bananas.y=Math.round(random(80,200));
  bananas.velocityX=-4;
  bananas.lifetime=-1
  bananas.scale=0.1;
  bananaGroup.add(bananas);
}
}
function obstacle(){
  if (frameCount % 70 === 0){
    var obstacles=createSprite(580,280,20,20);
    obstacles.addImage(obstaceImage);
    
    var rand=Math.round(random(120,280));
    obstacles.velocityX=-5;
    obstacles.lifetime=-1;
    obstacles.scale=0.1;
   obstacleGroup.add(obstacles);
  }
}



