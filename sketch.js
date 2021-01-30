
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var hammer
var stone
var sand1,sand2,sand3,sand4,sand5,sand6;
var rubber;
var ground;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(100,100);
	stone = new Stone(500,400,100,100);
	sand1 = new Sand(505,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
	sand6 = new Sand(515,445,10);
	rubber=new Rubber(900,450,70);
	ground = new Ground(600,400,800,15);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 hammer.display();
 stone.display();

 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();

 ground.display();
}



