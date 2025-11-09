
// MenuConfig.js
class MenuC{
    static mySetup()
    {
        this.menu = new Menu(menuBg);
        this.menu.criarBotoes();
        console.log("Menu Setup completo");
    }

    static myDraw()
    {
        this.menu.mostrar();
    }
}
  