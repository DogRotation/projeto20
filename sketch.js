const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



let engine;
let world;
var ground, ground2;
var cube;



function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic: true
  }
    ground = Bodies.rectangle(200,350,400,15, groundOptions);
    World.add(world, ground);

    ground2 = Bodies.rectangle(200,50,400,15, groundOptions);
    World.add(world, ground2);

  var cubeOptions = {
    restitution: 2.5
  }

    cube = Bodies.rectangle(200,80,30,30, cubeOptions);
    World.add(world, cube);

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){
 background (51);
 Engine.update(engine);

  fill ("blue");
 rect(ground.position.x,ground.position.y,400,15);
  fill("yellow");
 rect(cube.position.x,cube.position.y,30,30);
  fill("red");
  rect(ground2.position.x,ground2.position.y,400,15);

}

