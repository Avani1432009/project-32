const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var button;
var blower;
var blowerMouth;
var ball;
var angle = 60;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;

  
  var options ={
    isStatic: true
  };

  button = createButton("Click to Blow");
  button.position(width / 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

  ball = Bodies.circle(350,10,20);
  World.add(world,ball);

  blowerMouth = Bodies.rectangle(200,280,10,10,options);
  World.add(world,blowerMouth);//200,280

  blower = Bodies.rectangle(300,200,100,20,options);
  World.add(world,blower);//300,200
}

function draw() 
{
  background("green");
  Engine.update(engine);
  Matter.Body.rotate(blowerMouth,angle);
  
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(blowerMouth.position.x,blowerMouth.position.y,100,20);
  rect(blower.position.x,blower.position.y,100,100);
  
}

function blow(){
      Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
  
}
