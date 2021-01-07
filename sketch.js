
var d1, d2, d3, p1, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    d1 = new dustbin(650,653,150,90);
	d2 = new dustbin(580,605,100,PI/4);
	d3 = new dustbin(720,605,100,PI/4);
	p1 = new paper (50,653,10,90);
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	Engine.run(engine);
  
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,restitution:0.6, friction:1.3, density:1.2,});
 	World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  d1.display();
  d2.display();
  d3.display();
  p1.display();
  drawSprites();
 
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
		Matter.Body.setStatic(p1.body,false);
		Matter.Body.applyForce(p1.body,p1.body.position,{x:5.25,y:-5.25});
       // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   
       
     }
   }





