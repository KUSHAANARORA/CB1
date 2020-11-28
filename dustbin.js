class Dustbin {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(390,610,20,100,options);
      World.add(world, this.body);
      this.body1 = Bodies.rectangle(500,650,200,20,options);
      World.add(world, this.body1);
      this.body2 = Bodies.rectangle(610,610,20,100,options);
      World.add(world, this.body2);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y,20,100);
      var pos1 =this.body1.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos1.x, pos1.y,200,20);
      var pos2 =this.body2.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos2.x, pos2.y,20,100);
    }
  };
