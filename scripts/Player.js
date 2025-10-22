class Player extends Entidade {
    #speed;
    constructor(x, y, cor, hp, speed, size){
        super(x, y, cor, hp, speed, size);
        this.stamina = 100;
        this.#speed = this.moveSpeed;
    }
    
    run(){
        this.running == true;
    }
    moveMap() {
        console.log(this.moveSpeed);
        if(keyIsDown(16)){
           this.moveSpeed = this.#speed * 2;
        } else {
            this.moveSpeed = this.#speed;
        }

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
