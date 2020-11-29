
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200, 200, 15);

	ground = new Ground(750, 490);

	dustbin1 = new Dustbin(1000, 430, 15, 100);
	dustbin2 = new Dustbin(1068, 473, 150, 15);
	dustbin3 = new Dustbin(1145, 430, 15, 100);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();

  dustbin2.display();
  dustbin1.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 45, y: -45});
	}
}
