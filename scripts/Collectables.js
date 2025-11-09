class Collectable{
    #posX;
    #posY;
    type;
    #collected;
    #size;

    static lastSpotFrame = 0;

    constructor(type){
        this.#collected = false
        this.type = type;
        this.configByType();
    }

    static verifyPresence(){
        let found = false;

        for (let i in collectables){
            if(collectables[i].type != 0){
                found = true;
                break;}
        }
        
        if(!found){
            this.lastSpotFrame < 600?this.lastSpotFrame++:collectables.push(new Collectable(1));}
        else{
            this.lastSpotFrame = 0;
        }
    }

    setRandomPos(){
        this.setPosX(nodeEnd[0][1]*tlMapSz+tlMapSz/2-this.#size/2);
        this.setPosY(nodeEnd[0][0]*tlMapSz+tlMapSz/2-this.#size/2);
    }

    show(id){
        (this.#playerDistance() < this.#size*2/3)?this.#collected = true:square(this.getPosX(),this.getPosY(),this.#size);

        if(this.#collected){
            collectables.splice(id,1);
        }
    }

    getPosX(){
        return this.#posX;
    }

    getPosY(){
        return this.#posY;
    }

    setPosX(newVal){
        this.#posX = newVal;
    }

    setPosY(newVal){
        this.#posY = newVal;
    }

    configByType(){
        if(this.type == 0){
            fill("blue");
            this.#size = 60;
        }
        else{
            fill("red");
            this.#size = 80;
            this.setRandomPos();
        }
    }

    #playerDistance(){ //Mede a distância do centro do objeto até o centro de outra entidade.
        let dX = Math.abs(player.getPosX() - this.getPosX());
        let dY = Math.abs(player.getPosY() - this.getPosY());
        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    }

}