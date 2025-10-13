function preload(){
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
}

function setup(dificuldade){
    createCanvas(1728, 1728);
    mapConfig = generateMaze(27);
   //let player = new Entidade();
    
}

function draw(){
    showMap();
    Text("Posição atual do mouse: " + mouseX + " " + mouseY, 500+350+14, 500+350+14);
}