var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation,carAnimation2, logAnimation, playerAnimation;
var school;
var player;

function preload(){
 playerAnimation = loadAnimation("Player-03.png");
 logAnimation = loadAnimation("log2.png");
 carAnimation = loadAnimation("car1.png");
 carAnimation2 = loadAnimation("car2.png");
}
function setup() {
  createCanvas(1366,displayHeight);
  carGroup1 = new Group();
  logGroup1 = new Group();
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0){
      var road = createSprite(683,height-150-(i*400)-grassHeight,width,300,);
      road.shapeColor = "black";
    }
    bottomGrass1.shapeColor = "green";
  }
  
 for(var i=0;i<40;i++){
   cars = new Car(2);
   carGroup1.add(cars.spt);
 }
   
 for(var i=0;i<40;i++){
   logs = new Log(-2);
   logGroup1.add(logs.spt);
 }

 player = new Player();

 



 }

function draw() {
  background("skyblue");
  translate(0,-player.spt.y+height/2)
  for(i=1;i<logGroup1.length;i++)
  if(logGroup1[i].x<0)
  {
    logGroup1[i].x=width ;
  }
  for(i=1;i<carGroup1.length;i++)
  if(carGroup1[i].x<0)
  {
    carGroup1[i].x=width ;
  }
  for(i=1;i<carGroup1.length;i++)
  if(carGroup1[i].x>1366)
  {
    carGroup1[i].x=10 ;
  }

  if(keyDown("left")){
    player.moveLeft();
  }
  if(keyDown("right")){
    player.moveRight();
  }
  if(keyDown("up")){
    player.moveUp();
  }
  if(keyDown("down")){
    player.moveDown();
  }
  if(player.spt.isTouching(carGroup1)){
    player.spt.x=width/2;
    player.spt.y=height-75;
  }
  if(player.spt.isTouching(logGroup1)){
    player.spt.x = player.spt.x-3;
  }
  else if(( player.spt.y > height-1550 &&player.spt.y < height-1300)||
  (player.spt.y < height-500 && player.spt.y > height-750)||
  (player.spt.y > height)||
  (player.spt.x < 0)||
  (player.spt.x > width)){
    player.spt.x=width/2;
    player.spt.y=height-75;
  }

  drawSprites();

}

