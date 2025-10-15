tlMapSz = 160;
mapConfig = [];
inimigos = [];

function preload(){
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
}

function setup(dificuldade){
    createCanvas(800, 800);
    mapConfig = generateMaze(27);
    player = new Player(tlMapSz+20,tlMapSz+20,"red",10,4, 120);
    
}

function draw(){
    background(0);
    translate(width/2 - player.x-70, height/2 - player.y-70);
    showMap();
    player.show(player.size);
    player.moveMap();
    
}

function criarInimigo(x, y, cor, hp, speed){
    let inimigo = new Inimigo(x, y, cor, hp, speed);
    inimigos.push(inimigo);
}

function quadrante(valor){
    return floor(valor/tlMapSz);
}
    
        