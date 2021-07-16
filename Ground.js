class Ground{
    constructor(x,y,width,height){
        let options={
            isStatic:true
        }
      this.body=Bodies.rectangle(x,y,width,height,options)  
      this.width=width
      this.height=height
      World.add(world,this.body)
    }
    show(){
      var pos=this.body.position
      push()
      rectMode(CENTER)
      strokeWeight(5)
      stroke("yellow")
      fill("yellow")
      rect(pos.x,pos.y,this.width,this.height)
      pop()  
    }
}