const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;


function setup() {
	createCanvas(400, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution: 0.95,
	  }

	  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ball1 = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

  ball2 = Bodies.circle(80,200,20,ball_options);
  World.add(world,ball);
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

  ball3 = Bodies.circle(60,200,20,ball_options);
  World.add(world,ball);
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

  ball4 = Bodies.circle(120,200,20,ball_options);
  World.add(world,ball);
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

  ball5 = Bodies.circle(140,200,20,ball_options);
  World.add(world,ball);
  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  })

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  background(51);
  Engine.update(engine);
  
  strokeWeight(2)
  stroke  (255)
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  Engine.update(engine);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function vForce()
{
  Matter.Body.applyForce(ball5,{x:0,y:0},{x:0,y:-0.05});
}