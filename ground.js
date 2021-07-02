class Ground{
    constructor(x,y,width,height){
        var ground_Options={
            isStatic:true
          };
           this.body=Bodies.rectangle(x,y,width,height,ground_Options);
           this.width=width;
           this.height=height;
           World.add(myworld,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red")
        rect(pos.x,pos.y,this.width,this.height);
    }
}