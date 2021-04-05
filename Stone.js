class Stone{
    constructor(x,y,width,height){
        var Iron_options={
            'restitution':0.8,
            'friction':0.9,
            'density':12
        }
        this.Body = Bodies.rectangle(x,y,width,height,Iron_options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("gray");
        rect(0,0,this.width,this.height);
        pop();
    }
}