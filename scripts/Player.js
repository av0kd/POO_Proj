class Player extends Entidade {
    // Irei adicionar o Hp do player só para ilustração, iremos decidir se vamos deixar ele aqui depois.
    constructor(x, y, cor, hp, speed){
        super(x, y, cor, hp, speed);
    }

    moveMap() {
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
