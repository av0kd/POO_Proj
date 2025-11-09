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
        let found = false;

        for (let i in collectables){
            if(collectables[i].type != 0){
                found = true;
                break;}
        }
        
        if(!found){
            this.lastSpotFrame < 100?this.lastSpotFrame++:collectables.push(new Collectable(1,80));}
        else{
            this.lastSpotFrame = 0;
        }
    }

    setRandomPos(){
        this.setPosX(nodeEnd[0][1]*tlMapSz+tlMapSz/2-this.#size/2);
        this.setPosY(nodeEnd[0][0]*tlMapSz+tlMapSz/2-this.#size/2);
    }

    show(id){
        if(this.#playerDistance() < this.#size){
            this.#collected = true}
        
        if(this.#collected){
            collectables.splice(id,1);
            return;
        }

        if(collectables.length > 0){
            
            if(collectables[id].type == 0){
                image(soul, this.getPosX(), this.getPosY(), this.#size, this.#size);
            }
            else{
                
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

    #playerDistance(){ //Mede a distância do centro do objeto até o centro de outra entidade.
        let dX = Math.abs(player.getPosX() - this.getPosX());
        let dY = Math.abs(player.getPosY() - this.getPosY());
        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
    }

}