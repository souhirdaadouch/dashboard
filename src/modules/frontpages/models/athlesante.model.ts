export class athlesante {
    id: number;
    description: string;
    programme: string;
    information: string;

    constructor(id = 0, description = '', programme = '', information = '') {
        this.id = id;
        this.description = description;
        this.information = information;
        this.programme = programme;
    }
}
