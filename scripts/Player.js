class Player extends Entidade {
    
    constructor(x, y, cor, hp, speed, size){
        super(x, y, cor, hp, speed, size);
        this.stamina = 100;
    }
    
    run(){
        this.running == true;
    }

    moveMap() {
        /*let speed = this.moveSpeed;
        if(keyIsDown(16)){
            console.log("Apertei shift");
            //console.log(this.speed);
        }*/

        if (keyIsDown(65)||keyIsDown(LEFT_ARROW)) {
            this.moveLeft();
        }

        if (keyIsDown(68) ||keyIsDown(RIGHT_ARROW)) {
            this.moveRight();
        }

        if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
            this.moveUp();
        }

        if (keyIsDown(83)||keyIsDown(DOWN_ARROW)) {
            this.moveDown();
        }
    }
}
