export class Proyecto {
    id: number;
    nombreP: string;
    descripcionP: string;
    periodoP: string;
    linkP: string;
    imgP: string


    constructor(nombreP: string, descripcionP: string, periodoP: string, linkP: string, imgP: string) {
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.periodoP = periodoP;
        this.linkP = linkP;
        this.imgP = imgP;
    }
}
