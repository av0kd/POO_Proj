  class Entidade {
    #x;
    #y;
    #hp;
    #sightDirection = "D";
    constructor(x, y, cor, hp, speed, size, team){
     this.#x = Number(x);
     this.#y = Number(y);
     this.cor = cor;
     this.alive = true;
     this.#hp = parseFloat(hp);
     this.moveSpeed = parseFloat(speed);
     this.size = parseInt(size);
     this.team = team;
    }

    show(){
        if(this.cor == "player"){
            switch(this.#sightDirection){
                case("U"):
                    image(playerImgU, this.getPosX(), this.getPosY(), this.size, this.size);
                    break;
                case("D"):
                    image(playerImgD, this.getPosX(), this.getPosY(), this.size, this.size);
                    break;
                case("L"):
                    image(playerImgL, this.getPosX(), this.getPosY(), this.size, this.size);
                    break;
                case("R"):
                    image(playerImgR, this.getPosX(), this.getPosY(), this.size, this.size);
                    break;
            }
        }
        else{
            fill(this.cor);
            square(this.getPosX(), this.getPosY(), this.size);
        }
        
    }

    //Métodos de movimento --- Incrementam ou decrementam de acordo com o atributo moveSpeed do objeto
    
    moveUp(){
        if(!this.alive){
            return;
        } else {
            this.setSightDirection("U");
            this.#y -= this.moveSpeed*this.canMoveUp();
        }
    }

    moveDown(){
        if(!this.alive){
            return;
        } else {
            this.setSightDirection("D");
            this.#y += this.moveSpeed*this.canMoveDown();
        }
    }

    moveLeft(){
        if(!this.alive){
            return;
        } else {
            this.setSightDirection("L");
            this.#x -= this.moveSpeed*this.canMoveLeft();
        }
    }

    moveRight(){
        if(!this.alive){
            return;
        } else {
            this.setSightDirection("R");
            this.#x += this.moveSpeed*this.canMoveRight();
        }
    }


    //Métodos de verificar posições --- analisam a posição no mapa de acordo com os parametros x e y do objeto
    
    canMoveUp(){
        return (mapConfig[System.quadrante(this.#y)][System.quadrante(this.#x+5)] == 1 && mapConfig[System.quadrante(this.#y)][System.quadrante(this.#x+this.size-10)] == 1);
    }

    canMoveDown(){
        return (mapConfig[System.quadrante(this.#y+this.size)][System.quadrante(this.#x+4)] == 1 && mapConfig[System.quadrante(this.#y+this.size)][System.quadrante(this.#x+this.size-8)] == 1);
    }

    canMoveLeft(){
        return (mapConfig[System.quadrante(this.#y+4)][System.quadrante(this.#x)] == 1 && mapConfig[System.quadrante(this.#y+this.size-4)][System.quadrante(this.#x)] == 1);
    }

    canMoveRight(){
        return (mapConfig[System.quadrante(this.#y+4)][System.quadrante(this.#x+this.size-4)] == 1 && mapConfig[System.quadrante(this.#y+this.size-4)][System.quadrante(this.#x+this.size-4)] == 1);
    }


    //Funções Get
    getPosX(){ // Retorna a posição X do objeto.
        return this.#x;
    }

    getPosY(){ // Retorna a posição Y do objeto.
        return this.#y;
    }

    getHP(){
        return this.#hp;
    }

    getSightDirection(){
        return this.#sightDirection;
    }

    getDirectionAsNum(){
        switch(this.#sightDirection){
                case("U"):
                    return 0;
                    break;
                case("D"):
                    return 1;
                    break;
                case("L"):
                    return 2;
                    break;
                case("R"):
                    return 3;
                    break;
        }
    }

    setSightDirection(dir){
        if(typeof(dir) == "string"){
            this.#sightDirection = dir
        }
        else{
            switch(dir){
                case 0:
                    this.#sightDirection = "U";
                    break;
                case 1:
                    this.#sightDirection = "D";
                    break;
                case 2:
                    this.#sightDirection = "L";
                    break;
                case 3:
                    this.#sightDirection = "R";
                    break;
            }
        }
        
    }

    //Funções Set
    setX(number){
        this.#x = number;
    }

    setY(number){
        this.#y = number;
    }

    setHP(incremento){
        this.#hp += incremento;
    }

    // Métodos de estado
    checkDeath(){
        if(this.getHP() <= 0){
            this.alive = false;
        }
    }


    isAlive(){
        if(this.alive == true){
            return true;
        } else {
            return false;
        }
    }

    dano(numero,entidade){
        entidade.setHP(-numero);
     }

     distanciaDaEntidade(entidade) { //Mede a distância do centro do objeto até o centro de outra entidade.
         let distancia_x = Math.abs(entidade.getPosX() - this.getPosX());
         let distancia_y = Math.abs(entidade.getPosY() - this.getPosY());
         let quadradoDistancia = Math.sqrt(Math.pow(distancia_x, 2) + Math.pow(distancia_y, 2));

         return quadradoDistancia;
     }

     /*#verificarColisão(entidade) { //Retorna 1 se a distância for maior do que o tamanho(ou seja, não estáo se tocando) e 0 se a distância for menor (estão se tocando).
         if (this.#distanciaDaEntidade(entidade) >= this.size) {
             return 1;
         } else {
             return 0;
         }
     }*/

}