
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbinLeft,dustbinRight,dustbinDown,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paper = new Paper(150,600,40,40 );
   ground = new Ground(650,610,1400,10,);
   dustbinDown = new Dustbin(1100,595,200,20);
   dustbinLeft = new Dustbin(1000,550,20,100);
   dustbinRight = new Dustbin(1200,550,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  keyPressed();

  paper.display();
  ground.display();
  dustbinDown.display();
  dustbinLeft.display();
  dustbinRight.display();

  drawSprites();
 
}

function keyPressed(){
   if (keyCode===UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
     
   }
}