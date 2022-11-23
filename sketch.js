
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var cuchilla
var angle = 0
var cuc,cuc1,cuc2,cuc3;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

  
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
   cuc = new Cuchillas(50,370,50,30);
   cuc1 = new Cuchillas(150,370,50,30);
   cuc2 = new Cuchillas(250,370,50,30)
   cuc3 = new Cuchillas(350,370,50,30)
      //suelo
  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

//cuchilla
  cuchilla = Bodies.rectangle(50,200,200,10,ground_options)
World.add(world,cuchilla)

//pelota
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 //Matter.Body.rotate(cuchilla,angle);
 //push();
//translate(cuchilla.position.x,cuchilla.position.y);
//rotate(angle);
//rect(0,0,200,20);
// pop();

//angle+=0.1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
  cuc.show();
  cuc1.show();
  cuc2.show();
  cuc3.show();


  //  rect(cuchilla.position.x,cuchilla.position.y,200,20)
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.07});
}




