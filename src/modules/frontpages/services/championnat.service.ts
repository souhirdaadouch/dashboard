import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { championnat } from '../../../models/championnat.model';

@Injectable({
    providedIn: 'root',
})
export class ChampionnatService {
    /*private act: championnat [];
    link = 'http://localhost:3000/api/championnat';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new championnat(1, 'souhir', '', '', '', '','',22-06-96),
        ];
    }
    get championnat(): Observable<championnat[]> {
       return this.http.get<championnat []>(this.link);
    }
    getFakechampionnat() {
        return this.championnats;
    }
    getchampionnatById(id: number): Observable<championnat> {
        return this.http.get<championnat>( this.link + `/${id}`);
    }
    addchampionnat(actu: championnat): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletechampionnat(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatechampionnat(actu: championnat) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

