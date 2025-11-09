class DificuldadeC
{
    static mySetup()
    {
        console.log("EscolhaDificuldade =", EscolhaDificuldade);
        this.escolhaDificuldade = new EscolhaDificuldade(Es_Difi);
        this.escolhaDificuldade.criarBotoesDificuldade();
        console.log("Menu Dificuldade Setup completo");
    }

    static myDraw()
    {
        this.escolhaDificuldade.mostrar();
    }   
}