var bob1,bob2,bob3,bob4,bob5,roof1,rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roof1= new roof(350,100,300,30);
  World.add(world,roof1);
     
	bob1= new bob(250,300);
	bob2= new bob(300,300);
    bob3= new bob(350,300);
    bob4= new bob(400,300);
    bob5= new bob(450,300);

  rope1=new rope(bob1.body,roof1.body,-100,0);
  World.add(world,rope1);

  rope2=new rope(bob2.body,roof1.body,-50,0);
  World.add(world,rope1);

  rope3=new rope(bob3.body,roof1.body,0,0);
  World.add(world,rope1);

  rope4=new rope(bob4.body,roof1.body,+50,0);
  World.add(world,rope1);

  rope5=new rope(bob5.body,roof1.body,+100,0);
  World.add(world,rope1);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0});
  }
}


