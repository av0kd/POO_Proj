class Projetil extends Entidade {
    constructor(x, y, cor, speed, size, direction, team){
        super(x, y, cor, 1, speed, size);
        this.direction = direction;
        this.team = team; // "Inimigo" ou "Player";
    }
    
    bulletMove(entidade){
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

}