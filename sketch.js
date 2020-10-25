var backgroundImage,backdrop,girl, girl1,boy,boy1,family,family1,coronagroup,Coronavirus,reset1,reset,covidGroup,life1,life2,life3,life;
var gameOver1,GameOver;
var youwin,youwin1;

var count = 3;


var PLAY = 1;
var END = 0;

var gameState = PLAY;

var gameOver,restart;

function preload(){
  backgroundImage = loadImage("Sprites/Background.jpg");
 girl = loadImage("Sprites/Girl.png");
 family1 = loadImage("Sprites/family2.png");
 coronagroup = loadImage("Sprites/Coronavirus2.png");
 reset1 = loadImage("Sprites/Reset2.png");
 life = loadImage("Sprites/Life.png");
 gameOver1 = loadImage("Sprites/GameOver.png");
 youwin1 = loadImage("Sprites/Youwin.png");
 
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  backdrop = createSprite(600,400,1200,800);
  backdrop.addImage(backgroundImage);
  backdrop.scale = 3;

  family = createSprite(1100,600,20,20);
  family.addImage(family1);
  family.scale = 0.4;

  girl1 = createSprite(40,700,20,20);
  girl1.addImage(girl);
  girl1.scale = 0.5;

  reset = createSprite(600,400,40,40);
  reset.addImage(reset1);
  reset.visible = false;
  reset.scale = 0.2;

  life1 = createSprite(950,100,20,20);
  life1.addImage(life);
  life1.scale = 0.1;
  
  life2 = createSprite(1050,100,20,20);
  life2.addImage(life);
  life2.scale = 0.1;

  life3 = createSprite(1150,100,20,20);
  life3.addImage(life);
  life3.scale = 0.1;

  youwin = createSprite(600,300,50,50);
  youwin.addImage(youwin1);
  youwin.scale = 0.5
  youwin.visible = false;
 // lives = [life1,life2,life3];
  

  GameOver = createSprite(400,300,50,50);
  GameOver.addImage(gameOver1);
  GameOver.visible = false;
  GameOver.scale = 0.5
  

   CovidGroup = new Group();
  //coronavirus = createGroup(45,600,20,20);
 // coronavirus.addImage(coronagroup);
  
  

 

}

function draw() {
 // background("pink");  
 
if(gameState === PLAY){
  if(keyDown("RIGHT_ARROW")){
    girl1.x = girl1.x+10;
  }
 
  if(keyDown("LEFT_ARROW")){
    girl1.x = girl1.x-10;
  }
  if(CovidGroup.isTouching(girl1)){
    count = count-1;
    console.log(count);
    girl.x = 0;
  }
   for(var i=0;i<count;i++){
    
   }
   if(count ===0){
     gameState = END;
     
   }
   if(girl1.x = 780){
     YouWin();
   }

   
  

  CoronavirusCells();
}
  else if(gameState === END){
  console.log("InsideENDState");
  GameOver.visible = true;
  reset.visible = true;
  girl1.velocityX = 0;
  CovidGroup.setVelocityYEach(0);
  CovidGroup.destroyEach();
}
if(mousePressedOver(reset)){

    Reset();
}
  drawSprites();
}

function CoronavirusCells() {

 

    if (World.frameCount % 15 === 0) { 
      var Coronavirus = createSprite(200,0,20,20);  
       var rand = Math.round(random(1,4));
      Coronavirus.scale = 0.20;
      Coronavirus.x = Math.round(random(10,1200));
      Coronavirus.velocityY = 5;
      Coronavirus.lifetime = 145;
      Coronavirus.addImage(coronagroup);
      CovidGroup.add(Coronavirus);
    }
  
  
  
}

function Reset(){

  gameState = PLAY;
  GameOver.visible = false;
  reset.visible = false;
  girl1.x = 0;

  //CovidGroup.destroyEach();

  count = 3;
  
}

function YouWin(){
  youwin.visible = true;
  reset.visible = true;
}

