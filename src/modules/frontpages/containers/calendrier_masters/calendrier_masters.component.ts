import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendriermasService } from '@modules/frontpages/services/calendriermas.service';
@Component({
    selector: 'sb-calendriermasters',
    templateUrl: './calendrier_masters.component.html',
    styleUrls: ['./calendrier_masters.component.scss'],
})
export class CalendriermastersComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /*errorMessage = '';

    constructor(
        private calendriermasService1: CalendriermasService,
        private router: Router) {}

     addcompetitionmas(formulaire: NgForm) {
        /*this.calendriermasService1.addcompetitionmas(formulaire.value).subscribe(
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
