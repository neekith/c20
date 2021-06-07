var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 80, 30);
  fixedrect.shapeColor="green"
  movingrect=createSprite(200,200,50,80);
  movingrect.shapeColor="green"
 }

 function draw() {
  background("black");  
 movingrect.x= mouseX;
 movingrect.y=mouseY;
 if(movingrect.x-fixedrect.x< movingrect.width/2+fixedrect.width/2 &&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
  fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.height/2
  )
 {
 movingrect.shapeColor="red";
 fixedrect.shapeColor="red";
 }
 else{
  movingrect.shapeColor="blue";
  fixedrect.shapeColor="#27371E";

 }
  drawSprites();
}