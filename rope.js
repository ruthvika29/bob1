class rope {

    constructor(body1,body2,offsetX,offsetY)
    {

    this.offsetX=offsetX;
    this.offsetY=offsetY;
   var options={
    bodyA:body1,
    bodyB:body2,
    point:{x:this.offsetX,y:this.offsetY}

   }
this.rope=Matter.Constraint.create(options);
   World.add(world,this.rope)

    }
   display(){

  var point1=this.rope.bodyA.position;
  var point2=this.rope.bodyB.position;

strokeWeight(5);
fill("white")
var anchor1X=point1.x;
var anchor1Y=point1.y;

var anchor2X=point2.x + this.offsetX ;
var anchor2Y=point2.y + this.offsetY; 

line(anchor1X,anchor1Y,anchor2X,anchor2Y);
   } 



};
