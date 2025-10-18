class Inimigo extends Entidade {
    radius = 10;
    constructor(x, y, cor, hp, speed, size){
        super(x, y, cor, hp, speed, size);
    }


    #distanciaDoPlayer(player){
        let distancia_x = Math.abs(player.x - this.x);
        let distancia_y = Math.abs(player.y - this.y);
        let quadradoDistancia = Math.sqrt(Math.pow(distancia_x, 2) + Math.pow(distancia_y, 2));

        return quadradoDistancia;
    }

    atacar(player){
        if(this.#distanciaDoPlayer(player) <= this.radius){
            console.log("AIAI\n");
            this.dano(player);
        }
    }

    randomMove(){ //método temporário para o objeto se mecher em uma direção aleatória
        let aleatorio = floor((Math.random() * 4 + 0.99));
        if(frameCount % 30 == 0){
            if(aleatorio == 1){
                this.moveUp();
            } else if(aleatorio == 2){
                this.moveDown();
            } else if(aleatorio == 3){
                this.moveLeft();
            } else {
                this.moveRight();
            }
        }
    }
}
