
class System{

    static centerCanvas() {
        var canvaX = (windowWidth - width) / 2;
        var canvaY = (windowHeight - height) / 2;
        canvaConf.position(canvaX, canvaY);
    }

    static quadrante(valor){
        return valor < tlMapSz?0:floor(valor/tlMapSz);
    }

    static arrayShuffle(array){
        let arrCpy = [...array];
        for(let i = arrCpy.length-1; i > 0; i--){
            let randPos = Math.floor(Math.random()*(i+1));
            let aux = arrCpy[i];
            arrCpy[i] = arrCpy[randPos]
            arrCpy[randPos] = aux;
        }
        return arrCpy;
}

}



/*
var stillWants = true;

function displayFrameCount(){
    stillWants = true;
        document.getElementById("Frame").innerHTML = frameCount + " FPS: " + floor(frameRate());
}

function noWant(){
    stillWants = false;
}
    */
