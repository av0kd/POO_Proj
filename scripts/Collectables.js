class Collectable{
    #posX;
    #posY;
    #type;
    #collected;
    #size;

    constructor(){
        this.#collected = false
        this.#type = 1;
        this.setSize();
        this.setRandomPos();
        
    }

    setRandomPos(){
        this.setPosX(nodeEnd[0][1]*tlMapSz+tlMapSz/2-this.#size/2);
        this.setPosY(nodeEnd[0][0]*tlMapSz+tlMapSz/2-this.#size/2);
    }

    show(){
        square(this.getPosX(),this.getPosY(),this.#size);
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

    setSize(){
        if(this.#type == 0){
            fill("blue");
            this.#size = 60;
        }
        else{
            fill("red");
            this.#size = 80;
        }
    }

}