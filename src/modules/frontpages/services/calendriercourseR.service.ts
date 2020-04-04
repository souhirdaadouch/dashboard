import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { calendriercourseR } from '../models/calendriercourseR.model';

@Injectable({
    providedIn: 'root',
})
export class CalendriercourseRService {
    /*private course: calendriercourseR [];
    link = 'http://localhost:3000/api/calendriercourseR';
    constructor(
        private http: HttpClient
    ) {
        this.course = [
        new calendriercourseR(1, 'souhir', '', '', '', '',22-06-96),
        ];
    }
    getcalendriercourseR(): Observable<calendriercourseR[]> {
       return this.http.get<calendriercourseR []>(this.link);
    }
    getFakecalendriercourseR() {
        return this.course;
    }
    getcalendriercourseRById(id: number): Observable<calendriercourseR> {
        return this.http.get<calendriercourseR>( this.link + `/${id}`);
    }
    addcalendriercourseR(actu: calendriercourseR): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletecalendriercourseR(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatecalendriercourseR(actu: calendriercourseR) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

