class Inimigo extends Entidade {

    directs = [0,0,0,0];
    canChangeDirection = true;
    lastX;
    lastY;
    inicialX;
    inicialY;
     

    constructor(x, y, cor, hp, speed, size, team){
        super(x, y, cor, hp, speed, size, team);
        this.radius = ((this.size*Math.sqrt(2))/2);
        this.lastX = Math.floor(x/160);
        this.lastY = Math.floor(y/160);
        this.inicialX = this.lastX;
        this.inicialY = this.lastY;
        this.setSightDirection(0);
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
        let cQuadX = this.getPosX() > 160? this.getPosX() : 162;
        let cQuadY = this.getPosY() > 160? this.getPosY() : 162;
        if(direc == "U" && Math.floor((cQuadY+this.size+20)/160) != this.lastY){ 
            
            this.lastY = Math.floor(cQuadY/160);
            this.lastX = Math.floor(cQuadX/160);

            if(this.directs[0] == 1 && this.DirOption(0) == 0){
                this.moveTo(0);
            }
            else if(this.directs[0] == 1 && this.DirOption(0) != 0){
                let random = Math.floor(Math.random()*2);
                random == 0?this.moveTo(0):this.moveTo(this.DirOption(0));
            }
            else if(this.directs[0] == 0 && this.DirOption(0) != 0){
                this.moveTo(this.DirOption(0));
            }
            else{
                this.moveTo(1);
            }
        }
        //possiveis movimentos olhando pra baixo
        else if(direc == "D" && (Math.floor((cQuadY-20)/160) != this.lastY)){ // || Math.floor((cQuadY-20)/160) == this.inicialY)){ 
            this.lastY = Math.floor(cQuadY/160);
            this.lastX = Math.floor(cQuadX/160);

            if(this.directs[1] == 1 && this.DirOption(1) == 1){
                this.moveTo(1);
            }
            else if(this.directs[1] == 1 && this.DirOption(1) != 1){
                let random = Math.floor(Math.random()*2);
                random == 0?this.moveTo(1):this.moveTo(this.DirOption(1));
            }
            else if(this.directs[1] == 0 && this.DirOption(1) != 1){
                this.moveTo(this.DirOption(1));
            }
            else{
                this.moveTo(0);
            }
            
        }
        //possiveis movimentos olhando pra esquerda
        else if(direc == "L" && Math.floor((cQuadX+this.size+20)/160) != this.lastX){ 
            this.lastX = Math.floor(cQuadX/160);
            this.lastY = Math.floor(cQuadY/160);
            if(this.directs[2] == 1 && this.DirOption(2) == 2){
                this.moveTo(2);
            }
            else if(this.directs[2] == 1 && this.DirOption(2) != 2){
                let random = Math.floor(Math.random()*2);
                random == 0?this.moveTo(2):this.moveTo(this.DirOption(2));
            }
            else if(this.directs[2] == 0 && this.DirOption(2) != 2){
                this.moveTo(this.DirOption(2));
            }
            else{
                this.moveTo(3);
            }
            
        }
        //possiveis movimentos olhando pra direita
        else if (direc == "R" && Math.floor((cQuadX-20)/160) != this.lastX){ 
            this.lastX = Math.floor(cQuadX/160);
            this.lastY = Math.floor(cQuadY/160);
            if(this.directs[3] == 1 && this.DirOption(3) == 3){
                this.moveTo(3);
            }
            else if(this.directs[3] == 1 && this.DirOption(3) != 3){
                let random = Math.floor(Math.random()*2);
                random == 0?this.moveTo(3):this.moveTo(this.DirOption(3));
            }
            else if(this.directs[3] == 0 && this.DirOption(3) != 3){
                this.moveTo(this.DirOption(3));
            }
            else{
                this.moveTo(2);
            }
            
        }
        else{
            this.moveTo(this.getDirectionAsNum());
        }
    }

    moveTo(dirTo){
        this.canChangeDirection = false;
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
        let whereToGo = [];
        let oposite = indx == 0?1:indx == 1?0:indx == 2?3:2;
        for(let i = 0; i < this.directs.length; i++){
            if(i == indx || i == oposite){
                continue;
            }
            if(this.directs[i] != 0){
                
                whereToGo.push(i);
            }
        }
        return whereToGo.length == 0?indx:whereToGo[Math.floor(Math.random()*whereToGo.length)];
    }


    
}


//Problema: Como o jogo percorre o vetor de inimigos 1 por 1 e exibe eles em ordem de aparição (Inimigos que existem a mais tempo são exibidos primeiro)
//  Inimigos que forem criados depois ficarão "embaixo" dos inimigos que foram criados anteriormente.
// Futuramente adicionar um atributo 'prioridade' para cada tipo de inimigo, e organizar o vetor em forma decrescente de prioridade.
//  Assim o jogo irá exibir os inimigos com maior prioridade em cima daqueles com menor prioridade

//Por exemplo, inimigos fortes que o player precisa ver antes dos mais fracos terão prioridade maior, a fim de não serem escondidos por outros.

//^Isso tudo será inútil se os inimigos tiverem colisão!

/*

getPossibleDirections(){
        let edges = [
            quadrante(this.getPosY())-this.size,//0 | topo-1
            quadrante(this.getPosY()),//1 | topo
            quadrante(this.getPosY())+this.size,//2  | baixo
            quadrante(this.getPosY())+this.size*2,//3  | baixo+1
            quadrante(this.getPosX())-this.size,//4 || esquerda -1 
            quadrante(this.getPosX()),//5  | esquerda
            quadrante(this.getPosX())+this.size,//6    |  direita
            quadrante(this.getPosX())+this.size*2//7   | direita +1
        ];
        
        //se o quadrado de cima é caminho
        if((mapConfig[edges[0]][edges[5]] == 1 && mapConfig[edges[0]][edges[6]] == 1) ||
           (mapConfig[edges[1]][edges[5]] == 1 && mapConfig[edges[1]][edges[6]] == 1) //&& this.canMoveUp
        ){
            this.directs[0] = 1;
        }
        else{this.directs[0] = 0;}

        //se o quadrado de baixo é caminho
        if((mapConfig[edges[2]][edges[5]] == 1 && mapConfig[edges[2]][edges[6]] == 1) ||
           (mapConfig[edges[3]][edges[4]] == 1 && mapConfig[edges[3]][edges[5]] == 1) //&& this.canMoveDown
        ){
            this.directs[1] = 1;
        }
        else{this.directs[1] = 0;}

        //se o quadrado da esquerda é caminho
        if((mapConfig[edges[1]][edges[4]] == 1 && mapConfig[edges[1]][edges[5]] == 1) ||
           (mapConfig[edges[2]][edges[4]] == 1 && mapConfig[edges[2]][edges[5]] == 1) //&&  this.canMoveLeft
        ){
            this.directs[2] = 1;
        }
        else{this.directs[2] = 0;}

        //se o quadrado da direita é caminho
        if((mapConfig[edges[2]][edges[6]] == 1 && mapConfig[edges[2]][edges[7]] == 1) ||
           (mapConfig[edges[3]][edges[6]] == 1 && mapConfig[edges[3]][edges[7]] == 1) //&&  this.canMoveRight
        ){
            this.directs[3] = 1;
        }
        else{this.directs[3] = 0;}
    }

    */