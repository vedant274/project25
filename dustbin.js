class dustbin{
    constructor(x,y,height,angle){
       var options = {
           isStatic:true,
           restitution:0.6,
           friction:1.3,
           density:1.2,
       }
    this.body = Bodies.rectangle(x,y,10,height,options)  
    this.width=10
    this.height=height
    Matter.Body.setAngle(this.body,angle)
    //Matter.Body.setStatic(this.body,true);
    World.add(world,this.body)
  
   }
  
  display(){
      var pos = this.body.position
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      strokeWeight(4)
      stroke("red")
      fill(255)
      rect(0,0,this.width,this.height)
      pop()
  
  }
  }