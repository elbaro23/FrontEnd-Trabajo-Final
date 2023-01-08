export class Experiencia {
    id: number;
    nombreE: string;
    descripcionE: string;
    periodoE: string;
    linkE: string;
    imgE: string;

    constructor(nombreE: string, descripcionE: string, periodoE: string, linkE: string, imgE: string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.periodoE = periodoE;
        this.linkE = linkE;
        this.imgE = imgE;

    }
}
