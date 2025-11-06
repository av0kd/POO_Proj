class HUD{

    static showHUD(){
        image(escuridao, player.getPosX()-395, player.getPosY()-395, 900, 900);
        image(compass_arrow, player.getPosX()+300, player.getPosY()+300, 80, 80);
    }

}