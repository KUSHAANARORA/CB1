
class Paper{
    constructor(x, y,radius) {
        var options = {
            restitution :0.3,
            friction: 0.5,
            isStatic: false
        }
        this.body = Bodies.circle(x, y,radius,options);
        this. radius = radius
        // this.Image = loadImage("images/mango.png")
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
  }
  