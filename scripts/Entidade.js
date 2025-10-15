 class Entidade {
    
    constructor(x, y, cor, hp, speed, size){
     this.x = Number(x);
     this.y = Number(y);
     this.cor = cor;
     this.alive = true;
     this.hp = parseInt(hp);
     this.moveSpeed = parseInt(speed);
     this.size = parseInt(size);
    }

    show(){
        fill(this.cor);
        square(this.x, this.y, this.size);
    }

    //Métodos de movimento --- Incrementam ou decrementam de acordo com o atributo moveSpeed do objeto
    
    moveUp(){
        if(!this.alive){
            return;
        } else {
            this.y -= this.moveSpeed*this.canMoveUp();
        }
    }

    moveDown(){
        if(!this.alive){
            return;
        } else {
            this.y += this.moveSpeed*this.canMoveDown();
        }
    }

    moveLeft(){
        if(!this.alive){
            return;
        } else {
            this.x -= this.moveSpeed*this.canMoveLeft();
        }
    }

    moveRight(){
        if(!this.alive){
            return;
        } else {
            this.x += this.moveSpeed*this.canMoveRight();
        }
    }


    //Métodos de verificar posições --- analisam a posição no mapa de acordo com os parametros x e y do objeto
    
    canMoveUp(){
        return (mapConfig[quadrante(this.y)][quadrante(this.x+4)] == 1 && mapConfig[quadrante(this.y)][quadrante(this.x+this.size-5)] == 1);
    }

    canMoveDown(){
        return (mapConfig[quadrante(this.y+this.size)][quadrante(this.x+4)] == 1 && mapConfig[quadrante(this.y+this.size)][quadrante(this.x+this.size-5)] == 1);
    }

    canMoveLeft(){
        return (mapConfig[quadrante(this.y+4)][quadrante(this.x)] == 1 && mapConfig[quadrante(this.y+this.size-4)][quadrante(this.x)] == 1);
    }

    canMoveRight(){
        return (mapConfig[quadrante(this.y+4)][quadrante(this.x+this.size-4)] == 1 && mapConfig[quadrante(this.y+this.size-4)][quadrante(this.x+this.size-4)] == 1);
    }


    //Funções Get
    getPosX(){ // Retorna a posição X do objeto.
        return this.x;
    }

    getPosY(){ // Retorna a posição Y do objeto.
        return this.y;
    }

    // Métodos de estado
    death(){
        this.alive = false;
    }


}