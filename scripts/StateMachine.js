class StateMachine{
    static generalSetup(){
        frameRate(120);
        canvaConf = createCanvas(800, 800);
        System.centerCanvas();
        if(dificulty == 0){
            Menu.mySetup();
        }
        else if(dificulty == 1 || dificulty == 2 || dificulty == 3){
            Game.mySetup();   
        }
    }

    static generalDraw(){
        background(0);
        
        if(dificulty == 0){
            Menu.myDraw();
        }
        else if(dificulty == 1 || dificulty == 2 || dificulty == 3){
            Game.myDraw();    
        }
    }
}