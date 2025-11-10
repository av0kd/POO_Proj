class HUD{
    
    static opacity = 0;
    static fadingState = 0;

    static showHUD(){
        this.showCompass();
        this.BotaoSair();
        this.showPowerUp();
        this.barraVida();
        this.barraStamina();
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

    
    static showPowerUp(){
        this.fadingState == 0 && this.opacity < 250?this.opacity+=5:this.fadingState = 1;

        this.fadingState == 1 && this.opacity > 5?this.opacity-=5:this.fadingState = 0;
       
        tint(255,this.opacity);
        
        if(player.powerUps[1] > 0){
            image(powerUpBoot, 605, 500, 90, 90);
        }
        if(player.powerUps[2] > 0){
            image(powerUpShield, 605, 400, 90, 90);
        }
        noTint();
    }

    static barraVida()
    {
        let x = 100;
        let y = 100;
        let largura = 128;
        let altura = 16;
        let porcentagem = player.getHP() >= 0?(player.getHP()/ player.maxHP) * 100:0;

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

    static barraStamina()
    {
        let x = 100;
        let y = 130;
        let largura = 128;
        let altura = 16;
        let porcentagem = player.stamina >= 0?(player.stamina/ player.maxStamina) * 100:0;

        push();
        stroke(0);
        fill(60);
        rect(x, y, largura, altura);
        fill(lerpColor(color(255, 0, 0), color("00d7ff"), porcentagem / 100)); // verde ↔ vermelho
        rect(x, y, largura * (porcentagem / 100), altura);
        fill(255);
        noStroke();
        textAlign(CENTER, CENTER);
        textSize(14);
        text(`${int(porcentagem)}%`, x + largura / 2, y + altura / 2);
        pop();
    
    }

}

