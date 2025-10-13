class Player extends Entidade {
    // Irei adicionar o Hp do player só para ilustração, iremos decidir se vamos deixar ele aqui depois.
    constructor(x, y, cor){
        super(x, y, cor);
        this.hp = 100;
        this.alive = true;
    }

    death(){
        super.death();
        super.show();
    }

}