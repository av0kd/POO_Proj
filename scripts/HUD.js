class HUD{
    
    static showHUD(){
        this.showCompass();
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

}