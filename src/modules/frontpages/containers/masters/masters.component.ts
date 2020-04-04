import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MastersService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-masters',
    templateUrl: './masters.component.html',
    styleUrls: ['./masters.component.scss'],
})
export class MastersComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /*errorMessage = '';
     constructor(private mastersService1: MastersService, private router: Router) {}
     addmasters(formulaire: NgForm) {
        /*this.mastersService1.addmasters(formulaire.value).subscribe(
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
