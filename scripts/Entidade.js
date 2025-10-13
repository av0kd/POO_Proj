class Entidade {
    

    constructor(x, y, cor, hp, speed){
     this.x = x;
     this.y = y;
     this.cor = cor;
     this.alive = true;
     this.hp = hp;
     this.moveSpeed = speed;
    }

    show(){
        fill(this.cor);
        square(this.x, this.y, 140);
    }

    //Métodos de movimento 
    //  Recebem um parâmetro inncremento (numero) que diz o quanto a respectiva posição
    //  muda para cada chamada. 
    //  Se ela for chamada a cada frame, a velocidade de inncremento vai ser muito grande. Não usar numeros maiores do que 1
    //  Para pequenos movimentos.

    moveUp(){
        if(!this.alive){
            return;
        } else {
            this.y -= this.moveSpeed;
        }
    }

    moveDown(){
        if(!this.alive){
            return;
        } else {
            this.y += this.moveSpeed;
        }
    }

    moveLeft(){
        if(!this.alive){
            return;
        } else {
            this.x -= this.moveSpeed;
        }
    }

    moveRight(){
        if(!this.alive){
            return;
        } else {
            this.x += this.moveSpeed;
        }
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