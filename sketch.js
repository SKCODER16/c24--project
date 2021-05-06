
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


	Engine.run(engine);

	hammer = new Hammer(200,200);
	ground = new Ground(400,680,800,10)
	stone = new Stone(500,600,70,70)
	rubber = new RubberClass(300,500,40)

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
}



