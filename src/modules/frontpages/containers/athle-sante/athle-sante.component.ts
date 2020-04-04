import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { athlesanteService } from '@modules/frontpages/services/athlesante.service';

@Component({
    selector: 'sb-athle-sante',
    templateUrl: './athle-sante.component.html',
    styleUrls: ['./athle-sante.component.scss'],
})
export class AthleSanteComponent implements OnInit {
    errorMessage = '';

    constructor(private athlesanteService1: athlesanteService, private router: Router) {}

    ngOnInit() {}
    addAthlesante(formulaire: NgForm) {
        /*this.athlesanteService1.addathlesante(formulaire.value).subscribe(
            reponse => {
                const link = ['ath'];
                this.router.navigate(link);
            },
            error => {
                this.errorMessage = 'Problème de connexion à votre serveur';
                console.log(error);
            }
        );*/
    }
}
