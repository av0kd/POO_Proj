class Inimigo extends Entidade {

    directs = [0,0,0,0];
    canMove = true;

    constructor(x, y, cor, hp, speed, size){
        super(x, y, cor, hp, speed, size);
        this.radius = ((this.size*Math.sqrt(2))/2);
    }

    
    #distanciaDoPlayer(player){
        let distancia_x = Math.abs(player.getPosX() - this.getPosX());
        let distancia_y = Math.abs(player.getPosY() - this.getPosY());
        let quadradoDistancia = Math.sqrt(Math.pow(distancia_x, 2) + Math.pow(distancia_y, 2));

        return quadradoDistancia;
    }

    atacar(player){
        //console.log("Posição X:" + player.getPosX() + " Posição Y: " + player.getPosY() + " Distancia: " + this.#distanciaDoPlayer(player));
        if(this.#distanciaDoPlayer(player) <= this.radius){
            console.log("AIAI\n");
            this.dano(player);
        }
    }

    randomMove(){ //método temporário para o objeto se mecher em uma direção aleatória
        let direc = this.getSightDirection();
        if(this.canMove){
            this.canMove = false;
            //possiveis movimentos olhando pra cima
            if(direc == "U"){ 
                if(this.directs[0] == 1 && this.DirOption(0) == 0){
                    this.moveTo(0);
                }
                else if(this.directs[0] == 1 && this.DirOption(0) != 0){
                    let random = Math.floor(Math.random()*2);
                    random = 0?this.moveTo(0):this.moveTo(this.DirOption(0));
                }
                else if(this.directs[0] == 0 && this.DirOption(0) != 0){
                    this.moveTo(this.DirOption(0));
                }
                else{
                    this.moveTo(1);
                }
            }
            //possiveis movimentos olhando pra baixo
            if(direc == "D"){ 
                if(this.directs[1] == 1 && this.DirOption(1) == 0){
                    this.moveTo(1);
                }
                else if(this.directs[1] == 1 && this.DirOption(1) != 0){
                    let random = Math.floor(Math.random()*2);
                    random = 0?this.moveTo(1):this.moveTo(this.DirOption(1));
                }
                else if(this.directs[1] == 0 && this.DirOption(1) != 0){
                    this.moveTo(this.DirOption(1));
                }
                else{
                    this.moveTo(0);
                }
            }
            //possiveis movimentos olhando pra esquerda
            if(direc == "L"){ 
                if(this.directs[2] == 1 && this.DirOption(2) == 0){
                    this.moveTo(2);
                }
                else if(this.directs[2] == 1 && this.DirOption(2) != 0){
                    let random = Math.floor(Math.random()*2);
                    random = 0?this.moveTo(2):this.moveTo(this.DirOption(2));
                }
                else if(this.directs[2] == 0 && this.DirOption(2) != 0){
                    this.moveTo(this.DirOption(2));
                }
                else{
                    this.moveTo(3);
                }
            }
            //possiveis movimentos olhando pra direita
            if(direc == "R"){ 
                if(this.directs[3] == 1 && this.DirOption(3) == 0){
                    this.moveTo(3);
                }
                else if(this.directs[3] == 1 && this.DirOption(3) != 0){
                    let random = Math.floor(Math.random()*2);
                    random = 0?this.moveTo(3):this.moveTo(this.DirOption(3));
                }
                else if(this.directs[3] == 0 && this.DirOption(3) != 0){
                    this.moveTo(this.DirOption(3));
                }
                else{
                    this.moveTo(2);
                }
            }


        }
    }

    moveTo(dirTo){
        for(let i = 0; i < 160/this.moveSpeed;i++){
            if(dirTo == 0){
                this.moveUp();
            }
            if(dirTo == 1){
                this.moveDown();
            }
            if(dirTo == 2){
                this.moveLeft();
            }
            if(dirTo == 3){
                this.moveRight();
            }
        }
        this.canMove = true;
    }


    getPossibleDirections(){
        let quadX = quadrante(this.getPosX());
        let quadY = quadrante(this.getPosY());
        
        //se o quadrado de cima é caminho
        if(mapConfig[quadY-1][quadX] == 1){
            this.directs[0] = 1;
        }
        else{this.directs[0] = 0;}

        //se o quadrado de baixo é caminho
        if(mapConfig[quadY+1][quadX] == 1){
            this.directs[1] = 1;
        }
        else{this.directs[1] = 0;}

        //se o quadrado da esquerda é caminho
        if(mapConfig[quadY][quadX-1] == 1){
            this.directs[2] = 1;
        }
        else{this.directs[2] = 0;}

        //se o quadrado da direita é caminho
        if(mapConfig[quadY][quadX+1] == 1){
            this.directs[3] = 1;
        }
        else{this.directs[3] = 0;}
    }

    DirOption(indx){
        let oposite = indx == 0?1:indx == 1?0:indx == 2?3:2;

        for(let i = 0; i < this.directs.length; i++){
            if(i == indx || i == oposite){
                continue;
            }
            if(this.directs[i] != 0){
                return i;
            }
        }
        return 0;
    }


    
}


//Problema: Como o jogo percorre o vetor de inimigos 1 por 1 e exibe eles em ordem de aparição (Inimigos que existem a mais tempo são exibidos primeiro)
//  Inimigos que forem criados depois ficarão "embaixo" dos inimigos que foram criados anteriormente.
// Futuramente adicionar um atributo 'prioridade' para cada tipo de inimigo, e organizar o vetor em forma decrescente de prioridade.
//  Assim o jogo irá exibir os inimigos com maior prioridade em cima daqueles com menor prioridade

//Por exemplo, inimigos fortes que o player precisa ver antes dos mais fracos terão prioridade maior, a fim de não serem escondidos por outros.

//^Isso tudo será inútil se os inimigos tiverem colisão!