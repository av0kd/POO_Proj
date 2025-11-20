class Player extends Entidade {
    #speed;
    #running;
    stamina;
    canShoot;
    lastShot;
    soulsCollected;
    powerUps;

    constructor(x, y, cor, hp, speed, size, team){
        super(x, y, cor, hp, speed, size, team);
        
        this.#speed = this.moveSpeed; // moveSpeed vai ser tratado como algo constante enquanto speed vai ser uma variavel.
        this.#running = false;
        this.lastShot = 0;
        this.canShoot = true;
        this.soulsCollected = 0;
        this.powerUps = [0,0,0];
        this.maxStamina = 50;
        this.stamina = this.maxStamina;
    }
    

    moveMap() {
        this.useFX();

        if(keyIsDown(16) && this.stamina > 0){
            this.powerUps[1] > 0?this.moveSpeed = this.#speed * 2.5:this.moveSpeed = this.#speed * 1.4;
            this.#running = true;
        } else {
            this.#running = false;
            this.powerUps[1] > 0?this.moveSpeed = this.#speed*1.4:this.moveSpeed = this.#speed;
        }

        if (this.#running) {
            this.stamina -= 0.07;
        } else if(!this.#running && this.stamina < this.maxStamina && !keyIsDown(16)){
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
        if((keyIsDown(70) || keyIsDown(102)) && this.canShoot){
            this.canShoot = false;
            let bala = new Projetil(this.getPosX() + this.size/2, this.getPosY() + this.size/2, "red", 10, 20, this.getSightDirection(), "Player");
            municao.push(bala);
            this.lastShot = 0
        }
    }

    shootHaste(){
        if(!this.canShoot){
            this.lastShot < 35?this.lastShot++:this.canShoot = true;
        }
    }

    powerUpActivated(){
        for(let i = 1; i < this.powerUps.length; i++){
            return this.powerUps[i] > 0?true:false;
        }
    }

    useFX(){
        if(this.powerUps[0] > 0){
            this.soulsCollected++;
            this.powerUps[0]--;
        }

        if(this.powerUps[1] > 0){
            this.stamina = this.maxStamina;
            this.powerUps[1]--;
        }

        if(this.powerUps[2] > 0){
            this.hp = this.maxHP;
            this.powerUps[2]--;
        }
    }

}