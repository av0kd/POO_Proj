class Projetil extends Entidade {
    constructor(x, y, cor, speed, size, direction, team){
        super(x, y, cor, 1, speed, size);
        this.direction = direction;
    }
    
    bulletMove(){
        switch(this.direction){
            case("U"):
                this.moveUp();
                break;
            case("D"):
                this.moveDown();
                break;
            case("L"):
                this.moveLeft();
                break;
            case("R"):
                this.moveRight();
                break;
        }

    }

    showBala(){
        if(this.alive == true){
        fill(this.cor);
        square(this.getPosX(), this.getPosY(), this.size);
        }
    }

    checkColision(entidade){
        //let radius = this.size/2;
        if(this.distanciaDaEntidade(entidade) <= entidade.size/2){
            //this.dano(20, entidade);
            return true;
        }
        return false;
    }

    checkDeletion(){
        if(this.canMoveDown() == false || this.canMoveRight() == false || this.canMoveLeft() == false || this.canMoveUp() == false){
            this.alive = false;
        }
    }

}