export class presentation {
    idpresentation: number;
    description: string;
    nbrligue: number;
    nbrclub: number;
    nbrlic: number;
    president: string;

    constructor(
        idpresentation = 0,
        description = '',
        nbrligue = 0,
        nbrclub = 0,
        nbrlic = 0,
        president = ''
    ) {
        this.description = description;
        // @ts-ignore
        this.nbrligue = nbrligue;
        this.nbrclub = nbrclub;
        this.idpresentation = idpresentation;
        this.nbrlic = nbrlic;
        this.president = president;
    }
}
