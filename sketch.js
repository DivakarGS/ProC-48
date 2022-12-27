var Doreamon;
var DoreamonImg;
var EnemyGroup;
var EnemyImg;


function preload(){
    DoreamonImg = loadImage("assets/doraemon.png");
    EnemyImg = loadImage("assets/Enemy.png");


}

function setup(){
  createCanvas(1000,500);
  Doreamon = createSprite(100,200,50,50);
  Doreamon.addImage("Doreamon",DoreamonImg);
  Doreamon.scale = 0.5;

}

function draw(){
  
keycontrols();
spawnEnemies();


 drawSprite();
}
function keycontrols(){
  if(keyDown(UP_ARROW)){
    Doreamon.y = Doreamon.y-5;
  }
  if(keyDown(DOWN_ARROW)){
    Doreamon.y = Doreamon.y+5;
  }
  if(keyDown(LEFT_ARROW)){
    Doreamon.x = Doreamon.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    Doreamon.x = Doreamon.x+5;
  }
}

function spawnEnemies(){
 if(framecount%100==0){ 
  Enemy = createSprite(100,100,50,50);
  EnemyGroup.add(Enemy)
  Enemy.addImage("Enemy",EnemyImg);
  Enemy.scale = 0.5;
  Enemy.velocityX = random(1,5);
}
}

function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
  &&object2.x-object1.x<object2.width/2+object1.width/2
  &&object1.y-object2.y<object2.height/2+object1.height/2
  &&object2.y-object1.y<object2.height/2+object1.height/2
  ){
    
  }
}