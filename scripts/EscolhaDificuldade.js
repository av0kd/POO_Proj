class EscolhaDificuldade 
{

    constructor(Imgdificuldade)
    {
        this.Img = Imgdificuldade;
        this.BotaoDificil = null;
        this.BotaoMedio = null;
        this.BotaoFacil = null;
    }

    criarBotoesDificuldade()
    {
        this.BotaoFacil = new Botao(590, 100, 750, 70,"FÁCIL",() => {this.BotaoFacil.esconder(),this.BotaoMedio.esconder(),this.BotaoDificil.esconder();dificulty = 1; StateMachine.generalSetup();},false);
        this.BotaoMedio = new Botao(590, 200, 750, 70,"MÉDIO",() => {this.BotaoFacil.esconder(),this.BotaoMedio.esconder(),this.BotaoDificil.esconder();dificulty = 2; StateMachine.generalSetup();},false);
        this.BotaoDificil = new Botao(590, 300, 750, 70,"DIFÍCIL",() => {this.BotaoFacil.esconder(),this.BotaoMedio.esconder(),this.BotaoDificil.esconder();dificulty = 3; StateMachine.generalSetup();},false);
    }

    mostrar()
    {
        image(this.Img, 0, 0, width, height);
        
        fill(240);
        textAlign(CENTER, CENTER);
        textSize(30);
        

            if(dificulty === 4) 
            {
                this.BotaoFacil.mostrar();
                this.BotaoMedio.mostrar();
                this.BotaoDificil.mostrar();
            }
    }   


}