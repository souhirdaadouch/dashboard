import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecordService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-records',
    templateUrl: './records.component.html',
    styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /* errorMessage = '';
     constructor(private recordService1: RecordService, private router: Router) {}
     addrecord(formulaire: NgForm) {
        /*this.recordService1.addrecord(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );
    }*/
}
