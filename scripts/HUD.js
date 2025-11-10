class HUD{
    
    static opacity = 0;
    static fadingState = 0;

    static showHUD(){
        this.showCompass();
        this.showPowerUp();
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

        //Game.centerCanvaOnPlayer();
    }

    static angleToEndPoint(){
        let pointX = nodeEnd[1][1] * tlMapSz - player.getPosX();
        let pointY = nodeEnd[1][0] * tlMapSz - player.getPosY();

        return atan2(pointY, pointX);
    }

    static showPowerUp(){
        this.fadingState == 0 && this.opacity < 250?this.opacity+=5:this.fadingState = 1;

        this.fadingState == 1 && this.opacity > 5?this.opacity-=5:this.fadingState = 0;
       
        tint(255,this.opacity);
        
        if(player.powerUps[1] > 0){
            image(powerUpBoot, 650, 500, 90, 90);
        }
        if(player.powerUps[2] > 0){
            image(powerUpShield, 490, 650, 90, 90);
        }

        noTint();
    }


}