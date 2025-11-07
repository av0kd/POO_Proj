
// MenuConfig.js
class MenuC{
    static mySetup(){
        Menu = new Menu(menuBg);
        Menu.criarBotoes();
        console.log("Menu Setup completo");
    }

    static myDraw(){
        Menu.mostrar();
    }
}
  