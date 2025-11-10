
class StateMachine{
    static generalSetup(){
        frameRate(120);
        canvaConf = createCanvas(800, 800);
        System.centerCanvas();
        if(dificulty == 0){
            MenuC.mySetup();
        }
        else if(dificulty == 1 || dificulty == 2 || dificulty == 3){
            Game.mySetup();   
        }else if(dificulty == 4){
            DificuldadeC.mySetup();
        }else if(dificulty == 5){
            TelaResultadoConfig.mySetup(VouD);
        }
    }

    static generalDraw(){
        background(0);
        
        if(dificulty == 0){
            MenuC.myDraw();
           
        }
        else if(dificulty == 1 || dificulty == 2 || dificulty == 3){
            Game.myDraw();    
        }else if(dificulty == 4){
            DificuldadeC.myDraw();
        }else if(dificulty == 5){
            TelaResultadoConfig.myDraw();
        }
        
    }

}
  