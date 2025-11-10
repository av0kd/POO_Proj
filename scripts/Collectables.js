class Collectable{
    #posX;
    #posY;
    type;
    #collected;
    #size;

    static lastSpotFrame = 0;

    constructor(type, sz, x, y){
        this.#collected = false
        this.type = type;
        this.#size = sz;
        if(type == 0){
            this.#posX = x;
            this.#posY = y;
        }
        else{
            this.setRandomPos();
        }
        
    }

    static verifyPresence(){
        let found = 0;

        for (let i in collectables){
            if(collectables[i].type != 0){
                found ++;
            }
        }

        if(found < 2*dificulty){
            if(!player.powerUpActivated()){
                let newType = Math.floor(Math.random()*2+1);
                this.lastSpotFrame < 480?this.lastSpotFrame++:collectables.push(new Collectable(newType,80));}
        }
        else{
            this.lastSpotFrame = 0;
        }
    }

    setRandomPos(){
        let randX = Math.floor(Math.random()*(mapConfig.length-2))+1;
        let randY = Math.floor(Math.random()*(mapConfig.length-2))+1;
        if(mapConfig[randY][randX] == 1 && (randY*tlMapSz != nodeEnd[0][1]*tlMapSz && randX*tlMapSz != nodeEnd[0][0]*tlMapSz) && (randY*tlMapSz != nodeEnd[1][1]*tlMapSz && randX*tlMapSz != nodeEnd[1][0]*tlMapSz)){
            this.setPosX(randX*tlMapSz+tlMapSz/2-this.#size/2);
            this.setPosY(randY*tlMapSz+tlMapSz/2-this.#size/2);
        }
        else{
            this.setRandomPos();
        }
    }

    show(id){
        if(this.#playerDistance() < this.#size){
            this.#collected = true}
        
        if(this.#collected){
            this.setFX();
            collectables.splice(id,1);
            return;
        }

        if(collectables.length > 0){
            
            if(collectables[id].type == 0){
                image(soul, this.getPosX(), this.getPosY(), this.#size, this.#size);
            }
            else{
                this.type == 1?fill("red"):fill("blue");
                square(this.getPosX(),this.getPosY(),this.#size);
            }
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

    setFX(){
        switch(this.type){
            
            case (0):
                player.powerUps[this.type]+=1;
                break;
            case (1):
                player.powerUps[this.type]+=480*dificulty;
                break;
            case (2):
                player.powerUps[this.type]+=480*dificulty;
                break;
            
        }
        
    }

    #playerDistance(){ //Mede a distância do centro do objeto até o centro de outra entidade.
        let dX = Math.abs(player.getPosX() - this.getPosX());
        let dY = Math.abs(player.getPosY() - this.getPosY());
        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    }

}