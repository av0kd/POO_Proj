class Projetil extends Entidade {
    constructor(x, y, cor, speed, size, direction, team){
        super(x, y, cor, 1, speed, size, team);
        this.direction = direction;
    }
    
    bulletMove(){
        switch(this.getSightDirection()){
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
        fill(this.cor);
        square(this.getPosX(), this.getPosY(), this.size);
    }

}