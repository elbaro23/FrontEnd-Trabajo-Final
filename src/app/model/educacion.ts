export class Educacion {
    id: number;
    nombreEd: string;
    descripcionEd: string;
    periodoEd: string;
    linkEd: string;
    imgEd: string

    constructor(nombreEd: string, descripcionEd: string, periodoEd: string, linkEd: string, imgEd: string) {
        this.nombreEd = nombreEd;
        this.descripcionEd = descripcionEd;
        this.periodoEd = periodoEd;
        this.linkEd = linkEd;
        this.imgEd = imgEd;
    }
}
