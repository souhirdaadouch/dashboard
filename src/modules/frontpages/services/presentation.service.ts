import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { presentation } from '../models/presentation.model';

@Injectable({
    providedIn: 'root',
})
export class PresentationService {
    /*private pres: presentation [];
    link = 'http://localhost:3000/api/presentation';
    constructor(
        private http: HttpClient
    ) {
        this.pres = [
        new presentation(1, 'souhir', 22, 23, 6, ''),
        ];
    }
    getpresentation(): Observable<presentation[]> {
       return this.http.get<presentation []>(this.link);
    }
    getFakepresentation() {
        return this.pres;
    }
    getpresentationById(id: number): Observable<presentation> {
        return this.http.get<presentation>( this.link + `/${id}`);
    }
    addpresentation(actu: presentation): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletepresentation(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatepresentation(actu: presentation) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

