tlMapSz = 160;
posX = tlMapSz*1+10;
posY = tlMapSz*1+10;

let inimigos = [];

function preload(){
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
}

function setup(dificuldade){
    createCanvas(800, 800);
    mapConfig = generateMaze(27);
    player = new Player(tlMapSz*1+10,tlMapSz*1+10,"red",10,15);
    
}

function draw(){
    background(0);
    translate(width/2 - player.x-70, height/2 - player.y-70);
    showMap();
    fill("red");
    //rect(posX,posY, 140);
    player.show();
    console.log("posX: "+ player.x + " - posY : "+ player.y +" - Speed: "+ player.moveSpeed);
    player.moveMap();
    pleaseMove();
}

function criarInimigo(x, y, cor, hp, speed){
    let inimigo = new Inimigo(x, y, cor, hp, speed);
    inimigos.push(inimigo);
}

    function pleaseMove(){
        if (keyIsDown(65)) {
            /*this.x*/posX -= 3;
        }

        if (keyIsDown(68)) {
            /*this.x*/posX += 3;
        }

        if (keyIsDown(87)) {
            /*this.y*/posY -= 3;
        }

        if (keyIsDown(83)) {
            /*this.y*/posY += 3;
        }
    }
        