
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var box1, box2, box3;
//var box1Body, box2Body, box3Body;
var world, engine;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	background(0);
	
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150, 600, 20, 20);

	ground = new Ground(width/2, 650, width, 20);

	box1 = new Dustbin(600, 630, 200, 20);
	box2 = new Dustbin(700, 590, 20, 100);
	box3 = new Dustbin(500, 590, 20, 100);

	/*box1=createSprite(600, 630, 200, 20);
	box1.shapeColor=color(255, 0, 0);
	box1Body = Bodies.rectangle(600, 630 , 200, 20, {isStatic:true});
	World.add(world, box1Body);
 
	box2=createSprite(700, 590, 20, 100);
	box2.shapeColor=color(255, 0, 0);
	box2Body = Bodies.rectangle(700, 590 , 20, 100, {isStatic:true});
	World.add(world, box2Body);
 
	box3=createSprite(500, 590, 20, 100);
	box3.shapeColor=color(255, 0, 0);
	box3Body = Bodies.rectangle(500, 590 , 20, 100, {isStatic:true});
	World.add(world, box3Body);*/

	Engine.run(engine);

}




function draw() {
	Engine.update(engine);
	background(0);
	drawSprites();
	paper.display();
	ground.display();
	box1.display();
	box2.display();
	box3.display();
  }
  
  function keyPressed() {
   if (keyCode === UP_ARROW) {
	  // Look at the hints in the document and understand how to make the package body fall only on
	  Matter.Body.applyForce(paper.body, paper.body.position,{x:35,y:-35})
	}
  }