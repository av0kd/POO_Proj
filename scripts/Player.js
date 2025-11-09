class Player extends Entidade {
    #speed;
    #running;
    stamina;
    constructor(x, y, cor, hp, speed, size, team){
        super(x, y, cor, hp, speed, size, team);
        this.stamina = 100;
        this.#speed = this.moveSpeed; // moveSpeed vai ser tratado como algo constante enquanto speed vai ser uma variavel.
        this.#running = false;
    }
    

    moveMap() {
        if(frameCount % 30 == 0){
            //console.log("Stamina: "+this.stamina.toFixed(2));
        }
        if(keyIsDown(16) && this.stamina > 0){
            this.moveSpeed = this.#speed * 2;
            this.#running = true;
        } else {
            this.#running = false;
            this.moveSpeed = this.#speed;
        }

        if (this.#running) {
            this.stamina -= 0.07;
        } else if(!this.#running && this.stamina < 100 && !keyIsDown(16)){
            this.stamina += 0.10;
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
        let cooldown = 1;
        if(keyIsDown(70) || keyIsDown(102)){
            let bala = new Projetil(this.getPosX() + this.size/2, this.getPosY() + this.size/2, "red", 10, 20, this.getSightDirection(), "Player");
            municao.push(bala);
        }
    }
    /*
    //gets
    isPlayerRunning() {
        return this.#running == true ? true : false; 
    }*/



    /*getStamina(){
        return this.stamina;
    }*/
}
