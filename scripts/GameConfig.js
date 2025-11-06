class Game{
    static mySetup(){

        mapConfig = Map.generateMaze(11*dificulty);
        nodeEnd = System.arrayShuffle(nodeEnd);
        player = new Player(nodeEnd[0][1]*tlMapSz+20,nodeEnd[0][0]*tlMapSz+20,"player",10,2, 120,"Player");
        while(nodeEnd.length > 2){
            Inimigo.criarInimigo(nodeEnd[nodeEnd.length-1][1]*tlMapSz+20,nodeEnd[nodeEnd.length-1][0]*tlMapSz+20,'139, 69, 19',10,8,120,"Enemy");
            nodeEnd.pop();   
        }
        //bala = new Projetil(player.getPosX() + player.radius/2,player.getPosY()+player.radius/2, "red", 2, 50, player.getSightDirection(), "Player");
    }

    static myDraw(){
        translate(width/2 - player.getPosX()-70, height/2 - player.getPosY()-70);
        Map.showMap();
        
        image(end, nodeEnd[1][1]*tlMapSz,nodeEnd[1][0]*tlMapSz, tlMapSz, tlMapSz);
        
        player.checkDeath();
        
        if(player.isAlive()){
            player.show();
            player.moveMap();
            //bala.showBala();
        }
        
        
        for(let i in inimigos){
            inimigos[i].show();
            inimigos[i].getPossibleDirections();
            inimigos[i].randomMove();
            //inimigos[i].atacar(player);
        }
    }
}

/*
function displayStamina(){
    displayStamina();
    document.getElementById('Stamina').innerHTML = "Estamina do jogador: " + player.stamina.toFixed(2);
}*/