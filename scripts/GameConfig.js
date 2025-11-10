class Game{
    static mySetup(){

        mapConfig = Map.generateMaze(15*dificulty);
        nodeEnd = System.arrayShuffle(nodeEnd);
        player = new Player(nodeEnd[0][1]*tlMapSz+20,nodeEnd[0][0]*tlMapSz+20,"player",10,2, 120,"Player");
        while(nodeEnd.length > 2){
            Inimigo.criarInimigo(nodeEnd[nodeEnd.length-1][1]*tlMapSz+20,nodeEnd[nodeEnd.length-1][0]*tlMapSz+20,'139, 69, 19',1,3.5,120,"Enemy");
            nodeEnd.pop();   
        }
    }

    static myDraw(){
        push();
        this.centerCanvaOnPlayer();
        Map.showMap();
        Map.drawEndPoint();
        Collectable.verifyPresence();
        
        //coletaveis
        for(let i in collectables){
            collectables[i].show(i);
        }

        //Player
        if(player.isAlive()){
            player.checkDeath();
            player.show();
            player.moveMap();
            player.shootHaste();
            //bala.showBala();
        }

        //Projetil
        for(let i in municao){

            municao[i].checkDeletion();
            if(municao[i].isAlive()){
                municao[i].show(i);
                municao[i].bulletMove();
                for(let j in inimigos){
                    municao[i].balear(inimigos[j]);
                    if(municao[i].checkColision(inimigos[j])){
                        municao[i].alive = false;
                    }
                }
            }
            else{
                municao[i].show();
            }

        }

        for(let i in inimigos){
            if(inimigos[i].isAlive()){
                inimigos[i].show(i);
                inimigos[i].randomMove();
                inimigos[i].atacar(player);
                inimigos[i].checkDeath();
            }
            else{
                inimigos[i].show(i);
            }
        }

        this.showDarkness();

        pop();

        HUD.showHUD();

        if (!player.isAlive())
            {
                VouD = "PERDEU"; 
                dificulty = 5; 
                StateMachine.generalSetup();
            }

            if (this.checkVictory()) 
            {
                VouD = "VENCEU";
                dificulty = 5; 
                StateMachine.generalSetup();
                return;
             }


    }

    static centerCanvaOnPlayer(){
        translate(width/2 - player.getPosX()-70, height/2 - player.getPosY()-70);
    }

    static showDarkness(){
        image(escuridao, player.getPosX()-395, player.getPosY()-395, 900, 900);
    }


    static checkVictory()  
    {
        
        let endX = nodeEnd[1][1] * tlMapSz + tlMapSz / 4;
        let endY = nodeEnd[1][0] * tlMapSz + tlMapSz / 4;

        let px = player.getPosX();
        let py = player.getPosY();

        let distEnd = dist(px, py, endX, endY);
        ellipse(endX, endY, 10, 10);

        stroke(0,255,0);
        return distEnd < 30;
    }
}

/*
function displayStamina(){
    displayStamina();
    document.getElementById('Stamina').innerHTML = "Estamina do jogador: " + player.stamina.toFixed(2);
}*/






