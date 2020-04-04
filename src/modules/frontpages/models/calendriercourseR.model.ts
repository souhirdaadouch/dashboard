export class calendriercourseR {
    idcourse: number;
    manifestation: string;
    organisateur: string;
    lieu: string;
    niveau: string;
    categorie: string;
    date: Date;

    constructor(
        idcourse = 0,
        manifestation = '',
        organisateur = '',
        lieu = '',
        niveau = '',
        categorie = '',
        date: Date
    ) {
        this.idcourse = idcourse;
        this.categorie = categorie;
        this.date = date;
        this.lieu = lieu;
        this.niveau = niveau;
        this.manifestation = manifestation;
        this.organisateur = organisateur;
    }
}
