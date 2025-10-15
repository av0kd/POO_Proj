class Inimigo extends Entidade {
    constructor(x, y, cor, hp, speed, size){
        super(x, y, cor, hp, speed, size);
        this.alive = true;
        this.radius = 10;
    }


    distanciaDoPlayer(player){
        distancia_x = Math.abs(player.x - this.x);
        distancia_y = Math.abs(player.y - this.y);
        quadradoDistancia = Math.sqrt(Math.pow(distancia_x, 2) + Math.pow(distancia_y, 2));

        return quadradoDistancia;
    }

    dano(player){
        player.hp -= 10;
    }

    atacar(player){
        if(this.distanciaDoPlayer(player) <= this.radius){
            dano(player);
        }
    }

}
