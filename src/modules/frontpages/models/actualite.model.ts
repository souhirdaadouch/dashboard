export class actualite {
    eventId: number;
    eventTitle: string;
    eventDate: Date;
    eventComments: string;
    eventImgPath: string;
    eventDescrip: string;

    constructor(
        eventId = 0,
        eventTitle = '',
        eventDate = Date,
        eventComments = '',
        eventImgPath = '',
        eventDescrip = ''
    ) {
        this.eventComments = eventComments;
        // @ts-ignore
        this.eventDate = eventDate;
        this.eventDescrip = eventDescrip;
        this.eventId = eventId;
        this.eventImgPath = eventImgPath;
        this.eventTitle = eventTitle;
    }
}
