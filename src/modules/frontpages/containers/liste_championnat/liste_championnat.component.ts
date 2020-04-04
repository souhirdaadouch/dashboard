import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ChampionnatService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-listechampionnat',
    templateUrl: './liste_championnat.component.html',
    styleUrls: ['./liste_championnat.component.scss'],
})
export class listechampionnatComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /*errorMessage = '';
     constructor(private championnatService1: ChampionnatService, private router: Router) {}
     addchampionnat(formulaire: NgForm) {
        /*this.championnatService1.addchampionnat(formulaire.value).subscribe(
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
