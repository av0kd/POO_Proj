class Game{
    static mySetup(){

        mapConfig = Map.generateMaze(9*dificulty);
        nodeEnd = System.arrayShuffle(nodeEnd);
        player = new Player(nodeEnd[0][1]*tlMapSz+20,nodeEnd[0][0]*tlMapSz+20,"player",10,2, 120,"Player");
        while(nodeEnd.length > 2){
            Inimigo.criarInimigo(nodeEnd[nodeEnd.length-1][1]*tlMapSz+20,nodeEnd[nodeEnd.length-1][0]*tlMapSz+20,'139, 69, 19',10,3.5,120,"Enemy");
            nodeEnd.pop();   
        }
        //bala = new Projetil(player.getPosX() + player.radius/2,player.getPosY()+player.radius/2, "red", 2, 50, player.getSightDirection(), "Player");
    }

    static myDraw(){
        push();
        this.centerCanvaOnPlayer();
        Map.showMap();
        Map.drawEndPoint();
        Collectable.verifyPresence();
        
        for(let i in collectables){
            collectables[i].show(i);
        }
        

        //collectables[0].show(0);

        //Player
        if(player.isAlive()){
            player.checkDeath();
            player.show();
            player.moveMap(); //Pode chamar projeteis
            //bala.showBala();
        }
        

        //Projetil
        for(let i in municao){
            municao[i].checkDeletion();
            if(municao[i].isAlive()){
                municao[i].bulletMove();
                municao[i].showBala();
                for(let j in inimigos){
                    //municao[i].checkDeletion(inimigos[j]);
                    municao[i].balear(inimigos[j]);
                    if(municao[i].checkColision(inimigos[j])){
                        municao[i].alive = false;
                    }
                }
            } else {
                municao.splice(i, 1);
            }

        }

        //Inimigos
        for(let i in inimigos){
            if(inimigos[i].isAlive()){
            inimigos[i].show(i);
            inimigos[i].getPossibleDirections();
            inimigos[i].randomMove();
            inimigos[i].atacar(player);
            inimigos[i].checkDeath();
            } else {
                //Coletavel.spawn(inimigos[i].getPosX(), inimigos[i].getPosY()); //Spawnar algum coletavel
                inimigos.splice(i, 1);
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