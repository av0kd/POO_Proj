class MenuC{
    static mySetup()
    {
        this.menu = new Menu(menuBg);
        this.menu.criarBotoes();
    }

    static myDraw()
    {
        this.menu.mostrar();
    }
}
  