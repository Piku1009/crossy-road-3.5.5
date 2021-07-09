class Player{
    constructor(){
        this.spt = createSprite(width/2,height-25,30,30);
        this.spt.addAnimation("player",playerAnimation);
        this.spt.scale = 0.05;
    }

    moveLeft(){
        this.spt.x=this.spt.x-10;
    }
    moveRight(){
        this.spt.x=this.spt.x+10;
    }
    moveUp(){
        this.spt.y=this.spt.y-10;
    }
    moveDown(){
        this.spt.y=this.spt.y+10;
    }
  
    


}

