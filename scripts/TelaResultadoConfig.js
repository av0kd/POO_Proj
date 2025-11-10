class TelaResultadoConfig {
    static mySetup(VouD){
        this.telaResultado = new VenceuOUPerdeu(VouD, Tvitoria, Tderrota);
    } 

    static myDraw(){
        this.telaResultado.mostrar();

        if (keyIsDown(ENTER)) {
            dificulty = 0;
            StateMachine.generalSetup();
        }
    }
}
