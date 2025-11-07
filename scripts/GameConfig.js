class Game{
    static mySetup(){

        mapConfig = Map.generateMaze(11*dificulty);
        nodeEnd = System.arrayShuffle(nodeEnd);
        player = new Player(nodeEnd[0][1]*tlMapSz+20,nodeEnd[0][0]*tlMapSz+20,"player",10,2, 120,"Player");
        while(nodeEnd.length > 2){
            Inimigo.criarInimigo(nodeEnd[nodeEnd.length-1][1]*tlMapSz+20,nodeEnd[nodeEnd.length-1][0]*tlMapSz+20,'139, 69, 19',10,0,120,"Enemy");
            nodeEnd.pop();   
        }
        //bala = new Projetil(player.getPosX() + player.radius/2,player.getPosY()+player.radius/2, "red", 2, 50, player.getSightDirection(), "Player");
    }

    static myDraw(){
        push();
        this.centerCanvaOnPlayer();
        Map.showMap();
        Map.drawEndPoint();
        
        if(player.isAlive()){
            player.checkDeath();
            player.show();
            player.moveMap(); //Pode chamar projeteis
            //bala.showBala();
        }
        
        //Projetil
        for(let i in municao){
            municao[i].bulletMove();
            municao[i].showBala();
            for(let j in inimigos){
                if(municao[i].checkColision(inimigos[j])){
                    municao[i].dano(10, inimigos[j]);
                    console.log("Dei dano no: " + j + "!");
                }
            }

        }
        //Inimigos
        
        for(let i in inimigos){
            if(inimigos[i].isAlive()){
            inimigos[i].show();
            inimigos[i].getPossibleDirections();
            inimigos[i].randomMove();
            //inimigos[i].atacar(player);
            inimigos[i].checkDeath();
            }
        }

        this.showDarkness();

        pop();

        HUD.showHUD();

    }

    static centerCanvaOnPlayer(){
        translate(width/2 - player.getPosX()-70, height/2 - player.getPosY()-70);
    }

    static showDarkness(){
        image(escuridao, player.getPosX()-395, player.getPosY()-395, 900, 900);
    }
}

/*
function displayStamina(){
    displayStamina();
    document.getElementById('Stamina').innerHTML = "Estamina do jogador: " + player.stamina.toFixed(2);
}*/