class VenceuOUPerdeu {
    constructor(VouD, ImgVitoria, ImgDerrota) {
        this.vitoria = ImgVitoria;
        this.derrota = ImgDerrota;
        this.VouD = VouD;
    }

    mostrar() {
        if (this.VouD === "VENCEU") {
            image(this.vitoria, 0, 0, width, height);
        } else if (this.VouD === "PERDEU") {
            image(this.derrota, 0, 0, width, height);
        }
    }
}