class MenuC{
    static mySetup(){
        frameRate(120);
    canvaConf = createCanvas(800, 800);
    centerCanvas();
        menu = new Menu(menuT1);
        menu.criarBotoes();
    }

    static myDraw(){
        menu.mostrar();
    }
}