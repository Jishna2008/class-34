const Engine = Matter.Engine;
const Bodies =Matter.Bodies;
const World =Matter.World;
const Constraint=Matter.Constraint;

var myengine,myworld;
var ground,bob,chain;
var boxes=[];
function setup() {
  var canvas=createCanvas(800,400);
  myengine=Engine.create();
  myworld=myengine.world;
 
  ground= new Ground(400,380,800,20);
  bob=new Bob(400,200,30);
chain=new Chain(bob.body,{x:250,y:50});

  for(i=400;i<=750;i=i+50){
 for(j=50;j<=300;j=j+50){
boxes.push(new Box(i,j,50,50))
 }
  }
}

function draw() {

  background("yellow")
  Engine.update(myengine);
 
  ground.display();
  bob.display();
 chain.display();
  for(var i=0;i<boxes.length;i++){
    boxes[i].display()
  }

  drawSprites();
 
}