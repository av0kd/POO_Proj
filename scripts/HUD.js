class HUD{
    
    static showHUD(){
        this.showCompass();
        this.BotaoSair();
        this.barraVida(player.getPosX() - player.size/10, player.getPosY() - 20, player.size, 10, (player.getHP()/ player.maxHP) * 100);
        //this.barraVida(player.getPosX() - player.size/2, player.getPosY() - 20, player.size, 8, (player.getHP() / player.maxHp) * 100);


    }

    static showCompass(){
        push();
        imageMode(CENTER);
        translate(650,650);
        image(compass_body, 0, -1, 140, 140);
        rotate(this.angleToEndPoint() + HALF_PI);
        image(compass_arrow, 0, 0.75, 75, 80);
        imageMode(CORNER);
        pop();

        Game.centerCanvaOnPlayer();
    }

    static angleToEndPoint(){
        let pointX = nodeEnd[1][1] * tlMapSz - player.getPosX();
        let pointY = nodeEnd[1][0] * tlMapSz - player.getPosY();

        return atan2(pointY, pointX);
    }

    static BotaoSair()
    {
        if(!this.BotaoSairInstance)
            {
            this.BotaoSairInstance = new Botao(10, 10, 100, 50, "SAIR",() => {
                this.BotaoSairInstance.esconder();

                inimigos = [];
                municao = [];
                collectables = [];
                mapConfig = [];
                nodeEnd = [];   

                dificulty = 0;
                StateMachine.generalSetup();
            }, false);
        }
        this.BotaoSairInstance.mostrar();
    }

    static barraVida(x, y, largura, altura, porcentagem)
    {
        push();
        stroke(0);
        fill(60);
        rect(x, y, largura, altura);
        fill(lerpColor(color(255, 0, 0), color(0, 255, 0), porcentagem / 100)); // verde ↔ vermelho
        rect(x, y, largura * (porcentagem / 100), altura);
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(14);
        text(`${int(porcentagem)}%`, x + largura / 2, y + altura / 2);
        pop();
    
    }

    /*static barraStamina(x, y, largura, altura, porcentagem)
{
    push();
    stroke(0);
    fill(80);
    rect(x, y, largura, altura);
    fill(0, 150, 255);
    rect(x, y, largura * (porcentagem / 100), altura);
    pop();
}*/

}
