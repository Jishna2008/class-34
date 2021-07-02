// class Chain{
//     constructor(body1,point2){
//         var options={
//             bodyA=body1,
//             pointB=point2,
//             length:100,
//             stiffness:10
//         }
//        this.pointB=point2;
//         this.chain=Constraint.create(options);
//         World.add(myworld,this.chain);
//     }
//     display(){
//         var point1=this.chain.bodyA.position;
//         var point2=this.pointB; 
//         // fill("red");
//         stroke("red");
//         strokeWeight(5);
//         line(point1.x,point1.y,point2.x,point2.y);
//     }
// }
//chain class copied from angrybird
class Chain{
    constructor(body1,point2){
        var options ={
            bodyA:body1,
            pointB:point2,
            stifness:5,
            length:100
        }
       this.chain =Constraint.create(options)
        World.add(myworld,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            stroke("red");
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);}
        }
        fly(){
            this.chain.bodyA=null;
        }
        
               
    }

