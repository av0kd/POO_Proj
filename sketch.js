tlMapSz = 160;
mapConfig = [];
inimigos = [];
var canvaConf;

function preload(){
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
}

function centerCanvas() {
    var canvaX = (windowWidth - width) / 2;
    var canvaY = (windowHeight - height) / 2;
    canvaConf.position(canvaX, canvaY);
}

function setup(dificuldade){
    canvaConf = createCanvas(800, 800);
    centerCanvas();
    mapConfig = generateMaze(19);
    let randPos = parseInt(Math.random()*nodeEnd.length);
    player = new Player(nodeEnd[randPos][1]*tlMapSz+20,nodeEnd[randPos][0]*tlMapSz+20,"red",10,4, 120);
}

function draw(){
    background(0);
    translate(width/2 - player.x-70, height/2 - player.y-70);
    showMap();



    if(player.isAlive()){
        player.show();
        player.moveMap();
    }
    /*
    for(let i in inimigos){
        inimigos[i].show();
        inimigos[i].randomMove();
        inimigos[i].atacar(player);
    }
    console.log("Vida do player: " + player.hp);
    console.log(inimigos.length);
    //pleaseMove();
    if(stillWants && (frameCount % 60 == 0)){
        displayFrameCount();
    }
    
    */
}

function criarInimigo(x, y, cor, hp, speed, size){
    let inimigo = new Inimigo(x, y, cor, hp, speed, size);
    inimigos.push(inimigo);
}

function quadrante(valor){
    return floor(valor/tlMapSz);
}
    
        