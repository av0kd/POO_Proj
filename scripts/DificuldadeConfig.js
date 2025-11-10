class DificuldadeC
{
    static mySetup()
    {
        this.escolhaDificuldade = new EscolhaDificuldade(Es_Difi);
        this.escolhaDificuldade.criarBotoesDificuldade();

    }

    static myDraw()
    {
        this.escolhaDificuldade.mostrar();
    }   
}