class Bob{
    constructor(x,y,radius){
        var options={
            'restituion':0.8,
            'friction':1.0,
            'density':2.5
        }
        this.body=Bodies.circle(x,y,radius,this.options);
        this.r=radius;
        World.add(myworld,this.body)
    }
    display(){
        var pos=this.body.position;
       // var angle=this.body.angle;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}