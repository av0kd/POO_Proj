// sketch.js
var tlMapSz = 160;
var nodeEnd = [];
var mapConfig = [];
var inimigos = [];
var municao = [];
var collectables = [];
var dificulty = 0;
var canvaConf;
var player;
var VouD = "";


function preload(){
    soul = loadImage('/assets/enemy_soul.png'); 
    escuridao = loadImage('/assets/darkness.png');
    playerImgU = loadImage('/assets/playerU.png');
    playerImgD = loadImage('/assets/playerD.png');
    playerImgR = loadImage('/assets/playerR.png');
    playerImgL = loadImage('/assets/playerL.png');
    parede = loadImage('/assets/img_01.png');
    caminho = loadImage('/assets/img_02.png');
    end = loadImage('/assets/img_03.png');
    compass_arrow = loadImage('/assets/seta.png');
    compass_body = loadImage('/assets/bussola_corpo.png');
    menuBg = loadImage('/assets/DW.png');
    Es_Difi = loadImage('/assets/dificuldade.png');

    Tvitoria = loadImage('/assets/vitoria.png');
    Tderrota = loadImage('/assets/derrota.png');
}

function setup(){
    StateMachine.generalSetup();
}

function draw(){
    StateMachine.generalDraw();    
}
