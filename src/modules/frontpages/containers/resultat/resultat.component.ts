import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultatService } from '@modules/frontpages/containers/competition/services';

@Component({
    selector: 'sb-resultat',
    templateUrl: './resultat.component.html',
    styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /*errorMessage = '';
     constructor(private resultatService1: ResultatService, private router: Router) {}
     addresultat(formulaire: NgForm) {
        /*this.resultatService1.addresultat(formulaire.value).subscribe(
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
