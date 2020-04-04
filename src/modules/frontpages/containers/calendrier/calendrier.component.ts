import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendrierService } from '@modules/frontpages/services/calendrier.service';
@Component({
    selector: 'sb-calendrier',
    templateUrl: './calendrier.component.html',
    styleUrls: ['./calendrier.component.scss'],
})
export class CalendrierComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

/*    errorMessage = '';
    constructor(private calendrierService1: CalendrierService, private router: Router) {}
    addcompetition(formulaire: NgForm) {
        /*this.calendrierService1.addcalendrier(formulaire.value).subscribe(
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
