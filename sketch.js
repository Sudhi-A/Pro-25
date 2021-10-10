const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world


function setup() {
	createCanvas(1600,700)
    engine=Engine.create()
	world=engine.world
	invisibleGround=new Ground(50,640,100,10)
	ground=new Ground(700,690,1600,20)
	dustbin=new Dustbin(1160,670)
    
	paper=new Paper(50,300,20)
	
}
function draw() {
	background(0,0,255)
	Engine.update(engine)
	

	paper.display()
	ground.display()
	dustbin.display()
	
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:24,y:-24});
    
  	}
}





