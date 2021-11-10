const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1;
var log1;
var bird1;

function setup(){
    createCanvas(1703,775);
    engine = Engine.create();
    world = engine.world;

   // box1 = new Box(275,60,50,50);
    log1 = new Log(260,60,50,PI/4);
    pig1 = new Pig(285,50);
    bird1 = new Bird(200,100,100,100)
    ground = new Ground(851,height,1703,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
   // box1.display();
    pig1.display();
    log1.display();
    bird1.display();
    ground.display();
}