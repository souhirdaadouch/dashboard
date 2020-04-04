import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompetitionsService } from '@modules/frontpages/services';

@Component({
    selector: 'sb-listecompetition',
    templateUrl: './liste_competition.component.html',
    styleUrls: ['./liste_competition.component.scss'],
})
export class listecompetitionComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    /*errorMessage = '';
     constructor(private listecompetitionService1: CompetitionsService, private router: Router) {}
     addcompetition(formulaire: NgForm) {
        /*this.competitionService1.addcompetition(formulaire.value).subscribe(
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
