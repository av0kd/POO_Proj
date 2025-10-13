class Entidade {
    

    constructor(x, y, cor){
     this.x = x;
     this.y = y;
     this.cor = cor;
     this.alive = false;
     this.hp = 100;
    }

    show(){
        fill(this.cor);
        square(this.x, this.y, 20);
    }

    //Métodos de movimento 
    //  Recebem um parâmetro incremento (numero) que diz o quanto a respectiva posição
    //  muda para cada chamada. 
    //  Se ela for chamada a cada frame, a velocidade de incremento vai ser muito grande. Não usar numeros maiores do que 1
    //  Para pequenos movimentos.
    
    moveUp(increment){
        this.y -= increment;
    }

    moveDown(increment){
        this.y += increment;
    }

    moveLeft(increment){
        this.x -= increment;
    }

    moveRight(increment){
        this.x =+ increment;
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