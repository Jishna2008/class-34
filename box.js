// class Box{
//     constructor(x,y,width,height){}
// }
class Box{
    constructor(x,y,width,height){
        var box_Options={
           restituion:0.8,
           density:1.2,
           friction:1.0

          };
           this.body=Bodies.rectangle(x,y,width,height,box_Options);
           this.width=width;
           this.height=height;
           
           World.add(myworld,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();;
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        var colr=random(0,156);
        var colg=random(50,200);
        var colb=random(60,100)
        fill(colr,colg,colb)
        rect(0,0,this.width,this.height);
        pop();
    }
}