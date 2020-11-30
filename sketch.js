
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, stone,ground, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(160,550,25);
	ground = new Ground(900,700,2000,20);
	tree = new Tree(1100,400,30,100);
	mango1 = new Mango(1200,250,25);
	mango2 = new Mango(1080,200,25);
	mango3 = new Mango(1300,280,25);
	mango4 = new Mango(1300,340,25);
	mango5 = new Mango(1200,200,25);
	mango6=new Mango(1100,250,25);
	mango7= new Mango(1000,200,25);
	mango8=new Mango(900,340,25);
	mango9=new Mango(1200,370,25);
	boyShot = new Shot(stone.body,{x:140,y:500});
	
	
	boy = createSprite(200,550);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("red");
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  boyShot.display();
  stone.display();
  stroke ("green")
  textSize(30);
  text("press space key for second atempt ",100,100)
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9)
 

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    boyShot.fly();
}
function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		boyShot.attach(stone.body);
	}
}





