class Menu 
{
  constructor(ImgMenu)
  {
    this.titulo = "Deadly Whisper"
    this.BotaoIniciar = null;
    this.Img = ImgMenu;
  }

  criarBotoes()
  {
  this.BotaoIniciar = new Botao(0, 0, 120, 60,"JOGAR",() => {this.BotaoIniciar.esconder();dificulty = 4; StateMachine.generalSetup();MenuSound.play();},true);
  }

   mostrar()
  {
    image(this.Img, 0, 0, width, height);
    fill(240);
    textAlign(CENTER, CENTER);
    textSize(40);
    if(dificulty == 0) this.BotaoIniciar.mostrar();
  }
}
     