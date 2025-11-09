
// menu.js
class Menu 
{
  constructor(ImgMenu)
  {
    this.titulo = "Deadly Whisper"
    this.BotaoIniciar = null //new Botao(250, 250, 80, 50, "JOGAR", () => {this.BotaoIniciar.esconder(); estado = JOGO ;} ); 
    this.Img = ImgMenu;
  }

  criarBotoes()
  {
      
  this.BotaoIniciar = new Botao(0, 0, 120, 60,"JOGAR",() => {this.BotaoIniciar.esconder();dificulty = 4; StateMachine.generalSetup();},true);
console.log("botão criado", this.BotaoIniciar.botao)
  }

   mostrar()
  {
    image(this.Img, 0, 0, width, height);
    
    fill(240);
    textAlign(CENTER, CENTER);
    textSize(40);
    //text(this.titulo, width / 2, height / 2 - 100);

    if(dificulty == 0) this.BotaoIniciar.mostrar();

  }
}
     