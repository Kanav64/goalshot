
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var goal1
var goal2
var keyPressed
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

var ball_options={
	isStatic:false,
	restitution:1,
	friction:0,
	density:1.2

}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(100,100,20 ,ball_options)
	World.add(world, ball)
	ground =new Ground(400,650,800,20);
    goal1=new Ground(500,600,10,70)
	goal2=new Ground(700,600,10,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 goal1.show()
 goal2.show()
  ground.show()
  ellipse(ball.position.x, ball.position.y,20)
  Engine.run(engine);
  fill(1)
  drawSprites();
}
  function keyPressed(){
	if(keyDown("SPACE")){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
	

	
	  }

 



