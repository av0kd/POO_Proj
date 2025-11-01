tlMapSz = 160;
mapConfig = [];
inimigos = [];
dificulty = 1;
var canvaConf;
let player;


function preload(){
    escuridao = loadImage('/assets/darkness.png');
    playerImgU = loadImage('/assets/playerU.png');
    playerImgD = loadImage('/assets/playerD.png');
    playerImgR = loadImage('/assets/playerR.png');
    playerImgL = loadImage('/assets/playerL.png');
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
    end = loadImage('/assets/img_03.png');
}

function centerCanvas() {
    var canvaX = (windowWidth - width) / 2;
    var canvaY = (windowHeight - height) / 2;
    canvaConf.position(canvaX, canvaY);
}

function setup(){
    frameRate(120);
    canvaConf = createCanvas(800, 800);
    centerCanvas();
    if(dificulty == 1){
        mapConfig = generateMaze(19);
        nodeEnd = arrayShuffle(nodeEnd);
        player = new Player(nodeEnd[0][1]*tlMapSz+20,nodeEnd[0][0]*tlMapSz+20,"player",10,2, 120);
    }
}

function draw(){
    //console.log(Math.floor(player.y/tlMapSz) + " - " + Math.floor(player.x/tlMapSz) )
    background(0);
    translate(width/2 - player.getPosX()-70, height/2 - player.getPosY()-70);
    showMap();


    image(end, nodeEnd[1][1]*tlMapSz,nodeEnd[1][0]*tlMapSz, tlMapSz, tlMapSz);
    player.checkDeath();
    
    if(player.isAlive()){
        player.show();
        player.moveMap();
    }
    displayStamina();
    
    for(let i in inimigos){
        inimigos[i].show();
        inimigos[i].randomMove();
        inimigos[i].atacar(player);
        //console.log(inimigos[i].size);
    }
    //console.log("Vida do player: " + player.hp);
    //console.log(inimigos.length);
    //pleaseMove();
    if(stillWants && (frameCount % 120 == 0)){
        displayFrameCount();
    }
    image(escuridao, player.getPosX()-395, player.getPosY()-395, 900, 900);
}

function criarInimigo(x, y, cor, hp, speed, size){
    let inimigo = new Inimigo(x, y, cor, hp, speed, size);
    inimigos.push(inimigo);
}

function quadrante(valor){
    return floor(valor/tlMapSz);
}

function arrayShuffle(array){
    let arrCpy = [...array];
    for(let i = arrCpy.length-1; i > 0; i--){
        let randPos = Math.floor(Math.random()*(i+1));
        let aux = arrCpy[i];
        arrCpy[i] = arrCpy[randPos]
        arrCpy[randPos] = aux;
    }
     return arrCpy;
}

function displayStamina(){
    document.getElementById('Stamina').innerHTML = "Estamina do jogador: " + player.stamina.toFixed(2);
}