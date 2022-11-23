

class Cuchillas{
constructor(x,y,width,height){
let options={
    isStatic:true
};

    this.body=Bodies.rectangle(x,y,width,height,options);

    this.width=width;
    World.add(world,this.body)


}
show(){

    var pos = this.body.position
    Matter.Body.rotate(this.body,angle)

    push();
    rectMode(CENTER);
    stroke(255);
    fill(12);

    translate(pos.x,pos.y);
    rotate(angle);
    rect(0,0, this.width, this.height)

    //rect(pos.x,)
    pop();
    angle += 0.1;







}

}