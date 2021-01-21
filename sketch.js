
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var left, right, bottem;

function preload(){
  
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	left = new Dustbin(900, 660, 10, 60);
	right = new Dustbin(1100, 660, 10, 60);
	bottem = new Dustbin(1000, 685, 200, 10);
	paper = new Paper(150, 300, 20);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground.display();
  left.display();
  right.display();
  bottem.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-85});
	}
	
}



