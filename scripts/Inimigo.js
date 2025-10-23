class Inimigo extends Entidade {
    constructor(x, y, cor, hp, speed, size){
        super(x, y, cor, hp, speed, size);
        this.radius = this.size/2;
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

//Problema: Como o jogo percorre o vetor de inimigos 1 por 1 e exibe eles em ordem de aparição (Inimigos que existem a mais tempo são exibidos primeiro)
//  Inimigos que forem criados depois ficarão "embaixo" dos inimigos que foram criados anteriormente.
// Futuramente adicionar um atributo 'prioridade' para cada tipo de inimigo, e organizar o vetor em forma decrescente de prioridade.
//  Assim o jogo irá exibir os inimigos com maior prioridade em cima daqueles com menor prioridade

//Por exemplo, inimigos fortes que o player precisa ver antes dos mais fracos terão prioridade maior, a fim de não serem escondidos por outros.

//^Isso tudo será inútil se os inimigos tiverem colisão!