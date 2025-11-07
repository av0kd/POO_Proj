class Botao {
  constructor(posx, posy, largura, altura, texto, acao, centralizar = false) 
  {
    this.x = posx;
    this.y = posy;
    this.width = largura;
    this.height = altura;
    this.text = texto;
    this.do = acao;
    this.centralizar = centralizar;

    this.botao = createButton(this.text);
    this.botao.size(this.width, this.height);
    this.botao.mousePressed(() => this.do());

    this.atualizarPosicao();
    this.botao.style('z-index', '10');



    this.botao.style('background-color', '#222');  // fundo escuro
    this.botao.style('color', '#fff');             // texto branco
    this.botao.style('border', '2px solid #555');  // borda
    this.botao.style('border-radius', '10px');     // bordas arredondadas
    this.botao.style('padding', '10px 20px');      // espaçamento interno
    this.botao.style('font-size', '18px');         // tamanho do texto
    this.botao.style('cursor', 'pointer');         // cursor mãozinha
    this.botao.style('box-shadow', '3px 3px 5px rgba(0,0,0,0.5)'); // sombra
    this.botao.style('transition', '0.2s');        // efeito de transição
  }

  atualizarPosicao() 
  {
    if (this.centralizar) {
      this.botao.position(
        (windowWidth - this.width) / 2,
        (windowHeight - this.height) / 2
      );
    } else {
      this.botao.position(this.x, this.y);
    }
  }

  esconder() {
    this.botao.hide();
  }

  mostrar() {
    this.botao.show();
    this.atualizarPosicao(); // reposiciona se a tela mudar de tamanho
  }
  
}