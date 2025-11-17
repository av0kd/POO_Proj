
class StateMachine{
    static generalSetup(){
        frameRate(120);
        canvaConf = createCanvas(800, 800);
        System.centerCanvas();
        if(dificulty == 0){
            MenuC.mySetup();
            GameSound.stop();
            MenuSound.loop();
            MenuSound.setVolume(0.1);
        }
        else if(dificulty == 1 || dificulty == 2 || dificulty == 3){
            Game.mySetup();
            MenuSound.stop();
            GameSound.loop();
            GameSound.setVolume(0.1);
            GameSound.play();
        }else if(dificulty == 4){
            DificuldadeC.mySetup();
        }else if(dificulty == 5){
            TelaResultadoConfig.mySetup(VouD);
        }
    }

    static generalDraw(){
        background(0);
        
        console.log(dificulty)
        if(dificulty == 0){
            MenuC.myDraw();
        }
        else if(dificulty == 1 || dificulty == 2 || dificulty == 3){
            Game.myDraw();
        }else if(dificulty == 4){
            DificuldadeC.myDraw();
        }else if(dificulty == 5){
            GameSound.stop();
            TelaResultadoConfig.myDraw();
        }
        
    }

}
  