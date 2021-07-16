
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, right, left;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;	

	//Create the Bodies Here.

	ground=new Ground(800,680,1600,10)
	right=new Ground(1100,620,20,120)
	left=new Ground(1350, 620,20, 120)

	var ball_options={
		isStatic:false,
        restitution:0.01,
		friction:0,
		density:1.
	}
	ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20)
 ground.show()
 right.show()
 left.show()

 if(keyCode===UP_ARROW){
 KeyPressed();
 }
 
 drawSprites();
}

function KeyPressed(){

		Matter.Body.applyForce(ball,ball.position,{x:0.75,y:-2.75})
}




