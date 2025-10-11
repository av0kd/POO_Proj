function preload(){
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
}

function setup(dificuldade){
    createCanvas(1728, 1728);
    mapConfig = generateMaze(27);

}

function draw(){
    showMap();
}