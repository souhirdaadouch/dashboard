import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { masters } from '../../../models/masters.model';

@Injectable({
    providedIn: 'root',
})
export class MastersService {
    /*private act: masters [];
    link = 'http://localhost:3000/api/masters';
    constructor(
        private http: HttpClient
    ) {
        this.act = [
        new masters(1, 'souhir', ''),
        ];
    }
    get master(): Observable<masters[]> {
       return this.http.get<masters []>(this.link);
    }
    getFakemaster() {
        return this.masters;
    }
    getmasterById(id: number): Observable<masters> {
        return this.http.get<masters>( this.link + `/${id}`);
    }
    addmaster(actu: masters): Observable<any> {
        return this.http.post(this.link, actu);
    }
    deletemaster(id: number) {
        return this.http.delete(this.link + `/${id}` );
    }
    updatemaster(actu: masters) {
        console.log(actu);
        return this.http.put(this.link, actu);
    }*/
}

