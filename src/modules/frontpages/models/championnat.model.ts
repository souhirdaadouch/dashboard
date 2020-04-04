export class championnat {
    idchampionnat: number;
    manifestation: string;
    organisateur: string;
    lieu: string;
    niveau: string;
    categorie: string;
    type: string;
    date: Date;

    constructor(
        idchampionnat = 0,
        manifestation = '',
        organisateur = '',
        lieu = '',
        niveau = '',
        categorie = '',
        type = '',
        date: Date
    ) {
        this.idchampionnat = idchampionnat;
        this.categorie = categorie;
        this.date = date;
        this.lieu = lieu;
        this.niveau = niveau;
        this.manifestation = manifestation;
        this.organisateur = organisateur;
        this.type = type;
    }
}
