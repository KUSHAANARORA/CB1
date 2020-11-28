
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(400,680,800,10)
	paper = new Paper(100,500,25)
	dustbin = new Dustbin()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  dustbin.display()
  paper.display()
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {


		Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});

	}
}



